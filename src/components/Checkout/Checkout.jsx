import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AuthContext } from "../../contexts/AuthContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc, writeBatch, doc, updateDoc, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"

export const Checkout = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    const [values, setValues] = useState({
        name: '',
        address: '',
        email: user.email
    })

    const [loading, setLoading ] = useState(false) 

    const [ orderId, setOrderId ] = useState(null)

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const { name, address, email } = values

        if(name.length < 6) {
            console.log("The name is short. It should have at least 6 characters")  // Poner un Sweet Alert
            return
        } 
        if(address.length < 6) {
            console.log("The address is short. It should have at least 6 characters")  // Poner un Sweet Alert
            return
        } 
        if(email.length < 6) {
            console.log("The email is short. It should have at least 6 characters")  // Poner un Sweet Alert
            return
        } 

        const order = {  // Los datos del cliente deberian llenarse con los datos de sesion
            client: values,
            items: cart.map((item) => ({id: item.id, name: item.name, price: item.price, amount: item.amount})),
            total: totalPrice(),
            date: new Date()
        }

        const batch = writeBatch(db)
        const productsRef = collection(db, "products")
        const ordersRef = collection(db, "orders")
        const outOfStock = []

        // RESOLUCION 1
        const q = query(productsRef, where( documentId(), "in", cart.map(item => item.id)))
        // The query returns the products of the items in the cart as a collection
        const products = await getDocs(q)
        // La sentencia await se usa solo dentro de funciones asincronicas (async)
        // El await hace que la sentencia sea bloqueante (el codigo no sigue ejecutando hasta que no se resuleva la Promise)
        // Es una forma alternativa al .then().catch() para trabajar con asincronia

        // RESOLUCION 2
        /*
        const promises = cart.map((item) => {
            const ref = doc(productsRef, item.id)
            return getDoc(ref)
        })
        const products = await Promise.all(promises)
        // If we use this reolution, we call products.forEach and not products.doc.forEach
        */

        products.docs.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id) // Busco el item del carrito con la misma id que el producto de la DB
            const stock = doc.data().stock // Stock del item en la DB
            if(stock >= item.amount) {
                // doc.ref == doc(db, "products", doc.id)
                batch.update(doc.ref, {stock: stock - item.amount})
            }
            else {
                outOfStock.push(item)
            }
        })

        if(outOfStock.length === 0) {
            addDoc(ordersRef, order)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id),
                    emptyCart()
                    setLoading(false)
                })
        }
        else {
            console.log("Some items are out of stock! Sorry!")
            setLoading(false)
        }
    }

    if(orderId) {
        return( /* Create a new component! */
            <div>
                <h2>Your purchase was completed!</h2>
                <h3>Your order id: {orderId}</h3>
                <Link to={"/"}>Back to Catalog</Link>
            </div>
        )
    }

    if(cart.length == 0) {
        return <Navigate to={"/"}/>
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={values.name} 
                    name="name"
                    onChange={handleInput}
                />
                <input 
                    type="text" 
                    placeholder="Address" 
                    value={values.address} 
                    name="address"
                    onChange={handleInput}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={values.email} 
                    name="email"
                    onChange={handleInput}
                />
                <button disabled={loading} type="submit">Send</button>
            </form>
        </div>
    )
}
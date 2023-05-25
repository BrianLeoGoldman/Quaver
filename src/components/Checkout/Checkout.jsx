import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AuthContext } from "../../contexts/AuthContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

export const Checkout = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    const [values, setValues] = useState({
        name: '',
        address: '',
        email: user.email
    })

    const [ orderId, setOrderId ] = useState(null)

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

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

        order.items.forEach((item) => {
            const itemRef = doc(db, "products", item.id)
            getDoc(itemRef)
                .then((doc) => {
                    if(doc.data().stock > item.amount) {
                        updateDoc(itemRef, { 
                            stock: doc.data().stock - item.amount 
                            // doc.data().stock es el stock del producto en la DB al momento de cerrar la compra
                        })
                    }
                    else {
                        alert("Not enough stock of this item")
                    }
                })
        })
        
        const ordersRef = collection(db, "orders")
        /* addDoc(ordersRef, order)
            .then((doc) => 
                setOrderId(doc.id),
                emptyCart()
            ) */
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
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
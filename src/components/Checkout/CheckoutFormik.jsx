import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AuthContext } from "../../contexts/AuthContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc, writeBatch, doc, updateDoc, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
    name: Yup
            .string()
            .required("The field name is required")
            .min(3, "Name is too short")
            .max(20, "Name is too long"),
    address: Yup
            .string()
            .required("The field address is required")
            .min(6, "Address is too short")
            .max(20, "Address is too long"),
    email: Yup
            .string()
            .required("The field email is required")
            .email("Email is not valid")
})

export const CheckoutFormik = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    const [ loading, setLoading ] = useState(false) 

    const [ orderId, setOrderId ] = useState(null)

    const createOrder = async (values) => {
        setLoading(true)

        const order = {
            client: values,
            items: cart.map((item) => ({id: item.id, name: item.name, price: item.price, amount: item.amount})),
            total: totalPrice(),
            date: new Date()
        }

        const batch = writeBatch(db)
        const productsRef = collection(db, "products")
        const ordersRef = collection(db, "orders")
        const outOfStock = []

        const q = query(productsRef, where( documentId(), "in", cart.map(item => item.id)))
        const products = await getDocs(q)


        products.docs.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id) 
            const stock = doc.data().stock 
            if(stock >= item.amount) {
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
            <Formik 
                initialValues={{
                    name: '',
                    address: '',
                    email: ''
                }}
                validationSchema={schema}
                onSubmit={createOrder}
            >
                {({errors}) => (
                    <Form>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component={"p"}/>
                        <Field name="address" type="text"/>
                        <ErrorMessage name="address" component={"p"}/>
                        <Field name="email" type="email"/>
                        <ErrorMessage name="email" component={"p"}/>
                        <button disabled={loading} type="submit">Send</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
import './Checkout.scss'
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AuthContext } from "../../contexts/AuthContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc, writeBatch, doc, updateDoc, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { SuccessfulOrder } from '../SuccessfulOrder/SuccessfulOrder'

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

// Using Formik library
export const Checkout = () => {

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
        return <SuccessfulOrder orderId={orderId}/>
    }

    if(cart.length == 0) {
        return <Navigate to={"/"}/>
    }

    return(
        <div>
            <h2 className='form-title'>Fill the form to complete your order</h2>
            <hr />
            <img referrerPolicy="no-referrer" className="send-form-img" src="../../src/assets/images/send-form.png" alt="Send Form"/>
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
                    <Form className='checkout-form'>
                        <Field className='input' name="name" type="text" placeholder='Name'/>
                        <ErrorMessage className='error' name="name" component={"p"}/>
                        <Field className='input' name="address" type="text" placeholder='Address'/>
                        <ErrorMessage className='error' name="address" component={"p"}/>
                        <Field className='input' name="email" type="email" placeholder='Email'/>
                        <ErrorMessage className='error' name="email" component={"p"}/>
                        <button className='button-send-form' disabled={loading} type="submit">Send</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { AuthContext } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"

export const Checkout = () => {

    const { cart, totalPrice } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    const [values, setValues] = useState({
        name: '',
        address: '',
        email: user.email
    })

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
        console.log(order)
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
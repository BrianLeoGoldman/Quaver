import { useState } from "react"
import { Link } from "react-router-dom"

export const LoginScreen = () => {

    const [values, setValues] = useState({email: '', password: ''})

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return(
        <div>
            <div>
                <h2>Login</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email} 
                        name="email" 
                        type="email" 
                        placeholder="Email"
                        onChange={handleInput}
                    />
                    <input 
                        value={values.password} 
                        name="password" 
                        type="password" 
                        placeholder="Password"
                        onChange={handleInput}
                    />
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </form>
            </div>
        </div>
    )
}
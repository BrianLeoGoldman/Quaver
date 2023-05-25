import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export const RegisterScreen = () => {

    const { register } = useContext(AuthContext) 

    const [values, setValues] = useState({email: '', password: ''})

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }

    return(
        <div>
            <div>
                <h2>Register</h2>
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
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </form>
            </div>
        </div>
    )
}
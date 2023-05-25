import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export const LoginScreen = () => {

    const { login, loginWithGoogle } = useContext(AuthContext)

    const [values, setValues] = useState({email: '', password: ''})

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
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
                <button onClick={loginWithGoogle}>Login with Google</button>
            </div>
        </div>
    )
}
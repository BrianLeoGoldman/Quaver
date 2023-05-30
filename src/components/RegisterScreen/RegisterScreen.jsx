import './RegisterScreen.scss'
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
        <div className='register-container'>
            <div className='register-subcontainer'>
                <h2 className='title'>Register</h2>
                <hr />
                <form className='register-form' onSubmit={handleSubmit}>
                    <input 
                        value={values.email} 
                        className='input'
                        name="email" 
                        type="email" 
                        placeholder="Email"
                        onChange={handleInput}
                    />
                    <input 
                        value={values.password} 
                        className='input'
                        name="password" 
                        type="password" 
                        placeholder="Password"
                        onChange={handleInput}
                    />
                    <button className='button' type="submit">Register</button>
                    <button className='button'><Link to="/login">Login</Link></button>
                </form>
            </div>
        </div>
    )
}
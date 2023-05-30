import './LoginScreen.scss'
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { WelcomeBanner } from "../WelcomeBanner/WelcomeBanner"

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
        <div className='login-container'>
            <div className='login-subcontainer'>
                <WelcomeBanner title={"QUAVER"} subtitle={"Music, vynils & more!"} introduction={""}/>
                <h2 className='title'>Login</h2>
                <form className='login-form' onSubmit={handleSubmit}>
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
                    <div className='button-panel'>
                        <button className='button' type="submit">Login</button>
                        <button className='button'onClick={loginWithGoogle}>Login with Google</button>
                    </div>
                    <button className='button'><Link to="/register">Register</Link></button>
                </form>
                
            </div>
        </div>
    )
}
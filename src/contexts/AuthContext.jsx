import { createContext, useState, useEffect } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        email: null,
        logged: false
    })

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            /* .then((userCredential) => {
                const { user } = userCredential
                setUser({
                    email: user.email,
                    logged: true
                })
            }) */
            .catch(e => console.log(e))
    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            /* .then((userCredential) => {
                const { user } = userCredential
                setUser({
                    email: user.email,
                    logged: true
                })
            }) */
            .catch(e => console.log(e))  // Capturar el error y crear error propio (e.message)
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true
                })
            }
            else {
                setUser({
                    email: null,
                    logged: false
                })
            }
        })
    }, [])

    return(
        <AuthContext.Provider value={{user, login, register, logout, loginWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )
}
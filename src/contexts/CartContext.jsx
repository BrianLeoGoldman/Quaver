import { createContext, useState } from "react";

export const CartContext = createContext()

// Creo un componente que retorna el Provider de mi Contexto
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }
    
    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const isEmpty = () => {
        return !cart.length > 0
    }

    const emptyCart = () => {
        setCart([])
    }

    const totalAmount = () => {
        return cart.reduce((acc, item) => acc + item.amount, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.amount), 0)
    }

    return(
        <CartContext.Provider 
            value={{cart, addToCart, removeItem, isInCart, isEmpty, emptyCart, totalAmount, totalPrice}}
        >
            {children}
        </CartContext.Provider>
    )
}
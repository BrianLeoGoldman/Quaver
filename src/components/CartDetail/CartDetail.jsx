import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { FaTrashAlt } from 'react-icons/fa'

export const CartDetail = () => {

    const { cart, removeItem, emptyCart } = useContext(CartContext)

    return(
        <div>
            <h2>Your Purchase</h2>
            <hr />
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.picture} alt="Picture" />
                        <p>Amount: {item.amount}</p>
                        <p>Subtotal: ${item.amount * item.price}</p>
                        <button onClick={() => removeItem(item.id)}><FaTrashAlt/></button>
                        <hr />
                    </div>
                ))
            }
            <div>
                <button onClick={emptyCart}>Empty Cart</button>
            </div>
        </div>
    )
}
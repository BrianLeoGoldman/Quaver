import './CartDetail.scss'
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"

export const CartDetail = () => {

    const { cart, removeItem, emptyCart } = useContext(CartContext)

    return(
        <div className='cart-container'>
            <h2 className='title'>Your Cart</h2>
            <hr />
            <div className='product-list'>
                {
                    cart.map((item) => (
                        <div className='product-card' key={item.id}>
                            <h3 className='product-info'>{item.name}</h3>
                            <img className='product-img' src={item.picture} alt="Picture" />
                            <p className='product-info'>Amount: {item.amount}</p>
                            <p className='product-info'>Subtotal: ${item.amount * item.price}</p>
                            <button onClick={() => removeItem(item.id)}><FaTrashAlt/></button>
                        </div>
                    ))
                }
            </div>
            <div className='button-container'>
                <button className='button' onClick={emptyCart}>Empty Cart</button>
                <button className='button'><Link to={"/checkout"}>Finish</Link></button>
            </div>
        </div>
    )
}
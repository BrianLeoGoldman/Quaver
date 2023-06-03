import './CartDetail.scss'
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"

export const CartDetail = () => {

    const { cart, removeItem, emptyCart, isEmpty, totalPrice } = useContext(CartContext)

    return(
        <div className='cart-container'>
            <h2 className='title'>Your Cart</h2>
            <hr />
            <div className='product-list'>
                { 
                    isEmpty()
                        ? 
                        <div className='empty-cart'>
                            <img className="empty-cart-img" src="../../../public/images/empty-cart.png" alt="Empty Cart"/>
                            {/* <img className="empty-cart-img" src="../../src/assets/images/empty-cart.png" alt="Empty Cart"/> */}
                            <h3 className='empty-cart-title'>Your cart is empty</h3>
                        </div>
                        : 
                        <div className='cart-framework'>
                            <div className='cart-content'>
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
                            <p className='total-amount'>TOTAL PRICE: ${totalPrice()}</p>
                        </div>
                }
            </div>
            <div className='button-container'>
                <button className='button' onClick={emptyCart}>Empty Cart</button>
                <button className='button'><Link to={"/checkout"}>Finish</Link></button>
            </div>
        </div>
    )
}
import './CartWidget.scss'
import logo from '../../assets/images/icons/cart.png'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const CartWidget = () => {

    const { totalAmount } = useContext(CartContext)

    return (
        <Link to="/cart" className="cart-widget">
            <FaCartPlus />
            {/* <img className="cart-logo" src={logo}/> */}
            <span className="cart-counter">{totalAmount()}</span>
        </Link>
    )
}

export default CartWidget
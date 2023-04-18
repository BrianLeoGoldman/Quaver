import './CartWidget.scss'
import logo from '../../assets/images/icons/cart.png'

const CartWidget = () => {

    return (
        <div className="cart-widget">
            <img className="cart-logo" src={logo}/>
            <span className="cart-counter">0</span>
        </div>
    )
}

export default CartWidget
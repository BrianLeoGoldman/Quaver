import './CartWidget.scss'
import logo from '../../assets/cart.png'

const CartWidget = () => {

    return (
        <div>
            <img className="cart-logo" src={logo}/>
            <span>0</span>
        </div>
    )
}

export default CartWidget
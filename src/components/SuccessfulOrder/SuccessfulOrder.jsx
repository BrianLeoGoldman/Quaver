import './SuccessfulOrder.scss'
import { Link } from "react-router-dom"

export const SuccessfulOrder = ( {orderId} ) => {
    return(
            <div className='success-container'>
                <h2 className='success-title'>Your purchase was completed!</h2>
                <h3 className='success-order'>Your order id: <span className='order-number'>{orderId}</span></h3>
                <div className='vynils-container'>
                    <img className="vynilA" src="../../src/assets/images/B.png" alt="Vynil"/>
                    <img className="vynilPlayer" src="../../src/assets/images/vynil-player.png" alt="Vynil Player"/>
                    <img className="vynilB" src="../../src/assets/images/B.png" alt="Vynil"/>
                </div>
                <button className='button-back-catalog'><Link to={"/"}>Back to Catalog</Link></button>
            </div>
        )
}
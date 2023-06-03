import './OrderList.scss'
import { OrderData } from "../OrderData/OrderData"

export const OrderList = ({ orders }) => {

    return(
        <div className="orders-list">
            {
                orders.length > 0
                    ?
                        orders.map((elem) => {
                            return(
                                <OrderData order={elem} key={elem.id}/>
                            )
                        })
                    : 
                        <div className='empty-orders'>
                            <img className="empty-orders-img" src="../../../public/images/empty-orders.png" alt="Empty Orders"/>
                            {/* <img className="empty-orders-img" src="../../src/assets/images/empty-orders.png" alt="Empty Orders"/> */}
                            <h3 className='empty-orders-title'>No orders found</h3>
                        </div>
    
            }
        </div>
    )
}
import './OrderList.scss'
import { OrderData } from "../OrderData/OrderData"

export const OrderList = ({ orders }) => {

    return(
        <div className="orders-list">
            {
                orders.map((elem) => {
                    return(
                        <OrderData order={elem} key={elem.id}/>
                    )
                })
            }
        </div>
    )
}
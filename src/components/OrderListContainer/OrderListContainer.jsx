import { useOrders } from "../../hooks/useOrders"
import { OrderList } from "../OrderList/OrderList"
import { Spinner } from "../Spinner/Spinner"

export const OrderListContainer = ({ email }) => {

    const { loading, orders } = useOrders(email)

    return(
        <div>
            { loading ? <Spinner/> : <OrderList orders={orders}/> }
        </div>
    )

}
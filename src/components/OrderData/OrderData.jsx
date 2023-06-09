import './OrderData.scss'
import { OrderItemsList } from "../OrderItemsList/OrderItemsList"

export const OrderData = ({ order }) => {

    const date = order.date.toDate()
    const finalDate = date.toLocaleString('es-AR')

    return(
        <div className="order">
            <h3 className="id">ID: {order.id}</h3>
            <h4 className="data">BUYER: {order.client.name}</h4>
            <h4 className="data">EMAIL: {order.client.email}</h4>
            <h4 className="data">ADDRESS: {order.client.address}</h4>
            <h4 className="data">DATE: {finalDate}</h4>
            <h4 className="data">TOTAL PAYMENT: ${order.total}</h4>
            <OrderItemsList items={order.items}/>
        </div>
    )
}
import { useOrders } from "../../hooks/useOrders"
import { Spinner } from "../Spinner/Spinner"

export const OrderListContainer = () => {

    const { loading, orders } = useOrders("leonel89011@gmail.com")

    return(
        <div className="orders-info">
                {
                    loading 
                        ? <Spinner/> 
                        : orders.map((elem) => {
                            return(
                                <div className="order">
                                    <h3>{elem.id}</h3>
                                    <h4>{elem.client.name}</h4>
                                    <h4>{elem.client.email}</h4>
                                </div>
                            )
                        })
                }
            </div>
    )

}
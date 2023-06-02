import './OrderItemsList.scss'

export const OrderItemsList = ({ items }) => {

    console.log(items)

    return(
        <div className="orders-items-list">
            {
                items.map((item) => {
                    return(
                        <div className='order-item'>
                            <p className='text'>{item.name}</p>
                            <p className='text'>${item.price} X {item.amount}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
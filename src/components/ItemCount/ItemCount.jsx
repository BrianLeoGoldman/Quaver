import './ItemCount.scss'

export const ItemCount = ({amount, setAmount, stock, addToCart}) => {

    const handleDecrease = () => {
        amount > 1 && setAmount(amount - 1)
    }

    const handleIncrease = () => {
        amount < stock && setAmount(amount + 1)
    }

    return (
        <div className='count-container'>
            <button disabled className='stock-text'>STOCK: {stock}</button>
            {
                stock > 0
                    ? 
                    <>
                        <div className='operation-container'>
                            <button className='count-button' onClick={handleDecrease}>-</button>
                            <span className='count-number'>{amount}</span>
                            <button className='count-button' onClick={handleIncrease}>+</button>
                        </div>
                        <button className='add-button' onClick={addToCart}>ADD TO CART</button>
                    </>
                    : <button disabled className='out-of-stock'>OUT OF STOCK!</button>
            }
        </div>
    )
}


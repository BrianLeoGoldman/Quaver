import {ItemCount} from "../ItemCount/ItemCount"
import { useState } from "react"
import "./ItemDetail.scss"

export const ItemDetail = ({item}) => {

    const [amount, setAmount] = useState(1)

    const addToCart = () => {
        console.log({
            ...item,
            amount
        })
    }

    let states = []
    item.state.forEach(element => {
        states.push(<p className="text box">{element}</p>)
    })

    return (
        <div className="vynil-detail-container">
            <div className="vynil-details">
                <div className="column-section">
                    <p className="text text-title">{item.name}</p>
                    <p className="text text-artist">{item.artist}</p>
                </div>
                <div className="row-section">
                    {states}
                </div>
                <p className="text text-price">${item.price}</p>
                <div className="row-section">
                    <div className="column-section">
                        <p className="text text-description">{item.description}</p>
                        <p className="text text-description">{item.discs} DISC/S</p>
                    </div>
                    <img className="vynil-picture" src={item.picture} alt="Picture"/>
                </div>
                <ItemCount amount={amount} setAmount={setAmount} stock={item.stock} addToCart={addToCart}/>
            </div>
        </div>
    )
}
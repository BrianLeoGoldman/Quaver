import { Link } from 'react-router-dom'
import { useContext } from "react"
import './ItemCard.scss'
import { CartContext } from "../../contexts/CartContext"

export const ItemCard = ( {item} ) => {

    return (
    <div className="vynil-card">
        <div className="column-section">
            <Link to={`/item/${item.id}`} className="text text-title">{item.name}</Link>
            <p className="text text-artist">{item.artist}</p>
        </div>
        <div className="column-section">
            <p className="text text-price">${item.price}</p>
            <img className="vynil-picture" src={item.picture} alt="Picture" />
        </div>
    </div>
    )
}

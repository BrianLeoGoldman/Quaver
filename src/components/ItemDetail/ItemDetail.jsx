import {ItemCount} from "../ItemCount/ItemCount"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./ItemDetail.scss"
import { CartContext } from "../../contexts/CartContext"
import { ItemScore } from "../ItemScore/ItemScore"

export const ItemDetail = ({item}) => {
    
    const { addToCart, isInCart } = useContext(CartContext)
    const [amount, setAmount] = useState(1)

    const handleAddItem = () => { 
        const newItem = {
            ...item,
            amount,
        }
        addToCart(newItem)
    }

    return (
        <div className="vynil-detail-container">
            <div className="vynil-details">
                <div className="column-section">
                    <p className="text text-title">{item.name}</p>
                    <div className="row-section">
                        <p className="text text-artist">{item.artist}</p>
                        <Link to={`/category/${item.genre}`} className="text text-genre">{item.genre}</Link>
                    </div>
                    <div className="row-section">
                        {item.state.map((elem) => {
                            return <p key={elem} className="text text-state">{elem}</p>
                        })}
                    </div>
                    <p className="text text-price">${item.price}</p>
                </div>
                <div className="row-section">
                    <div className="description-section">
                        <div className="column-section">
                            <p className="text">ABOUT</p>
                            <p className="text text-description">{item.description}</p>
                            <div className="row-section">
                                <p className="text text-description">{item.discs} DISC/S</p>
                            </div>
                        </div>
                    </div>
                    <img className="vynil-picture" src={item.picture} alt="Picture"/>
                    <div className="songs-section">
                        <p className="text">SONGS</p>
                        {item.songs.map((elem) => {
                            return <p key={elem} className="text text-state">{elem}</p>
                        })}
                    </div>
                </div>
                <div className="row-section">
                    {/* <ItemScore/> */}
                    {
                        isInCart(item.id) 
                            ? <button className="button"><Link to={"/cart"}>Go to Cart</Link></button>
                            : <ItemCount amount={amount} setAmount={setAmount} stock={item.stock} addToCart={handleAddItem}/>
                    }
                </div>
            </div>
        </div>
    )
}
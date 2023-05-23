import {ItemCount} from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import "./ItemDetail.scss"
import { CartContext } from "../../contexts/CartContext"

export const ItemDetail = ({item}) => {

    const { addToCartContext, isInCart } = useContext(CartContext)

    const [amount, setAmount] = useState(1)
    const [talle, setTalle] = useState(null)  // Cambiar esto!!!

    const handleAddItem = () => { 
        const newItem = {
            ...item,
            amount,
            talle
        }
        addToCartContext(newItem)
        
    }

    const handleSelect = (e) => { //Delegar el select de mas abajo y esta funcion a un componente hijo
        setTalle(e.target.value)
    }
    // Cada item en el JSON/API puede tener una lista de objetos con value y label, y esa lista
    // se la paso al componente de talle y renderizo las options con un map por cada objeto

    let states = []
    item.state.forEach(element => {
        states.push(<p className="text text-state">{element}</p>)
    })

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
                        {states}
                    </div>
                    <p className="text text-price">${item.price}</p>
                </div>
                <div className="row-section">
                    <div className="description-section">
                        <div className="column-section">
                            <p className="text text-description">{item.description}</p>
                            <div className="row-section">
                                <p className="text text-description">{item.discs} DISC/S</p>
                                <p className="text text-description">STOCK: {item.stock}</p>
                            </div>
                        </div>
                    </div>
                    <img className="vynil-picture" src={item.picture} alt="Picture"/>
                </div>

                <select onChange={handleSelect}> 
                    <option value={"large"}>L</option>
                    <option value={"medium"}>M</option>
                    <option value={"small"}>S</option>
                </select>

                {
                    isInCart(item.id) 
                        ? <Link to={"/cart"}>Go to Cart</Link> 
                        : <ItemCount amount={amount} setAmount={setAmount} stock={item.stock} addToCart={handleAddItem}/>
                }

                
            </div>
        </div>
    )
}
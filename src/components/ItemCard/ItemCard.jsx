import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import './ItemCard.scss'
import { CartContext } from "../../contexts/CartContext"

export const ItemCard = ( {item} ) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [isValidSrc, setIsValidSrc] = useState(!!item.picture);

    return (
    <div className="vynil-card">
        <div className="column-section">
            <Link to={`/item/${item.id}`} className="text text-title">{item.name}</Link>
            <p className="text text-artist">{item.artist}</p>
        </div>
        <div className="column-section">
            <p className="text text-price">${item.price}</p>
            <div className="smooth-image-wrapper">
                {isValidSrc ? (
                    <img
                        className={`smooth-image img-${imageLoaded ? "visible" : "hidden"}`}
                        src={item.picture}
                        alt={item.name}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setIsValidSrc(false)}
                    />
                ) : (
                    <div className="smooth-no-image">{item.name}</div>
                )}
                {isValidSrc && !imageLoaded && (
                    <div className="smooth-preloader">
                        <span className="loader" />
                    </div>
                )}
            </div>
        </div>
    </div>
    )
}

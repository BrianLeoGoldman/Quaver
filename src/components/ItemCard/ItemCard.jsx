import './ItemCard.scss'

export const ItemCard = ( {item} ) => {
    let states = []
    item.state.forEach(element => {
        states.push(<p className="text box">{element}</p>)
    })
    return (
    <div className="vynil-card">
        <div className="row-section">
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
                <button className='add-button'>ADD TO CART</button>
            </div>
            <img className="vynil-picture" src={item.picture} alt="Picture" />
        </div>
    </div>
    )
}

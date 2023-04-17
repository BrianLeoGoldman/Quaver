import './VynilCard.scss'

export const VynilCard = (name, artist, price, state, discs, description, picture) => {
    let states = []
    state.forEach(element => {
        states.push(<p className="text other-text box">{element}</p>)
    })
    return (
    <div className="vynil-card">
        <div className="row-section">
            <p className="text text-title">{name}</p>
            <p className="text text-artist">{artist}</p>
        </div>
        <div className="row-section">
        {states}
        </div>
        <p className="text text-price">${price}</p>
        <div className="row-section">
            <div className="column-section">
                <p className="text text-description">{description}</p>
                <p className="text text-description">{discs} DISC/S</p>
                <button className='add-button'>ADD</button>
            </div>
            <img className="vynil-picture" src={picture} alt="Picture" />
        </div>
    </div>
    )
}

export const Card = (name, artist, price, state, discs, description, picture) => {
    return (
    <div className="vynil-card">
        <h5 className="text">TITLE: {name}</h5>
        <p className="text">ARTIST: {artist}</p>
        <p className="text">${price}</p>
        <p className="text">STATE: {state}</p>
        <p className="text">DISCS: {discs}</p>
        <p className="text">DESCRIPTION: {description}</p>
        <img className="vynil-picture" src={picture} alt="Picture" />
    </div>
    )
}

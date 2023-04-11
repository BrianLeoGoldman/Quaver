const Card = (name, price, description, picture) => {
    return (
    <div className="vynil-card">
        <h5>{name}</h5>
        <span>${price}</span>
        <p>{description}</p>
        <img className="vynil-picture" src={picture} alt="Picture" />
    </div>
    )
}

export default Card
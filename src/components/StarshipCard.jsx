const StarshipCard = (props) => {
    return(
        <div className="starship-card">
            <h3>{props.starship.name}</h3>
            <p>{props.starship_class}</p>
            <p>{props.starship.manufacturer}</p>
            <p>{props.starship.model}</p>
        </div>
    )
};

export default StarshipCard;
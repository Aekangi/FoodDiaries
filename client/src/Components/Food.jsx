

const Food = (props) => {
    return (
    <div className="card" onClick={props.onClick}>
        <div className="img-wrapper">
        <img src={props.image} />
        </div>
        <div className="info-wrapper flex-col">
            <h2>{props.name}</h2>
            <h5>{props.difficulty_Level}</h5>
            <p>
            {props.time}
            {props.servings}
            {props.ingredients}
            {props.directions}
            </p>
        </div>
    </div>
    )
}

export default Food
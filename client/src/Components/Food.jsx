

const Food = (props) => {
    return (
      <div className="card" onClick={props.onClick}>
        <div className="img-wrapper">
        <image src={props.image} alt=''/>
        </div>
        <div className="info-wrapper flex-col">
          <h2>{props.name}</h2>
          <p>
            {props.difficulty_Level}
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
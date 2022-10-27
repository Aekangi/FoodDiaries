import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'

const FoodInfo = () => {
  let { id } = useParams()
  const [foodDetails, setFoodDetails] = useState(null)

  useEffect(() => {
    const getFoodById = async () => {
      try {
        const response = await axios.get(`/foods/${id}`)
        setFoodDetails(response.data.food)
      } catch (err) {
        console.log(err)
      }
    }

    getFoodById()
  }, [id])

  return foodDetails ? (
    <div className="foodInfo">
      <header>
        <Header />
      </header>
      <div className="foodInfoPage">
        <h2>{foodDetails.name}</h2>
        <section className="foodInfoImage">
          <div>
            <img src={foodDetails.image} alt="" />
          </div>
        </section>
        <section className="details">
          <h5>{foodDetails.difficulty_Level}</h5>
          <h5>Time: {foodDetails.time}</h5>
          <h5>Servings: {foodDetails.servings}</h5>
        </section>
        <section className="ingredients">
          <h3>
            <p>Ingredients:</p>
          </h3>

          <p>{foodDetails.ingredients}</p>
        </section>
        <section className="directions">
          <h3>
            <p>Instructions:</p>
          </h3>
          <p>{foodDetails.directions}</p>
        </section>
      </div>
    </div>
  ) : (
    <div>'Hello'</div>
  )
}

export default FoodInfo

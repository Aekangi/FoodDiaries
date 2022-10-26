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
        const response = await axios.get(`http://localhost:3001/foods/${id}`)
        setFoodDetails(response.data.food)
      } catch (err) {
        console.log(err)
      }
    }

    getFoodById()
  }, [id])

  return foodDetails ? (
    <div className="food-content">
      <header>
        <Header />
      </header>
      <h2>{foodDetails.name}</h2>
      <section className="foodInfoImage">
        <div>
          <img src={foodDetails.image} alt="" />
        </div>
      </section>
      <section className="details">
        <div className="foodDetail">
          <h5>{foodDetails.difficulty_Level}</h5>
          <h5>Time: {foodDetails.time}</h5>
          <h5>Servings: {foodDetails.servings}</h5>
          <p>{foodDetails.ingredients}</p>
          <p>{foodDetails.directions}</p>
        </div>
      </section>
    </div>
  ) : (
    <div>'Hello'</div>
  )
}

export default FoodInfo

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const FoodInfo = () => {
  let { id } = useParams()
  const [foodDetails, setFoodDetails] = useState(null)
  let navigate = useNavigate()
  useEffect(() => {
    const getFoodById = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/foods/${id}`)

        setFoodDetails(response.data.food)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getFoodById()
  }, [id])

  return foodDetails ? (
    <div className="food-content">
      <h2>{foodDetails.name}</h2>
      <section className="container-grid">
        <div>
          <img src={foodDetails.image} alt="" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <p>{foodDetails.ingredients}</p>
        </div>
      </section>
    </div>
  ) : (
    <div>'Hello'</div>
  )
}

export default FoodInfo

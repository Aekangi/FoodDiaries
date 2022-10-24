import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FoodInfo = () => {
  let { id } = useParams()
  const [foodDetails, setFoodDetails] = useState(null)

  const getFoodById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/foods/${id}`)

      setFoodDetails(response.data)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getFoodById()
  }, [])

  return foodDetails ? (
    <div className="food-content">
      <h2>Food</h2>
      <section className="container-grid">
        <div>
          <img src={foodDetails.image} alt="" />
          <h2>{foodDetails.name}</h2>
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

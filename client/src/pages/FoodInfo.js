import axios from 'axios'
import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

const FoodInfo = (props) => {
  //   let { id } = useParams()
  const [selectedFood, setSelectedFood] = useState(null)
  const [foodDetails, setFoodDetails] = useState(null)

  useEffect(() => {
    const getFoodById = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/foods/:id`)
        setSelectedFood(response.data.name)
        setFoodDetails(response.data)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFoodById()
  })

  return selectedFood !== null ? (
    <div className="food-content">
      <section className="image-container">
        <div>
          <img src={foodDetails.image} alt="" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <p>{foodDetails.directions}</p>
        </div>
      </section>
    </div>
  ) : null
}

export default FoodInfo

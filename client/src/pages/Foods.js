import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Food from '../Components/Food'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Foods = () => {
  let { foodId } = useParams()
  const navigate = useNavigate()

  const [foodsId, setFoodId] = useState(null)
  const [foods, setFoods] = useState([])

  const getFoodById = async () => {
    const response = await axios.get(`localhost:3001/fd/foods/${foodId}`)
    setFoodId(foodId)
    setFoods(response.data.results)
  }

  useEffect(() => {
    getFoodById()
  }, [foodId])

  return foodsId != null ? (
    <div className="container-grid">
      <Link onClick={() => navigate(-1)}>Back to Home</Link>
      {foods.map((food) => (
        <Link to={`/FoodInfo/${food.id}`}>
          <Food
            key={food.id}
            name={food.name}
            rating={food.rating}
            image={food.image}
          />
        </Link>
      ))}
    </div>
  ) : null
}
export default Foods

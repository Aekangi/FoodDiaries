import axios from 'axios'
import { useEffect, useState } from 'react'
import Food from '../Components/Food'
import { Link } from 'react-router-dom'

const Foods = () => {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    const getFood = async () => {
      try {
        const response = await axios.get('/fd/foods')
        console.log(response)
        setFoods(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFood()
  }, [])

  return (
    <div className="foods">
      <h2>Food</h2>
      <section className="container-grid">
        {foods.map((food) => (
          <Link to={`/FoodInfo/${food.id}`}>
            <Food key={food.id} food={food} />
          </Link>
        ))}
      </section>
    </div>
  )
}
export default Foods

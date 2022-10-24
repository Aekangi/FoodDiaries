import axios from 'axios'
import { useEffect, useState } from 'react'
import Food from '../Components/Food'
import { Link } from 'react-router-dom'

const Foods = () => {
  const [foods, setFoods] = useState([])

  const getFood = async () => {
    try {
      const response = await axios.get('http://localhost:3001/foods')
      setFoods(response.data.foods)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getFood()
  }, [])

  return (
    <div className="foods">
      <h2>Food</h2>
      <section className="container-grid">
        {foods.map((food) => (
          <Link to={`/foods/${food._id}`}>
            <Food
              key={food._id}
              name={food.name}
              difficulty_Level={food.difficulty_Level}
              image={food.image}
            />
          </Link>
        ))}
      </section>
      <div>
        <button>
          <Link to={'/foods/foodForm'}>Add a Recipe</Link>
        </button>
      </div>
    </div>
  )
}
export default Foods

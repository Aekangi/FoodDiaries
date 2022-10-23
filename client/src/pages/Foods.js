import axios from 'axios'
import { useEffect, useState } from 'react'
import Food from '../Components/Food'
import { Link } from 'react-router-dom'

const Foods = () => {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    const getFood = async () => {
      try {
        const response = await axios.get('http://localhost:3001/foods')
        setFoods(response.data.foods)
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
          <Link to={`/foods/${food.id}`}>
            <Food
              key={food.id}
              name={food.name}
              difficulty_Level={food.difficulty_Level}
              img={food.image}
            />
          </Link>
        ))}
      </section>
    </div>
  )
}
export default Foods

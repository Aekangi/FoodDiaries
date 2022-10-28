import axios from 'axios'
import { useEffect, useState } from 'react'
import Food from '../Components/Food'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

const Foods = () => {
  const [foods, setFoods] = useState([])

  const getFood = async () => {
    try {
      const response = await axios.get('/foods')
      setFoods(response.data.foods)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getFood()
  }, [])

  const deleteFoodEntry = async (id) => {
    try {
      const response = await axios.delete(`/foods/${id}`)
      getFood(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="foods">
      <header>
        <Header />
      </header>
      <h2 className="title">Dinner Entrees</h2>
      <section className="displayFood">
        {foods?.map((food) => (
          <div className="foodCard" key={food._id}>
            <button
              className="delete"
              onClick={() => deleteFoodEntry(food?._id)}
            >
              x
            </button>
            <Link to={`/foods/${food._id}`}>
              <Food
                name={food?.name}
                difficulty_Level={food?.difficulty_Level}
                image={food?.image}
              />
            </Link>
            <button className="update">
              <Link to={`/foods/updateFood/${food?._id}`}>Update</Link>
            </button>
          </div>
        ))}
      </section>
      <div>
        <button className="add">
          <Link to={'/foods/foodForm'}>Add a Recipe</Link>
        </button>
      </div>
    </div>
  )
}
export default Foods

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'

const UpdateFood = () => {
  let { id } = useParams()
  let navigate = useNavigate()

  const initialForm = {
    name: '',
    image: '',
    difficulty_Level: '',
    time: '',
    servings: '',
    ingredients: '',
    directions: ''
  }
  const [foodState, setFoodState] = useState(initialForm)

  useEffect(() => {
    const getFoodById = async () => {
      try {
        const response = await axios.get(`/api/foods/${id}`)
        setFoodState(response.data.food)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getFoodById()
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`/api/foods/${id}`, foodState)
    setFoodState(initialForm)
    navigate('/foods')
  }

  const handleChange = (e) => {
    setFoodState({ ...foodState, [e.target.id]: e.target.value })
  }

  return (
    <div className="foodUpdate">
      <header>
        <Header />
      </header>
      <h1 className="foodFormTitle">Update {foodState.name} Recipe</h1>
      <form className="foodForm" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Recipe Title: </label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={foodState?.name}
            required
          ></input>
        </div>
        <div className="image">
          <label htmlFor="image">Image url: </label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={foodState?.image}
            placeholder="image url"
            required
          ></input>
        </div>
        <div className="dL">
          <label htmlFor="difficulty_Level">Difficulty level:</label>
          <select
            id="difficulty_Level"
            onChange={handleChange}
            value={foodState?.difficulty_Level}
            required
          >
            <option value="Select">Select</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <label htmlFor="time">Time: </label>
          <input
            type="text"
            id="time"
            onChange={handleChange}
            value={foodState?.time}
            required
          ></input>

          <label htmlFor="servings">Servings: </label>
          <input
            type="text"
            id="servings"
            onChange={handleChange}
            value={foodState?.servings}
            required
          ></input>
        </div>
        <div className="ing">
          <label htmlFor="ingredients">Ingredients: </label>
          <textarea
            id="ingredients"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={foodState?.ingredients}
            required
          ></textarea>
        </div>
        <div classname="dir">
          <label htmlFor="directions">Directions: </label>
          <textarea
            id="directions"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={foodState?.directions}
            required
          ></textarea>
        </div>
        <div>
          <button className="up" type="submit">
            Update Recipe
          </button>
        </div>
      </form>
    </div>
  )
}
export default UpdateFood

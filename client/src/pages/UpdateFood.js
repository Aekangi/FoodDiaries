import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const UpdateFood = () => {
  let { id } = useParams()
  let navigate = useNavigate()

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [difficulty_Level, setDifficulty_Level] = useState('')
  const [time, setTime] = useState('')
  const [servings, setServings] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [directions, setDirections] = useState('')

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
    const UpdateFoodById = async () => {
      try {
        const response = await axios.put(`http://localhost:3001/foods/${id}`)
        setFoodState(response.data.foods)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    UpdateFoodById()
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3001/foods/${id}`, foodState)
    setFoodState(initialForm)
    navigate('/foods')
  }

  const handleChange = (e) => {
    setName({ name, [e.target.id]: e.target.value })
    setImage({ image, [e.target.id]: e.target.value })
    setDifficulty_Level({ difficulty_Level, [e.target.id]: e.target.value })
    setTime({ time, [e.target.id]: e.target.value })
    setServings({ servings, [e.target.id]: e.target.value })
    setIngredients({ ingredients, [e.target.id]: e.target.value })
    setDirections({ directions, [e.target.id]: e.target.value })
  }
  return (
    <div className="FoodForm">
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Recipe Title</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={foodState.name}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="image"></label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={foodState.image}
            placeholder="image url"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="difficulty_Level">Difficulty level:</label>
          <select
            id="difficulty_Level"
            onChange={handleChange}
            value={foodState.difficulty_Level}
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
            value={foodState.time}
            required
          ></input>

          <label htmlFor="servings">Servings: </label>
          <input
            type="text"
            id="servings"
            onChange={handleChange}
            value={foodState.servings}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients: </label>
          <textarea
            id="ingredients"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={foodState.ingredients}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="directions">Directions: </label>
          <textarea
            id="directions"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={foodState.directions}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  )
}
export default UpdateFood
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FoodForm = () => {
  const [recipe, setRecipe] = useState([])
  let navigate = useNavigate()
  const initialForm = {
    image: '',
    name: '',
    difficulty_Level: '',
    time: '',
    servings: '',
    ingredients: '',
    directions: ''
  }

  const [formState, setFormState] = useState(initialForm)

  useEffect(() => {
    const getFoods = async () => {
      try {
        let response = await axios.get('http://localhost:3001/foods')
        setRecipe(response.data)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFoods()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost3001/foods', formState)
    setFormState(initialForm)
    navigate('/foods')
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
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
            value={formState.name}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="image"></label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={formState.image}
            placeholder="image url"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="difficulty_Level">Difficulty level:</label>
          <select
            id="difficulty_Level"
            onChange={handleChange}
            value={formState.difficulty_Level}
            required
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <label htmlFor="time">Time: </label>
          <input
            type="text"
            id="time"
            onChange={handleChange}
            value={formState.time}
            required
          ></input>

          <label htmlFor="servings">Servings: </label>
          <input
            type="text"
            id="servings"
            onChange={handleChange}
            value={formState.servings}
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
            value={formState.ingredients}
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
            value={formState.directions}
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

export default FoodForm

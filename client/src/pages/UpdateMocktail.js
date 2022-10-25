import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const UpdateMocktail = () => {
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

  const [mocktailState, setMocktailState] = useState(initialForm)

  useEffect(() => {
    const getMocktailById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/mocktails/${id}`
        )
        setMocktailState(response.data.mocktail)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getMocktailById()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3001/mocktails/${id}`, mocktailState)
    setMocktailState(initialForm)
    navigate('/mocktails')
  }

  const handleChange = (e) => {
    setMocktailState({ ...mocktailState, [e.target.id]: e.target.value })
  }

  return (
    <div className="mocktailForm">
      <h1>Update a Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Recipe Title</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={mocktailState?.name}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="image"></label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={mocktailState?.image}
            placeholder="image url"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="difficulty_Level">Difficulty level:</label>
          <select
            id="difficulty_Level"
            onChange={handleChange}
            value={mocktailState?.difficulty_Level}
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
            value={mocktailState?.time}
            required
          ></input>

          <label htmlFor="servings">Servings: </label>
          <input
            type="text"
            id="servings"
            onChange={handleChange}
            value={mocktailState?.servings}
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
            value={mocktailState?.ingredients}
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
            value={mocktailState?.directions}
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

export default UpdateMocktail

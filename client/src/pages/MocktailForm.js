import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'

const MocktailForm = () => {
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

  const [formState, setFormState] = useState(initialForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/mocktails', formState)
    setFormState(initialForm)
    navigate('/mocktails')
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <div className="mocktailFormTop">
      <header>
        <Header />
      </header>
      <h1 className="mocktailFormTitle">Add a New Mocktail Recipe</h1>
      <form classname="mocktailform" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Recipe Title:</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formState.name}
            required
          ></input>
        </div>
        <div className="image">
          <label htmlFor="image">Image url: </label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={formState.image}
            required
          ></input>
        </div>
        <div className="dL">
          <label htmlFor="difficulty_Level">Difficulty level:</label>
          <select
            id="difficulty_Level"
            onChange={handleChange}
            value={formState.difficulty_Level}
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
        <div className="ing">
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
        <div className="dir">
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
          <button className="submit" type="submit">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  )
}
export default MocktailForm

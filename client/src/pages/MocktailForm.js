import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
    axios.post('http://localhost:3001/mocktails', formState)
    setFormState(initialForm)
    navigate('/mocktails')
  }
}
export default MocktailForm

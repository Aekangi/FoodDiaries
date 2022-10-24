import { useState, useEffect } from 'react'
import axios from 'axios'

const FoodForm = () => {
  const [recipe, setRecipe] = useState([])

  const initialForm = {
    name: '',
    difficulty_Level: '',
    time: '',
    servings: '',
    ingredients: '',
    directions: '',
    image: ''
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
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }
}

export default FoodForm

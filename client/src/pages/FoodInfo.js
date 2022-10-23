import axios from 'axios'
import { useState } from 'react'
const FoodInfo = () => {
  const [selectedFood, setSelectedFood] = useState(null)
  const [foodDetails, setFoodDetails] = useState(null)

  const food = async () => {
    const response = await axios.get(`localhost:3001/foods/${foods.id}`)

    setSelectedFood(response.data)
    setFoodDetails(response.data)
  }
}

export default FoodInfo

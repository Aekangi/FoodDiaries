import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FoodInfo = (props) => {
  let { id } = useParams()
  const [selectedFood, setSelectedFood] = useState(null)
  const [foodDetails, setFoodDetails] = useState(null)

  const getFoodById = async () => {
    const response = await axios.get(`http://localhost:3001/foods/${id}`)
    setSelectedFood(response.data.name)
    setFoodDetails(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getFoodById()
  }, [id])
}

export default FoodInfo

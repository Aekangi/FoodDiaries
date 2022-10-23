import axios from 'axios'
import { useEffect, useState } from 'react'

import Food from '../Components/Food'
import { Link } from 'react-router-dom'

const Foods = () => {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const getFood = async () => {
      const response = await axios.get('localhost:3001/fd/foods')
      setFoods(response.data.results)
    }
    getFood()
  }, [])
}
export default Foods

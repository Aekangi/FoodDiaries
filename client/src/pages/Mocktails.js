import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Mocktails = () => {
  const [mocktails, setMocktails] = useState([])

  const getMocktail = async () => {
    try {
      const response = await axios.get('http://localhost:3001/mocktails')
      setMocktails(response.data.foods)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Mocktails</h1>
    </div>
  )
}
export default Mocktails

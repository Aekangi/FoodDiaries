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

  useEffect(() => {
    getMocktail()
  }, [])

  return (
      <div className="foods">
        <h2>Mocktails</h2>
        <section className="container-grid">
        {mocktails.map((mocktail) => (
          <>
            <Link key={mocktail._id} to={`/mocktails/${mocktail._id}`}>
              <Mocktail
                name={mocktail.name}
                difficulty_Level={mocktail.difficulty_Level}
                image={mocktail.image}
              />
            </Link>

export default Mocktails

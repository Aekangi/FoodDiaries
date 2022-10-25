import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Mocktail from '../Components/Mocktail'

const Mocktails = () => {
  const [mocktails, setMocktails] = useState([])

  const getMocktail = async () => {
    try {
      const response = await axios.get('http://localhost:3001/mocktails')
      setMocktails(response.data.mocktails)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMocktail()
  }, [])

  const deleteMocktailEntry = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/mocktails/${id}`
      )
      getMocktail()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mocktails">
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
            <button onClick={() => deleteMocktailEntry(mocktail._id)}>x</button>
            <button>
              <Link to={`/mocktails/updateMocktail/${mocktail?._id}`}>
                Update
              </Link>
            </button>
          </>
        ))}
      </section>
      <div>
        <button>
          <Link to={'/mocktails/mocktailForm'}>Add a Recipe</Link>
        </button>
      </div>
    </div>
  )
}

export default Mocktails

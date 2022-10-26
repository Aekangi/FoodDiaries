import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Mocktail from '../Components/Mocktail'
import Header from '../Components/Header'

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
      getMocktail(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mocktails">
      <header>
        <Header />
      </header>
      <h2>Mocktails</h2>
      <section className="displayMocktail">
        {mocktails.map((mocktail) => (
          <div className="mocktailCard" key={mocktail._id}>
            <button
              className="delete"
              onClick={() => deleteMocktailEntry(mocktail._id)}
            >
              x
            </button>
            <Link to={`/mocktails/${mocktail._id}`}>
              <Mocktail
                name={mocktail.name}
                difficulty_Level={mocktail.difficulty_Level}
                image={mocktail.image}
              />
            </Link>
            <button>
              <Link to={`/mocktails/updateMocktail/${mocktail?._id}`}>
                Update
              </Link>
            </button>
          </div>
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

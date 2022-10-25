import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MocktailInfo = () => {
  let { id } = useParams()
  const [mocktailDetails, setMocktailDetails] = useState(null)

  useEffect(() => {
    const getMocktailById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/mocktails/${id}`
        )
        setMocktailDetails(response.data.mocktail)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getMocktailById()
  }, [id])
  return mocktailDetails ? (
    <div className="mocktail-content">
      <h2>{mocktailDetails.name}</h2>
      <section className="container-grid">
        <div>
          <img src={mocktailDetails.image} alt="" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <p>{mocktailDetails.ingredients}</p>
        </div>
      </section>
    </div>
  ) : (
    <div>'Hello'</div>
  )
}
export default MocktailInfo

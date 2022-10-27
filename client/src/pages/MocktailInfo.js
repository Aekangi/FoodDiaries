import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'

const MocktailInfo = () => {
  let { id } = useParams()
  const [mocktailDetails, setMocktailDetails] = useState(null)

  useEffect(() => {
    const getMocktailById = async () => {
      try {
        const response = await axios.get(`/mocktails/${id}`)
        setMocktailDetails(response.data.mocktail)
      } catch (err) {
        console.log(err)
      }
    }

    getMocktailById()
  }, [id])
  return mocktailDetails ? (
    <div className="mocktailInfo">
      <header>
        <Header />
      </header>
      <div className="mocktailInfoPage">
        <h2>{mocktailDetails.name}</h2>
        <section className="mocktailInfoImage">
          <div>
            <img src={mocktailDetails.image} alt="" />
          </div>
        </section>
        <section className="details">
          <h5>{mocktailDetails.difficulty_Level}</h5>
          <h5>Time: {mocktailDetails.time}</h5>
          <h5>Servings: {mocktailDetails.servings}</h5>
        </section>
        <section className="ingredients">
          <h3>Ingredients:</h3>
          <p>{mocktailDetails.ingredients}</p>
        </section>
        <section className="directions">
          <h3>
            <p>Instructions:</p>
          </h3>
          <p>{mocktailDetails.directions}</p>
        </section>
      </div>
    </div>
  ) : (
    <div>'Hello'</div>
  )
}
export default MocktailInfo

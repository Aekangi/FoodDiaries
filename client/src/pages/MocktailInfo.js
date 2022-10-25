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
        setMocktailDetails(response.data.food)
      } catch (err) {
        console.log(err)
      }
    }

    getFoodById()
  }, [id])
}
export default MocktailInfo

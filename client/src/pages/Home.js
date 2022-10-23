import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Food Diaries</h1>
      <h1>
        <button>
          <Link to="/foods">Food</Link>
        </button>
        <button>
          <Link to="/mocktails">Mocktails</Link>
        </button>
      </h1>
    </div>
  )
}
export default Home

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Food Diaries</h1>
      <h1>
        <button>
          <Link to="/fd/foods">Food</Link>
        </button>
        <button>
          <Link to="/fd/foods">Mocktails</Link>
        </button>
      </h1>
    </div>
  )
}
export default Home

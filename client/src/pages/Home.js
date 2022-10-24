import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Food Diaries</h1>
      <p>
        Open a diary to view recipes that have been passing down from generation
        to generation. To keep the tradition going, please add a recipe and keep
        the tradition going.
      </p>
      <h1>
        <button>
          <Link to="/foods">Food Diary</Link>
        </button>
        <button>
          <Link to="/mocktails">Mocktails Diary</Link>
        </button>
      </h1>
    </div>
  )
}
export default Home

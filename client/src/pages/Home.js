import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homePage">
      <button className="button">
        <Link to="/foods">Dinner Diary</Link>
      </button>
      <button className="button">
        <Link to="/mocktails">Mocktails Diary</Link>
       </button>
        
    </div>
  )
}
export default Home

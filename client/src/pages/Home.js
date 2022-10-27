import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homePage">
      <div className="homeLeft">
        <h1 className="homeTitle">Food Diaries</h1>
        <p className="info">
          Open a diary to view recipes that have been passing down from
          generation to generation. To keep the tradition going, please add a
          recipe and keep the tradition going.
        </p>
      </div>
      <h1>
        <button className="leadToFood">
          <Link to="/foods">Food Diary</Link>
        </button>
        <button className="leadToMock">
          <Link to="/mocktails">Mocktails Diary</Link>
        </button>
      </h1>
    </div>
  )
}
export default Home

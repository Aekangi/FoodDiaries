import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homePage">
      <div className="homeLeft">
        <h1 className="homeTitle"></h1>
        <p className="info"></p>
      </div>
      <section className="diaryButtons">
        <h1>
          <button className="leadToFood">
            <Link to="/foods">Dinner Diary</Link>
          </button>
          <button className="leadToMock">
            <Link to="/mocktails">Mocktails Diary</Link>
          </button>
        </h1>
      </section>
    </div>
  )
}
export default Home

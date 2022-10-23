import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header>
      <nav>
        <Link to= '/'>Home</Link>
        <Link to= '/fd/foods'>Food</Link>
        <Link to= '/fd/mocktails'>Mocktails</Link>
      </nav>
    </header>
  )
}

export default Header
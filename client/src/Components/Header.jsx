import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header>
      <nav>
        <Link to= '/'>Home</Link>
        <Link to= '/foods'>Food</Link>
        <Link to= '/mocktails'>Mocktails</Link>
      </nav>
    </header>
  )
}

export default Header
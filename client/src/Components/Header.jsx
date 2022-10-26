
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header >
      <nav className='navbar'>
        <Link to= '/'>Home</Link>
        <Link to= '/foods'>Food Diary</Link>
        <Link to= '/mocktails'>Mocktails Diary</Link>
      </nav>
    </header>
  )
}

export default Header
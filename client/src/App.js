import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './pages/Home'
import Foods from './pages/Foods'
import FoodInfo from './pages/FoodInfo'
import Mocktails from './pages/Mocktails'
import FoodForm from './pages/FoodForm'
import UpdateFood from './pages/UpdateFood'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/foods/foodForm" element={<FoodForm />} />
          <Route path="/foods/:id" element={<FoodInfo />} />
          <Route path="/foods/updateFood" element={<UpdateFood />} />
          <Route path="/mocktails" element={<Mocktails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

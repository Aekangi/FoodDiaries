import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './pages/Home'
import Foods from './pages/Foods'
import FoodInfo from './pages/FoodInfo'
import Mocktails from './pages/Mocktails'
import FoodForm from './pages/FoodForm'
import UpdateFood from './pages/UpdateFood'
import MocktailInfo from './pages/MocktailInfo'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/foods/:id" element={<FoodInfo />} />
          <Route path="/foods/foodForm" element={<FoodForm />} />
          <Route path="/foods/updateFood/:id" element={<UpdateFood />} />
          <Route path="/mocktails" element={<Mocktails />} />
          <Route path="/mocktails/:id" element={<MocktailInfo />} />
          <Route path="/mocktails/mocktailForm" element={<FoodForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

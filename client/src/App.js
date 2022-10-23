import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './pages/Home'
import Foods from './pages/Foods'
import FoodInfo from './pages/FoodInfo'
import Mocktails from './pages/Mocktails'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/foods/:id" element={<FoodInfo />} />
          <Route path="/mocktails" element={<Mocktails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

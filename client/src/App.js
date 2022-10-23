import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Foods from './pages/Foods'
import Mocktails from './pages/Mocktails'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fd/foods" element={<Foods />} />
          <Route path="/fd/mocktails" element={<Mocktails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import TheDrink from './pages/TheDrink'
import Shop from './pages/Shop'
import Experience from './pages/Experience'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-drink" element={<TheDrink />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

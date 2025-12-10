import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import TheDrink from './pages/TheDrink'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Experience from './pages/Experience'
import { useState } from 'react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const location = useLocation()
  
  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }
  
  return (
    <div className="min-h-screen">
      <Navigation currentSlide={location.pathname === '/' ? currentSlide : 0} />
      <Routes>
        <Route path="/" element={<Home onSlideChange={handleSlideChange} />} />
        <Route path="/the-drink" element={<TheDrink />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

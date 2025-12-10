import HeroCarousel from '../components/HeroCarousel'
import FeatureSections from '../components/FeatureSections'
import FeaturedProducts from '../components/FeaturedProducts'
import OfferSection from '../components/OfferSection'
import Testimonials from '../components/Testimonials'
import BrandsSection from '../components/BrandsSection'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const Home = ({ onSlideChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Background gradients matching carousel slides
  const backgroundGradients = [
    'from-blue-900/80 via-cyan-800/70 to-blue-900/80', // Cosmic Energy
    'from-amber-900/80 via-orange-800/70 to-amber-900/80', // Bar Culture
    'from-orange-900/80 via-amber-800/70 to-orange-900/80', // Golden Hour
    'from-lime-900/80 via-green-800/70 to-lime-900/80', // Tropical Vibe
  ]
  
  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex)
    if (onSlideChange) {
      onSlideChange(slideIndex);
    }
  };
  
  return (
    <div className="relative min-h-screen pt-20">
      {/* Global Background Image with Opacity */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/img/v16-attached.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Global Gradient Overlay - Dynamic based on carousel */}
      <div className={`fixed inset-0 z-0 bg-gradient-to-br ${backgroundGradients[currentSlide]} transition-all duration-1000`} />
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <HeroCarousel onSlideChange={handleSlideChange} />
        <FeatureSections />
        <FeaturedProducts />
        <OfferSection />
        <Testimonials />
        <BrandsSection />
      </div>
    </div>
  )
}

export default Home

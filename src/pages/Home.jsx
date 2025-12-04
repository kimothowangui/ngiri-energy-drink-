import HeroCarousel from '../components/HeroCarousel'
import FeatureSections from '../components/FeatureSections'
import FeaturedProducts from '../components/FeaturedProducts'
import OfferSection from '../components/OfferSection'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Global Background Image with Opacity */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/img/v16-attached.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Global Gradient Overlay - Blue to Lime Green */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-900/80 via-cyan-800/70 to-lime-900/80" />
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <HeroCarousel />
        <FeatureSections />
        <FeaturedProducts />
        <OfferSection />
      </div>
    </div>
  )
}

export default Home

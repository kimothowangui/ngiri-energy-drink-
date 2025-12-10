import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navigation = ({ currentSlide = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  // Color schemes matching carousel slides
  const navColors = [
    { bg: 'from-blue-950/70 via-cyan-900/70 to-blue-950/70', border: 'border-cyan-500/30' }, // Cosmic Energy
    { bg: 'from-amber-950/70 via-orange-900/70 to-amber-950/70', border: 'border-amber-500/30' }, // Bar Culture
    { bg: 'from-orange-950/70 via-amber-900/70 to-orange-950/70', border: 'border-orange-500/30' }, // Golden Hour
    { bg: 'from-lime-950/70 via-green-900/70 to-lime-950/70', border: 'border-lime-500/30' }, // Tropical Vibe
  ]
  
  const currentColors = navColors[currentSlide] || navColors[0]

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'The Drink', path: '/the-drink' },
    { name: 'Products', path: '/products' },
    { name: 'Experience', path: '/experience' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 bg-gradient-to-r ${currentColors.bg} backdrop-blur-lg transition-all duration-700`}
    >
      <div className="w-full px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Far Left aligned to margin */}
          <div className="flex items-center">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <img 
                  src="/img/logo.jpg" 
                  alt="Ngiri Logo" 
                  className="h-16 w-16 object-cover rounded-full"
                />
                <h1 className="text-2xl font-black tracking-tight">
                  <span className="text-white">NGIRI</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> V16</span>
                </h1>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation - Far Right aligned to margin with all links and icons */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`font-semibold text-sm uppercase tracking-wider transition-colors relative group ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.div>
              </Link>
            ))}
            
            {/* Account Link */}
            <Link to="/account">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-semibold text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors relative group"
              >
                Account
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.div>
            </Link>

            {/* Cart Icon */}
            <Link to="/products">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-white/70 hover:text-white transition-colors relative"
              >
                <ShoppingCart size={24} />
                {/* Cart item count badge */}
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  0
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <div
                  className={`py-3 font-semibold text-lg ${
                    location.pathname === item.path
                      ? 'text-cyan-400'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            <Link to="/account" onClick={() => setIsOpen(false)}>
              <div className="py-3 font-semibold text-lg text-white flex items-center gap-2">
                <User size={20} /> Account
              </div>
            </Link>
            <Link to="/products" onClick={() => setIsOpen(false)}>
              <div className="py-3 font-semibold text-lg text-white flex items-center gap-2">
                <ShoppingCart size={20} /> Products
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation

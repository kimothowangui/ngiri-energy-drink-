import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'The Drink', path: '/the-drink' },
    { name: 'Shop', path: '/shop' },
    { name: 'Experience', path: '/experience' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-ngiri-black/95 backdrop-blur-sm border-b border-ngiri-lime/30"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <h1 className="text-4xl md:text-5xl font-bebas text-ngiri-lime">
                NGIRI
              </h1>
              <span className="text-sm md:text-base font-montserrat text-ngiri-yellow font-bold">
                V16
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`font-montserrat font-semibold text-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-ngiri-lime'
                      : 'text-white hover:text-ngiri-lime'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
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
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <div
                  className={`py-3 font-montserrat font-semibold text-lg ${
                    location.pathname === item.path
                      ? 'text-ngiri-lime'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation

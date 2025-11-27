import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-ngiri-dark border-t border-ngiri-crimson/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-4xl font-bebas text-ngiri-crimson glow-red mb-4">
              NGIRI
            </h3>
            <p className="text-ngiri-silver font-montserrat text-sm">
              Double Turbo V16 Energy
            </p>
            <p className="text-ngiri-silver font-montserrat text-sm mt-2">
              Unleash Your Power
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bebas text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-ngiri-silver hover:text-ngiri-crimson transition-colors font-montserrat text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/the-drink" className="text-ngiri-silver hover:text-ngiri-crimson transition-colors font-montserrat text-sm">
                  The Drink
                </a>
              </li>
              <li>
                <a href="/shop" className="text-ngiri-silver hover:text-ngiri-crimson transition-colors font-montserrat text-sm">
                  Shop
                </a>
              </li>
              <li>
                <a href="/experience" className="text-ngiri-silver hover:text-ngiri-crimson transition-colors font-montserrat text-sm">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-bebas text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-ngiri-silver hover:text-ngiri-crimson transition-colors font-montserrat text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-ngiri-silver hover:text-ngiri-crimson transition-colors font-montserrat text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-ngiri-silver hover:text-ngiri-crimson transition-colors font-montserrat text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-bebas text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, color: '#DC143C' }}
                href="#"
                className="text-ngiri-silver transition-colors"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#DC143C' }}
                href="#"
                className="text-ngiri-silver transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#DC143C' }}
                href="#"
                className="text-ngiri-silver transition-colors"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#DC143C' }}
                href="#"
                className="text-ngiri-silver transition-colors"
              >
                <Youtube size={24} />
              </motion.a>
            </div>
            <p className="text-ngiri-silver font-montserrat text-xs mt-6">
              © 2024 Ngiri Energy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

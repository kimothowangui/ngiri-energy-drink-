import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#111] border-t border-ngiri-lime/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-ngiri-lime to-ngiri-crimson"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Mission */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-ngiri-lime rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-ngiri-dark">V16</span>
              </div>
              <h3 className="text-3xl font-bold text-white">
                NGIRI <span className="text-ngiri-lime">V16</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              NGIRI V16 delivers high-quality tech, business solutions, and seamless shopping experiences. 
              We power your potential with innovation and excellence.
            </p>
            <div className="flex items-center gap-2 text-ngiri-lime text-sm">
              <div className="w-2 h-2 bg-ngiri-lime rounded-full animate-pulse"></div>
              <span>Unleash Your Power</span>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 border-b border-ngiri-lime/30 pb-2">
              Useful Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/products' },
                { name: 'About', href: '/the-drink' },
                { name: 'Contact', href: '#contact' },
                { name: 'Blog', href: '#blog' },
                { name: 'Returns', href: '#returns' },
                { name: 'Privacy Policy', href: '#privacy' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-ngiri-lime transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-ngiri-lime group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 border-b border-ngiri-lime/30 pb-2">
              Follow Us
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Stay connected with us on social media for updates, promotions, and more.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: Facebook, href: '#', color: '#1877F2' },
                { Icon: Instagram, href: '#', color: '#E4405F' },
                { Icon: Youtube, href: '#', color: '#FF0000' },
                { Icon: Linkedin, href: '#', color: '#0A66C2' }
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-700 hover:border-ngiri-lime transition-all duration-300 group"
                  style={{ '--icon-color': color }}
                >
                  <Icon 
                    size={20} 
                    className="text-gray-400 group-hover:text-ngiri-lime transition-colors duration-300" 
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 border-b border-ngiri-lime/30 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-ngiri-lime/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ngiri-lime/20 transition-colors">
                  <Phone size={18} className="text-ngiri-lime" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Phone</p>
                  <a href="tel:+254700000000" className="text-gray-300 hover:text-ngiri-lime transition-colors text-sm">
                    +254 700 000 000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-ngiri-lime/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ngiri-lime/20 transition-colors">
                  <Mail size={18} className="text-ngiri-lime" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Email</p>
                  <a href="mailto:info@ngiriv16.com" className="text-gray-300 hover:text-ngiri-lime transition-colors text-sm">
                    info@ngiriv16.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-ngiri-lime/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ngiri-lime/20 transition-colors">
                  <MapPin size={18} className="text-ngiri-lime" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Location</p>
                  <p className="text-gray-300 text-sm">
                    Nairobi, Kenya<br />
                    Westlands Business District
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2024 NGIRI V16. All rights reserved. | Powering Your Potential
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#terms" className="text-gray-500 hover:text-ngiri-lime transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="text-gray-500 hover:text-ngiri-lime transition-colors">
                Privacy Policy
              </a>
              <a href="#cookies" className="text-gray-500 hover:text-ngiri-lime transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

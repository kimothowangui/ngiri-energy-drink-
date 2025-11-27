import { motion } from 'framer-motion'
import { ShoppingCart, Star, Package, Truck, Shield } from 'lucide-react'
import { useState } from 'react'
import ProductViewer3D from '../components/ProductViewer3D'

const Shop = () => {
  const [selectedPack, setSelectedPack] = useState('single')

  const products = [
    {
      id: 'single',
      name: 'Single Can',
      price: 3.99,
      image: '/img/v1.jpg',
      description: 'Perfect for trying Ngiri for the first time',
      quantity: '1 x 16oz Can'
    },
    {
      id: '4pack',
      name: '4-Pack',
      price: 14.99,
      image: '/img/v8.PNG',
      description: 'Great value for regular energy boost',
      quantity: '4 x 16oz Cans',
      badge: 'Popular'
    },
    {
      id: '12pack',
      name: '12-Pack',
      price: 39.99,
      image: '/img/v9.PNG',
      description: 'Best value - Stock up and save',
      quantity: '12 x 16oz Cans',
      badge: 'Best Value'
    },
    {
      id: '24pack',
      name: '24-Pack Case',
      price: 69.99,
      image: '/img/v10.PNG',
      description: 'Ultimate power supply for serious athletes',
      quantity: '24 x 16oz Cans',
      badge: 'Pro Choice'
    }
  ]

  const benefits = [
    {
      icon: <Truck size={32} />,
      title: 'Free Shipping',
      description: 'On orders over $50'
    },
    {
      icon: <Package size={32} />,
      title: 'Fast Delivery',
      description: '2-3 business days'
    },
    {
      icon: <Shield size={32} />,
      title: '100% Guarantee',
      description: 'Money back if not satisfied'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-ngiri-midnight via-ngiri-dark to-ngiri-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ngiri-crimson rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ngiri-yellow rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bebas text-white mb-4">
              SHOP <span className="text-ngiri-crimson glow-red">NGIRI</span>
            </h1>
            <p className="text-xl md:text-2xl font-montserrat text-ngiri-silver max-w-3xl mx-auto">
              Choose your power pack and unleash your potential
            </p>
          </motion.div>

          {/* 360 Product Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <ProductViewer3D />
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-ngiri-midnight">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bebas text-ngiri-yellow glow-yellow text-center mb-16"
          >
            CHOOSE YOUR PACK
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setSelectedPack(product.id)}
                className={`relative bg-ngiri-dark/50 border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  selectedPack === product.id
                    ? 'border-ngiri-crimson shadow-lg shadow-ngiri-crimson/50'
                    : 'border-ngiri-crimson/30 hover:border-ngiri-crimson'
                }`}
              >
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-ngiri-crimson text-white px-3 py-1 rounded-full text-xs font-montserrat font-bold">
                    {product.badge}
                  </div>
                )}

                <div className="mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bebas text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-ngiri-silver font-montserrat text-sm mb-3">
                  {product.quantity}
                </p>
                <p className="text-ngiri-silver font-montserrat text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bebas text-ngiri-crimson">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-1 text-ngiri-yellow">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-montserrat font-bold transition-colors flex items-center justify-center gap-2 ${
                    selectedPack === product.id
                      ? 'bg-ngiri-crimson text-white'
                      : 'bg-ngiri-dark border-2 border-ngiri-crimson text-ngiri-crimson hover:bg-ngiri-crimson hover:text-white'
                  }`}
                >
                  <ShoppingCart size={20} />
                  {selectedPack === product.id ? 'SELECTED' : 'SELECT'}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Add to Cart Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-ngiri-crimson text-white font-montserrat font-bold text-xl rounded-lg hover:bg-ngiri-crimson/80 transition-colors inline-flex items-center gap-3 animate-pulse-glow"
            >
              <ShoppingCart size={28} />
              ADD TO CART - ${products.find(p => p.id === selectedPack)?.price}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-ngiri-midnight to-ngiri-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-ngiri-crimson/20 border-2 border-ngiri-crimson rounded-full mb-4 text-ngiri-crimson">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bebas text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-ngiri-silver font-montserrat">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-ngiri-midnight">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bebas text-ngiri-crimson glow-red text-center mb-16"
          >
            WHAT PEOPLE SAY
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Rodriguez',
                role: 'Pro Gamer',
                text: 'Ngiri keeps me sharp during 12-hour gaming sessions. Best energy drink hands down!',
                rating: 5
              },
              {
                name: 'Sarah Chen',
                role: 'Fitness Athlete',
                text: 'Clean energy without the crash. Perfect for my morning workouts and throughout the day.',
                rating: 5
              },
              {
                name: 'Marcus Johnson',
                role: 'Entrepreneur',
                text: 'I run 3 businesses and Ngiri is my secret weapon. Laser focus when I need it most.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-ngiri-dark/50 border-2 border-ngiri-crimson/30 rounded-lg p-6"
              >
                <div className="flex items-center gap-1 text-ngiri-yellow mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-ngiri-silver font-montserrat mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-montserrat font-bold">
                    {testimonial.name}
                  </p>
                  <p className="text-ngiri-crimson font-montserrat text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop

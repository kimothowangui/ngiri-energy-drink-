import { motion } from 'framer-motion'
import { ShoppingCart, Star, Package, Truck, Shield } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [selectedPack, setSelectedPack] = useState('single')

  // Individual Products (link to detail pages)
  const individualProducts = [
    {
      id: 1,
      name: 'NGIRI V16 COSMIC ENERGY',
      price: 350,
      image: '/img/v1.jpg',
      description: 'Experience pure energy from beyond the stars',
      quantity: '1 x 16oz Can',
      badge: 'Best Seller',
      hasDetailPage: true
    },
    {
      id: 2,
      name: 'NGIRI V16 BAR CULTURE',
      price: 350,
      image: '/img/v2.jpg',
      description: 'Crafted for the sophisticated',
      quantity: '1 x 16oz Can',
      badge: 'New',
      hasDetailPage: true
    },
    {
      id: 3,
      name: 'NGIRI V16 GOLDEN HOUR',
      price: 350,
      image: '/img/v3.jpg',
      description: 'Energy that shines bright',
      quantity: '1 x 16oz Can',
      badge: 'Popular',
      hasDetailPage: true
    },
    {
      id: 4,
      name: 'NGIRI V16 TROPICAL VIBE',
      price: 350,
      image: '/img/v16-attached.jpg',
      description: 'African heritage, global energy',
      quantity: '1 x 16oz Can',
      badge: 'Limited',
      hasDetailPage: true
    },
  ]

  // Pack Products (for bulk purchases)
  const packProducts = [
    {
      id: '4pack',
      name: '4-Pack',
      price: 1400,
      image: '/img/v8.PNG',
      description: 'Great value for regular energy boost',
      quantity: '4 x 16oz Cans',
      badge: 'Popular',
      hasDetailPage: false
    },
    {
      id: '6pack-variety',
      name: '6-Pack Variety',
      price: 2100,
      image: '/img/v7.PNG',
      description: 'Mix of all flavors - Try them all',
      quantity: '6 x 16oz Cans (Mixed)',
      badge: 'Variety',
      hasDetailPage: false
    },
    {
      id: '12pack',
      name: '12-Pack',
      price: 4200,
      image: '/img/v9.PNG',
      description: 'Best value - Stock up and save',
      quantity: '12 x 16oz Cans',
      badge: 'Best Value',
      hasDetailPage: false
    },
    {
      id: '24pack',
      name: '24-Pack Case',
      price: 8400,
      image: '/img/v10.PNG',
      description: 'Ultimate power supply for serious athletes',
      quantity: '24 x 16oz Cans',
      badge: 'Pro Choice',
      hasDetailPage: false
    }
  ]

  const products = [...individualProducts, ...packProducts]

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
    <div className="pt-20 min-h-screen relative">
      {/* Global Background Image - Full Page */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/img/v16-attached.jpg" 
          alt="Ngiri Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Global Electric Blue & Green Gradient Overlay - Full Page */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-800/70 to-lime-900/80 z-0"></div>
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden z-10">
        {/* Animated Glowing Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ngiri-lime/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-lime-400/30 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 py-12"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">OUR</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ngiri-lime via-lime-400 to-green-400">PRODUCTS</span>
            </h1>
            <p className="text-2xl md:text-3xl max-w-3xl mx-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-ngiri-lime to-lime-300 drop-shadow-[0_0_20px_rgba(164,214,94,0.8)]">
              Choose your power pack and unleash your potential
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-ngiri-lime/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1800px] mx-auto px-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-ngiri-lime to-orange-400 text-center mb-16 drop-shadow-[0_0_30px_rgba(164,214,94,0.5)]"
          >
            CHOOSE YOUR PACK
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {products.map((product, index) => {
              const ProductWrapper = product.hasDetailPage ? Link : 'div'
              const wrapperProps = product.hasDetailPage 
                ? { to: `/product/${product.id}` }
                : { onClick: () => setSelectedPack(product.id) }
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <ProductWrapper {...wrapperProps} className="block">
                    <div className={`bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${
                      selectedPack === product.id && !product.hasDetailPage
                        ? 'border-ngiri-lime shadow-ngiri-lime/60 shadow-[0_0_30px_rgba(164,214,94,0.6)]'
                        : 'border-cyan-500/50 hover:border-ngiri-lime hover:shadow-ngiri-lime/40 hover:shadow-[0_0_20px_rgba(164,214,94,0.4)]'
                    }`}>
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-blue-900/30 via-zinc-900 to-orange-900/30">
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-gradient-to-r from-cyan-400 via-ngiri-lime to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(164,214,94,0.8)] animate-pulse">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick Action Button */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <button className="bg-gradient-to-r from-ngiri-lime to-cyan-400 text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:from-orange-400 hover:to-blue-500 hover:text-white transition-all shadow-[0_0_20px_rgba(164,214,94,0.8)]">
                        <ShoppingCart size={18} />
                        {product.hasDetailPage ? 'View Details' : (selectedPack === product.id ? 'Selected' : 'Add to Cart')}
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-orange-400 text-orange-400 drop-shadow-[0_0_5px_rgba(251,146,60,0.8)]" />
                      ))}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-ngiri-lime transition-colors drop-shadow-[0_0_10px_rgba(164,214,94,0.5)]">
                      {product.name}
                    </h3>
                    
                    {/* Quantity */}
                    <p className="text-cyan-400 text-sm font-medium mb-2 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
                      {product.quantity}
                    </p>

                    {/* Description */}
                    <p className="text-blue-300/80 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price and Select */}
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ngiri-lime to-cyan-400 drop-shadow-[0_0_10px_rgba(164,214,94,0.6)]">
                        KSh {product.price.toLocaleString()}
                      </span>
                      {selectedPack === product.id && !product.hasDetailPage && (
                        <span className="text-ngiri-lime font-semibold text-sm flex items-center gap-1 drop-shadow-[0_0_10px_rgba(164,214,94,0.8)] animate-pulse">
                          ✓ Selected
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                </ProductWrapper>
              </motion.div>
            )
          })}
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
              className="px-12 py-6 bg-gradient-to-r from-cyan-400 via-ngiri-lime to-orange-400 hover:from-orange-500 hover:via-blue-500 hover:to-cyan-500 text-black font-bold text-xl rounded-full inline-flex items-center gap-3 shadow-[0_0_40px_rgba(164,214,94,0.8)] hover:shadow-[0_0_50px_rgba(251,146,60,0.8)] transition-all animate-pulse"
            >
              <ShoppingCart size={28} />
              ADD TO CART - KSh {products.find(p => p.id === selectedPack)?.price.toLocaleString()}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ngiri-lime/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ngiri-lime/20 to-cyan-400/20 border-2 border-ngiri-lime rounded-full mb-4 text-ngiri-lime shadow-[0_0_20px_rgba(164,214,94,0.6)] group-hover:shadow-[0_0_30px_rgba(164,214,94,0.8)] transition-all group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ngiri-lime to-cyan-400 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-orange-300/70">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-ngiri-lime to-orange-400 text-center mb-16 drop-shadow-[0_0_30px_rgba(164,214,94,0.5)]"
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
                className="bg-gradient-to-br from-zinc-900 to-black border-2 border-cyan-500/50 rounded-2xl p-6 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:border-ngiri-lime hover:shadow-[0_0_30px_rgba(164,214,94,0.6)] transition-all group"
              >
                <div className="flex items-center gap-1 text-orange-400 mb-4 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-blue-200/90 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-bold group-hover:text-ngiri-lime transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-cyan-400 text-sm drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
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

export default Products

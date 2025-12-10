import { motion, useScroll, useTransform } from 'framer-motion'
import { Beaker, Zap, Heart, Brain, Droplet, Flame } from 'lucide-react'
import { useRef } from 'react'

const TheDrink = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const ingredients = [
    {
      icon: <Zap size={40} />,
      name: 'Caffeine',
      amount: '300mg',
      description: 'Premium caffeine for sustained energy and alertness'
    },
    {
      icon: <Brain size={40} />,
      name: 'Taurine',
      amount: '2000mg',
      description: 'Supports mental performance and focus'
    },
    {
      icon: <Heart size={40} />,
      name: 'B-Vitamins',
      amount: 'Complex',
      description: 'Essential for energy metabolism'
    },
    {
      icon: <Flame size={40} />,
      name: 'L-Carnitine',
      amount: '500mg',
      description: 'Helps convert fat into energy'
    },
    {
      icon: <Droplet size={40} />,
      name: 'Electrolytes',
      amount: 'Balanced',
      description: 'Optimal hydration and performance'
    },
    {
      icon: <Beaker size={40} />,
      name: 'Natural Flavors',
      amount: '100%',
      description: 'No artificial colors or flavors'
    }
  ]

  return (
    <div ref={ref} className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-white"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-ngiri-lime rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-ngiri-lime-light rounded-full blur-3xl"></div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bebas text-ngiri-black mb-4">
                THE DRINK
              </h1>
              <h2 className="text-4xl md:text-6xl font-bebas text-ngiri-lime mb-6">
                ENGINEERED FOR CHAMPIONS
              </h2>
              <p className="text-xl font-montserrat text-gray-700 mb-6">
                Ngiri isn't just an energy drink—it's a precision-engineered formula designed to push your limits and elevate your performance. Every ingredient is carefully selected to deliver maximum results.
              </p>
              <p className="text-lg font-montserrat text-gray-700">
                Whether you're an athlete, a gamer, a professional, or anyone who demands more from life, Ngiri gives you the edge you need to dominate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img
                src="/img/v3.jpg"
                alt="Ngiri Energy Drink"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-ngiri-crimson blur-3xl opacity-30 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bebas text-ngiri-lime mb-4">
              POWER-PACKED INGREDIENTS
            </h2>
            <p className="text-xl font-montserrat text-gray-700 max-w-3xl mx-auto">
              Every can is loaded with scientifically-proven ingredients for maximum performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white border-2 border-ngiri-lime/30 rounded-lg p-6 hover:border-ngiri-lime hover:shadow-lg transition-all"
              >
                <div className="text-ngiri-lime mb-4">
                  {ingredient.icon}
                </div>
                <h3 className="text-2xl font-bebas text-ngiri-black mb-2">
                  {ingredient.name}
                </h3>
                <p className="text-ngiri-lime-dark font-montserrat font-bold text-lg mb-3">
                  {ingredient.amount}
                </p>
                <p className="text-gray-600 font-montserrat text-sm">
                  {ingredient.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Facts */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/img/v7.PNG"
                alt="Ngiri Nutrition"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bebas text-ngiri-lime mb-6">
                NUTRITION FACTS
              </h2>
              <div className="bg-white border-2 border-ngiri-lime/30 rounded-lg p-8 shadow-lg">
                <div className="space-y-4 font-montserrat">
                  <div className="flex justify-between border-b border-ngiri-silver/20 pb-2">
                    <span className="text-white font-semibold">Serving Size</span>
                    <span className="text-ngiri-silver">16 fl oz (473ml)</span>
                  </div>
                  <div className="flex justify-between border-b border-ngiri-silver/20 pb-2">
                    <span className="text-white font-semibold">Calories</span>
                    <span className="text-ngiri-silver">10</span>
                  </div>
                  <div className="flex justify-between border-b border-ngiri-silver/20 pb-2">
                    <span className="text-white font-semibold">Total Carbohydrate</span>
                    <span className="text-ngiri-silver">2g</span>
                  </div>
                  <div className="flex justify-between border-b border-ngiri-silver/20 pb-2">
                    <span className="text-white font-semibold">Sugars</span>
                    <span className="text-ngiri-lime-dark font-bold">0g</span>
                  </div>
                  <div className="flex justify-between border-b border-ngiri-silver/20 pb-2">
                    <span className="text-white font-semibold">Caffeine</span>
                    <span className="text-ngiri-lime font-bold">300mg</span>
                  </div>
                  <div className="flex justify-between border-b border-ngiri-silver/20 pb-2">
                    <span className="text-white font-semibold">Taurine</span>
                    <span className="text-ngiri-silver">2000mg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">B-Vitamins</span>
                    <span className="text-ngiri-silver">100% DV</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bebas text-ngiri-black mb-6">
              EXPERIENCE THE <span className="text-ngiri-lime">V16 DIFFERENCE</span>
            </h2>
            <p className="text-xl font-montserrat text-gray-700 mb-8">
              Don't settle for ordinary. Get the energy drink that matches your intensity.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/products"
              className="inline-block px-10 py-5 bg-ngiri-crimson text-white font-montserrat font-bold text-xl rounded-lg hover:bg-ngiri-crimson/80 transition-colors animate-pulse-glow"
            >
              BUY NOW
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TheDrink

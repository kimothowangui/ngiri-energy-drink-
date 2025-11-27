import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-ngiri-midnight via-ngiri-dark to-ngiri-dark"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ngiri-crimson rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ngiri-yellow rounded-full blur-3xl animate-pulse"></div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white mb-4"
            >
              NGIRI
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-4xl md:text-6xl font-bebas text-ngiri-crimson glow-red">
                DOUBLE TURBO
              </h2>
              <h2 className="text-5xl md:text-7xl font-bebas text-ngiri-yellow glow-yellow">
                V16
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl font-montserrat text-ngiri-silver mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Experience the ultimate energy boost. 16 cylinders of pure power in every can.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/shop"
                className="px-8 py-4 bg-ngiri-crimson text-white font-montserrat font-bold text-lg rounded-lg hover:bg-ngiri-crimson/80 transition-colors animate-pulse-glow"
              >
                GET YOURS NOW
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/the-drink"
                className="px-8 py-4 border-2 border-ngiri-yellow text-ngiri-yellow font-montserrat font-bold text-lg rounded-lg hover:bg-ngiri-yellow hover:text-ngiri-dark transition-colors"
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img
                src="/img/v1.jpg"
                alt="Ngiri Energy Drink"
                className="w-full max-w-md h-auto drop-shadow-2xl"
              />
              {/* Glow effect behind can */}
              <div className="absolute inset-0 bg-ngiri-crimson blur-3xl opacity-30 -z-10 scale-150"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={40} className="text-ngiri-crimson" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

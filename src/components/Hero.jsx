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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Lime Green Animated Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-ngiri-lime via-ngiri-lime-dark to-ngiri-black"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ngiri-lime-light rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-ngiri-yellow rounded-full blur-3xl animate-pulse"></div>
        </div>
      </motion.div>

      <div className="w-full z-10 flex relative">
        {/* Mobile/Tablet: V16 Background Image (Transparent) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:hidden absolute inset-0 z-0"
        >
          <img
            src="/img/v16-attached.jpg"
            alt="Ngiri V16 Energy Drink"
            className="h-full w-full object-cover object-center opacity-30"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-ngiri-lime-dark/70 via-ngiri-lime-dark/60 to-ngiri-lime-dark/70"></div>
        </motion.div>

        {/* LEFT SIDE - Content */}
        <div className="w-full lg:w-7/12 px-8 lg:px-16 flex items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-8xl lg:text-9xl font-bebas text-white mb-4"
            >
              NGIRI
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-white">
                DOUBLE TURBO
              </h2>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bebas text-ngiri-yellow glow-yellow">
                V16
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl font-montserrat text-white mb-8 max-w-xl"
            >
              Experience the ultimate energy boost. 16 cylinders of pure power in every can.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/shop"
                className="px-8 py-4 bg-white text-ngiri-lime-dark font-montserrat font-bold text-lg rounded-lg hover:bg-ngiri-yellow hover:text-ngiri-black transition-colors shadow-xl"
              >
                GET YOURS NOW
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/the-drink"
                className="px-8 py-4 border-2 border-white text-white font-montserrat font-bold text-lg rounded-lg hover:bg-white hover:text-ngiri-lime-dark transition-colors"
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - V16 Image (Desktop Only: Edge-to-Edge) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block w-5/12 relative"
        >
          <div className="absolute inset-0 right-0">
            <img
              src="/img/v16-attached.jpg"
              alt="Ngiri V16 Energy Drink"
              className="h-screen w-full object-cover object-left"
              style={{ objectPosition: 'left center' }}
            />
            {/* Gradient overlay on left edge for blend */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ngiri-lime-dark/80 to-transparent"></div>
          </div>
        </motion.div>
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

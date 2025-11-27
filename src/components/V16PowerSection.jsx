import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Flame, Battery, Target } from 'lucide-react'
import { useRef } from 'react'

const V16PowerSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: <Zap size={48} />,
      title: '300mg Caffeine',
      description: 'Maximum energy boost for peak performance'
    },
    {
      icon: <Flame size={48} />,
      title: 'Zero Sugar',
      description: 'Pure energy without the crash'
    },
    {
      icon: <Battery size={48} />,
      title: '5-Hour Energy',
      description: 'Long-lasting power to fuel your day'
    },
    {
      icon: <Target size={48} />,
      title: 'Enhanced Focus',
      description: 'Laser-sharp concentration when you need it'
    }
  ]

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-b from-ngiri-dark via-ngiri-midnight to-ngiri-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(220,20,60,0.1) 10px, rgba(220,20,60,0.1) 20px)'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          style={{ scale, opacity }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-bebas text-ngiri-crimson glow-red mb-4"
          >
            V16 POWER
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat text-ngiri-silver max-w-3xl mx-auto"
          >
            16 cylinders of pure, unleashed energy. Engineered for those who demand more.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-ngiri-dark/50 border-2 border-ngiri-crimson/30 rounded-lg p-6 text-center hover:border-ngiri-crimson transition-all"
            >
              <div className="text-ngiri-crimson mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bebas text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-ngiri-silver font-montserrat text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Product Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/img/v2.jpg"
                alt="Ngiri V16 Can"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-ngiri-yellow blur-3xl opacity-20 -z-10"></div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bebas text-ngiri-yellow glow-yellow mb-6"
              >
                FUEL YOUR AMBITION
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg font-montserrat text-ngiri-silver mb-6"
              >
                Every can of Ngiri is crafted with precision, combining the finest ingredients to deliver unmatched energy and focus. Whether you're crushing your workout, gaming all night, or powering through work, Ngiri keeps you in the zone.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-3 text-ngiri-silver font-montserrat mb-8"
              >
                <li className="flex items-center gap-3">
                  <Zap className="text-ngiri-yellow" size={20} />
                  <span>Premium energy blend</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="text-ngiri-yellow" size={20} />
                  <span>B-vitamins complex</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="text-ngiri-yellow" size={20} />
                  <span>Taurine & L-Carnitine</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="text-ngiri-yellow" size={20} />
                  <span>Natural flavors</span>
                </li>
              </motion.ul>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/the-drink"
                className="inline-block px-8 py-4 bg-ngiri-yellow text-ngiri-dark font-montserrat font-bold text-lg rounded-lg hover:bg-ngiri-yellow/80 transition-colors"
              >
                DISCOVER MORE
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default V16PowerSection

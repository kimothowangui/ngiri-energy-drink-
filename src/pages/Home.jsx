import Hero from '../components/Hero'
import V16PowerSection from '../components/V16PowerSection'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <div>
      <Hero />
      <V16PowerSection />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-ngiri-dark to-ngiri-midnight">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bebas text-white mb-6">
              READY TO <span className="text-ngiri-crimson glow-red">UNLEASH</span> YOUR POWER?
            </h2>
            <p className="text-xl font-montserrat text-ngiri-silver mb-8">
              Join thousands of athletes, gamers, and go-getters who trust Ngiri to fuel their ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/shop"
                className="px-10 py-5 bg-ngiri-crimson text-white font-montserrat font-bold text-xl rounded-lg hover:bg-ngiri-crimson/80 transition-colors inline-flex items-center justify-center gap-2 animate-pulse-glow"
              >
                SHOP NOW <ArrowRight size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/experience"
                className="px-10 py-5 border-2 border-ngiri-yellow text-ngiri-yellow font-montserrat font-bold text-xl rounded-lg hover:bg-ngiri-yellow hover:text-ngiri-dark transition-colors inline-flex items-center justify-center gap-2"
              >
                EXPLORE EXPERIENCE <ArrowRight size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-ngiri-midnight">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '300mg', label: 'Caffeine' },
              { value: '0g', label: 'Sugar' },
              { value: '5hrs', label: 'Energy' },
              { value: '100%', label: 'Power' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-5xl md:text-6xl font-bebas text-ngiri-crimson glow-red mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-montserrat text-ngiri-silver">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

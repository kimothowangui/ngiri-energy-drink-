import { motion } from 'framer-motion'
import { Gamepad2, Dumbbell, Coffee, Music, Trophy, Users } from 'lucide-react'

const Experience = () => {
  const lifestyleImages = [
    {
      src: '/img/v1.jpg',
      title: 'Gaming',
      icon: <Gamepad2 size={32} />,
      description: 'Stay sharp during marathon gaming sessions'
    },
    {
      src: '/img/v2.jpg',
      title: 'Fitness',
      icon: <Dumbbell size={32} />,
      description: 'Power through intense workouts'
    },
    {
      src: '/img/v3.jpg',
      title: 'Work',
      icon: <Coffee size={32} />,
      description: 'Conquer deadlines with laser focus'
    },
    {
      src: '/img/v7.PNG',
      title: 'Party',
      icon: <Music size={32} />,
      description: 'Keep the energy going all night'
    },
    {
      src: '/img/v8.PNG',
      title: 'Sports',
      icon: <Trophy size={32} />,
      description: 'Dominate on the field or court'
    },
    {
      src: '/img/v9.PNG',
      title: 'Social',
      icon: <Users size={32} />,
      description: 'Stay energized with your crew'
    }
  ]

  const events = [
    {
      title: 'Esports Tournament Sponsorship',
      date: 'Monthly',
      description: 'Ngiri powers top gaming tournaments worldwide'
    },
    {
      title: 'Extreme Sports Events',
      date: 'Quarterly',
      description: 'Partnering with extreme athletes and competitions'
    },
    {
      title: 'Music Festival Presence',
      date: 'Summer Season',
      description: 'Find us at major music festivals keeping the party alive'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-ngiri-lime rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-ngiri-lime-light rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-9xl font-bebas text-ngiri-black mb-6">
              THE <span className="text-ngiri-lime">NGIRI</span>
            </h1>
            <h2 className="text-5xl md:text-7xl font-bebas text-ngiri-lime-dark mb-8">
              EXPERIENCE
            </h2>
            <p className="text-xl md:text-2xl font-montserrat text-gray-700 max-w-4xl mx-auto">
              More than just energy. It's a lifestyle. Join the movement of champions, gamers, athletes, and go-getters who refuse to settle for ordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bebas text-ngiri-lime text-center mb-16"
          >
            YOUR LIFESTYLE, AMPLIFIED
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifestyleImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <div className="relative aspect-square">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ngiri-black via-ngiri-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-ngiri-lime mb-3">
                        {item.icon}
                      </div>
                      <h3 className="text-3xl font-bebas text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-ngiri-silver font-montserrat text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bebas text-ngiri-lime mb-6">
              JOIN THE COMMUNITY
            </h2>
            <p className="text-xl font-montserrat text-gray-700 max-w-3xl mx-auto mb-8">
              Connect with thousands of Ngiri enthusiasts. Share your moments, inspire others, and be part of something bigger.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="px-8 py-4 bg-ngiri-lime text-white font-montserrat font-bold text-lg rounded-lg hover:bg-ngiri-lime-dark transition-colors"
              >
                #NGIRIPOWER
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="px-8 py-4 border-2 border-ngiri-yellow text-ngiri-yellow font-montserrat font-bold text-lg rounded-lg hover:bg-ngiri-yellow hover:text-ngiri-dark transition-colors"
              >
                #V16LIFESTYLE
              </motion.a>
            </div>
          </motion.div>

          {/* Social Proof Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500K+', label: 'Followers' },
              { value: '50K+', label: 'Monthly Posts' },
              { value: '2M+', label: 'Cans Sold' },
              { value: '100+', label: 'Sponsored Athletes' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-5xl md:text-6xl font-bebas text-ngiri-lime mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-montserrat text-gray-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bebas text-ngiri-lime text-center mb-16"
          >
            SPONSORED EVENTS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border-2 border-ngiri-lime/30 rounded-lg p-8 hover:border-ngiri-lime transition-all shadow-md"
              >
                <div className="text-ngiri-lime-dark font-montserrat font-bold text-sm mb-2">
                  {event.date}
                </div>
                <h3 className="text-3xl font-bebas text-ngiri-black mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-700 font-montserrat">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bebas text-ngiri-black mb-6">
              READY TO <span className="text-ngiri-lime">JOIN THE REVOLUTION</span>?
            </h2>
            <p className="text-xl font-montserrat text-gray-700 mb-8">
              Be part of the Ngiri lifestyle. Unleash your power today.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/shop"
              className="inline-block px-12 py-5 bg-ngiri-lime text-white font-montserrat font-bold text-xl rounded-lg hover:bg-ngiri-lime-dark transition-colors"
            >
              GET NGIRI NOW
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experience

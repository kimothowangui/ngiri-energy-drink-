import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amara Okafor",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
      rating: 5,
      text: "NGIRI V16 gives me the energy boost I need for my morning workouts. The taste is incredible and it keeps me going all day!"
    },
    {
      id: 2,
      name: "Kwame Mensah",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      rating: 5,
      text: "As a business owner, I need sustained energy. NGIRI V16 delivers without the crash. It's become my daily companion!"
    },
    {
      id: 3,
      name: "Zainab Mukhtar",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      rating: 5,
      text: "Late night coding sessions are no match for NGIRI V16. The focus and energy it provides is unmatched. Highly recommend!"
    },
    {
      id: 4,
      name: "Thabo Ndlovu",
      role: "Professional Athlete",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5,
      text: "NGIRI V16 has transformed my training routine. The power it delivers helps me push through intense sessions. Game changer!"
    },
    {
      id: 5,
      name: "Fatima Hassan",
      role: "Medical Student",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      rating: 5,
      text: "Studying for long hours requires mental clarity and energy. NGIRI V16 provides both without jitters. Perfect for students!"
    },
    {
      id: 6,
      name: "Chijioke Eze",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 5,
      text: "Creativity demands energy and focus. NGIRI V16 fuels my imagination and keeps me productive throughout demanding projects!"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            What Our <span className="text-ngiri-lime">Customers Say</span>
          </h2>
          <p className="text-ngiri-silver text-lg max-w-2xl mx-auto">
            Real experiences from real people who have unleashed their power with NGIRI V16
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(164, 214, 94, 0.3)"
              }}
              className="bg-gradient-to-br from-ngiri-black/80 to-ngiri-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-ngiri-silver/20 shadow-lg transition-all duration-300"
            >
              {/* Customer Image & Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-ngiri-lime"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-ngiri-lime rounded-full p-1">
                    <Star size={12} fill="currentColor" className="text-ngiri-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-ngiri-silver text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    className="text-ngiri-lime"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-ngiri-silver leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

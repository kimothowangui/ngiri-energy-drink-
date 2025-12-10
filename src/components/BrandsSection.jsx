import { motion } from 'framer-motion'

const BrandsSection = () => {
  // Brand logos - Using actual brand logos
  const brands = [
    { 
      id: 1, 
      name: "Safaricom", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Safaricom_logo.svg/320px-Safaricom_logo.svg.png",
      alt: "Safaricom Logo"
    },
    { 
      id: 2, 
      name: "NCBA", 
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/NCBA_Bank_Kenya_logo.svg/320px-NCBA_Bank_Kenya_logo.svg.png",
      alt: "NCBA Bank Logo"
    },
    { 
      id: 3, 
      name: "Jumia", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jumia_Logo.png/320px-Jumia_Logo.png",
      alt: "Jumia Logo"
    },
    { 
      id: 4, 
      name: "Jiji Kenya", 
      logo: "https://jiji.co.ke/static/img/logo.svg",
      alt: "Jiji Kenya Logo"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-ngiri-lime to-ngiri-crimson"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Trusted By <span className="text-ngiri-lime">Leading Brands</span>
          </h2>
          <p className="text-ngiri-silver text-lg max-w-2xl mx-auto">
            Partnering with Africa's most innovative companies to deliver excellence
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                filter: "grayscale(0%) brightness(1.1)",
                transition: { duration: 0.3 }
              }}
              className="flex items-center justify-center p-8 bg-white/90 backdrop-blur-sm rounded-xl border border-ngiri-silver/20 hover:border-ngiri-lime/50 transition-all duration-300 filter grayscale hover:shadow-2xl cursor-pointer min-h-[140px]"
            >
              <img 
                src={brand.logo} 
                alt={brand.alt}
                className="w-full h-auto max-h-20 object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<span class="text-2xl font-bold text-gray-800">${brand.name}</span>`;
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-ngiri-silver text-lg mb-6">
            Join hundreds of businesses powering their teams with NGIRI V16
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-ngiri-lime text-ngiri-dark font-bold rounded-full hover:bg-ngiri-lime-light transition-all duration-300 shadow-lg hover:shadow-ngiri-lime/50"
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandsSection

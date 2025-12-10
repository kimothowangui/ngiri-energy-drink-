import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Droplet, Award, Users } from 'lucide-react';

const FeatureSections = () => {
  const features = [
    {
      id: 1,
      number: "01",
      title: "THE DRINK",
      subtitle: "V16 DOUBLE TURBO POWER",
      description: "Experience 300mg of premium caffeine engineered for peak performance. Zero sugar, zero compromise. Fuel your ambition with the most powerful energy drink on the market.",
      icon: Zap,
      link: "/the-drink",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      number: "02",
      title: "EXPERIENCE",
      subtitle: "FEEL THE DIFFERENCE",
      description: "Join thousands who've discovered sustainable energy without the crash. 5+ hours of enhanced focus and mental clarity. This isn't just energy - it's performance redefined.",
      icon: Droplet,
      link: "/experience",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      number: "03",
      title: "QUALITY",
      subtitle: "PREMIUM INGREDIENTS",
      description: "B-Vitamins, performance stack, and natural flavors. No artificial colors. Every can is crafted with precision for maximum effectiveness and incredible taste.",
      icon: Award,
      link: "/the-drink",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      number: "04",
      title: "COMMUNITY",
      subtitle: "JOIN THE MOVEMENT",
      description: "From gamers to athletes, entrepreneurs to adventurers - Ngiri V16 powers those who refuse to settle. Be part of a community that demands more.",
      icon: Users,
      link: "/products",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-[1800px] mx-auto px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-black text-white mb-4">
            WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">NGIRI V16</span>
          </h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto">
            Engineered for those who demand excellence. Every aspect designed for maximum performance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-zinc-900 rounded-2xl p-8 h-full border border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Number */}
                <div className="relative">
                  <span className="text-8xl font-black text-white/5 absolute -top-6 -left-2">
                    {feature.number}
                  </span>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 relative z-10">
                    <div>
                      <h4 className="text-sm font-semibold text-white/50 tracking-wider uppercase mb-1">
                        {feature.title}
                      </h4>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {feature.subtitle}
                      </h3>
                    </div>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Read More Button */}
                    <Link
                      to={feature.link}
                      className={`inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient} hover:gap-4 transition-all duration-300 group/btn`}
                    >
                      READ MORE
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-12 text-lg uppercase tracking-wider transition-all transform hover:scale-105 shadow-2xl shadow-cyan-500/30 rounded-lg"
          >
            EXPLORE ALL FLAVORS
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSections;

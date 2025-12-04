import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, MapPin, Globe } from 'lucide-react';

const OfferSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-[1800px] mx-auto px-16 relative z-10">
        {/* Main Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Offer - V16 Stocked in Stores */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="relative h-[600px] overflow-hidden">
              {/* Background Image */}
              <img 
                src="/img/reference/offer image_files/490794666_558180030657045_8642956246797621346_n.jpg"
                alt="V16 Stocked in Stores" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-cyan-400" size={32} />
                  <span className="text-cyan-400 font-bold text-lg uppercase tracking-wider">
                    Now Available
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  V16 IS STOCKED<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    IN STORES
                  </span>
                </h2>
                
                <p className="text-white/80 text-lg mb-6 max-w-md">
                  Find NGIRI V16 at your nearest store. Premium energy drinks now available nationwide.
                </p>
                
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-2xl shadow-cyan-500/30 w-fit"
                >
                  <ShoppingBag size={20} />
                  FIND A STORE
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Offer - V16 To The World */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="relative h-[600px] overflow-hidden">
              {/* Background Image */}
              <img 
                src="/img/reference/offer image_files/491442337_534745619428677_197687596041259059_n.jpg"
                alt="V16 To The World" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-lime-400" size={32} />
                  <span className="text-lime-400 font-bold text-lg uppercase tracking-wider">
                    Global Launch
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  V16 TO THE<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
                    WORLD 🌍
                  </span>
                </h2>
                
                <p className="text-white/80 text-lg mb-6 max-w-md">
                  Join the global energy revolution. NGIRI V16 is taking the world by storm.
                </p>
                
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-400 hover:to-green-500 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-2xl shadow-lime-500/30 w-fit"
                >
                  <Globe size={20} />
                  EXPLORE EXPERIENCE
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-3xl p-12 border border-cyan-500/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                LIMITED TIME OFFER
              </h3>
              <p className="text-white/70 text-lg">
                Get 20% off your first order of NGIRI V16. Use code: <span className="text-cyan-400 font-bold">FIRSTV16</span>
              </p>
            </div>
            <Link
              to="/shop"
              className="bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-cyan-400 hover:text-white transition-all transform hover:scale-105 shadow-2xl whitespace-nowrap"
            >
              SHOP NOW
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;

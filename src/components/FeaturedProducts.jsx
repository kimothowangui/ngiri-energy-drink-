import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "NGIRI V16 COSMIC ENERGY",
      flavor: "Citrus Burst",
      price: "KSh 350",
      image: "/img/v1.jpg",
      rating: 5,
      description: "Experience pure energy from beyond the stars",
      badge: "BEST SELLER"
    },
    {
      id: 2,
      name: "NGIRI V16 BAR CULTURE",
      flavor: "Premium Blend",
      price: "KSh 350",
      image: "/img/v2.jpg",
      rating: 5,
      description: "Crafted for the sophisticated",
      badge: "NEW"
    },
    {
      id: 3,
      name: "NGIRI V16 GOLDEN HOUR",
      flavor: "Golden Citrus",
      price: "KSh 350",
      image: "/img/v3.jpg",
      rating: 5,
      description: "Energy that shines bright",
      badge: "POPULAR"
    },
    {
      id: 4,
      name: "NGIRI V16 TROPICAL VIBE",
      flavor: "Tropical Fusion",
      price: "KSh 350",
      image: "/img/v16-attached.jpg",
      rating: 5,
      description: "African heritage, global energy",
      badge: "LIMITED"
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
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-white mb-4">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PRODUCTS</span>
          </h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto">
            Discover our most popular energy drinks, crafted for maximum performance
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>

                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick View Button */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Link 
                      to={`/product/${product.id}`}
                      className="bg-white text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-cyan-500 hover:text-white transition-colors"
                    >
                      <ShoppingCart size={18} />
                      Quick View
                    </Link>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Flavor */}
                  <p className="text-cyan-400 text-sm font-medium mb-2">
                    {product.flavor}
                  </p>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price and Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">
                      KSh {product.price}
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center gap-1 group/link"
                    >
                      View Details
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" 
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/shop"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-12 text-lg uppercase tracking-wider transition-all transform hover:scale-105 shadow-2xl shadow-cyan-500/30 rounded-full"
          >
            VIEW ALL PRODUCTS
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

import { motion } from 'framer-motion'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Star, Heart, Share2, Package, Truck, Shield, ArrowLeft, Plus, Minus, Check } from 'lucide-react'
import { useState } from 'react'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)

  // All products data
  const allProducts = [
    {
      id: 1,
      name: "NGIRI V16 COSMIC ENERGY",
      flavor: "Citrus Burst",
      price: 350,
      image: "/img/v1.jpg",
      images: ["/img/v1.jpg", "/img/v7.PNG", "/img/v8.PNG"],
      rating: 5,
      reviews: 124,
      description: "Experience pure energy from beyond the stars with our signature Cosmic Energy blend. Crafted with precision and powered by our revolutionary V16 formula.",
      longDescription: "NGIRI V16 COSMIC ENERGY is more than just an energy drink—it's a gateway to limitless potential. Our proprietary blend combines cutting-edge energy science with exotic flavors to deliver sustained power throughout your day. Each can is packed with essential vitamins, natural caffeine sources, and a unique flavor profile that sets it apart from ordinary energy drinks.",
      badge: "BEST SELLER",
      features: [
        "200mg Natural Caffeine",
        "Zero Sugar Formula",
        "Enhanced with B-Vitamins",
        "Electrolyte Blend",
        "No Artificial Colors",
        "Sustainably Sourced Ingredients"
      ],
      benefits: [
        "Sustained Energy for 6+ Hours",
        "Improved Focus & Concentration",
        "Zero Crash Formula",
        "Hydration Support",
        "Metabolism Boost"
      ],
      nutritionFacts: {
        servingSize: "16 fl oz (473ml)",
        calories: 10,
        totalFat: "0g",
        sodium: "180mg",
        totalCarbs: "3g",
        sugars: "0g",
        protein: "0g",
        caffeine: "200mg"
      }
    },
    {
      id: 2,
      name: "NGIRI V16 BAR CULTURE",
      flavor: "Premium Blend",
      price: 350,
      image: "/img/v2.jpg",
      images: ["/img/v2.jpg", "/img/v9.PNG", "/img/v10.PNG"],
      rating: 5,
      reviews: 98,
      description: "Crafted for the sophisticated. A premium blend designed for those who appreciate refined taste with powerful results.",
      longDescription: "BAR CULTURE represents the pinnacle of energy drink sophistication. Designed for the discerning individual who demands excellence in both taste and performance. This premium blend features a complex flavor profile that evolves with each sip, delivering smooth energy without the jitters.",
      badge: "NEW",
      features: [
        "220mg Premium Caffeine",
        "Adaptive Energy Release",
        "Nootropic Blend",
        "B-Complex Vitamins",
        "Electrolyte Matrix",
        "Natural Flavor Extracts"
      ],
      benefits: [
        "Enhanced Mental Clarity",
        "Smooth Energy Delivery",
        "Premium Taste Experience",
        "Social Energy Boost",
        "Sophisticated Formula"
      ],
      nutritionFacts: {
        servingSize: "16 fl oz (473ml)",
        calories: 15,
        totalFat: "0g",
        sodium: "170mg",
        totalCarbs: "4g",
        sugars: "0g",
        protein: "0g",
        caffeine: "220mg"
      }
    },
    {
      id: 3,
      name: "NGIRI V16 GOLDEN HOUR",
      flavor: "Golden Citrus",
      price: 350,
      image: "/img/v3.jpg",
      images: ["/img/v3.jpg", "/img/v7.PNG", "/img/v8.PNG"],
      rating: 5,
      reviews: 156,
      description: "Energy that shines bright. Perfect for any time of day when you need that golden boost.",
      longDescription: "GOLDEN HOUR captures the essence of peak performance in a can. Like the perfect golden hour lighting, this blend illuminates your potential with a smooth, sustained energy release. The golden citrus flavor profile is both refreshing and invigorating.",
      badge: "POPULAR",
      features: [
        "180mg Balanced Caffeine",
        "Vitamin C & D Enriched",
        "Natural Energy Blend",
        "Antioxidant Support",
        "Citrus Bioflavonoids",
        "Clean Energy Formula"
      ],
      benefits: [
        "All-Day Energy",
        "Immune System Support",
        "Refreshing Hydration",
        "Mood Enhancement",
        "Natural Vitality"
      ],
      nutritionFacts: {
        servingSize: "16 fl oz (473ml)",
        calories: 12,
        totalFat: "0g",
        sodium: "160mg",
        totalCarbs: "3g",
        sugars: "0g",
        protein: "0g",
        caffeine: "180mg"
      }
    },
    {
      id: 4,
      name: "NGIRI V16 TROPICAL VIBE",
      flavor: "Tropical Fusion",
      price: 350,
      image: "/img/v16-attached.jpg",
      images: ["/img/v16-attached.jpg", "/img/v9.PNG", "/img/v10.PNG"],
      rating: 5,
      reviews: 187,
      description: "African heritage, global energy. A tropical fusion that connects continents with pure power.",
      longDescription: "TROPICAL VIBE is our tribute to Africa's vibrant energy and spirit. This exotic blend combines traditional tropical flavors with modern energy science, creating a unique experience that transports you to paradise while keeping you grounded in performance.",
      badge: "LIMITED",
      features: [
        "200mg Premium Caffeine",
        "Tropical Superfruit Blend",
        "Coconut Water Extract",
        "B-Vitamin Complex",
        "Natural Electrolytes",
        "Exotic Fruit Extracts"
      ],
      benefits: [
        "Exotic Energy Experience",
        "Natural Hydration",
        "Tropical Refreshment",
        "Cultural Connection",
        "Sustained Performance"
      ],
      nutritionFacts: {
        servingSize: "16 fl oz (473ml)",
        calories: 14,
        totalFat: "0g",
        sodium: "175mg",
        totalCarbs: "4g",
        sugars: "0g",
        protein: "0g",
        caffeine: "200mg"
      }
    }
  ]

  const product = allProducts.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Product Not Found</h2>
          <Link to="/products" className="text-cyan-400 hover:text-cyan-300">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 3)

  return (
    <div className="relative min-h-screen pt-20">
      {/* Global Background Image - Full Page */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/img/v16-attached.jpg" 
          alt="Ngiri Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Global Electric Blue & Green Gradient Overlay - Full Page */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-800/70 to-lime-900/80 z-0"></div>
      
      {/* Animated Glowing Orbs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ngiri-lime/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-lime-400/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Back Button */}
        <div className="max-w-[1800px] mx-auto px-16 py-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/60 hover:text-ngiri-lime transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </motion.button>
        </div>

        {/* Product Detail Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column - Images */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Main Image */}
                <div className="relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 aspect-square">
                  {product.badge && (
                    <div className="absolute top-6 right-6 z-10">
                      <span className="bg-gradient-to-r from-ngiri-lime to-ngiri-lime-dark text-black text-sm font-bold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(164,214,94,0.6)]">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((img, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-ngiri-lime shadow-[0_0_20px_rgba(164,214,94,0.8)]' 
                          : 'border-cyan-500/50 hover:border-ngiri-lime hover:shadow-[0_0_10px_rgba(164,214,94,0.4)]'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-cyan-500/50 hover:border-ngiri-lime rounded-xl p-4 text-center transition-all hover:shadow-[0_0_15px_rgba(164,214,94,0.4)]">
                    <Package className="w-8 h-8 text-ngiri-lime mx-auto mb-2 drop-shadow-[0_0_10px_rgba(164,214,94,0.8)]" />
                    <p className="text-white text-sm font-semibold">Premium Quality</p>
                  </div>
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-cyan-500/50 hover:border-ngiri-lime rounded-xl p-4 text-center transition-all hover:shadow-[0_0_15px_rgba(164,214,94,0.4)]">
                    <Truck className="w-8 h-8 text-ngiri-lime mx-auto mb-2 drop-shadow-[0_0_10px_rgba(164,214,94,0.8)]" />
                    <p className="text-white text-sm font-semibold">Fast Delivery</p>
                  </div>
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-cyan-500/50 hover:border-ngiri-lime rounded-xl p-4 text-center transition-all hover:shadow-[0_0_15px_rgba(164,214,94,0.4)]">
                    <Shield className="w-8 h-8 text-ngiri-lime mx-auto mb-2 drop-shadow-[0_0_10px_rgba(164,214,94,0.8)]" />
                    <p className="text-white text-sm font-semibold">100% Authentic</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Product Header */}
                <div>
                  <h1 className="text-5xl font-bold text-white mb-4 leading-tight drop-shadow-[0_0_20px_rgba(164,214,94,0.6)]">
                    {product.name}
                  </h1>
                  <p className="text-ngiri-lime text-xl font-semibold mb-4 drop-shadow-[0_0_10px_rgba(164,214,94,0.8)]">
                    {product.flavor}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-orange-400 text-orange-400 drop-shadow-[0_0_5px_rgba(251,146,60,0.8)]" />
                      ))}
                    </div>
                    <span className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
                      {product.rating}.0 ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ngiri-lime to-cyan-400 drop-shadow-[0_0_20px_rgba(164,214,94,0.8)]">
                      KSh {product.price}
                    </span>
                    <span className="text-cyan-400/80 text-lg">per can</span>
                  </div>

                  {/* Description */}
                  <p className="text-cyan-300/90 text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <p className="text-blue-300/70 leading-relaxed">
                    {product.longDescription}
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-cyan-500/50 hover:border-ngiri-lime rounded-2xl p-6 transition-all hover:shadow-[0_0_20px_rgba(164,214,94,0.4)]">
                  <label className="text-ngiri-lime font-semibold mb-3 block drop-shadow-[0_0_10px_rgba(164,214,94,0.6)]">Quantity</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 bg-zinc-900 rounded-xl border-2 border-cyan-500/50 p-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center text-white hover:text-ngiri-lime transition-colors"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="text-white text-xl font-bold w-12 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-white hover:text-ngiri-lime transition-colors"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <div className="text-cyan-400">
                      Total: <span className="text-transparent bg-clip-text bg-gradient-to-r from-ngiri-lime to-cyan-400 text-2xl font-bold ml-2 drop-shadow-[0_0_10px_rgba(164,214,94,0.6)]">
                        KSh {(product.price * quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className={`flex-1 ${
                      addedToCart 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-gradient-to-r from-ngiri-lime via-lime-400 to-cyan-400 hover:from-cyan-400 hover:via-ngiri-lime hover:to-orange-400'
                    } text-black font-bold py-5 px-8 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(164,214,94,0.8)] animate-pulse`}
                  >
                    {addedToCart ? (
                      <>
                        <Check size={24} />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={24} />
                        Add to Cart
                      </>
                    )}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-br from-zinc-900 to-black text-cyan-400 hover:text-ngiri-lime p-5 rounded-xl border-2 border-cyan-500/50 hover:border-ngiri-lime hover:shadow-[0_0_20px_rgba(164,214,94,0.6)] transition-all"
                  >
                    <Heart size={24} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-br from-zinc-900 to-black text-cyan-400 hover:text-ngiri-lime p-5 rounded-xl border-2 border-cyan-500/50 hover:border-ngiri-lime hover:shadow-[0_0_20px_rgba(164,214,94,0.6)] transition-all"
                  >
                    <Share2 size={24} />
                  </motion.button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-gradient-to-br from-ngiri-lime/10 to-ngiri-lime-dark/10 border border-ngiri-lime/30 rounded-xl p-4">
                    <p className="text-ngiri-lime font-semibold mb-1">✓ Free Shipping</p>
                    <p className="text-white/60 text-sm">On orders over KSh 1,000</p>
                  </div>
                  <div className="bg-gradient-to-br from-ngiri-lime/10 to-ngiri-lime-dark/10 border border-ngiri-lime/30 rounded-xl p-4">
                    <p className="text-ngiri-lime font-semibold mb-1">✓ Money Back</p>
                    <p className="text-white/60 text-sm">30-day guarantee</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Tabs Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24"
            >
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-gradient-to-b from-ngiri-lime to-ngiri-lime-dark rounded-full"></span>
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-white/80">
                          <Check size={20} className="text-ngiri-lime mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-gradient-to-b from-ngiri-lime to-ngiri-lime-dark rounded-full"></span>
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-white/80">
                          <Check size={20} className="text-ngiri-lime mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nutrition Facts */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-gradient-to-b from-ngiri-lime to-ngiri-lime-dark rounded-full"></span>
                      Nutrition Facts
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-white/60 mb-3">
                        Serving Size: {product.nutritionFacts.servingSize}
                      </p>
                      <div className="flex justify-between py-2 border-b border-zinc-800">
                        <span className="text-white/80">Calories</span>
                        <span className="text-white font-semibold">{product.nutritionFacts.calories}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-zinc-800">
                        <span className="text-white/80">Total Fat</span>
                        <span className="text-white font-semibold">{product.nutritionFacts.totalFat}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-zinc-800">
                        <span className="text-white/80">Sodium</span>
                        <span className="text-white font-semibold">{product.nutritionFacts.sodium}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-zinc-800">
                        <span className="text-white/80">Total Carbs</span>
                        <span className="text-white font-semibold">{product.nutritionFacts.totalCarbs}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-zinc-800">
                        <span className="text-white/80">Sugars</span>
                        <span className="text-white font-semibold">{product.nutritionFacts.sugars}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-zinc-800">
                        <span className="text-white/80">Protein</span>
                        <span className="text-white font-semibold">{product.nutritionFacts.protein}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-zinc-800">
                        <span className="text-white/80 font-bold">Caffeine</span>
                        <span className="text-ngiri-lime font-bold">{product.nutritionFacts.caffeine}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Products */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 drop-shadow-[0_0_30px_rgba(164,214,94,0.5)]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-ngiri-lime to-orange-400">YOU MAY ALSO LIKE</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/product/${relatedProduct.id}`}>
                      <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border-2 border-cyan-500/50 hover:border-ngiri-lime transition-all duration-300 hover:shadow-[0_0_30px_rgba(164,214,94,0.6)]">
                        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                          <img 
                            src={relatedProduct.image} 
                            alt={relatedProduct.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(relatedProduct.rating)].map((_, i) => (
                              <Star key={i} size={14} className="fill-orange-400 text-orange-400 drop-shadow-[0_0_5px_rgba(251,146,60,0.8)]" />
                            ))}
                          </div>
                          
                          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-ngiri-lime transition-colors drop-shadow-[0_0_10px_rgba(164,214,94,0.3)]">
                            {relatedProduct.name}
                          </h3>
                          
                          <p className="text-cyan-400 text-sm font-medium mb-3 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
                            {relatedProduct.flavor}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ngiri-lime to-cyan-400 drop-shadow-[0_0_10px_rgba(164,214,94,0.6)]">
                              KSh {relatedProduct.price}
                            </span>
                            <span className="text-ngiri-lime hover:text-cyan-400 font-semibold text-sm drop-shadow-[0_0_10px_rgba(164,214,94,0.6)]">
                              View Details →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail

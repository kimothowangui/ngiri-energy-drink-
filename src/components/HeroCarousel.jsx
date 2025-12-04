import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      name: "COSMIC ENERGY",
      tagline: "UNLEASH THE POWER OF THE COSMOS",
      description: "Experience pure energy from beyond the stars. With 300mg of premium caffeine and zero sugar, NGIRI V16 delivers cosmic power with citrus burst and natural flavors.",
      color: "from-blue-900 via-cyan-800 to-blue-950",
      textColor: "text-cyan-300",
      accentColor: "bg-cyan-500 hover:bg-cyan-400",
      image: "/img/Gemini_Generated_Image_4d4h9w4d4h9w4d4h.png",
      ingredients: ["Citrus Explosion", "300mg Caffeine", "Zero Sugar", "Natural Flavor"]
    },
    {
      id: 2,
      name: "BAR CULTURE",
      tagline: "PREMIUM MIXOLOGY MEETS V16 POWER",
      description: "Crafted for the sophisticated. NGIRI V16 elevates your experience with smooth energy that complements your lifestyle, whether at the bar or on the move.",
      color: "from-amber-900 via-orange-800 to-brown-900",
      textColor: "text-amber-300",
      accentColor: "bg-amber-500 hover:bg-amber-400",
      image: "/img/Gemini_Generated_Image_7zkxq97zkxq97zkx.png",
      ingredients: ["Premium Blend", "300mg Caffeine", "Zero Sugar", "Mixology Ready"]
    },
    {
      id: 3,
      name: "GOLDEN HOUR",
      tagline: "ENERGY THAT SHINES BRIGHT",
      description: "Feel the warmth of pure energy. Inspired by golden moments, NGIRI V16 brings you explosive flavor with citrus notes and zero compromise on performance.",
      color: "from-orange-900 via-amber-700 to-yellow-900",
      textColor: "text-orange-300",
      accentColor: "bg-orange-500 hover:bg-orange-400",
      image: "/img/Gemini_Generated_Image_8l21un8l21un8l21.png",
      ingredients: ["Golden Citrus", "300mg Caffeine", "Zero Sugar", "Natural Glow"]
    },
    {
      id: 4,
      name: "TROPICAL VIBE",
      tagline: "AFRICAN HERITAGE, GLOBAL ENERGY",
      description: "Rooted in culture, powered by innovation. NGIRI V16 brings tropical energy with vibrant flavors that honor tradition while fueling your future.",
      color: "from-green-900 via-lime-800 to-yellow-900",
      textColor: "text-lime-300",
      accentColor: "bg-lime-500 hover:bg-lime-400",
      image: "/img/Gemini_Generated_Image_sqhjbesqhjbesqhj.png",
      ingredients: ["Tropical Fusion", "300mg Caffeine", "Zero Sugar", "Cultural Pride"]
    }
  ];

  // Auto-slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ width: '100vw', height: 'calc(100vh - 120px)', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      {/* Background Image with Opacity - Static across all slides */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/v16-attached.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color}`}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Gradient overlay to blend with background image */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content Container */}
          <div className="relative z-10 h-full w-full flex items-center justify-between px-4 md:px-8 lg:px-16">
            
            {/* Left Content */}
            <div className="relative z-20 w-1/3 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-[0.3em] text-white/70 uppercase">
                  {slides[currentSlide].tagline}
                </h3>
                <div className="flex items-center gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="text-white/50 text-xl">›</div>
                  ))}
                </div>
              </div>

              <button className={`${slides[currentSlide].accentColor} text-white font-bold py-4 px-10 rounded-full uppercase tracking-wider transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3`}>
                Order Today
                <ArrowRight size={20} />
              </button>

              {/* Flavor Navigation */}
              <div className="space-y-3 pt-8">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`block text-left text-sm uppercase tracking-wider transition-all ${
                      index === currentSlide 
                        ? `${slides[currentSlide].textColor} font-bold text-lg` 
                        : 'text-white/50 hover:text-white/80'
                    }`}
                  >
                    {slide.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Center - Full Scene Image (Gemini images have backgrounds) */}
            <div className="absolute inset-0 flex justify-center items-center z-0">
              {/* Container for image with smooth edge blending */}
              <div className="relative max-w-[70%] max-h-[90%] flex items-center justify-center">
                {/* Gemini Image - Full blended scene */}
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].name}
                  className="max-w-full max-h-full object-contain"
                  style={{ 
                    mixBlendMode: 'normal',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)'
                  }}
                />
                
                {/* Soft color overlay to blend with background */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, transparent 30%, ${slides[currentSlide].color.includes('blue') ? 'rgba(30, 58, 138, 0.4)' : slides[currentSlide].color.includes('amber') ? 'rgba(120, 53, 15, 0.4)' : slides[currentSlide].color.includes('orange') ? 'rgba(154, 52, 18, 0.4)' : 'rgba(20, 83, 45, 0.4)'} 100%)`,
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
              
              {/* Vignette effect for overall depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />
              
              {/* Edge fade to blend with background */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse 80% 70% at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
              }} />
            </div>

            {/* Right Content */}
            <div className="relative z-20 w-1/3 space-y-6 text-right">
              <h2 className="text-6xl font-black text-white leading-tight">
                {slides[currentSlide].name.split(' ')[0]}
                <br />
                <span className={slides[currentSlide].textColor}>
                  {slides[currentSlide].name.split(' ')[1]}
                </span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-md ml-auto">
                {slides[currentSlide].description}
              </p>

              {/* Ingredients */}
              <div className="space-y-2">
                {slides[currentSlide].ingredients.map((ingredient, index) => (
                  <div key={index} className="text-white/60 text-sm tracking-wide">
                    • {ingredient}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clickable Areas - Left and Right sides */}
          <div
            onClick={prevSlide}
            className="absolute left-0 top-0 h-full w-1/3 z-30 cursor-pointer"
            aria-label="Previous slide"
          />
          
          <div
            onClick={nextSlide}
            className="absolute right-0 top-0 h-full w-1/3 z-30 cursor-pointer"
            aria-label="Next slide"
          />

          {/* Pagination Dots */}
          <div className="absolute bottom-10 right-16 z-20 flex gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? `${slides[currentSlide].accentColor} w-8` 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;

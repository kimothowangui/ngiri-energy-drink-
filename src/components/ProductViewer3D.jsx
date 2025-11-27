import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { RotateCw, ZoomIn, ZoomOut } from 'lucide-react'

const ProductViewer3D = () => {
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const containerRef = useRef(null)

  // Array of product images for 360 view simulation
  const images = [
    '/img/v1.jpg',
    '/img/v2.jpg',
    '/img/v3.jpg',
    '/img/v7.PNG',
    '/img/v8.PNG',
    '/img/v9.PNG',
    '/img/v10.PNG',
  ]

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const diff = e.clientX - startX
    setRotation((prev) => prev + diff * 0.5)
    setStartX(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const diff = e.touches[0].clientX - startX
    setRotation((prev) => prev + diff * 0.5)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const autoRotate = () => {
    setRotation((prev) => prev + 45)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5))
  }

  // Calculate which image to show based on rotation
  const imageIndex = Math.floor(((rotation % 360) + 360) / 51.43) % images.length

  return (
    <div className="relative bg-gradient-to-br from-ngiri-midnight to-ngiri-dark rounded-xl p-8 border-2 border-ngiri-crimson/30">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bebas text-ngiri-crimson glow-red mb-2">
          360° PRODUCT VIEW
        </h3>
        <p className="text-ngiri-silver font-montserrat text-sm">
          Drag to rotate • Scroll to zoom
        </p>
      </div>

      {/* 3D Viewer Container */}
      <div
        ref={containerRef}
        className="relative aspect-square max-w-2xl mx-auto cursor-grab active:cursor-grabbing overflow-hidden rounded-lg"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={(e) => {
          e.preventDefault()
          if (e.deltaY < 0) {
            handleZoomIn()
          } else {
            handleZoomOut()
          }
        }}
      >
        <motion.div
          animate={{ scale: zoom }}
          transition={{ duration: 0.2 }}
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src={images[imageIndex]}
            alt={`Ngiri Energy Drink - View ${imageIndex + 1}`}
            className="max-w-full max-h-full object-contain pointer-events-none select-none"
            draggable="false"
          />
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-ngiri-crimson/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleZoomOut}
          className="p-3 bg-ngiri-dark border-2 border-ngiri-crimson/50 rounded-lg text-ngiri-crimson hover:bg-ngiri-crimson hover:text-white transition-colors"
          title="Zoom Out"
        >
          <ZoomOut size={24} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={autoRotate}
          className="p-3 bg-ngiri-crimson border-2 border-ngiri-crimson rounded-lg text-white hover:bg-ngiri-crimson/80 transition-colors"
          title="Auto Rotate"
        >
          <RotateCw size={24} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleZoomIn}
          className="p-3 bg-ngiri-dark border-2 border-ngiri-crimson/50 rounded-lg text-ngiri-crimson hover:bg-ngiri-crimson hover:text-white transition-colors"
          title="Zoom In"
        >
          <ZoomIn size={24} />
        </motion.button>
      </div>

      {/* Rotation Indicator */}
      <div className="text-center mt-4">
        <span className="text-ngiri-silver font-montserrat text-sm">
          Rotation: {Math.round(rotation % 360)}° | Zoom: {Math.round(zoom * 100)}%
        </span>
      </div>
    </div>
  )
}

export default ProductViewer3D

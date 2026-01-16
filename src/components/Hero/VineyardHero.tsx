'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Wine, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function VineyardHero() {
  const [currentImage, setCurrentImage] = useState(0)

  const vineyardImages = [
    {
      url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920',
      title: 'Tuscany Vineyards',
      description: 'Our inspiration from the rolling hills of Italy'
    },
    {
      url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1920',
      title: 'Wine Cellar',
      description: 'Aging to perfection in our temperature-controlled cellars'
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920',
      title: 'Seasonal Cuisine',
      description: 'Farm-to-table dishes inspired by our vineyards'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % vineyardImages.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [vineyardImages.length])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {vineyardImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImage === index ? 1 : 0,
              scale: currentImage === index ? 1 : 1.1
            }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={image.url}
              alt={image.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 vineyard-overlay" />
          </motion.div>
        ))}
      </div>

      {/* Animated Grapevines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            🍇
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="luxe-container">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 glass-morphism rounded-full mb-6">
                <Wine className="w-5 h-5 text-accent-secondary" />
                <span className="text-sm uppercase tracking-widest font-medium">
                  Est. 2008
                </span>
              </div>

              <h1 className="vineyard-heading text-white mb-6">
                <span className="block">Experience the</span>
                <span className="block text-gradient-terracotta">Vineyard in NYC</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                Where the soul of Italian vineyards meets the energy of New York City. 
                Award-winning wines, seasonal cuisine, and an ambiance that transports 
                you to the rolling hills of Tuscany.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {[
                { label: 'Wine Varietals', value: '200+' },
                { label: 'Vineyard Partners', value: '12' },
                { label: 'Awards', value: '45' },
                { label: 'Vintages', value: '15' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-vineyard flex items-center justify-center gap-3 group">
                Reserve Table
                <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline-vineyard flex items-center justify-center gap-3 group">
                View Wine List
                <Wine className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Location & Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 p-6 glass-morphism rounded-lg max-w-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-accent-secondary" />
                <div>
                  <div className="font-medium text-white">123 Vine Street</div>
                  <div className="text-sm text-white/70">New York, NY 10001</div>
                </div>
              </div>
              <div className="text-sm text-white/70">
                Open daily: 5PM - 11PM | Weekend Brunch: 11AM - 3PM
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {vineyardImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className="relative"
              aria-label={`View ${vineyardImages[index].title}`}
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImage === index 
                  ? 'bg-accent-secondary w-4' 
                  : 'bg-white/40 hover:bg-white/60'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="text-white/70 flex flex-col items-center gap-2">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Vineyard Quote */}
      <div className="absolute top-1/4 right-8 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="p-6 glass-morphism rounded-lg max-w-xs"
        >
          <div className="text-accent-secondary text-6xl mb-2">"</div>
          <p className="text-white/90 italic mb-3">
            Wine is sunlight, held together by water.
          </p>
          <div className="text-sm text-white/70">- Galileo Galilei</div>
        </motion.div>
      </div>
    </section>
  )
}
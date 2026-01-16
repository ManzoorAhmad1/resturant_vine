'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wine, Filter, Award, Star, MapPin, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const wineRegions = [
  { id: 'all', name: 'All Regions' },
  { id: 'tuscany', name: 'Tuscany' },
  { id: 'piedmont', name: 'Piedmont' },
  { id: 'veneto', name: 'Veneto' },
  { id: 'sicily', name: 'Sicily' },
  { id: 'france', name: 'France' },
  { id: 'spain', name: 'Spain' },
]

const wineTypes = [
  { id: 'all', name: 'All Types' },
  { id: 'red', name: 'Red' },
  { id: 'white', name: 'White' },
  { id: 'rose', name: 'Rosé' },
  { id: 'sparkling', name: 'Sparkling' },
  { id: 'dessert', name: 'Dessert' },
]

const wineList = [
  {
    id: 1,
    name: 'Brunello di Montalcino',
    type: 'red',
    region: 'tuscany',
    year: 2015,
    price: 185,
    description: 'Elegant and full-bodied with notes of cherry, leather, and tobacco',
    rating: 4.8,
    awards: ['95 Points - Wine Spectator', 'Gold Medal - Decanter'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400',
    pairings: ['Bistecca alla Fiorentina', 'Wild Boar Ragu', 'Aged Pecorino']
  },
  {
    id: 2,
    name: 'Barolo',
    type: 'red',
    region: 'piedmont',
    year: 2016,
    price: 165,
    description: 'Powerful Nebbiolo with rose, tar, and red fruit aromas',
    rating: 4.9,
    awards: ['97 Points - Robert Parker', 'Best of Show - Vinitaly'],
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=400',
    pairings: ['Truffle Risotto', 'Braised Beef', 'Mushroom Tart']
  },
  {
    id: 3,
    name: 'Amarone della Valpolicella',
    type: 'red',
    region: 'veneto',
    year: 2013,
    price: 195,
    description: 'Rich and velvety with dried fruit, chocolate, and spice notes',
    rating: 4.7,
    awards: ['94 Points - James Suckling'],
    image: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?auto=format&fit=crop&w=400',
    pairings: ['Game Meat', 'Aged Cheese', 'Dark Chocolate']
  },
  {
    id: 4,
    name: 'Vermentino',
    type: 'white',
    region: 'tuscany',
    year: 2021,
    price: 65,
    description: 'Crisp and mineral-driven with citrus and herbal notes',
    rating: 4.5,
    awards: ['Gold Medal - Berlin Wine Trophy'],
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=400',
    pairings: ['Seafood Pasta', 'Grilled Fish', 'Caprese Salad']
  },
  {
    id: 5,
    name: 'Prosecco Superiore',
    type: 'sparkling',
    region: 'veneto',
    year: 2022,
    price: 55,
    description: 'Fresh and lively with apple, pear, and floral aromas',
    rating: 4.6,
    awards: ['Best Buy - Wine Enthusiast'],
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=400',
    pairings: ['Aperitivo', 'Light Appetizers', 'Fruit Desserts']
  },
  {
    id: 6,
    name: 'Chianti Classico',
    type: 'red',
    region: 'tuscany',
    year: 2018,
    price: 75,
    description: 'Medium-bodied with bright acidity and cherry flavors',
    rating: 4.4,
    awards: ['90 Points - Wine Advocate'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400',
    pairings: ['Pasta Pomodoro', 'Grilled Vegetables', 'Pizza']
  },
  {
    id: 7,
    name: 'Moscato d\'Asti',
    type: 'dessert',
    region: 'piedmont',
    year: 2022,
    price: 45,
    description: 'Sweet and lightly sparkling with peach and orange blossom notes',
    rating: 4.3,
    awards: [],
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=400',
    pairings: ['Fruit Tarts', 'Foie Gras', 'Blue Cheese']
  },
  {
    id: 8,
    name: 'Pinot Grigio',
    type: 'white',
    region: 'veneto',
    year: 2022,
    price: 58,
    description: 'Crisp and refreshing with green apple and citrus flavors',
    rating: 4.2,
    awards: [],
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=400',
    pairings: ['Shellfish', 'Light Pasta', 'Summer Salads']
  },
]

export default function WinePage() {
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 250])

  const filteredWines = wineList.filter(wine => {
    const regionMatch = selectedRegion === 'all' || wine.region === selectedRegion
    const typeMatch = selectedType === 'all' || wine.type === selectedType
    const priceMatch = wine.price >= priceRange[0] && wine.price <= priceRange[1]
    return regionMatch && typeMatch && priceMatch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920"
          alt="Wine Cellar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 vineyard-overlay" />
        
        <div className="relative h-full flex items-center">
          <div className="luxe-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <Wine className="w-8 h-8 text-accent-secondary" />
                <span className="text-sm uppercase tracking-widest text-white">
                  Our Collection
                </span>
              </div>
              
              <h1 className="vineyard-heading text-white mb-6">
                <span className="block">Wine</span>
                <span className="block text-gradient-terracotta">Collection</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl">
                Curated selections from Italy's finest vineyards, each bottle tells a story 
                of terroir, tradition, and passion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-bg-secondary sticky top-24 z-30">
        <div className="luxe-container">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-accent-primary" />
              <span className="font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {wineRegions.map(region => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    selectedRegion === region.id
                      ? 'bg-accent-primary text-white'
                      : 'bg-card-bg text-text-primary hover:bg-bg-primary'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              {wineTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    selectedType === type.id
                      ? 'bg-accent-primary text-white'
                      : 'bg-card-bg text-text-primary hover:bg-bg-primary'
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
            
            {/* Price Range */}
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-secondary">Price: ${priceRange[0]} - ${priceRange[1]}</span>
                <input
                  type="range"
                  min="0"
                  max="250"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-32 lg:w-48"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Grid */}
      <section className="py-16">
        <div className="luxe-container">
          {filteredWines.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredWines.map((wine, index) => (
                <motion.div
                  key={wine.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="wine-card group"
                >
                  {/* Wine Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={wine.image}
                      alt={wine.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-card-bg/80 backdrop-blur-sm text-sm font-medium">
                        {wine.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-accent-primary text-white text-sm font-medium">
                        {wine.type.charAt(0).toUpperCase() + wine.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Wine Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-cormorant font-bold mb-1">{wine.name}</h3>
                        <div className="flex items-center gap-2 text-text-secondary text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{wineRegions.find(r => r.id === wine.region)?.name}</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-accent-primary">
                        ${wine.price}
                      </div>
                    </div>
                    
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {wine.description}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(wine.rating)
                                ? 'text-yellow-500 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-text-secondary">{wine.rating}/5</span>
                    </div>
                    
                    {/* Awards */}
                    {wine.awards.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-accent-secondary" />
                          <span className="text-sm font-medium">Awards</span>
                        </div>
                        <div className="space-y-1">
                          {wine.awards.slice(0, 2).map((award, idx) => (
                            <div key={idx} className="text-xs text-text-secondary">
                              • {award}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Pairings */}
                    <div className="pt-4 border-t border-border-color">
                      <h4 className="text-sm font-medium mb-2">Perfect with:</h4>
                      <div className="flex flex-wrap gap-2">
                        {wine.pairings.slice(0, 2).map((pairing, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full bg-bg-secondary text-xs text-text-secondary"
                          >
                            {pairing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Wine className="w-16 h-16 mx-auto mb-4 text-text-secondary" />
              <h3 className="text-2xl font-cormorant font-bold mb-2">No wines found</h3>
              <p className="text-text-secondary">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Wine Tasting Events */}
      <section className="py-16 bg-bg-secondary">
        <div className="luxe-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800"
                  alt="Wine Tasting"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-accent-secondary rounded-full overflow-hidden hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=400"
                  alt="Grapes"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="vineyard-heading mb-6">
                Wine Tasting Events
              </h2>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Masterclass Tastings',
                    description: 'Guided tastings with our head sommelier',
                    day: 'Every Thursday',
                    time: '7:00 PM'
                  },
                  {
                    title: 'Vintner Dinners',
                    description: 'Multi-course dinners with wine pairings',
                    day: 'Monthly',
                    time: 'By Reservation'
                  },
                  {
                    title: 'New Release Parties',
                    description: 'Be the first to taste new arrivals',
                    day: 'Seasonal',
                    time: 'Check Calendar'
                  },
                ].map((event, idx) => (
                  <div key={idx} className="p-4 bg-card-bg rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-cormorant font-bold text-lg">{event.title}</h4>
                      <div className="text-sm text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
                        {event.day}
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm mb-2">{event.description}</p>
                    <div className="text-sm text-text-secondary">{event.time}</div>
                  </div>
                ))}
              </div>
              
              <button className="btn-vineyard flex items-center gap-3 group">
                View Event Calendar
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wine Club CTA */}
      <section className="py-16">
        <div className="luxe-container">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-12 h-12 mx-auto mb-6 text-accent-secondary" />
            <h2 className="vineyard-heading mb-6">
              Join Our Wine Club
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Exclusive access to rare vintages, member-only events, and special pricing
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: 'Quarterly Shipments',
                  description: 'Curated selections delivered to your door'
                },
                {
                  title: 'Tasting Invitations',
                  description: 'Priority access to all wine events'
                },
                {
                  title: 'Cellar Pricing',
                  description: '20% off all bottles for members'
                },
              ].map((benefit, idx) => (
                <div key={idx} className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Wine className="w-8 h-8 text-accent-primary" />
                  </div>
                  <h4 className="font-cormorant font-bold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-text-secondary">{benefit.description}</p>
                </div>
              ))}
            </div>
            <button className="btn-vineyard">
              Become a Member
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
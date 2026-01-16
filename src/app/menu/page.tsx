'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Utensils, ChefHat, Star, Leaf, Flame, Clock } from 'lucide-react'
import Image from 'next/image'

const menuCategories = [
  { id: 'all', name: 'All' },
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'seafood', name: 'Seafood' },
  { id: 'desserts', name: 'Desserts' },
]

const menuItems = [
  {
    id: 1,
    name: 'Burrata & Heirloom Tomatoes',
    category: 'appetizers',
    description: 'Creamy burrata with seasonal heirloom tomatoes, basil oil, and sourdough',
    price: 22,
    isChefSpecial: true,
    isVegetarian: true,
    isSpicy: false,
    prepTime: 15,
    image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=400',
    winePairing: 'Vermentino 2021'
  },
  {
    id: 2,
    name: 'Truffle Arancini',
    category: 'appetizers',
    description: 'Crispy risotto balls with black truffle and fontina cheese',
    price: 18,
    isChefSpecial: false,
    isVegetarian: true,
    isSpicy: false,
    prepTime: 20,
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d9d6?auto=format&fit=crop&w=400',
    winePairing: 'Prosecco Superiore'
  },
  {
    id: 3,
    name: 'Cacio e Pepe',
    category: 'pasta',
    description: 'Traditional Roman pasta with pecorino romano and black pepper',
    price: 28,
    isChefSpecial: true,
    isVegetarian: true,
    isSpicy: true,
    prepTime: 25,
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&w=400',
    winePairing: 'Chianti Classico 2018'
  },
  {
    id: 4,
    name: 'Lobster Ravioli',
    category: 'pasta',
    description: 'Handmade ravioli with Maine lobster and saffron cream sauce',
    price: 42,
    isChefSpecial: false,
    isVegetarian: false,
    isSpicy: false,
    prepTime: 30,
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400',
    winePairing: 'Pinot Grigio 2022'
  },
  {
    id: 5,
    name: 'Bistecca alla Fiorentina',
    category: 'mains',
    description: '40oz T-bone steak, grilled over wood fire with rosemary',
    price: 95,
    isChefSpecial: true,
    isVegetarian: false,
    isSpicy: false,
    prepTime: 35,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400',
    winePairing: 'Brunello di Montalcino 2015'
  },
  {
    id: 6,
    name: 'Branzino al Cartoccio',
    category: 'seafood',
    description: 'Whole sea bass baked in parchment with citrus and herbs',
    price: 48,
    isChefSpecial: false,
    isVegetarian: false,
    isSpicy: false,
    prepTime: 30,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400',
    winePairing: 'Vermentino 2021'
  },
  {
    id: 7,
    name: 'Tiramisu',
    category: 'desserts',
    description: 'Traditional Italian dessert with mascarpone and espresso',
    price: 16,
    isChefSpecial: false,
    isVegetarian: true,
    isSpicy: false,
    prepTime: 15,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400',
    winePairing: 'Moscato d\'Asti 2022'
  },
  {
    id: 8,
    name: 'Panna Cotta',
    category: 'desserts',
    description: 'Vanilla bean panna cotta with seasonal berry compote',
    price: 14,
    isChefSpecial: true,
    isVegetarian: true,
    isSpicy: false,
    prepTime: 20,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400',
    winePairing: 'Vin Santo'
  },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeSection, setActiveSection] = useState('all')

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  const sections = [
    { id: 'lunch', title: 'Lunch Menu', time: '12PM - 3PM' },
    { id: 'dinner', title: 'Dinner Menu', time: '5PM - 11PM' },
    { id: 'brunch', title: 'Weekend Brunch', time: '11AM - 3PM' },
    { id: 'tasting', title: 'Tasting Menu', time: 'By Reservation' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1920"
          alt="Restaurant Food"
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
              className="max-w-3xl text-center mx-auto"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <Utensils className="w-8 h-8 text-accent-secondary" />
                <span className="text-sm uppercase tracking-widest text-white">
                  Seasonal Cuisine
                </span>
              </div>
              
              <h1 className="vineyard-heading text-white mb-6">
                <span className="block">Our</span>
                <span className="block text-gradient-terracotta">Menu</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Inspired by Italian vineyards, crafted with seasonal ingredients from local farms
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-8 bg-bg-secondary">
        <div className="luxe-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-6 rounded-lg text-center transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-accent-primary text-white'
                    : 'bg-card-bg text-text-primary hover:bg-bg-primary'
                }`}
              >
                <h3 className="font-cormorant font-bold text-lg mb-2">{section.title}</h3>
                <div className="text-sm opacity-80">{section.time}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Filters */}
      <section className="py-8 sticky top-24 z-30 bg-bg-primary border-b border-border-color">
        <div className="luxe-container">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <ChefHat className="w-5 h-5 text-accent-primary" />
              <span className="font-medium">Filter by Category:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {menuCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-accent-primary text-white'
                      : 'bg-bg-secondary text-text-primary hover:bg-bg-secondary/80'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="luxe-container">
          {filteredItems.length > 0 ? (
            <div className="space-y-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="menu-item group"
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Image */}
                    <div className="lg:w-1/4">
                      <div className="relative h-48 lg:h-40 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {item.isChefSpecial && (
                            <div className="px-3 py-1 rounded-full bg-accent-primary text-white text-xs font-medium flex items-center gap-1">
                              <Star className="w-3 h-3 fill-current" />
                              Chef's Special
                            </div>
                          )}
                          {item.isVegetarian && (
                            <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-600 text-xs font-medium flex items-center gap-1">
                              <Leaf className="w-3 h-3" />
                              Vegetarian
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="lg:w-3/4">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-cormorant font-bold mb-2">{item.name}</h3>
                          <p className="text-text-secondary mb-3">{item.description}</p>
                        </div>
                        <div className="text-2xl font-bold text-accent-primary">
                          ${item.price}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4">
                        {/* Prep Time */}
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <Clock className="w-4 h-4" />
                          <span>{item.prepTime} min</span>
                        </div>
                        
                        {/* Spicy */}
                        {item.isSpicy && (
                          <div className="flex items-center gap-2 text-sm text-text-secondary">
                            <Flame className="w-4 h-4 text-red-500" />
                            <span>Spicy</span>
                          </div>
                        )}
                        
                        {/* Wine Pairing */}
                        <div className="ml-auto">
                          <div className="text-sm text-text-secondary">
                            <span className="font-medium">Pairs with:</span> {item.winePairing}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Utensils className="w-16 h-16 mx-auto mb-4 text-text-secondary" />
              <h3 className="text-2xl font-cormorant font-bold mb-2">No items found</h3>
              <p className="text-text-secondary">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Chef's Special Section */}
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
                  src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800"
                  alt="Chef at Work"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vine-green/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-accent-secondary rounded-full overflow-hidden hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?auto=format&fit=crop&w=400"
                  alt="Fresh Ingredients"
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
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-px bg-accent-primary" />
                <span className="text-sm uppercase tracking-widest text-accent-primary">
                  From Our Chef
                </span>
              </div>
              
              <h2 className="vineyard-heading mb-6">
                Chef's Inspiration
              </h2>
              
              <div className="space-y-4 text-text-secondary mb-8">
                <p>
                  Our menu is a reflection of the seasons and the vineyards that inspire us. 
                  Each dish is crafted to complement our wine selection, creating a harmonious 
                  dining experience.
                </p>
                <p>
                  We work closely with local farmers and Italian importers to source the finest 
                  ingredients, ensuring every plate tells a story of quality and passion.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-cormorant font-bold text-lg">Seasonal Highlights:</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-primary" />
                    <span>White truffle menu (October - December)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-primary" />
                    <span>Spring vegetable risotto (March - May)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-primary" />
                    <span>Summer seafood festival (June - August)</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu PDF Download */}
      <section className="py-16">
        <div className="luxe-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="vineyard-heading mb-6">
              Download Our Menu
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              View our complete menu with wine pairing suggestions
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              <button className="p-6 bg-card-bg rounded-lg hover:bg-bg-secondary transition-colors">
                <div className="text-2xl mb-2">📄</div>
                <h4 className="font-cormorant font-bold mb-2">Full Menu PDF</h4>
                <p className="text-sm text-text-secondary">Complete menu with descriptions</p>
              </button>
              <button className="p-6 bg-card-bg rounded-lg hover:bg-bg-secondary transition-colors">
                <div className="text-2xl mb-2">🍷</div>
                <h4 className="font-cormorant font-bold mb-2">Wine Pairing Guide</h4>
                <p className="text-sm text-text-secondary">Expert pairing recommendations</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
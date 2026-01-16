'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Star, CheckCircle, Wine, Utensils } from 'lucide-react'
import Image from 'next/image'

const eventTypes = [
  {
    id: 'weddings',
    name: 'Weddings',
    capacity: 'Up to 150 guests',
    description: 'Romantic vineyard-inspired celebrations',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400'
  },
  {
    id: 'corporate',
    name: 'Corporate Events',
    capacity: 'Up to 200 guests',
    description: 'Business dinners and team building',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400'
  },
  {
    id: 'wine-dinners',
    name: 'Wine Dinners',
    capacity: 'Up to 60 guests',
    description: 'Multi-course wine pairing dinners',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400'
  },
  {
    id: 'birthdays',
    name: 'Birthdays & Anniversaries',
    capacity: 'Up to 80 guests',
    description: 'Intimate celebrations',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400'
  },
]

const eventSpaces = [
  {
    name: 'Vineyard Room',
    capacity: '80 guests seated | 120 standing',
    features: ['Private terrace', 'Wine cellar view', 'Dedicated bar'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w-400'
  },
  {
    name: 'Wine Cellar',
    capacity: '40 guests seated | 60 standing',
    features: ['Intimate setting', 'Rare wine display', 'Sommelier station'],
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=400'
  },
  {
    name: 'Garden Terrace',
    capacity: '150 guests seated | 200 standing',
    features: ['Outdoor seating', 'City skyline views', 'String lighting'],
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400'
  },
]

export default function PrivateEventsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920"
          alt="Private Event"
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
                <Users className="w-8 h-8 text-accent-secondary" />
                <span className="text-sm uppercase tracking-widest text-white">
                  Exclusive Events
                </span>
              </div>
              
              <h1 className="vineyard-heading text-white mb-6">
                <span className="block">Private</span>
                <span className="block text-gradient-terracotta">Events</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Create unforgettable memories in our vineyard-inspired spaces
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="vineyard-heading mb-6">
              Event Types
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              We specialize in creating bespoke experiences for every occasion
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={event.image}
                    alt={event.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vine-green/50 to-transparent" />
                </div>
                
                <h3 className="text-xl font-cormorant font-bold mb-2">{event.name}</h3>
                <div className="text-sm text-accent-primary mb-2">{event.capacity}</div>
                <p className="text-text-secondary text-sm">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="py-16 bg-bg-secondary">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="vineyard-heading mb-6">
              Event Spaces
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Three distinct settings for your perfect event
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {eventSpaces.map((space, index) => (
              <motion.div
                key={space.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card-bg rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-cormorant font-bold mb-3">{space.name}</h3>
                  <div className="text-sm text-accent-primary mb-4">{space.capacity}</div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium">Features:</h4>
                    {space.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-accent-primary hover:text-accent-secondary transition-colors text-sm font-medium">
                    View Photos →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Packages */}
      <section className="py-16">
        <div className="luxe-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="vineyard-heading mb-6">
                Services & Packages
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Wine,
                    title: 'Wine Tasting',
                    description: 'Guided tastings with our sommelier'
                  },
                  {
                    icon: Utensils,
                    title: 'Custom Menus',
                    description: 'Bespoke dining experiences'
                  },
                  {
                    icon: Star,
                    title: 'Event Planning',
                    description: 'Full-service coordination'
                  },
                  {
                    icon: Users,
                    title: 'Dedicated Staff',
                    description: 'Professional service team'
                  },
                ].map((service, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent-primary/10">
                      <service.icon className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <h4 className="font-cormorant font-bold text-lg mb-1">{service.title}</h4>
                      <p className="text-text-secondary">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card-bg p-8 rounded-lg"
            >
              <h3 className="text-2xl font-cormorant font-bold mb-6">Request a Proposal</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-color focus:outline-none focus:ring-2 focus:ring-accent-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-color focus:outline-none focus:ring-2 focus:ring-accent-primary"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-color focus:outline-none focus:ring-2 focus:ring-accent-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Type *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-color focus:outline-none focus:ring-2 focus:ring-accent-primary"
                    >
                      <option value="">Select type</option>
                      {eventTypes.map(type => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-color focus:outline-none focus:ring-2 focus:ring-accent-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Guests *</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-color focus:outline-none focus:ring-2 focus:ring-accent-primary"
                    >
                      <option value="">Select range</option>
                      <option value="1-20">1-20 guests</option>
                      <option value="21-50">21-50 guests</option>
                      <option value="51-100">51-100 guests</option>
                      <option value="100+">100+ guests</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-color focus:outline-none focus:ring-2 focus:ring-accent-primary resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-vineyard"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-bg-secondary">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="vineyard-heading mb-6">
              Client Testimonials
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Our wedding at Verde was absolutely magical. The wine pairing was perfect!",
                author: "Sarah & Michael",
                event: "Wedding"
              },
              {
                quote: "The corporate dinner was flawless. Our clients were thoroughly impressed.",
                author: "Tech Innovations Inc.",
                event: "Corporate Event"
              },
              {
                quote: "A perfect 40th birthday celebration. The private wine tasting was incredible.",
                author: "Jennifer R.",
                event: "Birthday Celebration"
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card-bg p-6 rounded-lg"
              >
                <div className="text-4xl text-accent-primary/20 mb-4">"</div>
                <p className="text-text-secondary mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-text-secondary">{testimonial.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Vine Street', 'New York, NY 10001'],
      link: 'https://maps.google.com/?q=123+Vine+Street+NYC'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['Reservations: (212) 555-1234', 'Events: (212) 555-5678'],
      link: 'tel:+12125551234'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['reservations@verde-nyc.com', 'events@verde-nyc.com'],
      link: 'mailto:reservations@verde-nyc.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: [
        'Tuesday - Thursday: 5PM - 10PM',
        'Friday - Saturday: 5PM - 11PM',
        'Sunday: 5PM - 9PM',
        'Weekend Brunch: 11AM - 3PM'
      ]
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920"
          alt="Restaurant Interior"
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
              <h1 className="vineyard-heading text-white mb-6">
                <span className="block">Contact</span>
                <span className="block text-gradient-terracotta">Us</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Reach out for reservations, events, or any questions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="luxe-container">
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card-bg rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="font-cormorant font-bold text-lg mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-text-secondary">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="hover:text-accent-primary transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card-bg p-8 rounded-lg"
            >
              <h2 className="text-3xl font-cormorant font-bold mb-6">Send Us a Message</h2>
              
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
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-color focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="reservation">Reservation</option>
                    <option value="events">Private Events</option>
                    <option value="feedback">Feedback</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-color focus:outline-none focus:ring-2 focus:ring-accent-primary resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-vineyard flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-card-bg rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-vine-green to-terracotta relative">
                  {/* Map Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="font-cormorant font-bold text-xl mb-2">123 Vine Street</h3>
                      <p className="text-white/80">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-cormorant font-bold text-lg mb-4">Getting Here</h4>
                  <div className="space-y-3 text-text-secondary">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium">🚇</span>
                      </div>
                      <div>
                        <div className="font-medium">Subway</div>
                        <div className="text-sm">A, C, E to 14th Street | 1, 2, 3 to 14th Street</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium">🚗</span>
                      </div>
                      <div>
                        <div className="font-medium">Parking</div>
                        <div className="text-sm">Valet available after 5PM | Nearby garages</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-card-bg p-6 rounded-lg">
                <h4 className="font-cormorant font-bold text-lg mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-600' },
                    { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-600' },
                    { icon: Twitter, label: 'Twitter', color: 'hover:text-sky-500' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      className={`p-3 rounded-full bg-bg-primary text-text-secondary transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 p-6 rounded-lg">
                <h4 className="font-cormorant font-bold text-lg mb-4">Stay Updated</h4>
                <p className="text-text-secondary text-sm mb-4">
                  Subscribe for exclusive events and wine releases
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white dark:bg-bg-primary border border-border-color focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  />
                  <button className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="vineyard-heading mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: 'Do I need a reservation?',
                  answer: 'While walk-ins are welcome, we highly recommend making a reservation, especially on weekends and holidays.'
                },
                {
                  question: 'What is the dress code?',
                  answer: 'Smart casual attire is recommended. We ask guests to avoid beachwear and athletic clothing.'
                },
                {
                  question: 'Do you accommodate dietary restrictions?',
                  answer: 'Yes, our chefs can accommodate most dietary restrictions. Please inform us when making your reservation.'
                },
                {
                  question: 'Is there parking available?',
                  answer: 'Valet parking is available for $15 after 5PM. There are also several public parking garages nearby.'
                },
                {
                  question: 'Do you host large groups?',
                  answer: 'Yes, we can accommodate groups of up to 20 in our main dining room. For larger parties, please contact our events team.'
                },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card-bg p-6 rounded-lg"
                >
                  <h3 className="font-cormorant font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="vineyard-heading mb-6">
              Ready to Visit?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Book your table for an unforgettable vineyard experience in the heart of NYC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-vineyard">
                Make a Reservation
              </button>
              <button className="btn-outline-vineyard">
                Call Us Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { motion } from 'framer-motion'
import VineyardHero from '@/components/Hero/VineyardHero'
import WineCollection from '@/components/Wine/WineCollection'
import VineyardGallery from '@/components/Gallery/VineyardGallery'
import SectionDivider from '@/components/UI/SectionDivider'
import { Wine, Utensils, Calendar, Users } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <VineyardHero />
      
      {/* Vineyard Story */}
      <section className="section-py bg-bg-secondary">
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
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800"
                  alt="Wine Cellar"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vine-green/30 to-transparent" />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-48 h-48 border-4 border-accent-secondary rounded-full overflow-hidden hidden lg:block">
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
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-px bg-accent-primary" />
                <span className="text-sm uppercase tracking-widest text-accent-primary">
                  Our Story
                </span>
              </div>
              
              <h2 className="vineyard-heading mb-6">
                <span className="block">From Vine to</span>
                <span className="block text-gradient-terracotta">Table</span>
              </h2>
              
              <div className="space-y-4 text-text-secondary">
                <p>
                  Born from a passion for Italian vineyards and New York's vibrant culinary scene, 
                  Verde brings the essence of vineyard living to the heart of Manhattan.
                </p>
                <p>
                  Our journey began in 2008, when sommelier Alessandro Rossi returned from Tuscany 
                  with a vision: to create a space where exceptional wines meet inspired cuisine.
                </p>
                <p>
                  Today, we partner with family-owned vineyards across Italy, curating a wine list 
                  that tells the story of each region's unique terroir.
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-primary mb-1">15</div>
                  <div className="text-sm uppercase tracking-wider text-text-secondary">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-primary mb-1">45</div>
                  <div className="text-sm uppercase tracking-wider text-text-secondary">Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-primary mb-1">200+</div>
                  <div className="text-sm uppercase tracking-wider text-text-secondary">Wines</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* Wine Collection Preview */}
      <section className="section-py">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Wine className="w-6 h-6 text-accent-primary" />
              <span className="text-sm uppercase tracking-widest text-accent-primary">
                Curated Selection
              </span>
            </div>
            <h2 className="vineyard-heading mb-6">
              Our Wine Collection
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Discover rare vintages and emerging labels from Italy's most prestigious vineyards
            </p>
          </motion.div>
          
          <WineCollection />
        </div>
      </section>
      
      {/* Experience Sections */}
      <section className="bg-bg-secondary">
        <div className="luxe-container">
          <div className="grid md:grid-cols-3 gap-8 section-py">
            {[
              {
                icon: Utensils,
                title: 'Seasonal Menu',
                description: 'Farm-to-table dishes inspired by Italian vineyards',
                image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400'
              },
              {
                icon: Wine,
                title: 'Wine Tasting',
                description: 'Guided tastings with our master sommelier',
                image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400'
              },
              {
                icon: Users,
                title: 'Private Events',
                description: 'Exclusive dining experiences for special occasions',
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400'
              },
            ].map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vine-green/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="p-3 rounded-full bg-card-bg/80 backdrop-blur-sm">
                      <experience.icon className="w-6 h-6 text-accent-primary" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-cormorant font-bold mb-3">{experience.title}</h3>
                <p className="text-text-secondary mb-4">{experience.description}</p>
                <button className="text-accent-primary hover:text-accent-secondary transition-colors text-sm uppercase tracking-wider">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="section-py">
        <div className="luxe-container">
          <VineyardGallery  />
        </div>
      </section>
      
      {/* Reservation CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920"
            alt="Vineyard Dinner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-vine-green/80" />
        </div>
        
        <div className="relative section-py">
          <div className="luxe-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center text-white"
            >
              <Calendar className="w-12 h-12 mx-auto mb-6 text-accent-secondary" />
              <h2 className="vineyard-heading mb-6">
                Reserve Your Table
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Experience the magic of vineyard dining in the heart of New York City. 
                Book your table for an unforgettable evening.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-vineyard border-2 border-accent-secondary bg-accent-secondary hover:bg-transparent hover:border-white">
                  Book Now
                </button>
                <button className="btn-outline-vineyard border-2 border-white text-white hover:bg-white hover:text-vine-green">
                  View Menu
                </button>
              </div>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Open Days', value: 'Tuesday - Sunday' },
                  { label: 'Dinner', value: '5PM - 11PM' },
                  { label: 'Brunch', value: 'Weekends 11AM - 3PM' },
                  { label: 'Private Events', value: 'Available' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-lg font-semibold mb-1">{item.value}</div>
                    <div className="text-sm text-white/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
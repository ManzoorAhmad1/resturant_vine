'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import ThemeToggle from '@/utils/ThemeToggle'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "Restaurant": [
      { href: '/menu', label: 'Menu' },
      { href: '/wine', label: 'Wine List' },
      { href: '/private-events', label: 'Private Events' },
      { href: '/contact', label: 'Contact' },
    ],
    "Hours": [
      { label: 'Tuesday - Thursday', value: '5PM - 10PM' },
      { label: 'Friday - Saturday', value: '5PM - 11PM' },
      { label: 'Sunday', value: '5PM - 9PM' },
      { label: 'Weekend Brunch', value: '11AM - 3PM' },
    ],
    "Connect": [
      { href: '#', label: 'Instagram', icon: Instagram },
      { href: '#', label: 'Facebook', icon: Facebook },
      { href: '#', label: 'Twitter', icon: Twitter },
    ]
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg-secondary border-t border-border-color">
      <div className="luxe-container">
        {/* Main Footer */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo & Info */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border-2 border-accent-secondary flex items-center justify-center">
                  <span className="text-lg font-bold text-accent-secondary">V</span>
                </div>
                <div>
                  <div className="text-2xl font-cormorant font-bold">VERDE</div>
                  <div className="text-xs uppercase tracking-widest text-text-secondary">
                    NYC • VINEYARD RESTAURANT
                  </div>
                </div>
              </Link>
              
              <p className="text-text-secondary text-sm mb-6">
                Where Italian vineyards meet New York's vibrant culinary scene. 
                Award-winning wines, seasonal cuisine, and unforgettable experiences.
              </p>
              
              <div className="flex gap-3">
                <a
                  href="https://maps.google.com/?q=123+Vine+Street+NYC"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4" />
                  123 Vine Street, NYC
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-cormorant font-bold text-lg mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link: any) => (
                    <li key={link.label || link.href}>
                      {'href' in link ? (
                        <Link
                          href={link.href}
                          className="text-text-secondary hover:text-accent-primary transition-colors text-sm"
                        >
                          {'icon' in link ? (
                            <div className="flex items-center gap-2">
                              <link.icon className="w-4 h-4" />
                              {link.label}
                            </div>
                          ) : (
                            link.label
                          )}
                        </Link>
                      ) : (
                        <div className="text-sm text-text-secondary">
                          <div className="font-medium">{link.label}</div>
                          <div>{link.value}</div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div>
              <h3 className="font-cormorant font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-4">
                <a
                  href="tel:+12125551234"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="font-medium">(212) 555-1234</div>
                    <div className="text-sm">Reservations</div>
                  </div>
                </a>
                
                <a
                  href="mailto:reservations@verde-nyc.com"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-medium">reservations@verde-nyc.com</div>
                    <div className="text-sm">General Inquiries</div>
                  </div>
                </a>
              </div>
              
              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="font-medium mb-3">Newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 text-sm rounded-lg bg-bg-primary border border-border-color focus:outline-none focus:ring-1 focus:ring-accent-primary"
                  />
                  <button className="px-4 py-2 bg-accent-primary text-white text-sm rounded-lg hover:bg-accent-primary/90 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border-color">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-text-secondary text-center md:text-left">
              © {currentYear} Verde NYC. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <ThemeToggle />
              
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
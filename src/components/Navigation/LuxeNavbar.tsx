'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Wine, Phone, MapPin } from 'lucide-react'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/utils/ThemeToggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/wine', label: 'Wine' },
  { href: '/private-events', label: 'Private Events' },
  { href: '/contact', label: 'Contact' },
]

export default function LuxeNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-morphism backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="luxe-container">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-accent-secondary flex items-center justify-center">
                  <Wine className="w-6 h-6 text-accent-secondary" />
                </div>
                <div className="absolute -inset-1 rounded-full border border-accent-secondary/30" />
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-cormorant font-bold text-text-primary">VERDE</div>
                <div className="text-xs uppercase tracking-widest text-text-secondary">
                  NYC • VINEYARD RESTAURANT
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${
                    pathname === item.href 
                      ? 'text-accent-primary font-semibold' 
                      : 'text-text-primary hover:text-accent-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-6">
              <div className="hidden xl:flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-primary" />
                <a href="tel:+12125551234" className="text-sm hover:text-accent-primary transition-colors">
                  (212) 555-1234
                </a>
              </div>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-bg-secondary rounded transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-color/30">
          <div className="luxe-container">
            <div className="flex items-center justify-between py-3">
              <div className="text-xs uppercase tracking-widest text-text-secondary">
                Open Tuesday - Sunday
              </div>
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-accent-primary" />
                  <span className="text-xs">123 Vine Street, NYC</span>
                </div>
                <div className="text-xs">
                  Reservations: <a href="tel:+12125551234" className="text-accent-primary hover:underline">(212) 555-1234</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-md bg-card-bg border-l border-border-color lg:hidden"
          >
            <div className="flex flex-col h-full p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-12">
                <div className="text-2xl font-cormorant font-bold text-text-primary">VERDE</div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-bg-primary rounded transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-xl font-cormorant py-3 transition-all duration-300 ${
                      pathname === item.href
                        ? 'text-accent-primary border-l-4 border-accent-primary pl-4'
                        : 'text-text-primary hover:text-accent-primary hover:pl-4'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-auto pt-8 border-t border-border-color">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent-primary" />
                    <div>
                      <div className="font-medium">123 Vine Street</div>
                      <div className="text-sm text-text-secondary">New York, NY 10001</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent-primary" />
                    <a href="tel:+12125551234" className="text-lg font-medium hover:text-accent-primary">
                      (212) 555-1234
                    </a>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-text-secondary">Theme</span>
                    <ThemeToggle />
                  </div>

                  <button className="w-full py-4 btn-vineyard mt-4">
                    Make Reservation
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
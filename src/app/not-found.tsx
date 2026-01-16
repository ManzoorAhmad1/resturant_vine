"use client";

import { motion } from "framer-motion";
import { Home, Search, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "rizzui";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-navy via-[#0B1F3B] to-gray-900 flex items-center justify-center px-4 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF3710_1px,transparent_1px),linear-gradient(to_bottom,#D4AF3710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-gold rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* 404 Shield Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateY: 360,
          }}
          transition={{ 
            duration: 1,
            rotateY: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="mb-8 inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-accent-gold/20 rounded-full blur-3xl" />
            </div>
            
            <Shield className="w-32 h-32 md:w-40 md:h-40 text-accent-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.5)] relative z-10" />
            
            {/* 404 Text Inside Shield */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-primary-navy">
                404
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Oops! The page you're looking for has been moved, deleted, or possibly never existed.
        </motion.p>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-gold/20 backdrop-blur-sm border border-accent-gold/50 text-accent-gold rounded-full text-sm font-semibold mb-12"
        >
          <Search className="h-4 w-4" />
          <span>Error Code: 404 - Resource Not Found</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <Button
              size="xl"
              className="bg-accent-gold text-primary-navy hover:bg-yellow-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-accent-gold/50 transition-all duration-300 flex items-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-navy font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Contact Support</span>
            </Button>
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-accent-gold/20"
        >
          <p className="text-gray-400 mb-4 text-sm">You might be looking for:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Services", href: "/services" },
              { label: "About Us", href: "/about" },
              { label: "Pricing", href: "/pricing" },
              { label: "Blog", href: "/blogs" },
            ].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
              >
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-gray-300 hover:text-accent-gold transition-colors duration-200 text-sm font-medium underline underline-offset-4"
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-accent-gold/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent-gold/10 rounded-full blur-xl"
        />
      </div>
    </div>
  );
}

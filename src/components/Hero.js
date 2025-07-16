'use client'

import { ArrowRight, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const bgImage =
    'https://www.asanduff.com/wp-content/uploads/2019/05/site-preparation.jpg'
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  return (
    <section className="relative text-white py-32 px-6 overflow-hidden h-[100vh]">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Construction background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          We Build Your Vision
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 drop-shadow">
          From blueprint to bricks, Buildwise delivers top-tier construction
          services for homes, businesses, and infrastructure.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setShowQuoteModal(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:scale-105"
          >
            Get a Quote
          </button>
          <a
            href="/projects"
            className="flex items-center gap-2 border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:scale-105"
          >
            Our Projects <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white text-black rounded-xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

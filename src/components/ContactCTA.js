'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, X } from 'lucide-react'
import Link from 'next/link'

export default function ContactCTA() {
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="bg-yellow-500 text-black py-20 px-6 relative overflow-hidden">
      {/* Soft BG Animation */}
      <motion.div
        className="absolute -top-16 -left-16 w-80 h-80 bg-white/10 blur-2xl rounded-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Text */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight leading-tight">
            Ready to build your dream project?
          </h2>
          <p className="text-lg font-medium">
            Let’s talk. Our engineers are just a message away.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://wa.me/2348100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-gray-900 transition duration-300 shadow-md"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-black flex items-center gap-2 px-6 py-3 rounded-xl border border-black hover:bg-gray-100 transition duration-300 shadow-md"
          >
            <Phone size={18} /> Contact Form
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full relative text-left text-gray-800 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>

              {/* Form content */}
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-md transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

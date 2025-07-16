'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
} from 'lucide-react'

export default function Footer() {
  return (
    <>
      <motion.footer
        className="bg-gray-900 text-gray-200 pt-16 pb-10 px-6 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 sm:grid-cols-2 gap-10 border-b border-gray-700 pb-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Buildwise</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We don’t just build — we shape dreams into reality, with quality, speed, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone size={16} /> +234 810 000 0000</li>
              <li className="flex items-center gap-2"><Mail size={16} /> info@buildwise.com</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get project updates, building tips, and offers directly to your inbox.
            </p>
            <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm bg-transparent text-white outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} Buildwise. All rights reserved. 
          Made by Dray.
        </div>
      </motion.footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348100000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16.7 13.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0-1.4-.5-2.7-1.7c-1-1-1.7-2.4-1.9-2.8s0-.6.2-.8.3-.4.4-.5c.2-.2.2-.3.3-.5s.1-.4 0-.5c-.1-.2-.7-1.6-.9-2.2s-.5-.5-.7-.5h-.6c-.2 0-.5 0-.7.3s-.9.9-.9 2.3.9 2.7 1.1 2.9c.1.2 1.7 2.7 4 3.8 2.3 1.1 2.3.8 2.7.8.4 0 1.3-.6 1.5-1 .2-.3.2-.6.1-.8z" />
          <path d="M12 0C5.4 0 0 5.4 0 12c0 2 .5 4 1.5 5.8L0 24l6.3-1.6C8.1 23.5 10 24 12 24c6.6 0 12-5.4 12-12S18.6 0 12 0zm0 22c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7.9.8-3.6-.3-.5C2.9 15.7 2.4 13.9 2.4 12c0-5.3 4.3-9.6 9.6-9.6S21.6 6.7 21.6 12 17.3 21.6 12 21.6z" />
        </svg>
      </a>
    </>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Modern Duplex in Lekki',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZCkKIQJ2CRBsAPuPLJqHnS4lMjpMQYgf6Q&s',
    type: 'Residential Construction',
  },
  {
    title: 'Commercial Plaza in Abuja',
    image:
      'https://images.privateproperty.com.ng/large/commercial-shops-and-office-spaces-in-plaza-AENQtUQimPLcwTWiS8ym.jpeg',
    type: 'Commercial Building',
  },
  {
    title: 'Road Project in Ibadan',
    image: 'https://nsia.com.ng/wp-content/uploads/2022/09/LIE2.jpg',
    type: 'Civil Engineering',
  },
]

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative bg-white py-24 px-6 text-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          A glimpse into some of our proudly completed works across Nigeria.
        </motion.p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{project.type}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optionally add a CTA */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Optional CTA like “View all” or contact */}
        </motion.div>
      </div>

      {/* Decorative Blurs */}
      <motion.div
        className="absolute -top-20 -left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-[140px] z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      />
    </section>
  )
}

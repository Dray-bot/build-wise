'use client'

import {
  Home,
  Building2,
  Hammer,
  Ruler,
  Route,
  Paintbrush,
} from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Residential Construction',
    Icon: Home,
    desc: 'From compact homes to luxury estates, we manage full-scale residential projects with precision.',
  },
  {
    title: 'Commercial Projects',
    Icon: Building2,
    desc: 'We build offices, malls, and dynamic commercial environments that drive business success.',
  },
  {
    title: 'Renovation & Remodeling',
    Icon: Hammer,
    desc: 'Breathe new life into your space with modern upgrades, smart layouts, and premium finishes.',
  },
  {
    title: 'Architecture & Planning',
    Icon: Ruler,
    desc: 'From blueprint to permit, we design stunning structures that are functional and future-proof.',
  },
  {
    title: 'Road & Civil Works',
    Icon: Route,
    desc: 'Delivering top-tier civil projects—from roads to bridges—with durability and precision.',
  },
  {
    title: 'Interior Finishing',
    Icon: Paintbrush,
    desc: 'We refine your interiors with paint, fixtures, lighting, and flawless attention to detail.',
  },
]

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="bg-white py-20 px-6 text-gray-800"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Buildwise delivers end-to-end construction solutions — crafted with
            precision and built to last.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, Icon, desc }, index) => (
            <motion.article
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              role="article"
              aria-label={title}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 text-yellow-600 mb-4 group-hover:bg-yellow-200 transition">
                <Icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

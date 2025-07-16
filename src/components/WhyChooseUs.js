'use client'

import {
  UserCog,
  Clock,
  BadgeDollarSign,
  Smile,
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Experienced Engineers',
    icon: <UserCog size={28} className="text-yellow-500" />,
    description:
      'Over a decade of delivering solid, high-quality projects with expertise and confidence.',
  },
  {
    title: 'Timely Delivery',
    icon: <Clock size={28} className="text-yellow-500" />,
    description:
      'We respect timelines. Our process is tight and our delivery, even tighter.',
  },
  {
    title: 'Affordable Pricing',
    icon: <BadgeDollarSign size={28} className="text-yellow-500" />,
    description:
      'Get premium results without premium headaches. Transparent and fair pricing always.',
  },
  {
    title: 'Client Satisfaction',
    icon: <Smile size={28} className="text-yellow-500" />,
    description:
      'We build trust before we build walls. Your satisfaction is our success metric.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-24 px-6 text-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Why Choose Buildwise?
        </motion.h2>

        <motion.p
          className="text-gray-500 text-lg mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          We don’t just build. We craft lasting legacies—on time, on budget, and beyond expectations.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-md leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background glow */}
      <motion.div
        className="absolute -top-24 -left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-300/20 rounded-full blur-[140px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      />
    </section>
  )
}

'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { label: 'Projects Completed', number: 120 },
  { label: 'Clients Served', number: 80 },
  { label: 'Years of Experience', number: 10 },
  { label: 'Awards Won', number: 15 },
]

function useCountUp(to, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return
    let start = 0
    const totalFrames = duration / 16
    const increment = to / totalFrames
    const interval = setInterval(() => {
      start += increment
      if (start >= to) {
        clearInterval(interval)
        setCount(to)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(interval)
  }, [to, duration, startCounting])

  return count
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const counts = stats.map((stat) =>
    useCountUp(stat.number, 2000, isInView)
  )

  return (
    <section id="stats" ref={ref} className="py-24 px-6 bg-white relative overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Achievements
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl py-10 px-4 shadow-lg border border-yellow-300 glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-2 glow-text">
              {counts[index]}+
            </div>
            <p className="text-sm md:text-base font-medium text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .glow {
          box-shadow: 0 0 20px rgba(234, 179, 8, 0.3), 0 0 40px rgba(234, 179, 8, 0.2);
        }
      `}</style>
    </section>
  )
}

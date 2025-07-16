'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-gray-50 py-28 px-6 text-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Section with Animation */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            A Vision Built to Last.
          </h2>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            At <span className="text-yellow-600 font-semibold">Buildwise</span>, we're not just another construction company — we're architectural storytellers, engineering dreamers, and builders of legacy.
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Whether you’re breaking ground on a family home or spearheading a multimillion-naira infrastructure project, we provide the expertise, tools, and team to make it happen — on time and on point.
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            From blueprint to build, our work reflects precision, integrity, and deep respect for your vision.
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            We blend sustainability with smart design — creating spaces that are not just functional but future-ready.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-5 py-2 rounded-full shadow-sm uppercase tracking-wide">
              Your Dream, Engineered to Life.
            </span>
          </motion.div>
        </motion.div>

        {/* Image Section with Fade-in */}
        <motion.div
          className="relative w-full h-96 md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-yellow-400/30"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src="https://www.onlinesafetytrainer.com/wp-content/uploads/2020/09/construction_safety_hazards.jpg"
            alt="Buildwise construction site"
            className="w-full h-full object-cover rounded-3xl"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent rounded-3xl" />
        </motion.div>
      </div>

      {/* Blurred BG Accent */}
      <motion.div
        className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[140px] z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      />
    </section>
  )
}

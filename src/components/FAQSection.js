'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary, but residential builds usually take 3–6 months depending on size and complexity.',
  },
  {
    question: 'Do you handle permits and documentation?',
    answer: 'Yes, Buildwise assists with all required documentation and approvals from relevant authorities.',
  },
  {
    question: 'Can I customize the building design?',
    answer: 'Absolutely. We work closely with you and our architects to make sure your vision becomes reality.',
  },
  {
    question: 'Is Buildwise available outside Lagos?',
    answer: 'Yes! We operate in Abuja, Ibadan, Port Harcourt, and other major cities across Nigeria.',
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section id="faqs" className="bg-gray-50 py-24 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-600">
          FAQs
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Everything you need to know before we break ground.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 cursor-pointer group border border-gray-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => toggle(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium text-left group-hover:text-yellow-600 transition">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeIndex === index ? (
                  <X className="text-yellow-600 w-5 h-5" />
                ) : (
                  <Plus className="text-gray-500 w-5 h-5" />
                )}
              </motion.div>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  className="text-gray-600 mt-4 text-left text-sm leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

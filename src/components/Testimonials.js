'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Mrs. Adesuwa O.',
    role: 'Homeowner, Lekki',
    message:
      'Buildwise delivered my dream duplex on time and beyond expectations. Highly professional team!',
  },
  {
    name: 'Engr. Chinedu Okafor',
    role: 'Real Estate Developer',
    message:
      'Working with Buildwise made my commercial plaza project stress-free. They’re reliable and transparent.',
  },
  {
    name: 'Grace Agbo',
    role: 'Interior Designer',
    message:
      'Their attention to detail is unmatched. I love collaborating with their builders on client projects.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-24 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          className="text-gray-500 mb-12 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Real feedback from people who trusted Buildwise.
        </motion.p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="max-w-xl w-full mx-auto px-4"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg text-left"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                  “{t.message}”
                </p>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

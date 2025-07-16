'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

const logos = [
  'https://www.dangote.com/wp-content/uploads/2021/08/blue-logo-background.jpg',
  'https://www.adexen.com/upload/company-logos/1-adexen-logo-julius-berger-nigeria-plc-logo.jpg',
  'https://media.premiumtimesng.com/wp-content/files/2023/08/LandWey-Logo_page-0001.jpg',
  'https://images.seeklogo.com/logo-png/35/1/nnpc-logo-png_seeklogo-355027.png',
  'https://150506300.v2.pressablecdn.com/wp-content/uploads/2024/08/Chevron_logo_767x511.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNp6BFJU3baEj5kLNi0Kk3JyGPM4S7d_0HfQ&s',
]

export default function TrustedBySection() {
  const controls = useAnimation()

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        await controls.start({ x: 0 })
        await new Promise((res) => setTimeout(res, 3000))
        await controls.start({ x: '-100%', transition: { duration: 3, ease: 'easeInOut' } })
        await controls.set({ x: '100%' })
        await controls.start({ x: '0%', transition: { duration: 3, ease: 'easeInOut' } })
      }
    }

    loopAnimation()
  }, [controls])

  return (
    <section id="partners" className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Trusted By</h2>
        <p className="text-gray-500 text-lg mb-14 max-w-xl mx-auto">
          We&apos;ve collaborated with industry leaders and visionary brands across Nigeria.
        </p>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-16 items-center w-max"
            animate={controls}
          >
            {logos.map((src, idx) => (
              <div
                key={idx}
                className="w-48 h-24 flex items-center justify-center bg-white px-6 py-4 rounded-2xl shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Client ${idx + 1}`}
                  width={192}
                  height={96}
                  className="max-h-20 w-full object-contain drop-shadow-[0_0_12px_rgba(234,179,8,0.7)] brightness-110"
                  unoptimized
                  sizes="(max-width: 768px) 50vw, 192px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

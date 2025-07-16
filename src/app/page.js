// app/page.js
import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import AboutSection from '@/components/AboutSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import StatsSection from '@/components/StatsSection'
import TrustedBySection from '@/components/TrustedBySection'
import FAQSection from '@/components/FAQSection'
import MapSection from '@/components/MapSection'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <AboutSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <StatsSection />
      <TrustedBySection />
      <FAQSection />
      <MapSection />
      <ContactCTA />
      <Footer />
    </main>
  )
}

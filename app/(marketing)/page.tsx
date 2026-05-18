import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import About from '@/components/sections/About'
import Houses from '@/components/sections/Houses'
import Catalogue from '@/components/sections/Catalogue'
import VisionMission from '@/components/sections/VisionMission'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Houses />
      <Catalogue />
      <VisionMission />
      <WhyUs />
      <Process />
      <Contact />
    </>
  )
}

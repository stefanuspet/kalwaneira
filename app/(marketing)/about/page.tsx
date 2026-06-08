import type { Metadata } from 'next'
import About from '@/components/sections/About'
import VisionMission from '@/components/sections/VisionMission'
import Process from '@/components/sections/Process'

export const metadata: Metadata = {
  title: 'The House',
  description: 'PT Kalwaneira Terra Prospera — company profile, vision, mission, and our export process. A Jakarta-based trading house built on precision.',
}

export default function AboutPage() {
  return (
    <>
      <About />
      <VisionMission />
      <Process />
    </>
  )
}

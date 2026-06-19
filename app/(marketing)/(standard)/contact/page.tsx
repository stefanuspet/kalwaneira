import type { Metadata } from 'next'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Send an enquiry to PT Kalwaneira Terra Prospera. Sampling requests, RFQ, and partnership inquiries — we reply within one working day.',
}

export default function ContactPage() {
  return <Contact />
}

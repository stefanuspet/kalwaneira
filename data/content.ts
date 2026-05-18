import type { NavLink, Pillar, MissionItem, ProcessStep, WhyCard, ContactChannel } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'The House', href: '#about' },
  { label: 'Our Brands', href: '#houses' },
  { label: 'Catalogue', href: '#catalog' },
  { label: 'Vision', href: '#vm' },
  { label: 'Process', href: '#process' },
]

export const pillars: Pillar[] = [
  {
    num: '01',
    title: 'Manual curation',
    text: 'Every batch is hand-evaluated against export-grade benchmarks before it leaves the archipelago. No exceptions.',
  },
  {
    num: '02',
    title: 'Direct from origin',
    text: 'We source through long-standing relationships with farmers and fisheries across Flores, Toraja, Java and Sulawesi.',
  },
  {
    num: '03',
    title: 'Reliable cadence',
    text: 'Documentation, packaging, and shipment schedules built to support recurring commercial supply.',
  },
  {
    num: '04',
    title: 'One desk, one voice',
    text: 'Buyers speak directly with management. No layers, no delays — clarity in every conversation.',
  },
]

export const missionItems: MissionItem[] = [
  {
    id: 'M.01',
    text: 'Provide premium Indonesian products — agricultural and marine — that meet international standards.',
  },
  {
    id: 'M.02',
    text: 'Build sustainable partnerships with the farmers, fishers, and buyers we work with.',
  },
  {
    id: 'M.03',
    text: 'Maintain transparency and integrity throughout the supply chain — from origin to vessel.',
  },
  {
    id: 'M.04',
    text: 'Ensure consistent quality through careful selection and responsible post-harvest practice.',
  },
  {
    id: 'M.05',
    text: 'Deliver reliable export services with professional, direct communication — at every stage.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: 'STEP 01 — Brief',
    title: 'Request & specification.',
    body: 'You share product, grade, volume, destination port and target window. We confirm feasibility within 48 hours.',
  },
  {
    step: 'STEP 02 — Source',
    title: 'Origin & curation.',
    body: 'Our team mobilises across the relevant region. Batches are inspected, sorted and graded by hand against export specification.',
  },
  {
    step: 'STEP 03 — Prepare',
    title: 'Pack & document.',
    body: 'Cold-chain or moisture-controlled packaging is prepared. Phytosanitary, COO and commercial documents are issued in parallel.',
  },
  {
    step: 'STEP 04 — Ship',
    title: 'Despatch & deliver.',
    body: 'Containers depart from Tanjung Priok or Surabaya. You receive tracking, BL, and a single point of contact through arrival.',
  },
]

export const whyCards: WhyCard[] = [
  {
    num: '01',
    title: 'Precision quality selection',
    body: 'Every product is manually selected and sorted to maintain consistent export-grade quality. No compromise on grade consistency, batch to batch.',
  },
  {
    num: '02',
    title: 'Flexible order quantity',
    body: 'We accommodate both small trial volumes and large recurring orders — supporting growing buyers with adaptable supply capacity.',
  },
  {
    num: '03',
    title: 'Reliable export process',
    body: 'Accurate documentation, careful packaging, and on-time delivery — built to meet the demands of international logistics partners.',
  },
  {
    num: '04',
    title: 'Transparent communication',
    body: 'Clients communicate directly with our management team. Clarity, speed, and trust in every transaction — without intermediaries.',
  },
]

export const contactChannels: ContactChannel[] = [
  { key: 'Phone', value: '(+62) 822 5840 2154', action: 'WhatsApp →' },
  { key: 'Email', value: 'info@nusateraso.com', action: 'Compose →' },
  { key: 'Office', value: 'Jakarta, Indonesia', action: 'By appointment' },
  { key: 'Hours', value: 'Mon — Fri · 09:00 — 17:00 WIB', action: 'GMT+7' },
]

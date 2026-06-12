import type {
  NavLink,
  Pillar,
  MissionItem,
  ProcessStep,
  WhyCard,
  ContactChannel,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "The House", href: "/about" },
  { label: "Nusateraso", href: "/nusateraso" },
  { label: "Zanetuno", href: "/zanetuno" },
];

export const pillars: Pillar[] = [
  {
    num: "01",
    title: "Manual curation",
    text: "Every batch is evaluated by hand against export-grade benchmarks before it leaves the archipelago. No exceptions.",
  },
  {
    num: "02",
    title: "Direct from origin",
    text: "We source through long-standing relationships with farmers and fisheries across selected regions of the Indonesian archipelago.",
  },
  {
    num: "03",
    title: "Reliable cadence",
    text: "Documentation, packaging, and shipment schedules built to support recurring commercial supply.",
  },
  {
    num: "04",
    title: "One desk, one voice",
    text: "Buyers speak directly with management, bringing clarity to every conversation without layers or delays.",
  },
];

export const missionItems: MissionItem[] = [
  {
    id: "M.01",
    text: "Provide high-quality agricultural and marine products that meet international standards.",
  },
  {
    id: "M.02",
    text: "Build sustainable, long-term partnerships with suppliers, producers, and buyers across global markets.",
  },
  {
    id: "M.03",
    text: "Maintain transparency and integrity throughout the supply chain - from origin to destination.",
  },
  {
    id: "M.04",
    text: "Ensure consistent quality through careful sourcing, responsible post-harvest practices, and rigorous oversight.",
  },
  {
    id: "M.05",
    text: "Deliver dependable trade and export services through clear communication, accountability, and professional execution.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "STEP 01 — Brief",
    title: "Request & specification.",
    body: "Share your product, grade, volume, and destination. We support EXW, FOB, CIF, and other trade terms by agreement. Sample orders are available under special conditions.",
  },
  {
    step: "STEP 02 — Source",
    title: "Origin & curation.",
    body: "Our team mobilises across the relevant region. Batches are inspected, sorted and graded by hand against the agreed export specification.",
  },
  {
    step: "STEP 03 — Prepare",
    title: "Pack & document.",
    body: "Packaging and documentation are prepared according to export requirements and buyer requests. Requirements vary by destination and are fulfilled as agreed.",
  },
  {
    step: "STEP 04 — Ship",
    title: "Despatch & deliver.",
    body: "Goods depart from ports across Indonesia, including Medan, Jakarta, Semarang, Surabaya, Bitung, or others, subject to product availability and mutual agreement.",
  },
];

export const whyCards: WhyCard[] = [
  {
    num: "01",
    title: "Precision quality selection",
    body: "Every product is manually selected and sorted to maintain consistent export-grade quality, ensuring no compromise on grade consistency from batch to batch.",
  },
  {
    num: "02",
    title: "Reliable export process",
    body: "Accurate documentation, careful packaging, and on-time delivery, all tailored to meet the demands of international logistics partners.",
  },
  {
    num: "03",
    title: "Transparent communication",
    body: "Clients communicate directly with our management team, bringing clarity, speed, and trust to every transaction without intermediaries.",
  },
];

export const contactChannels: ContactChannel[] = [
  { key: "Phone", value: "(+62) 813 1363 352", action: "WhatsApp →" },
  { key: "Phone", value: "(+62) 822 5840 2154", action: "WhatsApp →" },
  { key: "Email", value: "info@kalwaneira.com", action: "Compose →" },
  { key: "Office", value: "Jakarta, Indonesia", action: "By appointment" },
  { key: "Hours", value: "Mon — Fri · 09:00 — 17:00 WIB", action: "GMT+7" },
];

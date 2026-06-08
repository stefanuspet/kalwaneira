const items = [
  'Export-grade quality',
  'Transparent sourcing',
  'Traceable supply chain',
  'Direct from origin',
  'International standards',
  'Responsible post-harvest',
]

export default function Marquee() {
  return (
    <div
      className="overflow-hidden bg-ink border-y border-paper/8 py-3.5"
      aria-hidden="true"
    >
      <div className="flex gap-16 whitespace-nowrap w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-16 text-[11px] tracking-[0.18em] uppercase font-medium text-paper/55"
          >
            {item}
            <span className="text-gold text-[10px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

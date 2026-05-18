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
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

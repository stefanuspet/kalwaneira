import { whyCards } from '@/data/content'

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="label-row">
          <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>— Why Buyers Stay</span>
          <span className="num" style={{ color: 'rgba(255,251,242,0.4)' }}>SECTION 05 / 06</span>
        </div>

        <div className="why-head">
          <h2 className="why-h">
            Four reasons international buyers <em>return</em>.
          </h2>
          <div className="why-intro">A short list. Easily compared. Difficult to imitate.</div>
        </div>

        <div className="why-grid">
          {whyCards.map((card) => (
            <div key={card.num} className="why-card">
              <div className="n">{card.num}</div>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

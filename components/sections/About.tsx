import { pillars } from '@/data/content'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="label-row">
          <span className="eyebrow">— The Holding</span>
          <span className="num">SECTION 01 / 06</span>
        </div>

        <div className="about-grid">
          <div>
            <h2 className="about-h">
              A trading house built on <em>precision</em>, not volume.
            </h2>
            <div className="prose">
              <p>
                Kalwaneira Terra Prospera is a Jakarta-based Indonesian export house. Under one
                parent, two specialist brands operate in tandem — each focused, each independent
                in style, each held to the same standard of curation.
              </p>
              <p>
                We work directly with farmers, smallholders and fisheries across the Indonesian
                archipelago. Every batch is evaluated by hand. Every shipment is documented to
                the last gram. We exist because international buyers deserve a single, accountable
                partner for the most distinctive products this country has to offer.
              </p>
            </div>
            <div style={{ marginTop: '36px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#houses" className="btn-link">
                Explore the brands <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <div className="about-pillars">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="pillar">
                <div className="pillar-num">{pillar.num}</div>
                <div>
                  <div className="pillar-title">{pillar.title}</div>
                  <div className="pillar-text">{pillar.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

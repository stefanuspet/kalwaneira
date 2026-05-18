export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-meta">
              <span className="pill">
                <span className="pulse" />
                Open for export season 2026
              </span>
              <span className="pill est">Jakarta · 06°12&apos;S 106°49&apos;E</span>
            </div>

            <h1 className="display-1">
              The <em>archipelago</em>,<br />
              carefully<br />
              delivered.<span className="gold-rule" />
            </h1>

            <div className="hero-bottom">
              <div className="prose">
                <p>
                  PT Kalwaneira Terra Prospera is an Indonesian export house curating the finest
                  of the sea and the soil for international buyers. Two brands, one standard —{' '}
                  <em>precision over volume</em>.
                </p>
              </div>
              <div className="hero-actions">
                <a href="#houses" className="btn btn-red">
                  Meet our brands <span className="arrow">→</span>
                </a>
                <a href="#contact" className="btn btn-ghost">Request a sample</a>
              </div>
            </div>
          </div>

          <aside className="hero-right" aria-label="Company snapshot">
            <figure className="hero-fig">
              <span className="corner tl">PLATE&nbsp;Nº&nbsp;01 · Vanilla Planifolia</span>
              <div className="placeholder">
                <span className="badge">Product imagery</span>
                <span className="label">— sun-cured vanilla beans —</span>
              </div>
              <span className="corner br">Sourced · Flores / Java / Sulawesi</span>
            </figure>

            <div className="hero-stats" role="group" aria-label="At a glance">
              <div className="hero-stat">
                <div className="num">02</div>
                <div className="lbl">Export houses</div>
              </div>
              <div className="hero-stat">
                <div className="num">15+</div>
                <div className="lbl">Sourcing regions</div>
              </div>
              <div className="hero-stat">
                <div className="num">B2B</div>
                <div className="lbl">Global trade</div>
              </div>
            </div>
          </aside>
        </div>

        <div className="hero-seal" aria-hidden="true">
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="circletext" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
            </defs>
            <circle cx="60" cy="60" r="58" fill="none" stroke="#B8893E" strokeWidth="0.7" />
            <circle cx="60" cy="60" r="42" fill="none" stroke="#B8893E" strokeWidth="0.4" />
            <text fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#8A6628" letterSpacing="3">
              <textPath href="#circletext" startOffset="0">
                {'  KALWANEIRA · TERRA · PROSPERA · INDONESIA · '}
              </textPath>
            </text>
            <g transform="translate(60,60)" stroke="#8A6628" strokeWidth="0.8" fill="none">
              <path d="M -10,-10 L 10,10 M -10,10 L 10,-10" />
              <circle r="3" fill="#8B1818" stroke="none" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}

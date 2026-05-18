const zanetuno = {
  chip: 'House Nº 01 · Seafood',
  index: '/ZNT',
  visCornerTl: 'FROM THE INDONESIAN SEAS',
  visCornerBr: '— ZNT —',
  name: 'Zanetuno',
  tagline: 'Of the Indonesian seas.',
  desc: 'Premium frozen seafood sourced from trusted fisheries across the archipelago. Cold-chain integrity, export documentation, and consistent grade — built for distributors, processors and restaurant groups abroad.',
  tags: ['Yellowfin Tuna', 'Vannamei Shrimp', 'Squid', 'Octopus', 'Snapper'],
  domain: 'zanetuno.com',
  href: 'https://www.zanetuno.com',
}

const nusateraso = {
  chip: 'House Nº 02 · Agriculture',
  index: '/NTR',
  visCornerTl: 'FROM THE INDONESIAN SOIL',
  visCornerBr: '— NTR —',
  name: 'Nusateraso',
  tagline: 'The island essence.',
  desc: 'Vanilla beans, single-origin coffee, and essential spices — curated from selected farming regions, processed with traditional methods, and graded against the standards of the world\'s finest buyers.',
  tags: ['Vanilla Planifolia', 'Arabica · Toraja', 'Robusta · Java', 'Cloves', 'Nutmeg', 'Coconut Sugar'],
  domain: 'nusateraso.com',
  href: 'https://www.nusateraso.com',
}

function HouseCard({ house, variant }: { house: typeof zanetuno; variant: 'sea' | 'earth' }) {
  return (
    <article className={`house ${variant}`} data-brand={house.name.toLowerCase()}>
      <div className="house-header">
        <span className="house-chip">
          <span className="dot" />
          {house.chip}
        </span>
        <span className="house-index">{house.index}</span>
      </div>

      <div className="house-vis">
        <span className="house-vis-corner tl">{house.visCornerTl}</span>
        <span className="house-vis-mark">{house.name}</span>
        <span className="house-vis-corner br">{house.visCornerBr}</span>
      </div>

      <div className="house-name">{house.name}</div>
      <div className="house-tagline">{house.tagline}</div>
      <div className="house-desc">{house.desc}</div>

      <div className="house-tags">
        {house.tags.map((tag) => (
          <span key={tag} className="house-tag">{tag}</span>
        ))}
      </div>

      <div className="house-foot">
        <div className="house-foot-meta">
          <span className="k">Visit</span>
          <span className="v">{house.domain}</span>
        </div>
        <a
          href={house.href}
          target="_blank"
          rel="noopener noreferrer"
          className="house-cta"
        >
          Enter the house <span className="arrow">→</span>
        </a>
      </div>
    </article>
  )
}

export default function Houses() {
  return (
    <section className="houses" id="houses">
      <div className="container">
        <div className="label-row" style={{ marginBottom: '40px' }}>
          <span className="eyebrow" style={{ color: 'rgba(255,251,242,0.6)' }}>
            — Two houses, one standard
          </span>
          <span className="num" style={{ color: 'rgba(255,251,242,0.5)' }}>SECTION 02 / 06</span>
        </div>

        <div className="houses-intro">
          <h2>
            Two specialist brands.<br />
            <em>One trading house.</em>
          </h2>
          <div className="lede">
            Each operates with its own catalogue, voice and origin network — held together under
            the discipline of PT Kalwaneira Terra Prospera.
          </div>
        </div>

        <div className="houses-grid">
          <HouseCard house={zanetuno} variant="sea" />
          <HouseCard house={nusateraso} variant="earth" />
        </div>
      </div>
    </section>
  )
}

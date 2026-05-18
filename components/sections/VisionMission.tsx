import { missionItems } from '@/data/content'

export default function VisionMission() {
  return (
    <section className="vm" id="vm">
      <div className="container">
        <div className="label-row">
          <span className="eyebrow">— Vision &amp; Mission</span>
          <span className="num">SECTION 04 / 06</span>
        </div>

        <div className="vm-grid">
          <div className="vm-side">
            <div className="vm-h">
              What we<br />intend to <em>build</em>.
            </div>
          </div>

          <div>
            <div className="vision-block">
              <div className="vm-tag">Vision</div>
              <h3>A trusted Indonesian export partner.</h3>
              <p>
                &ldquo;To be recognised globally for consistent quality, transparency, and
                long-term reliability — the calmest, most accountable name in Indonesian
                export.&rdquo;
              </p>
            </div>

            <div className="vision-block" style={{ borderTop: 'none' }}>
              <div className="vm-tag">Mission · Five quiet commitments</div>
              <div className="mission-list">
                {missionItems.map((item) => (
                  <div key={item.id} className="mission-item">
                    <div className="n">{item.id}</div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { processSteps } from '@/data/content'

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="label-row">
          <span className="eyebrow">— How a shipment moves</span>
          <span className="num">SECTION 06 / 06</span>
        </div>

        <h2 className="process-h">
          From <em>archipelago</em> to ocean freight.
        </h2>
        <div className="process-sub">A four-step process. Documented end-to-end.</div>

        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.step} className="process-step">
              <div className="n">
                <span className="bullet" />
                {step.step}
              </div>
              <h5>{step.title}</h5>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

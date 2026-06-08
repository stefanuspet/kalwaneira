import { processSteps } from '@/data/content'

export default function Process() {
  return (
    <section className="bg-paper py-[120px] sm:py-[72px]" id="process">
      <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">

        {/* Label row */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[10.5px] tracking-[0.18em] uppercase text-gold-deep font-medium"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            — How a shipment moves
          </span>
          <span
            className="text-[10.5px] tracking-[0.15em] text-muted font-medium"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            SECTION 03 / 03
          </span>
          <span className="flex-1 h-px bg-line" />
        </div>

        <div className="flex flex-col items-center text-center mb-[64px] gap-5">
          <h2
            className="font-extrabold leading-[1.05] tracking-[-0.03em] text-ink"
            style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
          >
            From{' '}
            <em className="not-italic text-red">archipelago</em>{' '}
            to worldwide.
          </h2>
          <p className="text-[16px] text-ink-soft font-normal leading-[1.6] max-w-[480px]">
            A four-step process. Documented end-to-end.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-4 gap-6 lg:grid-cols-2 sm:grid-cols-1">
          {processSteps.map((step, i) => (
            <div key={step.step} className="relative pl-6 border-l-2 border-line">
              {/* Bullet */}
              <span className="absolute left-[-5px] top-[2px] w-[8px] h-[8px] rounded-full bg-red border-2 border-paper" />

              {/* Step label */}
              <div
                className="text-[10px] tracking-[0.18em] uppercase text-muted mb-3 font-medium"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {step.step}
              </div>

              {/* Step number accent */}
              <div className="text-[48px] font-extrabold leading-none tracking-[-0.04em] text-line mb-3 select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <h5 className="text-[17px] font-bold text-ink tracking-[-0.015em] mb-3 leading-[1.2]">
                {step.title}
              </h5>
              <p className="text-[14px] text-ink-soft leading-[1.65]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

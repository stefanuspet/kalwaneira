import { processSteps } from '@/data/content'

export default function Process() {
  return (
    <section className="py-[120px] sm:py-[72px]" id="process" style={{ backgroundColor: '#F9F4F2' }}>
      <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">

        {/* Label row */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[10.5px] tracking-[0.18em] uppercase text-ink font-semibold"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            — How a shipment moves
          </span>
          <span
            className="text-[10.5px] tracking-[0.15em] text-ink/60 font-medium"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            SECTION 03 / 03
          </span>
          <span className="flex-1 h-px bg-ink/20" />
        </div>

        <div className="flex flex-col items-center text-center mb-[64px] gap-5">
          <h2
            className="font-extrabold leading-[1.05] tracking-[-0.03em] text-ink"
            style={{ fontSize: 'clamp(28px, 3.2vw, 46px)' }}
          >
            From{' '}
            <em className="not-italic text-ink font-extrabold underline decoration-ink/40 underline-offset-4">archipelago</em>{' '}
            to worldwide.
          </h2>
          <p className="text-[16px] text-ink/80 font-normal leading-[1.6] max-w-[480px]">
            A four-step process. Documented end-to-end.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-4 gap-6 lg:grid-cols-2 sm:grid-cols-1">
          {processSteps.map((step, i) => (
            <div key={step.step} className="relative pl-6 border-l-2 border-ink/30">
              {/* Bullet */}
              <span className="absolute left-[-5px] top-[2px] w-[8px] h-[8px] rounded-full bg-ink border-2 border-[#F9F4F2]" />

              {/* Step label */}
              <div
                className="text-[10px] tracking-[0.18em] uppercase text-ink font-semibold mb-3"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {step.step}
              </div>

              {/* Step number accent */}
              <div className="text-[48px] font-extrabold leading-none tracking-[-0.04em] text-ink/20 mb-3 select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <h5 className="text-[17px] font-bold text-ink tracking-[-0.015em] mb-3 leading-[1.2]">
                {step.title}
              </h5>
              <p className="text-[14px] text-ink/80 leading-[1.65]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

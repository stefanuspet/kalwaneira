import { pillars } from "@/data/content";

export default function About() {
  return (
    <section id="about">
      {/* Top — #DA6629 */}
      <div className="py-[120px] pb-[72px] sm:py-[72px] sm:pb-10" style={{ backgroundColor: '#DA6629' }}>
        <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">

          {/* Label row */}
          <div className="flex items-center gap-3 mb-10">
            <span
              className="text-[10.5px] tracking-[0.18em] uppercase text-ink font-semibold"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              — The Holding
            </span>
            <span
              className="text-[10.5px] tracking-[0.15em] text-ink/60 font-medium"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              SECTION 01 / 03
            </span>
            <span className="flex-1 h-px bg-ink/20" />
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center text-center mb-14 gap-5">
            <h2
              className="font-bold leading-[1.05] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}
            >
              An export house built for{" "}
              <em className="not-italic font-bold underline decoration-ink/40 underline-offset-4">
                enduring partnerships.
              </em>
            </h2>
            <p className="text-[16px] leading-[1.7] text-ink/80 font-normal max-w-[640px]">
              Kalwaneira Terra Prospera is an Indonesian export house. Under one
              parent, two specialist brands operate in tandem — each focused,
              independent in style, and held to the same standard of curation.
              Every batch is evaluated by hand. Every shipment documented to the last gram.
            </p>
            <a
              href="/nusateraso"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink border-b-2 border-ink/40 pb-px hover:opacity-70 transition-opacity duration-150 group"
            >
              Explore the brands{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
            </a>
          </div>

          {/* 4-image grid: 2 col x 2 row */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="h-[260px] rounded-[14px] overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7a3f0f 0%, #4a2005 100%)' }}
            >
              <span className="text-white/50 text-[11px] tracking-[0.15em] uppercase font-medium">Gambar Port · Export</span>
            </div>
            <div
              className="h-[260px] rounded-[14px] overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #5c3408 0%, #3a1f04 100%)' }}
            >
              <span className="text-white/50 text-[11px] tracking-[0.15em] uppercase font-medium">Gambar Quality Control</span>
            </div>
            <div
              className="h-[260px] rounded-[14px] overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #8a4e12 0%, #5c3408 100%)' }}
            >
              <span className="text-white/50 text-[11px] tracking-[0.15em] uppercase font-medium">Gambar Packaging</span>
            </div>
            <div
              className="h-[260px] rounded-[14px] overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6b3510 0%, #3f1e05 100%)' }}
            >
              <span className="text-white/50 text-[11px] tracking-[0.15em] uppercase font-medium">Gambar Business Meeting</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — #F9F4F2, pillars */}
      <div className="py-[72px] sm:py-[48px]" style={{ backgroundColor: '#F9F4F2' }}>
        <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-ink/15">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="flex flex-col gap-4 p-6 border-b border-r border-ink/15 last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
              >
                <div
                  className="w-11 h-11 rounded-[12px] text-white flex items-center justify-center text-[14px] font-bold tracking-[-0.01em] shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #DA6629 0%, #b84d1c 100%)",
                    boxShadow: "0 6px 14px -8px rgba(218,102,41,0.5)",
                  }}
                >
                  {pillar.num}
                </div>
                <div className="text-[17px] font-bold tracking-[-0.015em] text-ink">
                  {pillar.title}
                </div>
                <div className="text-[14px] text-ink-soft leading-[1.65] text-justify">
                  {pillar.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

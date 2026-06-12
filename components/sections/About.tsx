import { pillars } from "@/data/content";

export default function About() {
  return (
    <section className="bg-paper py-[120px] sm:py-[72px]" id="about">
      <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[10.5px] tracking-[0.18em] uppercase text-gold-deep font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            — The Holding
          </span>
          <span
            className="text-[10.5px] tracking-[0.15em] text-muted font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            SECTION 01 / 03
          </span>
          <span className="flex-1 h-px bg-line" />
        </div>

        {/* Heading — centered */}
        <div className="flex flex-col items-center text-center mb-14 gap-5">
          <h2
            className="font-bold leading-[1.05] tracking-[-0.03em] text-ink"
            style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
          >
            An export house built for{" "}
            <em className="not-italic text-red font-bold">
              enduring partnerships.
            </em>
          </h2>
          <p className="text-[16px] leading-[1.7] text-ink-soft font-normal max-w-200">
            Kalwaneira Terra Prospera is an Indonesian export house. Under one
            parent, two specialist brands operate in tandem, with each focused,
            independent in style, and held to the same standard of curation. We
            work directly with our suppliers across the Indonesian archipelago.
            Every batch is evaluated by hand. Every shipment is documented to
            the last gram.
          </p>
          <a
            href="/nusateraso"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-red border-b border-red/40 pb-px hover:border-red transition-colors duration-150 group"
          >
            Explore the brands{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
              →
            </span>
          </a>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-line">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="flex flex-col gap-4 p-6 border-b border-r border-line last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <div
                className="w-11 h-11 rounded-[12px] text-white flex items-center justify-center text-[14px] font-bold tracking-[-0.01em] shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-red) 0%, var(--color-red-deep) 100%)",
                  boxShadow: "0 6px 14px -8px rgba(225,29,42,0.5)",
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
    </section>
  );
}

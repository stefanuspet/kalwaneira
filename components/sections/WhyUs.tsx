import { whyCards } from "@/data/content";

export default function WhyUs() {
  return (
    <section
      className="relative py-[120px] sm:py-[72px] overflow-hidden"
      id="why"
      style={{ backgroundColor: "#D2C4B7" }}
    >
      <div className="relative max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[10.5px] tracking-[0.18em] uppercase text-ink/60 font-medium">
            — Why Buyers Stay
          </span>
          <span className="text-[10.5px] tracking-[0.15em] font-medium text-ink/40">
            SECTION 02 / 02
          </span>
          <span className="flex-1 h-px bg-ink/15" />
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-[72px] gap-5">
          <h2
            className="font-extrabold leading-[1.05] tracking-[-0.03em] text-ink"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}
          >
            Three reasons international buyers
            <br />
            <em className="not-italic text-red">return</em>.
          </h2>
          <p className="text-base leading-relaxed text-ink/65 max-w-[480px]">
            A short list. Easily compared. Difficult to imitate.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyCards.map((card) => (
            <div
              key={card.num}
              className="bg-white/40 border border-ink/10 rounded-2xl p-7 sm:p-5 flex flex-col gap-4 transition-all duration-[240ms] hover:bg-white/60 hover:border-ink/20"
            >
              <div className="text-[11px] tracking-[0.18em] uppercase text-red font-semibold">
                {card.num}
              </div>
              <h4 className="text-[18px] font-bold text-ink leading-[1.2] tracking-[-0.015em]">
                {card.title}
              </h4>
              <p className="text-sm leading-[1.65] text-ink/70">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

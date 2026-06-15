import { whyCards } from "@/data/content";

export default function WhyUs() {
  return (
    <section
      className="relative bg-red-deep text-paper py-[120px] sm:py-[72px] overflow-hidden"
      id="why"
    >
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(circle at 20% 10%, rgba(245,166,35,0.25) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 90%, rgba(245,166,35,0.18) 0%, transparent 50%)",
          ].join(", "),
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[10.5px] tracking-[0.18em] uppercase text-gold-soft font-medium">
            — Why Buyers Stay
          </span>
          <span className="text-[10.5px] tracking-[0.15em] font-medium text-paper/40">
            SECTION 02 / 02
          </span>
          <span className="flex-1 h-px bg-paper/15" />
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-[72px] gap-5">
          <h2
            className="font-extrabold leading-[1.05] tracking-[-0.03em] text-paper"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}
          >
            Three reasons international buyers
            <br />
            <em className="not-italic text-gold-soft">return</em>.
          </h2>
          <p className="text-base leading-relaxed text-paper/65 max-w-[480px]">
            A short list. Easily compared. Difficult to imitate.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyCards.map((card) => (
            <div
              key={card.num}
              className="bg-paper/7 border border-paper/12 rounded-2xl p-7 sm:p-5 flex flex-col gap-4 transition-all duration-[240ms] hover:bg-paper/11 hover:border-gold/35"
            >
              <div className="text-[11px] tracking-[0.18em] uppercase text-gold font-semibold">
                {card.num}
              </div>
              <h4 className="text-[18px] font-bold text-paper leading-[1.2] tracking-[-0.015em]">
                {card.title}
              </h4>
              <p className="text-sm leading-[1.65] text-paper/70">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { missionItems } from "@/data/content";

export default function VisionMission() {
  return (
    <section className="py-[120px] sm:py-[72px]" id="vm" style={{ backgroundColor: '#DEA475' }}>
      <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[10.5px] tracking-[0.18em] uppercase text-ink font-semibold"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            — Vision &amp; Mission
          </span>
          <span
            className="text-[10.5px] tracking-[0.15em] text-ink/60 font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            SECTION 02 / 03
          </span>
          <span className="flex-1 h-px bg-ink/20" />
        </div>

        {/* Heading — centered */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2
            className="font-extrabold leading-[1.05] tracking-[-0.03em] text-ink"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}
          >
            What we intend to <em className="not-italic text-ink font-extrabold underline decoration-ink/40 underline-offset-4">build</em>.
          </h2>
        </div>

        {/* Vision + mission */}
        <div className="max-w-[760px] mx-auto">
          <div>
            {/* Vision */}
            <div className="py-10 border-t border-ink/20">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[10.5px] tracking-[0.12em] uppercase font-semibold text-white bg-red border border-transparent mb-5 shadow-[0_4px_14px_-6px_rgba(225,29,42,0.5)]">
                Vision
              </div>
              <h3 className="font-bold text-[22px] tracking-[-0.02em] text-ink mb-4 leading-[1.2]">
                A trusted Indonesian export partner.
              </h3>
              <p className="text-[16px] text-ink/80 leading-[1.7] max-w-200 italic text-justify">
                &ldquo;To be recognised globally for consistency, transparency,
                and long-term reliability - building trust across markets and
                generations.&rdquo;
              </p>
            </div>

            {/* Mission */}
            <div className="py-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[10.5px] tracking-[0.12em] uppercase font-semibold text-white bg-red border border-transparent mb-5 shadow-[0_4px_14px_-6px_rgba(225,29,42,0.5)]">
                Mission · Five quiet commitments
              </div>
              <div className="flex flex-col gap-0">
                {missionItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid gap-5 py-5 border-b border-ink/20 items-start"
                    style={{ gridTemplateColumns: "52px 1fr" }}
                  >
                    <div
                      className="text-[10.5px] tracking-[0.12em] uppercase text-ink font-semibold pt-[2px]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.id}
                    </div>
                    <p className="text-[15px] text-ink/80 leading-[1.65] text-justify">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

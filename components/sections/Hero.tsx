import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-svh flex items-center"
      id="top"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: [
            "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.60) 60%, rgba(0,0,0,0.35) 100%)",
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
          ].join(", "),
        }}
      />

      <div className="relative z-[2] w-full max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5 py-[120px] sm:py-20">
        <div className="max-w-[680px]">
          {/* Heading */}
          <h1
            className="font-extrabold leading-[0.96] tracking-[-0.035em] text-paper"
            style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
          >
            The <em className="not-italic text-red">archipelago</em>,<br />
            carefully
            <br />
            delivered.
            <span
              className="inline-block align-middle mb-3.5 mr-3.5 h-1 rounded-sm"
              style={{
                width: "64px",
                background: "linear-gradient(90deg, #F5A623 0%, #C2870A 100%)",
              }}
            />
          </h1>

          {/* Body + CTA */}
          <div className="mt-12 flex flex-col gap-8">
            <p className="max-w-[520px] text-base leading-[1.7] text-white/90">
              PT Kalwaneira Terra Prospera is an Indonesian export house
              curating the finest of the soil and the sea for international
              buyers, uniting two brands under a single standard of{" "}
              <em className="italic text-paper">precision over volume</em>.
            </p>

            <div className="flex gap-3 flex-wrap">
              {/* Primary CTA */}
              <a
                href="#houses"
                className="inline-flex items-center gap-2.5 px-[22px] py-3 rounded-full text-[13px] font-semibold text-white bg-red border border-transparent transition-all duration-200 hover:bg-red-deep hover:-translate-y-px shadow-[0_4px_14px_-6px_rgba(225,29,42,0.5)] group"
              >
                Meet our brands
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                  →
                </span>
              </a>

              {/* Ghost CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-[22px] py-3 rounded-full text-[13px] font-semibold text-ink bg-paper-soft border border-line transition-all duration-200 hover:border-ink group"
              >
                Request a sample
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

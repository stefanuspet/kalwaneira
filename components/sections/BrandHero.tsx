import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/data/brands";

export default function BrandHero({ brand }: { brand: Brand }) {
  const isSea = brand.variant === "sea";

  const visStyle = isSea
    ? {
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(86,165,214,0.55) 0%, transparent 60%),
          repeating-linear-gradient(180deg, transparent 0 8px, rgba(255,255,255,0.04) 8px 9px),
          linear-gradient(180deg, #1D6FA1 0%, #0E3A5C 100%)
        `,
      }
    : {
        background: `
          radial-gradient(ellipse at 70% 80%, rgba(245,166,35,0.55) 0%, transparent 60%),
          repeating-linear-gradient(135deg, transparent 0 10px, rgba(255,255,255,0.04) 10px 11px),
          linear-gradient(180deg, #C2870A 0%, #5A3D03 100%)
        `,
      };

  return (
    <section
      className="bg-ink text-paper py-[120px] sm:py-[72px] relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 15% 15%, ${isSea ? "rgba(29,111,161,0.15)" : "rgba(225,29,42,0.10)"} 0%, transparent 45%),
          radial-gradient(circle at 85% 85%, ${isSea ? "rgba(86,165,214,0.10)" : "rgba(245,166,35,0.10)"} 0%, transparent 45%),
          #1A1A1A
        `,
      }}
    >
      <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-14">
          <span
            className="inline-flex items-center gap-2 px-[14px] py-[6px] border border-paper/20 rounded-full text-[9.5px] tracking-[0.18em] uppercase font-medium text-paper/80"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full"
              style={
                isSea
                  ? {
                      background: "var(--color-sea-soft)",
                      boxShadow: "0 0 8px var(--color-sea-soft)",
                    }
                  : {
                      background: "var(--color-gold)",
                      boxShadow: "0 0 8px var(--color-gold)",
                    }
              }
            />
            {brand.chip}
          </span>
          <span
            className="text-[10.5px] tracking-[0.18em] font-medium text-paper/40"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {brand.index}
          </span>
          <span className="flex-1 h-px bg-paper/10" />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[88px] items-center">
          {/* Left */}
          <div>
            <div
              className="font-extrabold leading-none tracking-[-0.04em] text-paper mb-4"
              style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
            >
              {brand.name}
            </div>
            <p
              className="font-medium text-[20px] mb-6 tracking-[-0.01em]"
              style={{
                color: isSea ? "var(--color-sea-soft)" : "var(--color-gold)",
              }}
            >
              {brand.tagline}
            </p>
            <p className="text-[16px] leading-[1.7] mb-8 max-w-[460px] text-paper/75">
              {brand.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-[6px] mb-8">
              {brand.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-[11px] py-[6px] bg-paper/8 border border-paper/14 rounded-full text-paper/85"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap">
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-[22px] py-3 rounded-full text-[13px] font-semibold text-white bg-red border border-transparent transition-all duration-200 hover:bg-red-deep hover:-translate-y-px shadow-[0_4px_14px_-6px_rgba(225,29,42,0.5)] group"
              >
                Visit {brand.domain}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                  ↗
                </span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-[22px] py-3 rounded-full text-[13px] font-semibold bg-paper/10 text-paper border border-paper/20 transition-all duration-200 hover:bg-paper/15"
              >
                Request a sample
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div
            className="h-[420px] sm:h-[260px] rounded-[16px] overflow-hidden relative flex items-center justify-center"
            style={brand.image ? undefined : visStyle}
          >
            {brand.image ? (
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            ) : (
              <>
                <span
                  className="absolute top-0 left-0 text-[9.5px] tracking-[0.18em] uppercase p-[18px] font-medium text-paper/70"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {brand.visCornerTl}
                </span>
                <span
                  className="font-extrabold tracking-[-0.04em] text-white"
                  style={{
                    fontSize: "clamp(48px, 6vw, 80px)",
                    textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  {brand.name}
                </span>
                <span
                  className="absolute bottom-0 right-0 text-[9.5px] tracking-[0.18em] uppercase p-[18px] font-medium text-paper/70"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {brand.visCornerBr}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

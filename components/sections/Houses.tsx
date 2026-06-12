import Image from "next/image";
import Link from "next/link";
import { zanetuno, nusateraso } from "@/data/brands";
import type { Brand } from "@/data/brands";

function HouseCard({ house }: { house: Brand }) {
  return (
    <article
      className={[
        "relative flex flex-col p-10 min-h-[600px] rounded-2xl border transition-all duration-[320ms] cursor-pointer",
        "hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]",
        house.variant === "sea"
          ? "bg-[#1a2535] border-paper/6"
          : "bg-[#232020] border-paper/6",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-paper/20 rounded-full text-[10px] tracking-[0.15em] uppercase text-paper/70 font-medium">
          <span className="w-[5px] h-[5px] rounded-full bg-gold" />
          {house.chip}
        </span>
        <span className="text-[10.5px] tracking-[0.18em] text-paper/40 font-medium">
          {house.index}
        </span>
      </div>

      {/* Visual panel */}
      <div
        className={[
          "h-[220px] rounded-xl mb-7 relative overflow-hidden border border-paper/6",
          !house.image
            ? house.variant === "sea"
              ? "bg-[linear-gradient(135deg,#1D6FA1_0%,#0E3A5C_100%)] flex items-center justify-center"
              : "bg-[linear-gradient(135deg,#C2870A_0%,#6B3E00_100%)] flex items-center justify-center"
            : "",
        ].join(" ")}
      >
        {house.image ? (
          <Image
            src={house.image}
            alt={house.name}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        ) : (
          <>
            <span className="absolute top-3 left-3 text-[9px] tracking-[0.18em] text-paper/50 uppercase font-medium">
              {house.visCornerTl}
            </span>
            <span className="text-[64px] font-extrabold tracking-[-0.04em] text-paper/12 select-none">
              {house.name}
            </span>
            <span className="absolute bottom-3 right-3 text-[9px] tracking-[0.18em] text-paper/50 uppercase font-medium">
              {house.visCornerBr}
            </span>
          </>
        )}
      </div>

      {/* Name & tagline */}
      <div className="text-[28px] font-extrabold text-paper tracking-[-0.025em] leading-[1.1] mb-2">
        {house.name}
      </div>
      <div className="text-[13px] tracking-[0.08em] uppercase text-gold mb-4 font-medium">
        {house.tagline}
      </div>
      <p className="text-sm text-paper/65 leading-[1.7] mb-6 flex-1">
        {house.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {house.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-[5px] border border-paper/12 rounded-full text-[10.5px] tracking-[0.06em] text-paper/55 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-5 border-t border-paper/8">
        <a
          href={house.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-[3px]"
        >
          <span className="text-[10px] tracking-[0.12em] uppercase text-paper/40 font-medium">
            Visit site
          </span>
          <span className="text-[12px] text-paper/60 hover:text-gold transition-colors duration-[180ms]">
            {house.domain} ↗
          </span>
        </a>
        <Link
          href={house.internalHref}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[12px] font-semibold bg-gold text-ink border border-transparent transition-all duration-200 hover:bg-gold-deep hover:text-white shadow-[0_4px_14px_-6px_rgba(245,166,35,0.55)] group"
        >
          Explore{" "}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function Houses() {
  return (
    <section
      className="relative bg-ink text-paper py-[120px] sm:py-[72px] overflow-hidden"
      id="houses"
    >
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(circle at 15% 15%, rgba(225,29,42,0.10) 0%, transparent 45%)",
            "radial-gradient(circle at 85% 85%, rgba(245,166,35,0.10) 0%, transparent 45%)",
          ].join(", "),
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10.5px] tracking-[0.18em] uppercase font-medium text-paper/60">
            — Two houses, one standard
          </span>
          <span className="text-[10.5px] tracking-[0.15em] font-medium text-paper/50">
            SECTION 01 / 02
          </span>
          <span className="flex-1 h-px bg-paper/10" />
        </div>

        {/* Intro */}
        <div className="flex flex-col items-center text-center py-12 gap-5">
          <h2
            className="font-extrabold leading-[1.05] tracking-[-0.035em] text-paper"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            Two specialist brands.
            <br />
            <em className="not-italic text-gold">One trading house.</em>
          </h2>
          <p className="text-[18px] text-paper/70 max-w-[560px] leading-[1.65]">
            Each operates with its own catalogue, voice, and origin network,
            while being held together under the discipline of PT Kalwaneira
            Terra Prospera.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HouseCard house={nusateraso} />
          <HouseCard house={zanetuno} />
        </div>
      </div>
    </section>
  );
}

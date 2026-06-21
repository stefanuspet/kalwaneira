import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-svh flex items-center justify-center"
      id="top"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero1.jpeg"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative z-[2] w-full max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5 py-[120px] sm:py-20 flex flex-col items-center text-center">
        {/* Heading */}
        <h1
          className="font-extrabold leading-[1.1] tracking-[-0.035em] text-white"
          style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}
        >
          Authentic products from the archipelago,
          <br />
          managed with precise, high quality <br />
          distribution.
        </h1>

        {/* Body + CTA */}
        <div className="mt-10 flex flex-col items-center gap-8">
          <p
            className="max-w-[560px] leading-[1.7] text-white"
            style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
          >
            PT Kalwaneira Terra Prospera adalah export house Indonesia yang
            menghadirkan produk terbaik dari darat dan laut untuk pembeli
            internasional — dua brand, satu standar:{" "}
            <em className="italic">precision over volume</em>.
          </p>

          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="#houses"
              className="inline-flex items-center gap-2.5 px-[22px] py-3 rounded-full text-[13px] font-semibold text-white bg-red border border-transparent transition-all duration-200 hover:bg-red-deep hover:-translate-y-px shadow-[0_4px_14px_-6px_rgba(225,29,42,0.5)] group"
            >
              Meet our brands
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                →
              </span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-[22px] py-3 rounded-full text-[13px] font-semibold text-white border border-white/30 transition-all duration-200 hover:border-white group"
            >
              Request a sample
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

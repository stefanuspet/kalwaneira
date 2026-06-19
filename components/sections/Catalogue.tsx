"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/data/products";
import { nusaterasoGroups } from "@/data/productGroups";
import type { ProductBrand, ProductGroup } from "@/types";

const visBg: Record<string, string> = {
  vanilla: "linear-gradient(160deg, #FFE9B8 0%, #F5BC52 100%)",
  coffee: "linear-gradient(160deg, #4A2C11 0%, #A0622D 100%)",
  spice: "linear-gradient(160deg, #8B2500 0%, #D4540E 100%)",
  tuna: "linear-gradient(160deg, #1D6FA1 0%, #0E3A5C 100%)",
  shrimp: "linear-gradient(160deg, #D15A20 0%, #9B3C0F 100%)",
  squid: "linear-gradient(160deg, #223A4E 0%, #405F73 100%)",
  sweet: "linear-gradient(160deg, #6B3E00 0%, #C2870A 100%)",
};

function NusaterasoGroups() {
  const [active, setActive] = useState<string | null>(null);
  const activeGroup = nusaterasoGroups.find((g) => g.id === active) ?? null;

  return (
    <div>
      {/* 4 group cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:grid-cols-1 sm:gap-3">
        {nusaterasoGroups.map((group: ProductGroup) => {
          const isActive = active === group.id;
          return (
            <button
              key={group.id}
              onClick={() => setActive(isActive ? null : group.id)}
              className={[
                "text-left rounded-[14px] border overflow-hidden transition-all duration-[240ms] hover:-translate-y-0.5",
                isActive
                  ? "border-gold shadow-[0_8px_24px_-8px_rgba(245,166,35,0.35)]"
                  : "border-line hover:border-gold/50 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)]",
              ].join(" ")}
            >
              {/* Image */}
              <div className="h-[160px] relative overflow-hidden bg-line">
                {group.image && (
                  <Image
                    src={group.image}
                    alt={group.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                )}
                {/* Badge */}
                <span className="absolute top-3 left-3 inline-flex items-center gap-[6px] px-[10px] py-[5px] rounded-full text-[9px] tracking-[0.15em] uppercase font-medium bg-[rgba(194,135,10,0.85)] text-white z-10">
                  <span className="w-[5px] h-[5px] rounded-full bg-gold-soft" />
                  Nusateraso
                </span>
              </div>

              {/* Info */}
              <div className="p-4 bg-paper-soft">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-[15px] font-bold text-ink tracking-[-0.01em]">
                    {group.name}
                  </div>
                  <span
                    className={[
                      "text-[11px] font-bold transition-transform duration-200",
                      isActive ? "text-gold rotate-180" : "text-muted",
                    ].join(" ")}
                  >
                    ↓
                  </span>
                </div>
                <p className="text-[12px] text-ink-soft leading-[1.6]">
                  {group.desc}
                </p>
                <div className="mt-2.5 text-[10px] tracking-[0.08em] uppercase text-gold-deep font-semibold">
                  {group.subs.length} variants →
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Sub-products panel */}
      {activeGroup && (
        <div className="mt-6 border border-gold/30 rounded-[16px] bg-gold-wash/40 p-6 sm:p-4">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10.5px] tracking-[0.18em] uppercase text-gold-deep font-semibold">
              {activeGroup.name}
            </span>
            <span className="flex-1 h-px bg-gold/20" />
            <button
              onClick={() => setActive(null)}
              className="text-[11px] text-muted hover:text-ink transition-colors"
            >
              Close ✕
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-3">
            {activeGroup.subs.map((sub) => (
              <div
                key={sub.id}
                className="bg-paper-soft border border-line rounded-[12px] overflow-hidden flex flex-col"
              >
                {/* Sub-product image */}
                <div className="h-[180px] relative overflow-hidden bg-line">
                  {sub.image && (
                    <Image
                      src={sub.image}
                      alt={sub.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  )}
                  {sub.note && (
                    <span className="absolute top-2 right-2 text-[9px] tracking-[0.12em] uppercase font-semibold text-gold-deep bg-gold-wash border border-gold/20 rounded-full px-2 py-0.5 z-10">
                      {sub.note}
                    </span>
                  )}
                </div>
                {/* Info */}
                <div className="p-3 flex flex-col gap-1.5 flex-1">
                  <div className="text-[13px] font-bold text-ink tracking-[-0.01em] leading-[1.2]">
                    {sub.name}
                  </div>
                  <p className="text-[11.5px] text-ink-soft leading-[1.6]">
                    {sub.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Catalogue({ brand }: { brand?: ProductBrand }) {
  const visible = brand ? products.filter((p) => p.brand === brand) : products;
  const isNusateraso = brand === "nusateraso";

  return (
    <section
      className="py-[120px] sm:py-[72px]"
      id="catalog"
      style={{ backgroundColor: isNusateraso ? "#F9F4F2" : "#ffffff" }}
    >
      <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className={`text-[10.5px] tracking-[0.18em] uppercase font-medium ${isNusateraso ? "text-ink" : "text-gold-deep"}`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            — Selected Catalogue
          </span>
          <span
            className={`text-[10.5px] tracking-[0.15em] font-medium ${isNusateraso ? "text-ink/60" : "text-muted"}`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            SECTION 02 / 02
          </span>
          <span
            className={`flex-1 h-px ${isNusateraso ? "bg-ink/20" : "bg-line"}`}
          />
        </div>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[60px]">
          <h2
            className="font-extrabold leading-[1.05] tracking-[-0.035em] text-ink"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}
          >
            A working selection
            <br />
            of what we ship.
          </h2>
        </div>

        {/* Nusateraso: expandable groups */}
        {brand === "nusateraso" ? (
          <NusaterasoGroups />
        ) : (
          /* Zanetuno: flat product cards */
          <div className="grid grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {visible.map((product) => (
              <article
                key={product.id}
                className="bg-paper-soft border border-line rounded-[14px] overflow-hidden transition-all duration-[240ms] hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.15)] hover:border-red/20"
              >
                {/* Visual */}
                <div
                  className="h-[200px] relative flex items-center justify-center overflow-hidden"
                  style={
                    product.image
                      ? undefined
                      : {
                          background:
                            visBg[product.visualClass] ?? visBg.vanilla,
                        }
                  }
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  ) : (
                    <span
                      className="font-bold text-[13px] tracking-[0.08em] uppercase text-white/55"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      — {product.visualClass} —
                    </span>
                  )}

                  {/* Brand badge */}
                  <span
                    className="absolute top-3 left-3 inline-flex items-center gap-[6px] px-[10px] py-[5px] rounded-full text-[9px] tracking-[0.15em] uppercase font-medium bg-[rgba(29,111,161,0.85)] text-white z-10"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-sea-soft" />
                    Zanetuno
                  </span>

                  {/* Grade */}
                  <span
                    className="absolute bottom-3 right-3 text-[9px] tracking-[0.12em] uppercase text-white/85 font-medium z-10"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {product.grade}
                  </span>
                </div>

                {/* Meta */}
                <div className="p-4 flex flex-col gap-2">
                  <div className="text-[15px] font-bold text-ink tracking-[-0.01em] leading-[1.2]">
                    {product.name}
                  </div>
                  <div
                    className="text-[11px] tracking-[0.08em] uppercase text-muted font-medium"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {product.origin}
                  </div>
                  {product.desc && (
                    <p className="text-[12px] text-ink-soft leading-[1.6] mt-0.5">
                      {product.desc}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-1 pt-3 border-t border-line">
                    <span
                      className="text-[10.5px] tracking-[0.05em] text-muted font-medium"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {product.attrKey}
                    </span>
                    <span
                      className="text-[11px] font-semibold text-ink-soft"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {product.attrValue}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

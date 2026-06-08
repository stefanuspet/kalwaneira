import Image from 'next/image'
import { products } from '@/data/products'
import type { ProductBrand } from '@/types'

const visBg: Record<string, string> = {
  vanilla: 'linear-gradient(160deg, #FFE9B8 0%, #F5BC52 100%)',
  coffee:  'linear-gradient(160deg, #4A2C11 0%, #A0622D 100%)',
  spice:   'linear-gradient(160deg, #8B2500 0%, #D4540E 100%)',
  tuna:    'linear-gradient(160deg, #1D6FA1 0%, #0E3A5C 100%)',
  shrimp:  'linear-gradient(160deg, #D15A20 0%, #9B3C0F 100%)',
  squid:   'linear-gradient(160deg, #223A4E 0%, #405F73 100%)',
  sweet:   'linear-gradient(160deg, #6B3E00 0%, #C2870A 100%)',
}

export default function Catalogue({ brand }: { brand?: ProductBrand }) {
  const visible = brand ? products.filter((p) => p.brand === brand) : products

  return (
    <section className="bg-paper-soft py-[120px] sm:py-[72px]" id="catalog">
      <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">

        {/* Label row */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[10.5px] tracking-[0.18em] uppercase text-gold-deep font-medium"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            — Selected Catalogue
          </span>
          <span
            className="text-[10.5px] tracking-[0.15em] text-muted font-medium"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            SECTION 02 / 02
          </span>
          <span className="flex-1 h-px bg-line" />
        </div>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[60px]">
          <h2
            className="font-extrabold leading-[1.05] tracking-[-0.035em] text-ink"
            style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
          >
            A working selection<br />of what we ship.
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {visible.map((product) => (
            <article
              key={product.id}
              className="bg-paper-soft border border-line rounded-[14px] overflow-hidden transition-all duration-[240ms] hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.15)] hover:border-red/20"
            >
              {/* Visual */}
              <div
                className="h-[200px] relative flex items-center justify-center overflow-hidden"
                style={product.image ? undefined : { background: visBg[product.visualClass] ?? visBg.vanilla }}
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                ) : (
                  <span
                    className="font-bold text-[13px] tracking-[0.08em] uppercase text-white/55"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    — {product.visualClass} —
                  </span>
                )}

                {/* Brand badge */}
                <span
                  className={[
                    'absolute top-3 left-3 inline-flex items-center gap-[6px] px-[10px] py-[5px] rounded-full text-[9px] tracking-[0.15em] uppercase font-medium z-10',
                    product.cat === 'sea'
                      ? 'bg-[rgba(29,111,161,0.85)] text-white'
                      : 'bg-[rgba(194,135,10,0.85)] text-white',
                  ].join(' ')}
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  <span
                    className={[
                      'w-[5px] h-[5px] rounded-full',
                      product.cat === 'sea' ? 'bg-sea-soft' : 'bg-gold-soft',
                    ].join(' ')}
                  />
                  {product.brand === 'nusateraso' ? 'Nusateraso' : 'Zanetuno'}
                </span>

                {/* Grade */}
                <span
                  className="absolute bottom-3 right-3 text-[9px] tracking-[0.12em] uppercase text-white/85 font-medium z-10"
                  style={{ fontFamily: 'var(--font-mono)' }}
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
                  style={{ fontFamily: 'var(--font-mono)' }}
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
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {product.attrKey}
                  </span>
                  <span
                    className="text-[11px] font-semibold text-ink-soft"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {product.attrValue}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

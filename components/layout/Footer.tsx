import Image from "next/image";
import Link from "next/link";

const footerCols = [
  {
    title: "The house",
    links: [
      { label: "About", href: "/about" },
      { label: "Vision & mission", href: "/about#vm" },
      { label: "Process", href: "/about#process" },
      { label: "Why us", href: "/#why" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "Nusateraso", href: "/nusateraso" },
      { label: "nusateraso.com ↗", href: "https://www.nusateraso.com", external: true },
      { label: "Zanetuno", href: "/zanetuno" },
      { label: "zanetuno.com ↗", href: "https://www.zanetuno.com", external: true },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Enquiry desk", href: "/contact" },
      { label: "info@kalwaneira.com", href: "mailto:info@kalwaneira.com" },
      { label: "+62 822 5840 2154", href: "tel:+6282258402154" },
    ],
  },
];

export default function Footer({ variant = 'dark' }: { variant?: 'dark' | 'warm' }) {
  const isDark = variant === 'dark'

  const linkCls = isDark
    ? "text-sm text-paper/70 hover:text-gold transition-colors duration-[180ms]"
    : "text-sm text-ink/75 hover:text-ink transition-colors duration-[180ms]"

  return (
    <footer
      className={`relative pt-24 pb-10 overflow-hidden ${isDark ? 'bg-ink text-paper' : 'text-ink'}`}
      style={isDark ? undefined : { backgroundColor: '#D48441' }}
    >
      {/* Top gradient rule */}
      <div
        className="absolute top-0 inset-x-0 h-1"
        style={{
          background: "linear-gradient(90deg, #E11D2A 0%, #F5A623 50%, #E11D2A 100%)",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
        {/* Top grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-16 border-b ${isDark ? 'border-paper/10' : 'border-ink/15'}`}>
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Image
              src={isDark ? "/images/Logo-transparent.png" : "/images/Logo.png"}
              alt="Kalwaneira Terra Prospera"
              width={88}
              height={88}
              className="object-contain"
            />
            <p className={`text-[15px] max-w-[300px] leading-relaxed ${isDark ? 'text-paper/65' : 'text-ink/80'}`}>
              A Global Trading House. Connecting Markets, Creating Value.
            </p>
            <p className={`text-[11px] tracking-[0.1em] leading-[1.8] font-medium uppercase ${isDark ? 'text-paper/50' : 'text-ink/60'}`}>
              PT Kalwaneira Terra Prospera
              <br />
              Jakarta · Indonesia · GMT+7
            </p>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h6 className={`text-[10px] tracking-[0.2em] uppercase font-semibold mb-[18px] ${isDark ? 'text-gold' : 'text-ink'}`}>
                {col.title}
              </h6>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkCls}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 flex-wrap gap-3 sm:flex-col sm:items-start">
          <span className={`text-[11px] tracking-[0.05em] ${isDark ? 'text-paper/40' : 'text-ink/60'}`}>
            © 2026 PT Kalwaneira Terra Prospera — All rights reserved.
          </span>
          <span className={`text-[11px] tracking-[0.05em] ${isDark ? 'text-paper/40' : 'text-ink/60'}`}>
            <a href="https://kalwaneira.com" className={isDark ? 'hover:text-gold transition-colors duration-[180ms]' : 'hover:text-ink transition-colors duration-[180ms]'}>
              kalwaneira.com
            </a>
            {" · "}
            <a href="https://www.zanetuno.com" target="_blank" rel="noopener noreferrer" className={isDark ? 'hover:text-gold transition-colors duration-[180ms]' : 'hover:text-ink transition-colors duration-[180ms]'}>
              zanetuno.com
            </a>
            {" · "}
            <a href="https://www.nusateraso.com" target="_blank" rel="noopener noreferrer" className={isDark ? 'hover:text-gold transition-colors duration-[180ms]' : 'hover:text-ink transition-colors duration-[180ms]'}>
              nusateraso.com
            </a>
          </span>
          <span className={`text-[10px] tracking-[0.05em] ${isDark ? 'text-paper/30' : 'text-ink/50'}`}>
            Website by{" "}
            <a
              href="https://stefra.id"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-2 transition-colors duration-[180ms] ${isDark ? 'hover:text-gold/80 decoration-paper/20' : 'hover:text-ink decoration-ink/20'}`}
            >
              stefra.id
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

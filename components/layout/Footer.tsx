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
      { label: "+62 813 1363 352", href: "tel:+628131363352" },
    ],
  },
];

const BG = "#D2C4B7";
const TEXT = "#4A3732";

export default function Footer({ variant = 'dark' }: { variant?: 'dark' | 'warm' }) {
  return (
    <footer
      className="relative pt-24 pb-10 overflow-hidden"
      style={{ backgroundColor: BG, color: TEXT }}
    >

      <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-16 border-b" style={{ borderColor: `${TEXT}20` }}>
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/Logo.png"
              alt="Kalwaneira Terra Prospera"
              width={132}
              height={132}
              className="object-contain"
            />
            <p className="text-[15px] max-w-[300px] leading-relaxed font-bold" style={{ color: TEXT }}>
              A Global Trading House. Connecting Markets, Creating Value.
            </p>
            <p className="text-[11px] tracking-[0.1em] leading-[1.8] font-bold uppercase" style={{ color: TEXT }}>
              PT Kalwaneira Terra Prospera
              <br />
              Jakarta · Indonesia · GMT+7
            </p>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h6 className="text-[10px] tracking-[0.2em] uppercase font-bold mb-[18px]" style={{ color: TEXT }}>
                {col.title}
              </h6>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold transition-colors duration-[180ms] hover:opacity-70"
                        style={{ color: TEXT }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm font-bold transition-colors duration-[180ms] hover:opacity-70"
                        style={{ color: TEXT }}
                      >
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
          <span className="text-[11px] tracking-[0.05em] font-bold" style={{ color: TEXT }}>
            © 2026 PT Kalwaneira Terra Prospera — All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

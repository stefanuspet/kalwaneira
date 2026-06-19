'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const id = setTimeout(() => setMenuOpen(false), 0)
    return () => clearTimeout(id)
  }, [pathname])

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Sticky nav bar — backdrop-blur is scoped here, no fixed children inside */}
      <div className="sticky top-0 z-50">
        <div
          className={[
            'border-b transition-[border-color,background-color] duration-[280ms]',
            'backdrop-blur-md [-webkit-backdrop-filter:blur(14px)]',
            scrolled ? 'bg-paper/95 border-line' : 'bg-paper/85 border-transparent',
          ].join(' ')}
        >
          <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
            <nav
              className="flex items-center justify-between h-[76px]"
              aria-label="Primary"
            >
              {/* Brand */}
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/images/Logo-transparent.png"
                  alt="KTP"
                  width={40}
                  height={40}
                  className="object-contain shrink-0"
                  priority
                />
                <span className="flex flex-col gap-[2px]">
                  <span className="font-bold text-[16px] text-ink tracking-[-0.015em] leading-none">
                    Kalwaneira
                  </span>
                  <span className="hidden lg:block text-[9.5px] tracking-[0.18em] text-muted uppercase leading-none whitespace-nowrap font-medium">
                    PT Kalwaneira Terra Prospera
                  </span>
                </span>
              </Link>

              {/* Desktop links */}
              <ul className="hidden lg:flex items-center justify-center gap-9 flex-1">
                {navLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href)
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={[
                          'relative text-[13.5px] font-medium tracking-[0.005em] py-1.5 whitespace-nowrap transition-colors duration-200',
                          'after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2',
                          'after:w-[18px] after:h-0.5 after:rounded-sm after:bg-red',
                          'after:transition-transform after:duration-[240ms]',
                          isActive
                            ? 'text-red after:scale-x-100'
                            : 'text-ink-soft hover:text-red after:scale-x-0 hover:after:scale-x-100',
                        ].join(' ')}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="hidden lg:inline-flex items-center gap-2.5 px-[22px] py-3 text-[13px] font-semibold tracking-[0.005em] rounded-full bg-red text-white border border-transparent transition-all duration-200 hover:bg-red-deep hover:-translate-y-px shadow-[0_4px_14px_-6px_rgba(225,29,42,0.5)] hover:shadow-[0_6px_20px_-6px_rgba(225,29,42,0.55)] group"
                >
                  Enquire <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
                </Link>

                {/* Hamburger */}
                <button
                  className="flex lg:hidden flex-col justify-center gap-[5px] p-2 w-10 h-10"
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  <span className={`block w-[22px] h-[2px] bg-ink rounded-sm transition-all duration-200 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                  <span className={`block w-[22px] h-[2px] bg-ink rounded-sm transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                  <span className={`block w-[22px] h-[2px] bg-ink rounded-sm transition-all duration-200 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile drawer — sibling of backdrop div, so fixed works correctly */}
        {menuOpen && (
          <div
            className="fixed inset-x-0 bottom-0 bg-paper z-40 flex flex-col gap-8 p-8 border-t border-line overflow-y-auto"
            style={{ top: '76px' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[22px] font-semibold text-ink py-4 border-b border-line tracking-[-0.02em] hover:text-red transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-[22px] py-3 text-[13px] font-semibold rounded-full bg-red text-white transition-all duration-200 hover:bg-red-deep group w-fit"
            >
              Enquire <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
            </Link>
          </div>
        )}
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-ink/20"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { navLinks } from '@/data/content'
import { useScrollSpy } from '@/lib/hooks/useScrollSpy'

const SECTION_IDS = ['about', 'houses', 'catalog', 'vm', 'process']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS, 120)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close drawer on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <div className={`nav-wrap${scrolled ? ' scrolled' : ''}`} id="navWrap">
      <nav className="nav" aria-label="Primary">
        <a href="#top" className="nav-brand" onClick={() => setMenuOpen(false)}>
          <span className="nav-mark"><span>K</span></span>
          <span className="nav-brand-text">
            <span className="nav-brand-name">Kalwaneira</span>
            <span className="nav-brand-sub">PT Terra Prospera</span>
          </span>
        </a>

        <ul className="nav-links" aria-label="Navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeId === sectionId ? 'active' : undefined}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="nav-actions">
          <div className="nav-lang">
            <span className="dot" />
            EN · ID
          </div>
          <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Enquire <span className="arrow">→</span>
          </a>
          <button
            className="nav-hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Enquire <span className="arrow">→</span>
          </a>
        </div>
      )}
    </div>
  )
}

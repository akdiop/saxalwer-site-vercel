'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Language } from '@/lib/translations'

interface Props {
  language: Language
}

const navLinks = [
  { href: '/',                     fr: 'Accueil' },
  { href: '/a-propos',             fr: 'À propos' },
  { href: '/application',          fr: "L'application" },
  { href: '/ressources',           fr: 'Ressources' },
  { href: '/recherche-impact',     fr: 'Recherche & impact' },
  { href: '/participer-aux-tests', fr: 'Participer' },
  { href: '/partenaires',          fr: 'Partenaires' },
  { href: '/contact',              fr: 'Contact' },
]

export default function Nav({ language }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() ?? '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  // Ferme le menu au changement de route
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F1E6]/96 backdrop-blur-md shadow-[0_1px_0_rgba(26,60,52,0.08)]'
            : 'bg-[#F5F1E6]/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[4.5rem] flex items-center justify-between gap-6">

          {/* ── Logo texte ── */}
          <Link
            href="/"
            className="font-medium uppercase tracking-[0.18em] text-[#4A2F27] text-[11px] shrink-0 hover:text-[#A65D40] transition-colors duration-200"
          >
            SaxalWér
          </Link>

          {/* ── Nav desktop ── */}
          <DesktopNav pathname={pathname} />

          {/* ── Droite desktop : CTAs ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link href="/partenaires" className="btn-secondary !py-2 !px-5 !text-xs">
              Devenir partenaire
            </Link>

            <Link href="/participer-aux-tests" className="btn-primary !py-2 !px-5 !text-xs">
              Participer aux tests
            </Link>
          </div>

          {/* ── Burger mobile ── */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1 shrink-0"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-5 h-px bg-[#4A2F27] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-[#4A2F27] transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-px bg-[#4A2F27] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* ── Menu mobile ── */}
      <MobileMenu
        open={menuOpen}
        pathname={pathname}
        language={language}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}

/* ────────────────────────────────────────────
   Navigation desktop
   ──────────────────────────────────────────── */
function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">
      {navLinks.map(link => {
        const isActive = link.href === '/'
          ? pathname === '/'
          : pathname.startsWith(link.href)
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[11px] tracking-wide transition-colors duration-200 pb-px whitespace-nowrap ${
              isActive
                ? 'text-[#1A3C34] font-medium border-b border-[#A65D40]'
                : 'text-[#7D5A44]/70 font-light hover:text-[#1A3C34] border-b border-transparent'
            }`}
          >
            {link.fr}
          </Link>
        )
      })}
    </nav>
  )
}

/* ────────────────────────────────────────────
   Menu mobile
   ──────────────────────────────────────────── */
function MobileMenu({
  open, pathname, language, onClose
}: {
  open: boolean
  pathname: string
  language: Language
  onClose: () => void
}) {
  if (!open) return null

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-40 flex flex-col"
      aria-label="Menu mobile"
    >
      {/* Overlay sombre au tap extérieur */}
      <div
        className="absolute inset-0 bg-[#1A3C34]/10 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panneau de navigation */}
      <div className="relative mt-[4.5rem] bg-[#F5F1E6] border-t border-[#1A3C34]/8 flex flex-col overflow-y-auto max-h-[calc(100vh-4.5rem)]">

        {/* Liens */}
        <nav className="flex flex-col px-6 pt-2 pb-4">
          {navLinks.map(link => {
            const isActive = link.href === '/'
              ? pathname === '/'
              : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`py-3.5 text-sm border-b border-[#1A3C34]/5 last:border-0 transition-colors duration-200 ${
                  isActive
                    ? 'text-[#1A3C34] font-medium'
                    : 'text-[#7D5A44] font-light'
                }`}
              >
                {link.fr}
              </Link>
            )
          })}
        </nav>

        {/* CTAs mobile */}
        <div className="px-6 pb-6 flex flex-col gap-3 border-t border-[#1A3C34]/5 pt-4">
          <Link
            href="/participer-aux-tests"
            onClick={onClose}
            className="btn-primary justify-center"
          >
            Participer aux tests
          </Link>
          <Link
            href="/partenaires"
            onClick={onClose}
            className="btn-secondary justify-center"
          >
            Devenir partenaire
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Language } from '@/lib/translations'

interface Props { language: Language }

export default function Footer({ language }: Props) {
  const isWo = language === 'wo'

  const quickLinks = [
    { href: '/',                     fr: 'Accueil',            wo: 'Kanam' },
    { href: '/a-propos',             fr: 'À propos',           wo: 'Ci sunu bopp' },
    { href: '/application',          fr: "L'application",      wo: 'Aplikasion bi' },
    { href: '/ressources',           fr: 'Ressources santé',   wo: 'Xibaar yu wér' },
    { href: '/recherche-impact',     fr: 'Recherche & impact', wo: 'Xam-xam' },
    { href: '/participer-aux-tests', fr: 'Participer aux tests',wo: 'Bokk ci testukaay' },
    { href: '/partenaires',          fr: 'Partenaires',        wo: 'Partenaire yi' },
    { href: '/contact',              fr: 'Contact',            wo: 'Jokkoo' },
  ]

  const legalLinks = [
    { href: '/confidentialite',        fr: 'Confidentialité',       wo: 'Ceebu géewal' },
    { href: '/mentions-legales',       fr: 'Mentions légales',      wo: 'Seetu légal' },
    { href: '/avertissement-medical',  fr: 'Avertissement médical', wo: 'Xibaar bu doktor' },
    { href: '/conditions-utilisation', fr: "Conditions d'utilisation", wo: 'Mbir jëfandikukaay' },
  ]

  return (
    <footer className="bg-[#F5F1E6] border-t border-[#1A3C34]/8 relative z-10">

      {/* ── Corps du footer ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">

          {/* Colonne 1 — identité */}
          <div className="flex flex-col gap-5">
            <span className="font-medium uppercase tracking-[0.18em] text-[#4A2F27] text-[11px]">
              SaxalWér
            </span>
            <p className="text-sm text-[#7D5A44]/80 font-light leading-relaxed" style={{ maxWidth: '32ch' }}>
              {isWo
                ? 'Benn plateforme bu wér ci santé jigéen — xibaar yu sell, yu yemale ci aaduna, yu gënn.'
                : 'Une plateforme de santé féminine — information fiable, culturellement ancrée et confidentielle pour les femmes au Sénégal.'}
            </p>

            {/* Disclaimer court */}
            <div className="flex items-start gap-2 mt-1">
              <svg className="w-3.5 h-3.5 text-[#1A3C34]/35 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="text-[11px] text-[#1A3C34]/45 font-light leading-relaxed" style={{ maxWidth: '34ch' }}>
                {isWo
                  ? 'Xibaar ngir xam-xam rekk. Du soppal laaj ak doktor.'
                  : 'Information éducative uniquement. Ne remplace pas une consultation médicale.'}
              </p>
            </div>

            {/* Point doré + localisation */}
            <div className="flex items-center gap-2 mt-1">
              <span className="dot-gold" aria-hidden="true" />
              <span className="text-[11px] text-[#7D5A44]/55 font-light">
                Dakar, Sénégal — 2026
              </span>
            </div>
          </div>

          {/* Colonne 2 — liens rapides */}
          <div className="flex flex-col gap-4">
            <h3 className="text-label mb-1">
              {isWo ? 'Xam ci suuf' : 'Liens rapides'}
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Liens rapides">
              {quickLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[#7D5A44]/70 font-light hover:text-[#A65D40] transition-colors duration-200"
                >
                  {isWo ? link.wo : link.fr}
                </Link>
              ))}
            </nav>
          </div>

          {/* Colonne 3 — contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-label mb-1">
              {isWo ? 'Jokkoo' : 'Contact'}
            </h3>

            <a
              href="mailto:contact@saxalwer.com"
              className="link-text self-start"
            >
              contact@saxalwer.com
            </a>

            <p className="text-xs text-[#7D5A44]/60 font-light leading-relaxed mt-1" style={{ maxWidth: '30ch' }}>
              {isWo
                ? 'Collaboration, presse, recherche — bind ñu.'
                : 'Pour toute demande de collaboration, presse ou recherche.'}
            </p>

            {/* CTA participer */}
            <div className="mt-3">
              <Link
                href="/participer-aux-tests"
                className="btn-dark !py-2.5 !px-6 !text-xs self-start"
              >
                {isWo ? 'Bokk ci testukaay' : 'Participer aux tests'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Barre légale ── */}
      <div className="border-t border-[#1A3C34]/6">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#7D5A44]/50 font-light">
            © 2026 SaxalWér. {isWo ? 'Mbir yi dañu sell.' : 'Tous droits réservés.'}
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1.5" aria-label="Liens légaux">
            {legalLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-[#7D5A44]/50 hover:text-[#A65D40] transition-colors duration-200 font-light"
              >
                {isWo ? link.wo : link.fr}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

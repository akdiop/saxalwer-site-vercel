'use client'

// Gabarit partagé pour les 4 pages légales
// Affiche un disclaimer "ébauche juridique" en haut

import { ReactNode } from 'react'
import { useLanguage } from './SiteWrapper'

interface Section {
  title: string
  paragraphs: string[]
  list?: string[]
}

interface Props {
  label: string
  title: string
  intro: string
  lastUpdated: string
  sections: Section[]
  children?: ReactNode
}

export default function LegalPage({ label, title, intro, lastUpdated, sections, children }: Props) {
  const language = useLanguage()
  const isWo = language === 'wo'

  return (
    <main className="flex-1 bg-[#F5F1E6] relative overflow-hidden">
      <div className="absolute top-0 right-0 pointer-events-none overflow-hidden" style={{ opacity: 0.02 }} aria-hidden="true">
        <img src="/assets/logo.png" alt="" className="w-[26vw] max-w-[200px] object-contain" />
      </div>

      <div className="page-container relative z-10">

        {/* En-tête */}
        <div className="page-header">
          <span className="text-label block mb-5 text-[#A65D40]/70">{label}</span>
          <h1 className="title-h1 mb-6">{title}</h1>
          <p className="prose-saxal mb-6" style={{ maxWidth: '60ch' }}>{intro}</p>
          <p className="text-xs text-[#7D5A44]/55 font-light italic">
            {isWo ? `Mis à jour ci : ${lastUpdated}` : `Dernière mise à jour : ${lastUpdated}`}
          </p>
          <div className="page-header-divider" />
        </div>

        {/* Avertissement juriste */}
        <div className="card-info mb-12">
          <p className="text-sm text-[#1A3C34]/75 font-light leading-relaxed">
            <span className="font-medium">⚠ {isWo ? 'Yëgël ci doxal' : 'Avertissement'} — </span>
            {isWo
              ? "Texte bii mooy benn base liggéey. Dafa jëfë benn jurist seetal ko ci publication officielle."
              : "Ce texte est une base de travail. Il doit être relu par un juriste avant publication officielle."}
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-12 md:gap-14">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="title-h3 mb-5">
                <span className="text-[#A65D40]/40 font-light mr-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="prose-saxal" style={{ maxWidth: '62ch' }}>{p}</p>
                ))}
                {section.list && (
                  <ul className="flex flex-col gap-2 mt-2 pl-1">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-3 text-sm text-[#7D5A44]/85 font-light leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-[#A65D40]/50 shrink-0 mt-2.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Contenu additionnel optionnel */}
        {children && <div className="mt-14">{children}</div>}

        {/* Contact bas de page */}
        <div className="mt-16 pt-10 border-t border-[#1A3C34]/8">
          <p className="text-sm text-[#7D5A44]/70 font-light">
            {isWo ? 'Ngir laaj :' : 'Pour toute question :'}{' '}
            <a href="mailto:contact@saxalwer.com" className="link-text">contact@saxalwer.com</a>
          </p>
        </div>
      </div>
    </main>
  )
}

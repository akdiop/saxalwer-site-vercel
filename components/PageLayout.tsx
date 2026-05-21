// Gabarit partagé de toutes les pages intérieures
// Titre + sous-titre + trait terracotta + filigrane discret

import { ReactNode } from 'react'
import MedicalDisclaimer from './MedicalDisclaimer'

interface Props {
  title: string
  subtitle?: string
  children: ReactNode
  showDisclaimer?: boolean  // Affiche le disclaimer médical si true
}

export default function PageLayout({
  title,
  subtitle,
  children,
  showDisclaimer = false,
}: Props) {
  return (
    <main className="flex-1 bg-[#F5F1E6] relative overflow-hidden">

      {/* Filigrane logo — coin haut droit, très discret */}
      <div
        className="absolute top-0 right-0 pointer-events-none overflow-hidden"
        style={{ opacity: 0.025 }}
        aria-hidden="true"
      >
        <img
          src="/assets/logo.png"
          alt=""
          className="w-[28vw] max-w-[220px] object-contain"
        />
      </div>

      <div className="page-container relative z-10">

        {/* ── En-tête de page ── */}
        <div className="page-header">
          <h1 className="title-h1">{title}</h1>

          {subtitle && (
            <p
              className="prose-saxal mt-5"
              style={{ maxWidth: '58ch' }}
            >
              {subtitle}
            </p>
          )}

          {/* Trait terracotta */}
          <div className="page-header-divider" />

          {/* Disclaimer médical si nécessaire */}
          {showDisclaimer && (
            <div className="mt-6">
              <MedicalDisclaimer variant="short" />
            </div>
          )}
        </div>

        {/* ── Contenu ── */}
        {children}
      </div>
    </main>
  )
}

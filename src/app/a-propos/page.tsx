import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'À propos — SaxalWér',
  description:
    "Découvrez l'origine, la mission, la vision et les valeurs de SaxalWér — plateforme de santé féminine culturellement ancrée, conçue pour les femmes et jeunes filles au Sénégal.",
}

export default function AboutPage() {
  return (
    <SiteWrapper>
      <AboutContent />
    </SiteWrapper>
  )
}

// Page d'accueil SaxalWér
// Sections : Hero · Problème · Solution · Fonctionnalités · Différenciation · Recherche · CTA

import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import HomeContent from '@/components/HomeContent'

export const metadata: Metadata = {
  title: 'SaxalWér — La santé intime, en confiance.',
  description:
    "Une application intelligente et culturellement sensible pour aider les filles et les femmes à comprendre, suivre et protéger leur santé sexuelle et reproductive au Sénégal.",
}

export default function Home() {
  return (
    <SiteWrapper>
      <HomeContent />
    </SiteWrapper>
  )
}

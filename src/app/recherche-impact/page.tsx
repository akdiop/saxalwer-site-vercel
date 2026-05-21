import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import ResearchContent from '@/components/ResearchContent'

export const metadata: Metadata = {
  title: 'Recherche & impact — SaxalWér',
  description:
    "Démarche scientifique de SaxalWér : recherche en santé publique, normes sociales, genre, santé numérique. Tests utilisatrices, évaluation d'impact et éthique des données.",
}

export default function ResearchPage() {
  return (
    <SiteWrapper>
      <ResearchContent />
    </SiteWrapper>
  )
}

import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import PartnersContent from '@/components/PartnersContent'

export const metadata: Metadata = {
  title: 'Partenaires — SaxalWér',
  description: "Organisations, bailleurs de fonds, chercheures et institutions de santé qui soutiennent SaxalWér. Devenir partenaire de la santé féminine au Sénégal.",
}

export default function PartnersPage() {
  return (
    <SiteWrapper>
      <PartnersContent />
    </SiteWrapper>
  )
}

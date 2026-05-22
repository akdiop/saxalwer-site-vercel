import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import ApplicationContent from '@/components/ApplicationContent'

export const metadata: Metadata = {
  title: "L'application — SaxalWér",
  description:
    "Découvrez les fonctionnalités de SaxalWér : bibliothèque santé, suivi du cycle, assistant d'orientation intelligent, annuaire de professionnel.les, espace personnel SamaWér et bien plus — en français et en wolof (d'autres langues à venir).",
}

export default function ApplicationPage() {
  return (
    <SiteWrapper>
      <ApplicationContent />
    </SiteWrapper>
  )
}

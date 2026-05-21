import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import ApplicationContent from '@/components/ApplicationContent'

export const metadata: Metadata = {
  title: "L'application — SaxalWér",
  description:
    "Découvrez les modules de SaxalWér : bibliothèque santé, suivi du cycle, assistant d'orientation, annuaire de professionnelles et bien plus — en français et en wolof.",
}

export default function ApplicationPage() {
  return (
    <SiteWrapper>
      <ApplicationContent />
    </SiteWrapper>
  )
}

import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact — SaxalWér',
  description: "Contactez l'équipe SaxalWér pour toute question, collaboration, demande presse ou partenariat. Réponse sous quelques jours ouvrés.",
}

export default function ContactPage() {
  return (
    <SiteWrapper>
      <ContactContent />
    </SiteWrapper>
  )
}

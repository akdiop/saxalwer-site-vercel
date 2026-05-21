import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import ParticipateContent from '@/components/ParticipateContent'

export const metadata: Metadata = {
  title: 'Participer aux tests — SaxalWér',
  description:
    "Rejoignez les utilisatrices qui co-construisent SaxalWér. Tests utilisateurs, focus groups, formulaire d'inscription. Confidentialité totale et participation volontaire.",
}

export default function ParticipatePage() {
  return (
    <SiteWrapper>
      <ParticipateContent />
    </SiteWrapper>
  )
}

import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import ResourcesContent from '@/components/ResourcesContent'

export const metadata: Metadata = {
  title: 'Ressources santé — SaxalWér',
  description:
    "Ressources éducatives sur la santé sexuelle et reproductive : règles, cycle, contraception, fertilité, grossesse, post-partum, infections, ménopause. Information fiable, en français et wolof.",
}

export default function ResourcesPage() {
  return (
    <SiteWrapper>
      <ResourcesContent />
    </SiteWrapper>
  )
}

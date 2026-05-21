import Link from 'next/link'
import SiteWrapper from '@/components/SiteWrapper'

export default function NotFound() {
  return (
    <SiteWrapper>
      <main className="flex-1 bg-[#F5F1E6] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.025 }} aria-hidden="true">
          <img src="/assets/logo.png" alt="" className="w-[60vw] max-w-[400px] object-contain" />
        </div>

        <div className="max-w-2xl mx-auto px-6 py-32 relative z-10 text-center">
          <span className="text-label block mb-5 text-[#A65D40]/70">Erreur 404</span>
          <h1 className="title-hero mb-6">Cette page n'existe pas.</h1>
          <p className="prose-saxal mx-auto mb-10" style={{ maxWidth: '50ch' }}>
            La page que vous cherchez a peut-être été déplacée ou n'a jamais existé. Voici quelques pistes pour retrouver votre chemin.
          </p>
          <div className="w-10 h-px bg-[#A65D40] mx-auto mb-10" />

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">Retour à l'accueil</Link>
            <Link href="/contact" className="btn-secondary">Nous contacter</Link>
          </div>
        </div>
      </main>
    </SiteWrapper>
  )
}

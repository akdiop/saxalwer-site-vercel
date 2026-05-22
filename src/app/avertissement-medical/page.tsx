import type { Metadata } from 'next'
import Link from 'next/link'
import SiteWrapper from '@/components/SiteWrapper'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Avertissement médical — SaxalWér',
  description: "SaxalWér propose des informations éducatives, pas de diagnostic. Que faire en cas d'urgence médicale au Sénégal — structures de santé et conseils de prudence.",
}

export default function MedicalPage() {
  return (
    <SiteWrapper>
      <LegalPage
        label="Avertissement médical"
        title="Avertissement médical"
        intro="SaxalWér propose des informations éducatives et d'orientation. Elle ne pose aucun diagnostic et ne remplace en aucun cas une consultation avec un(e) professionnel(le) de santé qualifié(e). Cette page précise nos limites et les conduites à tenir en cas d'urgence."
        lastUpdated="Mai 2026"
        sections={[
          {
            title: 'Ce que SaxalWér est',
            paragraphs: [
              "SaxalWér est une plateforme adaptative, culturellement sensible, d'éducation et d'orientation en santé sexuelle et reproductive. Son rôle est de :",
            ],
            list: [
              "Fournir des informations éducatives validées par des professionnelles de santé.",
              "Améliorer et faciliter l'accès et/ou le recours aux informations de soin et structures de santé en s'adaptant à chaque utilisatrice"
              "Aider à mieux comprendre son corps, son cycle et sa santé.",
              "Orienter vers les bonnes ressources et les bonnes structures de soins.",
              "Donner accès à de l'information dans des langues locales (français, wolof, puis pulaar et sérère).",
            ],
          },
          {
            title: "Ce que SaxalWér n'est pas",
            paragraphs: [
              "SaxalWér n'est pas un outil médical. Aucune de ses fonctionnalités ne permet de :",
            ],
            list: [
              "Diagnostiquer une maladie ou une affection.",
              "Prescrire ou recommander un traitement médicamenteux.",
              "Remplacer une consultation avec une professionnelle de santé.",
              "Donner un avis médical personnalisé.",
              "Évaluer un risque de santé spécifique à une personne.",
            ],
          },
          {
            title: 'En cas d\'urgence — consultez immédiatement',
            paragraphs: [
              "Certaines situations nécessitent une consultation médicale urgente. N'attendez pas et rendez-vous dans la structure de santé la plus proche si vous présentez l'un des symptômes suivants :",
            ],
            list: [
              "Douleur abdominale ou pelvienne intense ou soudaine.",
              "Saignement abondant ou hémorragie.",
              "Malaise, perte de conscience ou vertiges importants.",
              "Fièvre élevée (au-dessus de 38,5°C) persistante.",
              "Signes d'infection grave (pus, douleur intense, gonflement).",
              "Grossesse présentant des symptômes anormaux (saignement, douleur, fièvre).",
              "Symptômes de violence physique ou sexuelle récente.",
              "Pensées suicidaires ou détresse psychologique grave.",
            ],
          },
          {
            title: 'Où consulter au Sénégal',
            paragraphs: [
              "Le Sénégal dispose d'un réseau de structures de santé accessibles à différents niveaux. Quel que soit votre lieu de résidence, vous pouvez accéder à :",
            ],
            list: [
              "Les hôpitaux régionaux et nationaux pour les urgences et les soins spécialisés.",
              "Les centres de santé pour les consultations courantes et le suivi de grossesse.",
              "Les postes de santé pour les soins de proximité.",
              "Les cases de santé dans les zones rurales.",
              "Les maternités pour le suivi prénatal et l'accouchement.",
              "Les services gynécologiques des structures hospitalières pour les questions de santé reproductive.",
            ],
          },
          {
            title: 'Numéros utiles',
            paragraphs: [
              "En cas d'urgence vitale au Sénégal :",
            ],
            list: [
              "SAMU National : 1515",
              "Sapeurs-pompiers : 18",
              "Police secours : 17",
              "Ces numéros sont indicatifs. La disponibilité peut varier selon les régions.",
            ],
          },
          {
            title: 'Information éducative — pas un avis personnalisé',
            paragraphs: [
              "Les contenus diffusés par SaxalWér sont conçus pour informer un public général. Ils ne tiennent pas compte de votre situation médicale personnelle, de vos antécédents, de vos traitements en cours ou de toute autre particularité.",
              "Seule une professionnelle de santé qualifiée, après examen, peut vous donner un avis adapté à votre situation. Nous vous encourageons toujours à consulter en cas de doute.",
            ],
          },
          {
            title: 'Limites de responsabilité',
            paragraphs: [
              "SaxalWér s'efforce de proposer des contenus exacts, validés et à jour. Toutefois, l'utilisation des informations diffusées se fait sous votre seule responsabilité.",
              "SaxalWér ne saurait être tenue responsable des conséquences d'une décision prise sur la base des informations du site, en l'absence d'un avis médical professionnel adapté.",
            ],
          },
          {
            title: 'Engagement éthique',
            paragraphs: [
              "Toutes les ressources publiées par SaxalWér sont relues par des professionnelles de santé avant publication. Aucune information n'est diffusée sans validation. Si vous repérez une information qui vous semble erronée ou périmée, écrivez-nous à contact@saxalwer.com.",
            ],
          },
        ]}
      >
        {/* CTA bas de page */}
        <div className="card-accent flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div style={{ maxWidth: '42ch' }}>
            <h3 className="title-h3 mb-2">Une question, un doute ?</h3>
            <p className="text-secondary text-sm">
              En cas d'incertitude sur votre santé, consultez une professionnelle. SaxalWér ne remplace jamais cet échange.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0 whitespace-nowrap">
            Nous écrire
          </Link>
        </div>
      </LegalPage>
    </SiteWrapper>
  )
}

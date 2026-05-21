import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — SaxalWér',
  description: "Comment SaxalWér collecte, utilise et protège vos données personnelles, en conformité avec la loi sénégalaise n°2008-12.",
}

export default function PrivacyPage() {
  return (
    <SiteWrapper>
      <LegalPage
        label="Confidentialité"
        title="Politique de confidentialité"
        intro="SaxalWér s'engage à protéger la vie privée de ses utilisatrices. Cette politique explique quelles données nous collectons, pourquoi, comment nous les protégeons et quels sont vos droits."
        lastUpdated="Mai 2026"
        sections={[
          {
            title: 'Engagement général',
            paragraphs: [
              "SaxalWér est un projet de santé numérique qui propose de l'information éducative et de l'orientation, mais ne pose aucun diagnostic médical. La protection de vos données est une priorité absolue.",
              "Nos pratiques s'inscrivent dans le cadre de la loi sénégalaise n°2008-12 du 25 janvier 2008 sur la protection des données personnelles, et sont supervisées par la Commission de Protection des Données Personnelles (CDP) du Sénégal.",
            ],
          },
          {
            title: 'Données collectées',
            paragraphs: [
              "SaxalWér collecte uniquement les données strictement nécessaires au fonctionnement du service. Les données collectées varient selon le formulaire utilisé :",
            ],
            list: [
              "Newsletter : adresse email, langue préférée.",
              "Contact : nom, email, sujet, message.",
              "Participation aux tests : prénom, âge, ville, langue, type de participation, contact (email ou WhatsApp), consentement.",
              "Partenaires : nom de l'organisation, nom du contact, email, type de partenariat, message.",
              "Aucune donnée médicale sensible n'est collectée via les formulaires du site.",
            ],
          },
          {
            title: 'Finalité du traitement',
            paragraphs: [
              "Les données collectées sont utilisées exclusivement pour :",
            ],
            list: [
              "Vous tenir informée de l'avancement et du lancement de SaxalWér.",
              "Répondre à vos demandes (contact, partenariat, participation aux tests).",
              "Améliorer la plateforme grâce à vos retours.",
              "Conduire des recherches anonymisées, après consentement explicite.",
              "Aucune donnée n'est utilisée à des fins commerciales ou publicitaires.",
            ],
          },
          {
            title: 'Hébergement et sécurité',
            paragraphs: [
              "Vos données sont stockées chez Supabase (hébergement sécurisé conforme aux standards internationaux). Les transferts sont chiffrés (HTTPS). Les accès sont restreints aux personnes habilitées de l'équipe SaxalWér.",
              "Nous mettons en œuvre des mesures techniques et organisationnelles pour empêcher tout accès non autorisé, perte, altération ou divulgation.",
            ],
          },
          {
            title: 'Vos droits',
            paragraphs: [
              "Conformément à la loi sénégalaise n°2008-12, vous disposez des droits suivants sur vos données personnelles :",
            ],
            list: [
              "Droit d'accès — savoir quelles données nous avons sur vous.",
              "Droit de rectification — corriger des informations inexactes.",
              "Droit de suppression — demander l'effacement de vos données.",
              "Droit d'opposition — refuser certains traitements.",
              "Droit de retrait du consentement — à tout moment, sans justification.",
              "Pour exercer ces droits, écrivez-nous à contact@saxalwer.com.",
            ],
          },
          {
            title: 'Durée de conservation',
            paragraphs: [
              "Les données sont conservées le temps nécessaire à la finalité pour laquelle elles ont été collectées :",
            ],
            list: [
              "Newsletter : jusqu'à votre désinscription.",
              "Messages de contact : 24 mois maximum.",
              "Participation aux tests : durée du projet de recherche, puis anonymisation.",
              "Partenariats : durée de la collaboration + 5 ans.",
            ],
          },
          {
            title: 'Pas de cession à des tiers',
            paragraphs: [
              "SaxalWér ne vend, ne loue et ne cède jamais vos données personnelles à des tiers, qu'il s'agisse d'annonceurs, de partenaires commerciaux ou de toute autre entité.",
              "Les seules exceptions concernent les sous-traitants techniques (hébergement Supabase) qui agissent strictement selon nos instructions et sont liés par des engagements de confidentialité équivalents.",
            ],
          },
          {
            title: 'Cookies',
            paragraphs: [
              "Le site SaxalWér utilise uniquement des cookies strictement nécessaires à son fonctionnement (préférence de langue, état de session). Aucun cookie publicitaire ou de traçage tiers n'est utilisé.",
            ],
          },
          {
            title: 'Modifications de la politique',
            paragraphs: [
              "Cette politique peut être modifiée pour refléter des évolutions légales ou techniques. La date de mise à jour est indiquée en haut de page. Les utilisatrices inscrites à la newsletter seront notifiées en cas de changement significatif.",
            ],
          },
        ]}
      />
    </SiteWrapper>
  )
}

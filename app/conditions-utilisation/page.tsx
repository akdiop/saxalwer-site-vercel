import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: "Conditions d'utilisation — SaxalWér",
  description: "Règles d'utilisation du site SaxalWér et de la future application — droits, obligations et limites de responsabilité, selon le droit sénégalais.",
}

export default function TermsPage() {
  return (
    <SiteWrapper>
      <LegalPage
        label="Conditions d'utilisation"
        title="Conditions d'utilisation"
        intro="Les présentes conditions définissent les règles d'utilisation du site SaxalWér (www.saxalwer.com) et, à terme, de l'application mobile SaxalWér. En utilisant ce site, vous acceptez ces conditions."
        lastUpdated="Mai 2026"
        sections={[
          {
            title: "Objet du site",
            paragraphs: [
              "SaxalWér est un projet de santé numérique destiné aux femmes et aux filles au Sénégal. Le site et la future application proposent :",
            ],
            list: [
              "Des informations éducatives sur la santé sexuelle et reproductive.",
              "Des contenus en français et en wolof (puis en pulaar et sérère).",
              "Des outils d'orientation vers les structures de santé.",
              "Une plateforme de participation à la recherche et aux tests utilisatrices.",
              "SaxalWér ne propose ni diagnostic, ni traitement, ni prescription médicale.",
            ],
          },
          {
            title: "Acceptation des conditions",
            paragraphs: [
              "L'utilisation du site SaxalWér implique l'acceptation pleine et entière des présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser le site.",
            ],
          },
          {
            title: "Public visé",
            paragraphs: [
              "Le site est accessible à toutes les femmes et les filles à partir de 14 ans. Pour les utilisatrices mineures, une autorisation parentale ou d'une tutrice est recommandée, en particulier pour la participation aux tests utilisatrices.",
            ],
          },
          {
            title: "Usage autorisé",
            paragraphs: [
              "Vous vous engagez à utiliser le site dans le respect des lois en vigueur au Sénégal et dans un esprit de bienveillance. Sont notamment interdits :",
            ],
            list: [
              "L'utilisation du site à des fins illégales ou frauduleuses.",
              "La reproduction, copie ou diffusion non autorisée des contenus.",
              "Les tentatives d'intrusion, de piratage ou de perturbation du service.",
              "L'envoi de messages injurieux, diffamatoires ou discriminatoires via les formulaires.",
              "L'utilisation du site pour proposer des services médicaux ou prescrire des traitements.",
            ],
          },
          {
            title: "Limites du service",
            paragraphs: [
              "SaxalWér est une plateforme d'éducation et d'orientation. Elle ne se substitue en aucun cas à l'avis d'une professionnelle de santé qualifiée. Les informations proposées ne peuvent en aucun cas servir de base à une décision médicale.",
              "En cas de symptôme inquiétant, de douleur intense, de saignement abondant, de malaise, de fièvre élevée, de grossesse à risque ou de toute situation d'urgence, vous devez immédiatement consulter une structure de santé.",
            ],
          },
          {
            title: "Propriété des contenus utilisateurs",
            paragraphs: [
              "Les messages, retours et données que vous transmettez via les formulaires restent votre propriété. En les soumettant, vous autorisez SaxalWér à les utiliser dans le cadre strict des finalités décrites dans la politique de confidentialité.",
              "Aucun contenu personnel ne sera publié, partagé ou diffusé sans votre consentement explicite.",
            ],
          },
          {
            title: "Disponibilité du service",
            paragraphs: [
              "SaxalWér s'efforce d'assurer la disponibilité du site 24h/24 et 7j/7. Toutefois, des interruptions sont possibles (maintenance, mise à jour, incident technique). SaxalWér ne peut être tenue responsable de l'indisponibilité temporaire du site.",
              "L'application SaxalWér est en cours de prototypage. Les fonctionnalités décrites peuvent évoluer.",
            ],
          },
          {
            title: "Limitation de responsabilité",
            paragraphs: [
              "L'utilisation du site et de ses contenus se fait sous votre seule responsabilité. SaxalWér ne saurait être tenue responsable des préjudices directs ou indirects pouvant résulter de l'utilisation du site ou de l'impossibilité d'y accéder.",
            ],
          },
          {
            title: "Modification des conditions",
            paragraphs: [
              "SaxalWér se réserve le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur le site. Il vous appartient de consulter régulièrement ces conditions.",
            ],
          },
          {
            title: "Droit applicable",
            paragraphs: [
              "Les présentes conditions sont régies par le droit sénégalais. Tout litige relatif à l'utilisation du site relève de la compétence exclusive des tribunaux sénégalais.",
            ],
          },
        ]}
      />
    </SiteWrapper>
  )
}

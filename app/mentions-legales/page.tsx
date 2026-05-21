import type { Metadata } from 'next'
import SiteWrapper from '@/components/SiteWrapper'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Mentions légales — SaxalWér',
  description: "Informations légales concernant l'éditeur du site SaxalWér, hébergement, propriété intellectuelle et conditions juridiques.",
}

export default function LegalNoticePage() {
  return (
    <SiteWrapper>
      <LegalPage
        label="Mentions légales"
        title="Mentions légales"
        intro="Les présentes mentions légales décrivent les conditions d'identification de l'éditeur du site SaxalWér, conformément au droit sénégalais."
        lastUpdated="Mai 2026"
        sections={[
          {
            title: "Éditeur du site",
            paragraphs: [
              "Le site SaxalWér (www.saxalwer.com) est édité par le projet SaxalWér, initiative de santé numérique basée à Dakar, Sénégal.",
            ],
            list: [
              "Dénomination : SaxalWér",
              "Adresse : Dakar, Sénégal",
              "Email : contact@saxalwer.com",
              "Directrice de la publication : Aïdalaye Diop, fondatrice et CEO de SaxalWér.",
            ],
          },
          {
            title: "Hébergement",
            paragraphs: [
              "Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis. Vercel applique des standards de sécurité conformes aux exigences internationales.",
              "La base de données et les formulaires sont hébergés via Supabase (Supabase Inc.).",
            ],
          },
          {
            title: "Propriété intellectuelle",
            paragraphs: [
              "L'ensemble des contenus présents sur le site SaxalWér (textes, images, logos, vidéos, code source, identité graphique, illustrations, etc.) est protégé par le droit de la propriété intellectuelle.",
              "Toute reproduction, représentation, modification, publication ou adaptation totale ou partielle des éléments du site, par quelque procédé que ce soit, est interdite sans autorisation écrite préalable de SaxalWér.",
              "Toute utilisation non autorisée du site ou de ses contenus pourra faire l'objet de poursuites conformément au droit sénégalais.",
            ],
          },
          {
            title: "Marque",
            paragraphs: [
              "« SaxalWér » est une marque en cours de protection au Sénégal et dans les pays de l'espace OAPI (Organisation Africaine de la Propriété Intellectuelle). Toute utilisation non autorisée de la marque est interdite.",
            ],
          },
          {
            title: "Liens externes",
            paragraphs: [
              "Le site peut contenir des liens vers des ressources externes (OMS, UNFPA, structures de santé sénégalaises). SaxalWér n'exerce aucun contrôle sur le contenu de ces sites et ne peut être tenue responsable de leur disponibilité ou de leur contenu.",
            ],
          },
          {
            title: "Responsabilité",
            paragraphs: [
              "SaxalWér s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées. Toutefois, le site est fourni « en l'état », sans garantie d'aucune sorte. SaxalWér ne saurait être tenue responsable des conséquences liées à l'utilisation ou à l'impossibilité d'utiliser le site.",
              "Le contenu du site est à visée éducative et ne constitue en aucun cas un avis médical, juridique ou professionnel.",
            ],
          },
          {
            title: "Droit applicable",
            paragraphs: [
              "Les présentes mentions sont régies par le droit sénégalais. Tout litige relatif à l'utilisation du site relève de la compétence exclusive des tribunaux sénégalais.",
            ],
          },
          {
            title: "Contact",
            paragraphs: [
              "Pour toute question relative aux mentions légales, écrivez-nous à contact@saxalwer.com.",
            ],
          },
        ]}
      />
    </SiteWrapper>
  )
}

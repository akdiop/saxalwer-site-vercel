// Disclaimer médical réutilisable
// variant="full" → texte complet | variant="short" → version courte

interface Props {
  variant?: 'full' | 'short'
}

export default function MedicalDisclaimer({ variant = 'short' }: Props) {
  const text = variant === 'full'
    ? "Les informations proposées par SaxalWér sont à visée éducative uniquement. Elles ne constituent pas un diagnostic médical et ne remplacent pas une consultation avec une professionnelle de santé qualifiée. En cas de doute ou d'urgence, consultez un établissement de santé proche de chez vous."
    : "Information éducative — ne remplace pas une consultation médicale."

  return (
    <div className="medical-disclaimer">
      <svg className="w-4 h-4 text-deepGreen/40 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
      <p>{text}</p>
    </div>
  )
}

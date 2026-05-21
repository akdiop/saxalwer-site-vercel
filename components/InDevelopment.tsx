// Bloc "En cours de développement"
// Affiché partout où le contenu n'est pas encore prêt

interface Props {
  message?: string
}

export default function InDevelopment({ message }: Props) {
  return (
    <div className="card-wip">
      <span className="dot-gold" aria-hidden="true" />
      <p className="text-secondary text-center">
        {message ?? 'En cours de développement'}
      </p>
    </div>
  )
}

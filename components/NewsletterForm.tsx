'use client'

import { useState, FormEvent } from 'react'
import { subscribeNewsletter } from '@/lib/supabase'
import { Language } from '@/lib/translations'

interface Props { language: Language }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterForm({ language }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const isWo = language === 'wo'

  const reset = (ms: number) => setTimeout(() => { setStatus('idle'); setError('') }, ms)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setError(isWo ? 'Baal sa adrés email bu baax.' : 'Veuillez entrer une adresse email valide.')
      reset(5000)
      return
    }
    setStatus('loading')
    const { ok, error: err } = await subscribeNewsletter({ email, language })
    if (ok) {
      setStatus('success')
      setEmail('')
      reset(7000)
    } else {
      setStatus('error')
      setError(err ?? (isWo ? 'Am na lañu sàkk.' : 'Une erreur est survenue.'))
      reset(5000)
    }
  }

  const disabled = status === 'loading' || status === 'success'

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col sm:flex-row gap-3">
          <label htmlFor="newsletterEmail" className="sr-only">
            {isWo ? 'Sa adrés email' : 'Votre adresse email'}
          </label>
          <input
            id="newsletterEmail"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={isWo ? 'Sa adrés email' : 'Votre adresse email'}
            disabled={disabled}
            required
            className="input flex-1"
          />
          <button type="submit" disabled={disabled} className="btn-primary">
            {status === 'loading' ? '…' : (isWo ? 'Bind' : "S'inscrire")}
          </button>
        </div>
        {status === 'success' && (
          <p className="form-message-success">
            <span className="dot-gold shrink-0" />
            {isWo ? 'Jërëjëf ! Dinaa la xamle bu yëngu.' : 'Merci ! Vous serez notifiée du lancement.'}
          </p>
        )}
        {status === 'error' && (
          <p className="form-message-error" role="alert">{error}</p>
        )}
      </form>
    </div>
  )
}

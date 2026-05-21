'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from './SiteWrapper'
import { sendContact } from '@/lib/supabase'
import MedicalDisclaimer from './MedicalDisclaimer'

type Status = 'idle' | 'loading' | 'success' | 'error'

const content = {
  fr: {
    label: 'Contact',
    title: 'Écrivez-nous.',
    subtitle: "Vous avez une question, une suggestion, une demande de collaboration ou de presse ? Nous lisons chaque message avec attention et répondons sous quelques jours ouvrés.",

    formLabel: 'Formulaire',
    formIntro: "Tous les champs sont nécessaires pour que nous puissions vous répondre correctement.",

    name: 'Votre nom',
    namePh: 'Prénom et nom',
    email: 'Votre email',
    emailPh: 'adresse@email.com',
    subject: 'Sujet',
    subjectOptions: [
      'Question générale',
      'Partenariat',
      'Presse / Média',
      'Recherche',
      'Participer aux tests',
      'Autre',
    ],
    message: 'Votre message',
    messagePh: 'Décrivez votre demande…',
    submit: 'Envoyer le message',
    submitLoading: 'Envoi…',
    successTitle: 'Message bien reçu.',
    successText: 'Nous vous répondrons à l\'adresse indiquée sous quelques jours ouvrés.',
    errorText: "Une erreur est survenue. Vous pouvez réessayer ou nous écrire directement à contact@saxalwer.com.",
    privacyNote: "En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous répondre. Elles ne seront jamais partagées avec des tiers. Consultez notre politique de confidentialité pour en savoir plus.",

    directLabel: 'Contact direct',
    directTitle: 'Vous préférez écrire directement ?',
    directText: "Pour toute demande, notre adresse est ouverte à toutes.",
    email_direct: 'contact@saxalwer.com',

    infoLabel: 'Informations',
    location: 'Basée à Dakar',
    locationText: "SaxalWér est conçue et développée depuis le Sénégal, pour le Sénégal et l'Afrique de l'Ouest.",
    response: 'Délai de réponse',
    responseText: "Nous répondons à tous les messages sous 3 à 7 jours ouvrés. Les demandes urgentes liées à la santé doivent être adressées à une professionnelle de santé.",
    languages: 'Langues',
    languagesText: 'Nous lisons et répondons en français et en wolof. N\'hésitez pas à écrire dans la langue qui vous met le plus à l\'aise.',
  },
  wo: {
    label: 'Jokkoo',
    title: 'Bind ñu.',
    subtitle: "Am nga benn laaj, suggestion, demande collaboration walla presse ? Ñu jàng yëp xibaar ak xel te tontu ci tuuti jours.",

    formLabel: 'Formulaire',
    formIntro: "Yëp champ yi am solo ngir ñu mën tontu la baax.",

    name: 'Sa tur',
    namePh: 'Tur njëkk ak tur ndey',
    email: 'Sa email',
    emailPh: 'adrés@email.com',
    subject: 'Sujet',
    subjectOptions: [
      'Laaj bu yomb',
      'Partenariat',
      'Presse / Média',
      'Xam-xam',
      'Bokk ci testukaay',
      'Yeneen',
    ],
    message: 'Sa xibaar',
    messagePh: 'Wax sa laaj…',
    submit: 'Yónni xibaar',
    submitLoading: 'Yónni…',
    successTitle: 'Xibaar bi jot na.',
    successText: 'Dinañu tontu la ci adrés bi nga jox ci tuuti jours.',
    errorText: "Am na lañu sàkk. Mën nga tukki walla bind ñu : contact@saxalwer.com.",
    privacyNote: "Ci yónni bind bii, mën nga nangu sa xibaar ñu jëfandikoo ko ngir tontu la. Du ñu leen yónneel ak tiers. Xool sunu confidentialité ngir xam yokk.",

    directLabel: 'Jokkoo direct',
    directTitle: 'Bëgg nga bind direct ?',
    directText: "Ngir yëp laaj, sunu adrés ubbiku ngir yëp.",
    email_direct: 'contact@saxalwer.com',

    infoLabel: 'Xibaar',
    location: 'Dëkk ci Dakar',
    locationText: "SaxalWér ñu def ko ci Senegaal, ngir Senegaal ak Afrik ci Kanam.",
    response: 'Diir tontu',
    responseText: "Ñu tontu yëp xibaar ci 3 ba 7 jours. Demande urgent yu wér-kër, jëfë leen ci doktor.",
    languages: 'Làkk yi',
    languagesText: 'Ñu jàng ak tontu ci Faransee ak Wolof. Bind ci làkk bi nga bëgg.',
  },
}

export default function ContactContent() {
  const language = useLanguage()
  const t = content[language]

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setStatus('loading')
    const { ok } = await sendContact({ name, email, subject, message, language })
    if (ok) {
      setStatus('success')
      setName(''); setEmail(''); setSubject(''); setMessage('')
    } else {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <main className="flex-1 bg-[#F5F1E6]">

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 px-6">
        <div className="absolute top-0 right-0 pointer-events-none overflow-hidden" style={{ opacity: 0.025 }} aria-hidden="true">
          <img src="/assets/logo.png" alt="" className="w-[28vw] max-w-[220px] object-contain" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.label}</span>
          <h1 className="title-hero mb-6">{t.title}</h1>
          <p className="prose-saxal" style={{ maxWidth: '58ch' }}>{t.subtitle}</p>
          <div className="w-10 h-px bg-[#A65D40] mt-8" />
        </div>
      </section>

      {/* GRILLE FORMULAIRE + INFOS */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* FORMULAIRE (3/5) */}
          <div className="lg:col-span-3">
            <span className="text-label block mb-5 text-[#A65D40]/70">{t.formLabel}</span>
            <h2 className="title-h2 mb-3">{language === 'wo' ? 'Formulaire' : 'Nous écrire'}</h2>
            <p className="text-secondary mb-8" style={{ maxWidth: '52ch' }}>{t.formIntro}</p>
            <div className="w-8 h-px bg-[#A65D40] mb-10" />

            {status === 'success' ? (
              <div className="card-accent text-center py-10">
                <span className="dot-gold mx-auto mb-3" />
                <h3 className="title-h3 mb-3">{t.successTitle}</h3>
                <p className="prose-saxal mx-auto">{t.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                {/* Nom */}
                <div>
                  <label className="form-label" htmlFor="name">{t.name}</label>
                  <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder={t.namePh} required disabled={status === 'loading'} className="input" />
                </div>

                {/* Email */}
                <div>
                  <label className="form-label" htmlFor="email">{t.email}</label>
                  <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t.emailPh} required disabled={status === 'loading'} className="input" />
                </div>

                {/* Sujet */}
                <div>
                  <label className="form-label">{t.subject}</label>
                  <div className="flex flex-wrap gap-2">
                    {t.subjectOptions.map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSubject(opt)}
                        disabled={status === 'loading'}
                        className={`px-5 py-2.5 rounded-full text-sm font-light border transition-all duration-200 ${
                          subject === opt
                            ? 'bg-[#1A3C34] text-white border-[#1A3C34]'
                            : 'bg-white/40 text-[#7D5A44] border-[#1A3C34]/15 hover:border-[#A65D40]/40'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label" htmlFor="message">{t.message}</label>
                  <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder={t.messagePh} required rows={6} disabled={status === 'loading'} className="textarea" />
                </div>

                {/* Submit */}
                <button type="submit" disabled={status === 'loading' || !subject} className="btn-primary justify-center self-start">
                  {status === 'loading' ? t.submitLoading : t.submit}
                </button>

                {status === 'error' && <p className="form-message-error">{t.errorText}</p>}

                {/* Note vie privée */}
                <p className="text-xs text-[#1A3C34]/55 font-light italic leading-relaxed border-l-2 border-[#A65D40]/30 pl-4 py-1 mt-2" style={{ maxWidth: '60ch' }}>
                  {t.privacyNote}
                </p>
              </form>
            )}
          </div>

          {/* INFOS (2/5) */}
          <aside className="lg:col-span-2 flex flex-col gap-10">

            {/* Contact direct */}
            <div>
              <span className="text-label block mb-4 text-[#A65D40]/70">{t.directLabel}</span>
              <h3 className="title-h3 mb-3">{t.directTitle}</h3>
              <p className="text-secondary text-sm mb-5">{t.directText}</p>
              <a href="mailto:contact@saxalwer.com" className="link-text">contact@saxalwer.com</a>
            </div>

            <div className="h-px bg-[#1A3C34]/8" />

            {/* Localisation */}
            <div>
              <h4 className="text-xs text-[#1A3C34]/60 uppercase tracking-widest mb-3 font-medium">{t.location}</h4>
              <p className="text-sm text-[#7D5A44]/80 font-light leading-relaxed">{t.locationText}</p>
            </div>

            {/* Délai */}
            <div>
              <h4 className="text-xs text-[#1A3C34]/60 uppercase tracking-widest mb-3 font-medium">{t.response}</h4>
              <p className="text-sm text-[#7D5A44]/80 font-light leading-relaxed">{t.responseText}</p>
            </div>

            {/* Langues */}
            <div>
              <h4 className="text-xs text-[#1A3C34]/60 uppercase tracking-widest mb-3 font-medium">{t.languages}</h4>
              <p className="text-sm text-[#7D5A44]/80 font-light leading-relaxed">{t.languagesText}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="bg-[#F5F1E6] px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <MedicalDisclaimer variant="short" />
        </div>
      </div>
    </main>
  )
}

'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from './SiteWrapper'
import { submitPartner } from '@/lib/supabase'
import InDevelopment from './InDevelopment'

type Status = 'idle' | 'loading' | 'success' | 'error'

const content = {
  fr: {
    label: 'Partenaires',
    title: 'Construire ensemble la santé féminine de demain.',
    subtitle: "SaxalWér grandit grâce à des collaborations multiples : organisations de santé, bailleurs de fonds, structures de recherche, médias engagés. Nous accueillons les partenariats qui partagent notre vision d'une santé féminine digne, ancrée et confidentielle.",

    whyLabel: 'Pourquoi nous rejoindre',
    whyTitle: 'Ce qu\'un partenariat avec SaxalWér permet.',
    whyItems: [
      { title: 'Toucher les femmes là où elles sont', text: "Une plateforme conçue depuis et pour le Sénégal, capable d'atteindre des publics que les outils standards ne touchent pas." },
      { title: 'S\'appuyer sur une démarche scientifique', text: "Un projet fondé sur la recherche qualitative, le co-design avec les utilisatrices et l'évaluation continue." },
      { title: 'Investir dans une innovation africaine', text: "Une initiative pensée localement, dans une approche décoloniale de la santé numérique, avec un fort potentiel d'impact en Afrique de l'Ouest." },
    ],

    typesLabel: 'Types de partenariats',
    typesTitle: 'Différentes façons de nous accompagner.',
    typesItems: [
      { title: 'Institutions de santé', text: "Hôpitaux, ministères, centres de santé, structures publiques qui souhaitent contribuer aux contenus ou orienter leurs publics vers SaxalWér." },
      { title: 'Bailleurs et financeurs', text: "Fondations, agences de coopération, programmes de santé publique souhaitant soutenir le développement de SaxalWér." },
      { title: 'Recherche académique', text: "Universités, laboratoires, chercheures travaillant sur la santé féminine, les normes sociales, la santé numérique ou les études de genre." },
      { title: 'Organisations féministes et de la société civile', text: "Associations engagées sur les droits des femmes, l'accès à la santé reproductive ou l'éducation." },
      { title: 'Médias et presse', text: "Journalistes et médias intéressés par les questions de santé, de genre, d'innovation sociale africaine." },
      { title: 'Professionnelles de santé', text: "Gynécologues, sages-femmes, médecins, infirmières souhaitant relire ou valider nos contenus." },
    ],

    currentLabel: 'Partenaires actuels',
    currentTitle: 'Ils nous accompagnent déjà.',

    formLabel: 'Devenir partenaire',
    formTitle: 'Écrivez-nous pour explorer un partenariat.',
    formIntro: "Remplissez ce formulaire pour nous présenter votre organisation et votre intérêt. Nous reviendrons vers vous pour échanger.",

    org: 'Nom de l\'organisation',
    orgPh: 'Nom complet de votre structure',
    contactName: 'Nom du contact',
    contactPh: 'Prénom et nom de la personne référente',
    email: 'Email de contact',
    emailPh: 'adresse@organisation.com',
    type: 'Type de partenariat',
    typeOptions: ['Institution de santé', 'Bailleur / financeur', 'Recherche académique', 'Société civile', 'Média / presse', 'Professionnelle de santé', 'Autre'],
    message: 'Présentez votre intérêt',
    messagePh: "En quelques lignes, présentez votre organisation et la nature du partenariat envisagé…",
    submit: 'Envoyer ma demande',
    submitLoading: 'Envoi…',
    successTitle: 'Demande reçue. Merci.',
    successText: 'Nous reviendrons vers vous dans les meilleurs délais pour échanger sur votre proposition.',
    errorText: "Une erreur est survenue. Vous pouvez réessayer ou nous écrire à contact@saxalwer.com.",

    ctaTitle: 'Une question avant de vous engager ?',
    ctaText: "Vous pouvez aussi nous écrire directement à contact@saxalwer.com pour échanger informellement.",
    ctaBtn: 'Nous écrire',
  },

  wo: {
    label: 'Partenaire yi',
    title: 'Def ndajee santé jigéen ëllëg.',
    subtitle: "SaxalWér di gënn ak collaboration yu bari : organisation santé, bailleurs, structure xam-xam, média yu bokk. Ñu jox bu yamoo ak partenariat yu bokk sunu xel ci santé jigéen bu dëkk, bu yemale ak bu gënn.",

    whyLabel: 'Lan tax bokk ak ñu',
    whyTitle: 'Lu partenariat ak SaxalWér def.',
    whyItems: [
      { title: 'Dem fi jigéen yi nekk', text: "Benn plateforme def ci Senegaal, mën a dem fi outil yu kanam du dem." },
      { title: 'Dëkk ci xam-xam', text: "Benn projet dëkk ci xam-xam qualitative, co-design ak évaluation ci kanam." },
      { title: 'Jëfë innovation Afrik', text: "Benn projet def fii, ci mbir décolonial, ak potentiel impact bu yokk ci Afrik ci Kanam." },
    ],

    typesLabel: 'Type partenariat',
    typesTitle: 'Plusieurs façons jëfë ñu.',
    typesItems: [
      { title: 'Institution santé', text: "Hôpital, ministère, centre santé, structure publique bu bokk ci contenu walla jox seen public ci SaxalWér." },
      { title: 'Bailleurs ak financeurs', text: "Fondation, agence, programme santé publique bu yamoo a soutenir SaxalWér." },
      { title: 'Xam-xam académique', text: "Université, laboratoire, chercheure liggéey ci santé jigéen, normes sociales, santé numérique walla études de genre." },
      { title: 'Organisation féministe ak société civile', text: "Association liggéey ci droit jigéen, njëg santé reproductive walla xam-xam." },
      { title: 'Média ak presse', text: "Journaliste ak média bu interesser santé, genre, innovation Afrik." },
      { title: 'Doktor jigéen', text: "Gynécologue, sage-femme, doktor, infirmier bu bëgg seet walla sellal contenu yi." },
    ],

    currentLabel: 'Partenaire actuel yi',
    currentTitle: 'Dañu nekk ak ñu bi tey.',

    formLabel: 'Nekk partenaire',
    formTitle: 'Bind ñu ngir partenariat.',
    formIntro: "Defar formulaire bii ngir wone sunu organisation ak sa interesseet. Dinañu la recontacter.",

    org: 'Tur organisation',
    orgPh: 'Tur bu mat sa structure',
    contactName: 'Tur ak contact',
    contactPh: 'Tur njëkk ak tur ndey responsable',
    email: 'Email contact',
    emailPh: 'adrés@organisation.com',
    type: 'Type partenariat',
    typeOptions: ['Institution santé', 'Bailleur / financeur', 'Xam-xam académique', 'Société civile', 'Média / presse', 'Doktor jigéen', 'Yeneen'],
    message: 'Wone sa interesseet',
    messagePh: "Ci ñaari ligne, wone sa organisation ak partenariat bi nga bëgg…",
    submit: 'Yónni sa demande',
    submitLoading: 'Yónni…',
    successTitle: 'Demande jot na. Jërëjëf.',
    successText: 'Dinañu la recontacter ci gaaw ngir wax sa proposition.',
    errorText: "Am na lañu sàkk. Mën nga tukki walla bind ñu : contact@saxalwer.com.",

    ctaTitle: 'Am benn laaj bu njëkkër ?',
    ctaText: "Mën nga bind direct ci contact@saxalwer.com ngir wax.",
    ctaBtn: 'Bind ñu',
  },
}

export default function PartnersContent() {
  const language = useLanguage()
  const t = content[language]

  const [org, setOrg] = useState('')
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setStatus('loading')
    const { ok } = await submitPartner({
      organization: org, contact_name: contactName, email,
      partner_type: type, message, language,
    })
    if (ok) {
      setStatus('success')
      setOrg(''); setContactName(''); setEmail(''); setType(''); setMessage('')
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
          <p className="prose-saxal" style={{ maxWidth: '62ch' }}>{t.subtitle}</p>
          <div className="w-10 h-px bg-[#A65D40] mt-8" />
        </div>
      </section>

      {/* POURQUOI NOUS REJOINDRE */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.whyLabel}</span>
          <h2 className="title-h2 mb-3">{t.whyTitle}</h2>
          <div className="w-10 h-px bg-[#A65D40] mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.whyItems.map((item, i) => (
              <div key={i} className="card-feature">
                <span className="text-[#A65D40]/60 text-xs font-light tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="title-h4">{item.title}</h3>
                <p className="text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES DE PARTENARIATS */}
      <section className="py-16 md:py-20 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.typesLabel}</span>
          <h2 className="title-h2 mb-3">{t.typesTitle}</h2>
          <div className="w-10 h-px bg-[#A65D40] mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.typesItems.map((item, i) => (
              <div key={i} className="card-feature flex-row items-start gap-4">
                <span className="dot-gold shrink-0 mt-2" aria-hidden="true" />
                <div>
                  <h3 className="title-h4 mb-2">{item.title}</h3>
                  <p className="text-secondary text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES ACTUELS */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.currentLabel}</span>
          <h2 className="title-h2 mb-3">{t.currentTitle}</h2>
          <div className="w-10 h-px bg-[#A65D40] mb-12" />

          <InDevelopment message={language === 'wo' ? 'Mu ngi def — partenaire yi dinañu leen wone ci kanam.' : 'En cours de développement — nos partenaires seront présentés ici prochainement.'} />
        </div>
      </section>

      {/* FORMULAIRE */}
      <section id="formulaire" className="py-16 md:py-24 px-6 bg-[#1A3C34]">
        <div className="max-w-2xl mx-auto">
          <span className="text-[#D4AF37]/60 text-label block mb-5">{t.formLabel}</span>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', lineHeight: 1.2 }}>
            {t.formTitle}
          </h2>
          <p className="text-white/65 font-light leading-relaxed text-sm md:text-base mb-8" style={{ maxWidth: '55ch' }}>
            {t.formIntro}
          </p>
          <div className="w-10 h-px bg-[#D4AF37]/30 mb-10" />

          {status === 'success' ? (
            <div className="bg-white/8 border border-white/15 rounded-2xl p-8 text-center">
              <span className="dot-gold mx-auto mb-3" />
              <h3 className="text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}>
                {t.successTitle}
              </h3>
              <p className="text-white/70 font-light text-sm leading-relaxed max-w-md mx-auto">{t.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
              {/* Organisation */}
              <div>
                <label className="block text-[10px] text-white/55 uppercase tracking-widest mb-2.5 font-medium" htmlFor="org">{t.org}</label>
                <input id="org" type="text" value={org} onChange={e => setOrg(e.target.value)} placeholder={t.orgPh} required disabled={status === 'loading'}
                  className="w-full px-5 py-3.5 bg-white/8 border border-white/15 rounded-full text-white placeholder:text-white/35 focus:outline-none focus:border-[#D4AF37]/60 focus:ring-2 focus:ring-[#D4AF37]/15 transition-all duration-300 text-sm font-light disabled:opacity-50" />
              </div>

              {/* Contact name */}
              <div>
                <label className="block text-[10px] text-white/55 uppercase tracking-widest mb-2.5 font-medium" htmlFor="contactName">{t.contactName}</label>
                <input id="contactName" type="text" value={contactName} onChange={e => setContactName(e.target.value)} placeholder={t.contactPh} required disabled={status === 'loading'}
                  className="w-full px-5 py-3.5 bg-white/8 border border-white/15 rounded-full text-white placeholder:text-white/35 focus:outline-none focus:border-[#D4AF37]/60 focus:ring-2 focus:ring-[#D4AF37]/15 transition-all duration-300 text-sm font-light disabled:opacity-50" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] text-white/55 uppercase tracking-widest mb-2.5 font-medium" htmlFor="emailPartner">{t.email}</label>
                <input id="emailPartner" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t.emailPh} required disabled={status === 'loading'}
                  className="w-full px-5 py-3.5 bg-white/8 border border-white/15 rounded-full text-white placeholder:text-white/35 focus:outline-none focus:border-[#D4AF37]/60 focus:ring-2 focus:ring-[#D4AF37]/15 transition-all duration-300 text-sm font-light disabled:opacity-50" />
              </div>

              {/* Type */}
              <div>
                <label className="block text-[10px] text-white/55 uppercase tracking-widest mb-3 font-medium">{t.type}</label>
                <div role="group" aria-label={t.type} className="flex flex-wrap gap-2">
                  {t.typeOptions.map(opt => (
                    <button key={opt} type="button" onClick={() => setType(opt)} disabled={status === 'loading'}
                      aria-pressed={type === opt}
                      className={`px-4 py-2 rounded-full text-xs font-light border transition-all duration-200 ${
                        type === opt
                          ? 'bg-[#D4AF37] text-[#1A3C34] border-[#D4AF37]'
                          : 'bg-white/5 text-white/70 border-white/15 hover:border-[#D4AF37]/40'
                      }`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] text-white/55 uppercase tracking-widest mb-2.5 font-medium" htmlFor="msgPartner">{t.message}</label>
                <textarea id="msgPartner" value={message} onChange={e => setMessage(e.target.value)} placeholder={t.messagePh} required rows={5} disabled={status === 'loading'}
                  className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-2xl text-white placeholder:text-white/35 focus:outline-none focus:border-[#D4AF37]/60 focus:ring-2 focus:ring-[#D4AF37]/15 transition-all duration-300 text-sm font-light leading-relaxed resize-none disabled:opacity-50" />
              </div>

              {/* Submit */}
              <button type="submit" disabled={status === 'loading' || !type} className="px-8 py-3.5 bg-[#D4AF37] text-[#1A3C34] rounded-full font-medium text-sm hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed self-start">
                {status === 'loading' ? t.submitLoading : t.submit}
              </button>

              {status === 'error' && (
                <p className="text-sm text-[#D4AF37] font-light">{t.errorText}</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* CTA contact direct */}
      <section className="py-14 md:py-20 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div style={{ maxWidth: '44ch' }}>
            <h2 className="title-h3 mb-3">{t.ctaTitle}</h2>
            <p className="text-secondary text-sm">{t.ctaText}</p>
          </div>
          <a href="mailto:contact@saxalwer.com" className="btn-primary shrink-0 whitespace-nowrap">{t.ctaBtn}</a>
        </div>
      </section>
    </main>
  )
}

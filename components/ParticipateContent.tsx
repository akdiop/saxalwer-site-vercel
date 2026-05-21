'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useLanguage } from './SiteWrapper'
import { submitParticipation } from '@/lib/supabase'
import MedicalDisclaimer from './MedicalDisclaimer'

const GOOGLE_FORM_URL = 'https://forms.gle/guMVZXFnYLCPeAXC7'

type Status = 'idle' | 'loading' | 'success' | 'error'

const content = {
  fr: {
    hero: {
      label: 'Tests utilisatrices',
      title: 'Votre voix construit SaxalWér.',
      subtitle: "SaxalWér est co-construite avec les femmes qu'elle est destinée à servir. Si vous souhaitez tester l'application ou participer à un focus group, votre contribution est précieuse — et entièrement volontaire.",
    },
    why: {
      label: '01 — Pourquoi participer',
      title: 'Une plateforme qui vous ressemble, parce que vous l\'avez construite avec nous.',
      items: [
        { title: 'Faire entendre vos besoins', text: "Vos retours orientent directement les fonctionnalités, les contenus et le ton de SaxalWér." },
        { title: 'Façonner un outil utile', text: "Vous identifiez ce qui manque, ce qui dérange, ce qui rassure. SaxalWér évolue grâce à vous." },
        { title: 'Représenter votre réalité', text: "Chaque femme apporte une expérience unique. La diversité des participantes est essentielle." },
      ],
    },
    who: {
      label: '02 — Qui peut participer',
      title: 'Toutes les femmes du Sénégal, sans exception.',
      text: "Nous cherchons une diversité de profils pour que SaxalWér serve réellement toutes les femmes — pas seulement une partie d'entre elles.",
      profiles: [
        'Femmes et filles à partir de 18 ans, résidant au Sénégal',
        'Adolescentes (avec accord d\'une tutrice si moins de 18 ans)',
        'Toutes régions : Dakar, Thiès, Saint-Louis, Tambacounda, Ziguinchor…',
        'Locutrices de français, wolof, pulaar, sérère',
        'Tous niveaux de familiarité avec le numérique',
        'Tous statuts : étudiante, salariée, mère, en recherche, etc.',
      ],
    },
    implications: {
      label: '03 — Ce que la participation implique',
      title: 'Du temps, mais rien d\'engageant.',
      items: [
        { title: 'Test individuel', text: "30 à 60 minutes pour découvrir un prototype et partager vos impressions, en ligne ou en personne." },
        { title: 'Focus group', text: "Une rencontre de 90 minutes environ, avec d'autres femmes, pour échanger sur vos expériences et vos attentes." },
        { title: 'Suivi optionnel', text: "Possibilité d'être recontactée pour des tests ultérieurs — toujours sans obligation." },
      ],
      note: 'Aucune participation n\'est rémunérée à ce stade. Les frais de transport peuvent être pris en charge pour les rencontres en présentiel.',
    },
    privacy: {
      label: '04 — Confidentialité et respect',
      title: 'Vos informations, votre maîtrise.',
      items: [
        'Vos données ne sont utilisées que pour la recherche SaxalWér',
        'Aucune information n\'est partagée avec des tiers',
        'Aucune donnée médicale sensible n\'est collectée',
        'Vous pouvez retirer votre participation à tout moment, sans justification',
        'Tous les échanges sont anonymisés dans les analyses',
        'Vous décidez ce que vous partagez — rien n\'est obligatoire',
      ],
    },
    form: {
      label: '05 — Formulaire d\'inscription',
      title: 'S\'inscrire pour participer.',
      intro: "Remplissez ce court formulaire pour rejoindre nos tests. Nous vous recontacterons pour vous proposer un créneau adapté.",

      firstName: 'Prénom',
      firstNamePh: 'Votre prénom',
      age: 'Âge',
      agePh: 'Votre âge',
      city: 'Ville ou région',
      cityPh: 'Ex : Dakar, Thiès, Saint-Louis…',
      language: 'Langue préférée',
      languageOptions: ['Français', 'Wolof', 'Pulaar', 'Sérère'],

      participation: 'Comment souhaitez-vous participer ?',
      testApp: "Tester l'application (en ligne ou en personne)",
      focusGroup: 'Participer à un focus group',
      bothOk: "Les deux, je suis flexible",

      teen: "Êtes-vous parent ou tutrice d'une adolescente qui souhaiterait participer ?",
      teenYes: 'Oui',
      teenNo: 'Non',

      contact: 'Email ou numéro WhatsApp',
      contactPh: 'Comment vous joindre',

      consent: "J'accepte d'être recontactée par SaxalWér au sujet de cette participation. Je comprends que je peux retirer mon consentement à tout moment.",

      submit: "Envoyer mon inscription",
      submitLoading: 'Envoi…',
      successTitle: 'Merci pour votre inscription.',
      successText: "Nous vous recontacterons prochainement par le moyen que vous avez indiqué.",
      errorText: "Une erreur est survenue. Vous pouvez réessayer ou nous écrire à contact@saxalwer.com.",

      volunteer: 'Cette inscription est entièrement volontaire. Vous pouvez la retirer à tout moment en nous écrivant à contact@saxalwer.com.',
    },
    survey: {
      label: 'Sondage besoins',
      title: 'Partager vos besoins en quelques minutes.',
      text: "Si vous préférez d'abord partager vos besoins ou vos attentes en santé sans vous engager dans un test, ce court formulaire anonyme vous est destiné. Vos réponses nourrissent directement la conception de SaxalWér.",
      btn: 'Accéder au formulaire de besoins',
    },
    ethics: {
      label: '06 — Avertissement éthique',
      title: 'Un cadre clair, des engagements fermes.',
      items: [
        "Votre participation est entièrement volontaire. Aucune pression ne sera exercée.",
        "Vous pouvez interrompre votre participation à tout moment, sans avoir à vous justifier.",
        "Aucune question intime ou médicale sensible ne sera posée dans le cadre de cette inscription.",
        "Vos données sont protégées conformément à la loi sénégalaise n°2008-12 sur la protection des données personnelles.",
        "Toute personne mineure doit avoir l'accord écrit ou verbal d'une tutrice pour participer.",
        "En cas de doute, vous pouvez nous contacter à contact@saxalwer.com avant tout engagement.",
      ],
    },
  },

  wo: {
    hero: {
      label: 'Testukaay',
      title: 'Sa xel mooy def SaxalWér.',
      subtitle: "SaxalWér ñu def ko ak jigéen yi mu yelloo jëfë. Bu nga bëgg test aplikasion bi walla bokk ci focus group, sa contribution am solo — te am volontaire bu mat.",
    },
    why: {
      label: '01 — Lan tax bokk',
      title: 'Benn plateforme bu yemale ci yow, ndax yaa def ak ñu.',
      items: [
        { title: 'Wax sa bëgg', text: "Sa retour saxal jëfandikukaay yi, contenu yi ak ton SaxalWér." },
        { title: 'Def outil bu am njëg', text: "Yaay xam lu amul, lu yenniku, lu siiw. SaxalWér sopiku ngir yow." },
        { title: 'Wone sa yëgël', text: "Jigéen bu nekk indi expérience bu sell. Diversité bokkukay yi am solo." },
      ],
    },
    who: {
      label: '02 — Kan mën a bokk',
      title: 'Jigéen yëp ci Senegaal, sax kenn baax.',
      text: "Ñu wëre yëkk profil yi ngir SaxalWér jëfë jigéen yëp — moo nekk benn lëkkale rekk.",
      profiles: [
        'Jigéen ak doom-jigéen 18 at ak ci kanam, dëkk ci Senegaal',
        "Adolescente (ak yëgël tutrice bu yor 18 at)",
        'Yëp dëkk : Dakar, Thiès, Saint-Louis, Tambacounda, Ziguinchor…',
        'Wax Faransee, Wolof, Pulaar, Sérère',
        'Yëp niveau xam-xam numérique',
        'Yëp statut : étudiante, salarié, ndey, ci wëre, etc.',
      ],
    },
    implications: {
      label: '03 — Lu bokk def',
      title: 'Diir, sax engagement bu sell.',
      items: [
        { title: 'Test personal', text: "30 ba 60 simili ngir xam prototype ak yëgël yëgël, ci internet walla fi yow nekk." },
        { title: 'Focus group', text: "Benn ndajee 90 simili ak yenn jigéen yi, ngir yëngal yëgël ak bëgg yi." },
        { title: 'Yokk optionnel', text: "Mën a recontacter ngir test yu yokk — sax obligation." },
      ],
      note: 'Bokk amul rémunération ci kanam bi. Ndajee fi jëfë mën a am prise en charge.',
    },
    privacy: {
      label: '04 — Ceebu géewal ak yëg',
      title: 'Sa xibaar, ci sa loxo.',
      items: [
        'Sa xibaar dañu leen jëfandikoo ci xam-xam SaxalWér rekk',
        'Xibaar amul bu ñu yónneel ak tiers',
        'Xibaar médicale yenniku amul bu ñu jël',
        'Mën nga jël sa bokk ci yëp moment, sax justification',
        'Yëngal yëp ñu leen def anonyme ci analyse',
        'Yaa sori ci lu nga yónneel — amul lu jëf gàtt',
      ],
    },
    form: {
      label: '05 — Formulaire bind',
      title: 'Bind ngir bokk.',
      intro: "Defar formulaire bu gàtt bii ngir bokk ci sunu testukaay. Dinañu la recontacter ngir jox la créneau bu yemale.",

      firstName: 'Tur njëkk',
      firstNamePh: 'Sa tur njëkk',
      age: 'At',
      agePh: 'Sa at',
      city: 'Dëkk',
      cityPh: 'Ex : Dakar, Thiès, Saint-Louis…',
      language: 'Sa làkk bu njëkk',
      languageOptions: ['Faransee', 'Wolof', 'Pulaar', 'Sérère'],

      participation: 'Nan nga bëgg bokk ?',
      testApp: "Test aplikasion bi",
      focusGroup: 'Bokk ci focus group',
      bothOk: "Ñaar yi, ma flexible",

      teen: "Yaa parent walla tutrice doom-jigéen bu bëgg bokk ?",
      teenYes: 'Waaw',
      teenNo: 'Déedéet',

      contact: 'Email walla WhatsApp',
      contactPh: 'Ni nga la jokkoo',

      consent: "Ma nangu SaxalWér recontacter ma ci bokk bii. Xam naa mën naa jël yëgël ci yëp moment.",

      submit: 'Yónneel sa bind',
      submitLoading: 'Yónni…',
      successTitle: 'Jërëjëf ci sa bind.',
      successText: "Dinañu la recontacter ci kanam ak moyen bi nga jox.",
      errorText: "Am na lañu sàkk. Mën nga tukki walla bind ñu : contact@saxalwer.com.",

      volunteer: "Bind bii bu am volontaire bu mat. Mën nga jël ko ci yëp moment ci bind contact@saxalwer.com.",
    },
    survey: {
      label: 'Sondage bëgg',
      title: 'Yónneel sa bëgg ci tuuti simili.',
      text: "Bu nga bëgg yónneel sa bëgg walla sa yëngal santé sax bokk ci test, formulaire bu gàtt bu siiw bii ngir yow. Sa tontu jëfë def SaxalWér.",
      btn: 'Dem ci formulaire bëgg yi',
    },
    ethics: {
      label: '06 — Yëgël éthique',
      title: 'Benn cadre bu sell, engagement yu dëkk.',
      items: [
        "Sa bokk am volontaire bu mat. Pression amul.",
        "Mën nga jël sa bokk ci yëp moment, sax justification.",
        "Laaj intime walla médicale sensitive amul ci bind bii.",
        "Sa xibaar dañu leen dëkk yemale ci loi sénégalaise n°2008-12.",
        "Bu kenn mineur, dafa am yëgël tutrice ngir bokk.",
        "Bu am doute, mën nga jokkoo ak ñu : contact@saxalwer.com.",
      ],
    },
  },
}

/* ═══════════════════════════════════════════ */
export default function ParticipateContent() {
  const language = useLanguage()
  const t = content[language]

  const [firstName, setFirstName] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [lang, setLang] = useState('')
  const [participation, setParticipation] = useState<string[]>([])
  const [teen, setTeen] = useState('')
  const [contact, setContact] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  const toggleParticipation = (val: string) => {
    setParticipation(p => p.includes(val) ? p.filter(x => x !== val) : [...p, val])
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setStatus('loading')
    const { ok } = await submitParticipation({
      first_name: firstName,
      age: parseInt(age) || 0,
      city,
      preferred_language: lang,
      participation_types: participation,
      is_guardian_of_minor: teen as 'yes' | 'no' | '',
      contact,
      consent,
      language,
    })
    if (ok) {
      setStatus('success')
      setFirstName(''); setAge(''); setCity(''); setLang(''); setParticipation([]); setTeen(''); setContact(''); setConsent(false)
    } else {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <main className="flex-1 bg-[#F5F1E6]">

      {/* ══ HERO ═════════════════════════════════ */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 pointer-events-none overflow-hidden" style={{ opacity: 0.025 }} aria-hidden="true">
          <img src="/assets/logo.png" alt="" className="w-[28vw] max-w-[220px] object-contain" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.hero.label}</span>
          <h1 className="title-hero mb-6">{t.hero.title}</h1>
          <p className="prose-saxal" style={{ maxWidth: '60ch' }}>{t.hero.subtitle}</p>
          <div className="w-10 h-px bg-[#A65D40] mt-8" />
        </div>
      </section>

      {/* ══ 1. POURQUOI ══════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.why.label}</span>
          <h2 className="title-h2 mb-3" style={{ maxWidth: '40ch' }}>{t.why.title}</h2>
          <div className="w-10 h-px bg-[#A65D40] mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.why.items.map((item, i) => (
              <div key={i} className="card-feature">
                <span className="dot-gold shrink-0" aria-hidden="true" />
                <h3 className="title-h4">{item.title}</h3>
                <p className="text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 2. QUI PEUT PARTICIPER ═══════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.who.label}</span>
          <h2 className="title-h2 mb-4">{t.who.title}</h2>
          <p className="prose-saxal mb-10" style={{ maxWidth: '58ch' }}>{t.who.text}</p>
          <div className="w-10 h-px bg-[#A65D40] mb-10" />

          <ul className="flex flex-col gap-3">
            {t.who.profiles.map((p, i) => (
              <li key={i} className="flex items-start gap-4 p-4 bg-white/40 border border-[#1A3C34]/8 rounded-2xl">
                <svg className="w-4 h-4 text-[#A65D40] shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-[#7D5A44]/85 font-light leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ 3. IMPLICATIONS ══════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.implications.label}</span>
          <h2 className="title-h2 mb-3">{t.implications.title}</h2>
          <div className="w-10 h-px bg-[#A65D40] mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {t.implications.items.map((item, i) => (
              <div key={i} className="card-feature">
                <span className="text-[#A65D40]/60 text-xs font-light tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="title-h4">{item.title}</h3>
                <p className="text-secondary">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#1A3C34]/55 font-light italic leading-relaxed border-l-2 border-[#A65D40]/30 pl-4 py-1" style={{ maxWidth: '60ch' }}>
            {t.implications.note}
          </p>
        </div>
      </section>

      {/* ══ 4. CONFIDENTIALITÉ ═══════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#1A3C34]">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#D4AF37]/60 text-label block mb-5">{t.privacy.label}</span>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', lineHeight: 1.2 }}>
            {t.privacy.title}
          </h2>
          <div className="w-10 h-px bg-[#D4AF37]/30 mb-10" />

          <ul className="flex flex-col gap-3">
            {t.privacy.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <svg className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className="text-sm text-white/75 font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ 5. FORMULAIRE ════════════════════════ */}
      <section id="formulaire" className="py-16 md:py-24 px-6 bg-[#F5F1E6]">
        <div className="max-w-2xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.form.label}</span>
          <h2 className="title-h2 mb-4">{t.form.title}</h2>
          <p className="prose-saxal mb-8" style={{ maxWidth: '54ch' }}>{t.form.intro}</p>
          <div className="w-10 h-px bg-[#A65D40] mb-10" />

          {status === 'success' ? (
            <div className="card-accent text-center">
              <span className="dot-gold mb-3 mx-auto" />
              <h3 className="title-h3 mb-3">{t.form.successTitle}</h3>
              <p className="prose-saxal mx-auto">{t.form.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

              {/* Prénom + Âge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="firstName">{t.form.firstName}</label>
                  <input id="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder={t.form.firstNamePh} required disabled={status === 'loading'} className="input" />
                </div>
                <div>
                  <label className="form-label" htmlFor="age">{t.form.age}</label>
                  <input id="age" type="number" min="14" max="100" value={age} onChange={e => setAge(e.target.value)} placeholder={t.form.agePh} required disabled={status === 'loading'} className="input" />
                </div>
              </div>

              {/* Ville */}
              <div>
                <label className="form-label" htmlFor="city">{t.form.city}</label>
                <input id="city" type="text" value={city} onChange={e => setCity(e.target.value)} placeholder={t.form.cityPh} required disabled={status === 'loading'} className="input" />
              </div>

              {/* Langue */}
              <div>
                <label className="form-label">{t.form.language}</label>
                <div className="flex flex-wrap gap-2">
                  {t.form.languageOptions.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setLang(opt)}
                      disabled={status === 'loading'}
                      className={`px-5 py-2.5 rounded-full text-sm font-light border transition-all duration-200 ${
                        lang === opt
                          ? 'bg-[#1A3C34] text-white border-[#1A3C34]'
                          : 'bg-white/40 text-[#7D5A44] border-[#1A3C34]/15 hover:border-[#A65D40]/40'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Participation */}
              <div>
                <label className="form-label">{t.form.participation}</label>
                <div className="flex flex-col gap-2.5">
                  {[
                    { val: 'test',  label: t.form.testApp },
                    { val: 'focus', label: t.form.focusGroup },
                    { val: 'both',  label: t.form.bothOk },
                  ].map(opt => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => toggleParticipation(opt.val)}
                      disabled={status === 'loading'}
                      className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-light text-left border transition-all duration-200 ${
                        participation.includes(opt.val)
                          ? 'bg-[#A65D40]/8 border-[#A65D40]/40 text-[#1A3C34]'
                          : 'bg-white/40 border-[#1A3C34]/10 text-[#7D5A44] hover:border-[#A65D40]/30'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
                        participation.includes(opt.val) ? 'border-[#A65D40] bg-[#A65D40]' : 'border-[#1A3C34]/25'
                      }`}>
                        {participation.includes(opt.val) && (
                          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parent / tutrice */}
              <div>
                <label className="form-label">{t.form.teen}</label>
                <div className="flex gap-2">
                  {[
                    { val: 'yes', label: t.form.teenYes },
                    { val: 'no',  label: t.form.teenNo },
                  ].map(opt => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setTeen(opt.val)}
                      disabled={status === 'loading'}
                      className={`px-5 py-2.5 rounded-full text-sm font-light border transition-all duration-200 ${
                        teen === opt.val
                          ? 'bg-[#1A3C34] text-white border-[#1A3C34]'
                          : 'bg-white/40 text-[#7D5A44] border-[#1A3C34]/15 hover:border-[#A65D40]/40'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <label className="form-label" htmlFor="contact">{t.form.contact}</label>
                <input id="contact" type="text" value={contact} onChange={e => setContact(e.target.value)} placeholder={t.form.contactPh} required disabled={status === 'loading'} className="input" />
              </div>

              {/* Consentement */}
              <label className={`flex items-start gap-3 p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                consent ? 'bg-[#1A3C34]/4 border-[#1A3C34]/20' : 'bg-white/40 border-[#1A3C34]/10'
              }`}>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  disabled={status === 'loading'}
                  className="sr-only"
                />
                <span className={`mt-0.5 w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
                  consent ? 'border-[#1A3C34] bg-[#1A3C34]' : 'border-[#1A3C34]/25'
                }`}>
                  {consent && (
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-[#7D5A44]/90 font-light leading-relaxed">{t.form.consent}</span>
              </label>

              {/* Bouton */}
              <button type="submit" disabled={status === 'loading' || !consent} className="btn-primary justify-center self-start">
                {status === 'loading' ? t.form.submitLoading : t.form.submit}
              </button>

              {status === 'error' && (
                <p className="form-message-error">{t.form.errorText}</p>
              )}

              {/* Note volontariat */}
              <p className="text-xs text-[#1A3C34]/55 font-light italic leading-relaxed border-l-2 border-[#A65D40]/30 pl-4 py-1 mt-2" style={{ maxWidth: '58ch' }}>
                {t.form.volunteer}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ══ SONDAGE BESOINS ══════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.survey.label}</span>

          <div className="card-accent">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div style={{ maxWidth: '46ch' }}>
                <h2 className="title-h3 mb-3">{t.survey.title}</h2>
                <p className="text-secondary text-sm leading-relaxed">{t.survey.text}</p>
              </div>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-dark shrink-0 whitespace-nowrap">
                {t.survey.btn}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. ÉTHIQUE ═══════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.ethics.label}</span>
          <h2 className="title-h2 mb-3">{t.ethics.title}</h2>
          <div className="w-10 h-px bg-[#A65D40] mb-10" />

          <ul className="flex flex-col gap-0">
            {t.ethics.items.map((item, i) => (
              <li key={i} className="flex gap-5 py-5 border-b border-[#1A3C34]/8 last:border-0">
                <span className="text-[#A65D40]/40 text-xs font-light tracking-widest shrink-0 mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-[#7D5A44]/90 font-light leading-relaxed" style={{ maxWidth: '60ch' }}>
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ DISCLAIMER ═══════════════════════════ */}
      <div className="bg-[#F5F1E6] px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <MedicalDisclaimer variant="short" />
        </div>
      </div>

    </main>
  )
}

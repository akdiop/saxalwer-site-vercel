'use client'

import Link from 'next/link'
import { useLanguage } from './SiteWrapper'
import MedicalDisclaimer from './MedicalDisclaimer'

/* ─── Icônes des catégories ─── */
const icons: Record<string, JSX.Element> = {
  cycle: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  ),
  pain: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  contraception: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  fertility: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-5 7.8-5 7.8S3 13.2 3 16.5a9 9 0 0018 0c0-3.3-4-5.7-4-5.7S13.2 8.4 12 3z" />
    </svg>
  ),
  pregnancy: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  ),
  postpartum: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z" />
    </svg>
  ),
  infections: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  intimate: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  menopause: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  consult: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 12m19.5 0v6.75A2.25 2.25 0 0118.75 21h-15A2.25 2.25 0 011.5 18.75V12m19.5 0v-3a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9v3" />
    </svg>
  ),
}

const content = {
  fr: {
    hero: {
      label: 'Ressources santé',
      title: 'Comprendre. Sans avoir peur. Sans avoir honte.',
      subtitle: "Une bibliothèque d'informations claires, fiables et culturellement adaptées sur la santé sexuelle et reproductive. À explorer à votre rythme, sans pression.",
    },
    intro: {
      label: 'À propos des ressources',
      text: "Les ressources de SaxalWér sont en cours de rédaction. Elles seront validées par des professionnelles de santé avant publication. Vous pourrez bientôt y accéder en français et en wolof, à votre rythme, dans la discrétion.",
      reassure: "Aucune image médicale anxiogène. Aucun jugement. Juste des explications claires, pour vous aider à mieux comprendre votre corps.",
    },
    categories: {
      label: 'Catégories',
      title: 'Par où commencer.',
      items: [
        { key: 'cycle',         title: 'Règles et cycle',         desc: "Comprendre le cycle menstruel, les phases, les variations normales et ce qu'elles signifient." },
        { key: 'pain',          title: 'Douleurs menstruelles',   desc: "Quand la douleur est-elle ordinaire, quand devient-elle un signal à écouter ?" },
        { key: 'contraception', title: 'Contraception',           desc: "Un panorama des méthodes existantes, leurs avantages, leurs limites et où en parler." },
        { key: 'fertility',     title: 'Fertilité',               desc: "Comprendre les périodes fertiles, les facteurs qui influencent la fertilité, sans pression sociale." },
        { key: 'pregnancy',     title: 'Grossesse',               desc: "Les grandes étapes, les signes à surveiller, les suivis recommandés et les choix possibles." },
        { key: 'postpartum',    title: 'Post-partum',             desc: "Le corps et l'esprit après la naissance — ce qui est attendu, ce qui mérite une attention médicale." },
        { key: 'infections',    title: 'Infections',              desc: "Les infections intimes courantes, les IST, comment les reconnaître et quand consulter." },
        { key: 'intimate',      title: 'Santé intime',            desc: "Hygiène, irritations, sécheresse, démangeaisons — comprendre les signaux du corps." },
        { key: 'menopause',     title: 'Ménopause',               desc: "La transition hormonale, ses étapes, ses effets et les façons de mieux la vivre." },
        { key: 'consult',       title: 'Quand consulter ?',       desc: "Les signes qui doivent vous mener vers une professionnelle de santé sans tarder." },
      ],
      cta: 'Lire les ressources',
      wip: 'En cours de rédaction',
    },
    note: {
      title: 'Une approche pédagogique, jamais alarmiste.',
      text: "Les ressources de SaxalWér sont écrites pour expliquer, pas pour effrayer. Chaque contenu est relu par une professionnelle de santé et adapté au contexte sénégalais. L'objectif est de vous donner des clés de compréhension, jamais de poser un diagnostic à votre place.",
    },
    disclaimer: 'Les contenus proposés sont éducatifs. Ils ne remplacent pas l\'avis d\'une professionnelle de santé.',
    cta: {
      title: 'Une ressource manque ? Une question récurrente ?',
      text: "Vos retours nous aident à prioriser ce que nous écrivons.",
      btn: 'Nous suggérer une ressource',
    },
  },

  wo: {
    hero: {
      label: 'Xibaar wér-kër',
      title: 'Xam. Sax ragal. Sax honte.',
      subtitle: "Benn bibliotèk xibaar yu sell, yu am njëg ak yu yemale ci aaduna ci wér-kër ak njool. Xool ko ci sa yëg, sax pression.",
    },
    intro: {
      label: 'Ci xibaar yi',
      text: "Xibaar SaxalWér ñu ngi leen bind. Dañu leen sellal ak doktor ci publication. Mën nga leen jël ci kanam ci Faransee ak Wolof, ci sa yëg, ci ceebu géewal.",
      reassure: "Image médicale yu metti amul. Honte amul. Xibaar yu sell rekk, ngir jox la xam sa yaram.",
    },
    categories: {
      label: 'Catégorie yi',
      title: 'Fii ngir tëj.',
      items: [
        { key: 'cycle',         title: 'Njool ak cycle',          desc: "Xam cycle menstruel, phase yi, variation yu yomb ak seen yëgël." },
        { key: 'pain',          title: 'Daw njool',               desc: "Kañ daw bi yomb, kañ mooy benn signal bu jëfë dégg ?" },
        { key: 'contraception', title: 'Contraception',           desc: "Xool méthode yi, seen yëgël yu baax, seen mbir ak fi nga wax." },
        { key: 'fertility',     title: 'Fertilité',               desc: "Xam période fertile, mbir yu jëfë fertilité, sax pression société." },
        { key: 'pregnancy',     title: 'Guné',                    desc: "Étape yu njool, signal yu jëfë xool, suivi ak choix yi am." },
        { key: 'postpartum',    title: 'Jaar guné',               desc: "Yaram ak xel jaar wàll — lu jëfë xaar, lu jëfë doktor xool." },
        { key: 'infections',    title: 'Yaxantu',                 desc: "Yaxantu intime yi, IST yi, ni leen xam ak kañ laaj doktor." },
        { key: 'intimate',      title: 'Wér-kër intime',          desc: "Hygiène, irritation, daw — xam signal yaram." },
        { key: 'menopause',     title: 'Ménopause',               desc: "Transition hormonale, étape yi, mbir yi ak ni dëkk ko." },
        { key: 'consult',       title: 'Kañ laaj doktor ?',       desc: "Signal yu jëfë la yóbbu ci doktor sax xaar." },
      ],
      cta: 'Xool xibaar yi',
      wip: 'Mu ngi bind',
    },
    note: {
      title: 'Benn mbir pédagogique, sax ragal.',
      text: "Xibaar SaxalWér ñu leen bind ngir wax, moo nekk ngir ragal. Yëp contenu, doktor seetal ko ak yemale ko ci Senegaal. Njëg bi mooy jox la clés xam, sax def diagnostic ci sa bopp.",
    },
    disclaimer: 'Xibaar yi am ngir xam-xam rekk. Du soppal yëgël doktor.',
    cta: {
      title: 'Benn xibaar amul ? Benn laaj bu suuf ?',
      text: "Sa retour jëfë ñu prioritiser lu ñu bind.",
      btn: 'Suggérer benn xibaar',
    },
  },
}

/* ═══════════════════════════════════════════ */
export default function ResourcesContent() {
  const language = useLanguage()
  const t = content[language]

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
          <p className="prose-saxal" style={{ maxWidth: '58ch' }}>{t.hero.subtitle}</p>
          <div className="w-10 h-px bg-[#A65D40] mt-8" />
        </div>
      </section>

      {/* ══ AVERTISSEMENT EN HAUT ════════════════ */}
      <section className="px-6 -mt-4">
        <div className="max-w-3xl mx-auto">
          <div className="medical-disclaimer">
            <svg className="w-4 h-4 text-[#1A3C34]/40 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p>{t.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* ══ INTRO ════════════════════════════════ */}
      <section className="py-14 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.intro.label}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <p className="prose-saxal">{t.intro.text}</p>
            <p className="text-quote text-[#1A3C34]/75" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}>
              {t.intro.reassure}
            </p>
          </div>
          <div className="w-10 h-px bg-[#A65D40] mt-10" />
        </div>
      </section>

      {/* ══ CATÉGORIES ═══════════════════════════ */}
      <section className="py-14 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-5xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.categories.label}</span>
          <h2 className="title-h2 mb-3">{t.categories.title}</h2>
          <div className="w-10 h-px bg-[#A65D40] mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.categories.items.map(cat => (
              <article key={cat.key} className="card group flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="icon-wrap shrink-0">
                    {icons[cat.key]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="title-h4 leading-tight">{cat.title}</h3>
                  </div>
                </div>

                <p className="text-secondary text-sm mb-6 flex-1">{cat.desc}</p>

                {/* Bouton (désactivé car ressources WIP) */}
                <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-[#1A3C34]/6">
                  <span className="badge badge-gold">{t.categories.wip}</span>
                  <button
                    disabled
                    className="text-xs text-[#7D5A44]/50 font-light italic cursor-not-allowed flex items-center gap-1.5"
                  >
                    {t.categories.cta}
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NOTE PÉDAGOGIQUE ════════════════════ */}
      <section className="py-14 md:py-20 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto">
          <div className="card-info">
            <h3 className="title-h3 mb-4">{t.note.title}</h3>
            <p className="prose-saxal">{t.note.text}</p>
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════ */}
      <section className="py-14 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div style={{ maxWidth: '42ch' }}>
            <h2 className="title-h3 mb-3">{t.cta.title}</h2>
            <p className="text-secondary text-sm">{t.cta.text}</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0 whitespace-nowrap">
            {t.cta.btn}
          </Link>
        </div>
      </section>

      {/* ══ DISCLAIMER COMPLET ══════════════════ */}
      <div className="bg-[#F5F1E6] px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <MedicalDisclaimer variant="full" />
        </div>
      </div>

    </main>
  )
}

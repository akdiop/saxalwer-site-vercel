'use client'

import Link from 'next/link'
import { useLanguage } from './SiteWrapper'
import MedicalDisclaimer from './MedicalDisclaimer'

/* ─── Icônes valeurs ─── */
const icons = {
  bienveillance: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  autonomie: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  inclusivite: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  intimite: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  culturalite: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-5 7.8-5 7.8S3 13.2 3 16.5a9 9 0 0018 0c0-3.3-4-5.7-4-5.7S13.2 8.4 12 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
    </svg>
  ),
  souverainete: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  discretion: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  ),
  fiabilite: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
}

/* ─── Contenu fr/wo ─── */
const content = {
  fr: {
    hero: {
      label: 'À propos de SaxalWér',
      title: 'Éclairer. Accompagner. Protéger.',
      subtitle: "SaxalWér est une plateforme de santé féminine née d'une conviction : chaque femme au Sénégal a le droit d'accéder à une information fiable, dans sa langue, dans le respect de son intimité et de sa culture.",
    },
    name: {
      label: 'Le nom',
      title: 'Saxal + Wér',
      quote: '"Saxal" signifie éclairer, rendre visible. "Wér" signifie la santé, le bien-être durable.',
      text: "Ensemble, SaxalWér dit : éclairer la santé, rendre la santé visible et pérenne. Ce nom wolof porte en lui toute la philosophie du projet : partir de la langue, partir du vécu, pour construire un outil qui appartient aux femmes qu'il sert.",
    },
    mission: {
      label: 'Notre mission',
      title: 'Un espace numérique qui vous appartient.',
      text: "Offrir aux femmes et aux filles au Sénégal un espace numérique intime, culturellement ancré et technologiquement avancé pour comprendre, suivre et protéger leur santé sexuelle et reproductive — sans jugement, sans tabou, en toute confiance.",
      detail: "SaxalWér ne pose pas de diagnostic. Elle éduque, oriente et accompagne. Elle est un complément à la consultation médicale, jamais un substitut.",
    },
    vision: {
      label: 'Notre vision',
      title: 'Une référence africaine en santé féminine digitale.',
      text: "Devenir la plateforme de référence en Afrique subsaharienne pour la santé sexuelle et reproductive des femmes — combinant innovation technologique, sensibilité culturelle profonde et approche décoloniale, avec un fort impact socio-culturel mesurable.",
      detail: "Nous refusons de transposer des modèles étrangers. Nous construisons depuis ici, avec les femmes d'ici, pour les femmes d'ici.",
    },
    positioning: {
      label: 'Notre positionnement',
      title: 'Intelligente. Sensible. Confidentielle.',
      text: "SaxalWér est une application intelligente, socialement et culturellement sensible, confidentielle et non diagnostique. Elle ne remplace pas la médecine — elle la rend accessible, compréhensible et moins intimidante.",
      tags: [
        'Non diagnostique',
        'Culturellement ancrée',
        'Multilingue',
        'Confidentielle by design',
        'Socialement sensible',
        'Décoloniale',
      ],
    },
    values: {
      label: 'Nos valeurs',
      title: 'Ce qui nous guide.',
      items: [
        { key: 'bienveillance', title: 'Bienveillance', text: "Chaque utilisatrice est accueillie sans jugement. SaxalWér est un espace de douceur et de sécurité." },
        { key: 'autonomie', title: 'Autonomie féminine', text: "L'information est un droit. SaxalWér aide les femmes à décider en connaissance de cause, librement." },
        { key: 'inclusivite', title: 'Inclusivité', text: "Toutes les femmes, quel que soit leur âge, leur région ou leur niveau d'éducation, sont les bienvenues." },
        { key: 'intimite', title: 'Respect de l\'intimité', text: "Les données personnelles sont protégées. La navigation est discrète. La vie privée est sacrée." },
        { key: 'culturalite', title: 'Culturalité', text: "Les réalités culturelles sénégalaises ne sont pas des obstacles — elles sont le point de départ." },
        { key: 'souverainete', title: 'Souveraineté numérique', text: "Les femmes africaines méritent des outils numériques pensés par et pour elles, pas adaptés d'ailleurs." },
        { key: 'discretion', title: 'Discrétion', text: "SaxalWér peut être utilisée sans que personne ne le sache. Confidentialité totale, en toutes circonstances." },
        { key: 'fiabilite', title: 'Fiabilité scientifique', text: "Tous les contenus sont validés par des professionnelles de santé. Aucune information non vérifiée." },
      ],
    },
    cta: {
      title: 'Envie d\'en savoir plus ou de collaborer ?',
      btn1: 'Participer aux tests',
      btn2: 'Nous contacter',
    },
  },
  wo: {
    hero: {
      label: 'Ci SaxalWér',
      title: 'Saxal. Siiw. Dëkk.',
      subtitle: "SaxalWér mooy benn plateforme ci wér-kër jigéen, dëkk ci benn xel : jigéen yëp ci Senegaal am droit a jël xibaar bu sell, ci seen làkk, ci yëg seen intimité ak seen aaduna.",
    },
    name: {
      label: 'Tur bi',
      title: 'Saxal + Wér',
      quote: '"Saxal" dafa jox xam-xam, def mu gënn. "Wér" mooy wér-kër, yëg bu dëkk.',
      text: "Ñaareel ak yenn, SaxalWér wax : saxal wér-kër, def wér-kër gënn ak dëkk. Tur wolof bii am ci biir ko philosophy yu dëkk : dëkk ci làkk, dëkk ci yëg, ngir def benn outil bu jigéen yi moom.",
    },
    mission: {
      label: 'Sunu njëg',
      title: 'Benn bërëb digital bu moom sa bopp.',
      text: "Jox jigéen ak doom-jigéen ci Senegaal benn bërëb digital bu gënn, bu yem ci aaduna ak bu am teknoloji ngir xam, siiw ak dëkk seen wér-kër ak njool — sax géewël, sax taabël, ci yëgël.",
      detail: "SaxalWér du def diagnostic. Dafa jëf xam-xam, orientation ak siiw. Dafa tontu sopoon bu doktor, du soppal ko.",
    },
    vision: {
      label: 'Sunu xam-xam',
      title: 'Benn référence Afrik ci wér-kër jigéen digital.',
      text: "Nekk plateforme bu référence ci Afrik ci Kanam ci wér-kër ak njool jigéen — bokk innovation teknoloji, yëkk ci aaduna bu sell ak mbir bu bàyyi koloniyalism, ak impact socio-culturel bu am njëg.",
      detail: "Ñu bàyyi jooju modeel yu kanam. Ñu def fii, ak jigéen yi fii, ngir jigéen yi fii.",
    },
    positioning: {
      label: 'Sunu dëkk',
      title: 'Xarala. Yemale. Ceebu géewal.',
      text: "SaxalWér mooy benn aplikasion bu xarala, bu yemale ci aaduna ak société, bu gënn ak du def diagnostic. Du soppal doktor — dafa def doktor am njëg, xam-xam ak mënël.",
      tags: [
        'Du diagnostic',
        'Yemale ci aaduna',
        'Làkk yu bari',
        'Ceebu géewal by design',
        'Yemale ci société',
        'Bàyyi koloniyalism',
      ],
    },
    values: {
      label: 'Sunu njëg yi',
      title: 'Lu ñu jëfandikoo.',
      items: [
        { key: 'bienveillance', title: 'Bienveillance', text: "Jëfandikukaay yëp ñu leen ndënndi sax géewël. SaxalWér mooy benn bërëb bu sell ak bu dëkk." },
        { key: 'autonomie', title: 'Jigéen dafa am solo', text: "Xibaar mooy benn droit. SaxalWér jëfë jigéen yi teg xel ngir defar, ci yëgël." },
        { key: 'inclusivite', title: 'Bokk ci yëp', text: "Jigéen yëp, benn tuuti seen at, seen dëkk walla seen xam-xam, ñëw nañu." },
        { key: 'intimite', title: 'Yëg intimité', text: "Xibaar personal dañu leen dëkk. Navigation bi gënn. Vie privée dëkk ci topp." },
        { key: 'culturalite', title: 'Aaduna', text: "Aaduna yi ci Senegaal du yenniku — dañu mooy xëtu mbir bi." },
        { key: 'souverainete', title: 'Souveraineté numérique', text: "Jigéen yi ci Afrik am sopoon outil digital yu def ak ngir leen, moo nekk sopiku ci kanam." },
        { key: 'discretion', title: 'Gënn', text: "SaxalWér mën a jëfandikoo sax kenn xam. Ceebu géewal total, ci yëp mbir." },
        { key: 'fiabilite', title: 'Xibaar bu sell', text: "Contenu yëp sellal ak doktor. Xibaar bu sell amul." },
      ],
    },
    cta: {
      title: 'Bëgg nga xam ak yokk walla collaborer ?',
      btn1: 'Bokk ci testukaay',
      btn2: 'Jokkoo ak ñu',
    },
  },
}

/* ═══════════════════════════════════════════
   COMPOSANT PRINCIPAL
   ═══════════════════════════════════════════ */
export default function AboutContent() {
  const language = useLanguage()
  const t = content[language]

  return (
    <main className="flex-1 bg-[#F5F1E6]">

      {/* ══ HERO ═════════════════════════════════ */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 px-6">
        {/* Filigrane discret */}
        <div className="absolute top-0 right-0 pointer-events-none overflow-hidden" style={{ opacity: 0.025 }} aria-hidden="true">
          <img src="/assets/logo.png" alt="" className="w-[28vw] max-w-[220px] object-contain" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.hero.label}</span>
          <h1 className="title-hero mb-7">{t.hero.title}</h1>
          <p className="prose-saxal" style={{ maxWidth: '60ch' }}>{t.hero.subtitle}</p>
          <div className="w-10 h-px bg-[#A65D40] mt-8" />
        </div>
      </section>

      {/* ══ LE NOM ═══════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.name.label}</span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Gauche — titre + citation */}
            <div>
              <h2 className="title-h1 mb-6">{t.name.title}</h2>
              {/* Citation */}
              <blockquote className="border-l-2 border-[#A65D40]/30 pl-5 py-1 mb-6">
                <p className="text-quote text-[#1A3C34]/80">{t.name.quote}</p>
              </blockquote>
              <div className="w-8 h-px bg-[#A65D40]" />
            </div>

            {/* Droite — texte */}
            <div>
              <p className="prose-saxal">{t.name.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION ══════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.mission.label}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="title-h2 mb-4">{t.mission.title}</h2>
              <div className="w-8 h-px bg-[#A65D40] mt-2" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="prose-saxal">{t.mission.text}</p>
              {/* Note non-diagnostic */}
              <div className="flex items-start gap-3 p-4 bg-[#1A3C34]/4 border border-[#1A3C34]/10 rounded-2xl">
                <svg className="w-4 h-4 text-[#1A3C34]/40 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <p className="text-xs text-[#1A3C34]/55 font-light leading-relaxed">{t.mission.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VISION ═══════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#1A3C34]">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#D4AF37]/60 text-label block mb-5">{t.vision.label}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-white leading-[1.2] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}>
                {t.vision.title}
              </h2>
              <div className="w-8 h-px bg-[#D4AF37]/40 mt-2" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-white/65 font-light leading-relaxed text-sm md:text-base">{t.vision.text}</p>
              <p className="text-white/45 font-light text-sm leading-relaxed italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}>
                {t.vision.detail}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ POSITIONNEMENT ═══════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.positioning.label}</span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start mb-10">
            <div>
              <h2 className="title-h2 mb-4">{t.positioning.title}</h2>
              <div className="w-8 h-px bg-[#A65D40] mt-2" />
            </div>
            <p className="prose-saxal">{t.positioning.text}</p>
          </div>

          {/* Tags positionnement */}
          <div className="flex flex-wrap gap-2.5">
            {t.positioning.tags.map((tag, i) => (
              <span key={i} className="badge badge-green">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALEURS ══════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.values.label}</span>
          <h2 className="title-h2 mb-3">{t.values.title}</h2>
          <div className="w-8 h-px bg-[#A65D40] mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.values.items.map((val) => (
              <div key={val.key} className="card-feature flex-row items-start gap-4">
                {/* Icône */}
                <div className="icon-wrap shrink-0">
                  {icons[val.key as keyof typeof icons]}
                </div>
                <div>
                  <h3 className="title-h4 mb-2">{val.title}</h3>
                  <p className="text-secondary text-sm">{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="title-h3" style={{ maxWidth: '44ch' }}>{t.cta.title}</h2>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/participer-aux-tests" className="btn-primary whitespace-nowrap">
              {t.cta.btn1}
            </Link>
            <Link href="/contact" className="btn-secondary whitespace-nowrap">
              {t.cta.btn2}
            </Link>
          </div>
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

'use client'

import Link from 'next/link'
import { useLanguage } from './SiteWrapper'
import { Language } from '@/lib/translations'
import MedicalDisclaimer from './MedicalDisclaimer'

type ResearchApproachItem = { num: string; title: string; text: string }
type ResearchWhyPillar = { title: string; text: string }
type ResearchSection = { num: string; title: string; text: string; method: string }
type ResearchIndicator = { title: string; text: string }

type ResearchContentItem = {
  hero: { label: string; title: string; subtitle: string }
  approach: { label: string; title: string; items: ResearchApproachItem[] }
  why: { label: string; title: string; text: string; pillars: ResearchWhyPillar[] }
  sections: ResearchSection[]
  ethics: { label: string; title: string; items: string[] }
  cta: { title: string; text: string; btn1: string; btn2: string }
  indicators: { label: string; title: string; subtitle: string; note: string; items: ResearchIndicator[] }
}

/* ─── Contenu fr / wo ─── */
const content: Record<Language, ResearchContentItem> = {
  fr: {
    hero: {
      label: 'Recherche & impact',
      title: 'Une démarche scientifique au service des femmes.',
      subtitle: "SaxalWér s'inscrit dans une démarche de recherche rigoureuse, à l'intersection de la santé publique, de l'économie de la santé, des normes sociales, des études de genre, des données comportementales et de la santé numérique. Nous construisons ce que nous savons être utile — et nous mesurons ce que nous faisons.",
    },

    approach: {
      label: 'Démarche',
      title: 'SaxalWér est fondée sur une démarche rigoureuse de recherche-action, combinant science sociale et technologie.',
      items: [
        {
          num: '01',
          title: 'Recherche de terrain',
          text: "Des entretiens qualitatifs menés avec des femmes et filles de différentes régions du Sénégal permettent d'identifier les besoins réels, les barrières d'accès, les normes et les tabous qui structurent les pratiques de santé.",
        },
        {
          num: '02',
          title: 'Cadre décolonial',
          text: "Notre approche refuse d'imposer des modèles de santé numérique développés pour d'autres contextes. Nous travaillons à partir des savoirs locaux, des langues vernaculaires et des systèmes de représentation propres au contexte sénégalais.",
        },
        {
          num: '03',
          title: 'Innovation responsable',
          text: "La technologie est au service des femmes, pas l'inverse. Chaque fonctionnalité est évaluée à l'aune de son utilité réelle pour les utilisatrices et de son respect de leur dignité et de leur autonomie.",
        },
      ],
    },

    why: {
      label: 'Le fondement',
      title: 'Pourquoi la recherche est centrale.',
      text: "Construire une plateforme de santé féminine pour le Sénégal sans une démarche de recherche, c'est risquer de produire un outil inadapté. Les besoins, les tabous, les langues, les pratiques de soin et les barrières d'accès varient. Sans recherche de terrain, on construit pour soi, pas pour les femmes qu'on prétend servir.",
      pillars: [
        { title: 'Santé publique', text: "Comprendre les déterminants de santé au-delà du biomédical." },
        { title: 'Économie de la santé', text: "Évaluer les coûts, l'accessibilité et la soutenabilité." },
        { title: 'Normes sociales', text: "Analyser ce qui structure le silence et les pratiques." },
        { title: 'Études de genre', text: "Comprendre les inégalités d'accès et de prise en charge." },
        { title: 'Données comportementales', text: "Observer comment les femmes utilisent les outils numériques et comment ceux-ci influencent en retour leur comportement face au recours aux soins." },
        { title: 'Santé numérique', text: "Concevoir des solutions adaptées aux contextes à faibles ressources." },
      ],
    },

    sections: [
      {
        num: '01',
        title: 'Comprendre les besoins silencieux.',
        text: "La première étape consiste à écouter. Quels sont les besoins que les femmes ne formulent pas publiquement, faute d'espace pour le faire ou par peur, honte, tabou ? À travers des entretiens individuels, des groupes de discussion et une analyse des pratiques de santé, SaxalWér identifie ces besoins silencieux pour les transformer en réponses concrètes.",
        method: 'Méthode : entretiens semi-directifs, focus groups, analyse thématique.',
      },
      {
        num: '02',
        title: "Tester l'acceptabilité culturelle.",
        text: "Un outil numérique de santé ne se diffuse que s'il est culturellement acceptable. Cela inclut la langue, le ton, les images, les exemples utilisés, mais aussi le rapport à l'autorité médicale, au corps, à l'intimité. SaxalWér teste systématiquement chaque fonctionnalité auprès de ses futures utilisatrices avant tout déploiement.",
        method: 'Méthode : tests utilisateurs, walk-throughs cognitifs, analyse de réception.',
      },
      {
        num: '03',
        title: "Évaluer l'impact sur l'accès à l'information.",
        text: "Une partie de notre travail consiste à mesurer si les femmes qui utilisent SaxalWér accèdent effectivement à une information de meilleure qualité — plus fiable, plus compréhensible, plus adaptée à leur situation. Cette mesure se fait avant, pendant et après l'usage, sur la base d'indicateurs construits avec rigueur.",
        method: 'Méthode : pré-test / post-test, échelles validées, indicateurs de littératie en santé.',
      },
      {
        num: '04',
        title: "Mesurer l'intention de consulter et l'orientation vers les soins.",
        text: "L'objectif final de SaxalWér n'est pas de remplacer la consultation médicale, mais de la rendre plus accessible. Nous mesurons si les utilisatrices déclarent une intention de consulter accrue, et — lorsque c'est possible — si elles consultent effectivement après usage de la plateforme. Cette mesure est prudente : nous ne prétendons pas être la seule cause de leur démarche.",
        method: 'Méthode : auto-déclaration, suivi longitudinal, indicateurs de comportement de santé.',
      },
      {
        num: '05',
        title: "Protéger les données et respecter l'éthique.",
        text: "Toute recherche menée par SaxalWér respecte les principes éthiques fondamentaux : consentement éclairé, anonymisation, droit de retrait, sécurisation des données. Nos protocoles s'inscrivent dans le cadre de la loi sénégalaise de protection des données personnelles et sont soumis à l'avis de comités éthiques lorsque cela est requis.",
        method: 'Cadre : loi sénégalaise n°2008-12, principes de la déclaration d\'Helsinki, comités d\'éthique.',
      },
      {
        num: '06',
        title: 'Produire des recommandations utiles aux politiques publiques.',
        text: "Les données collectées dans le cadre de SaxalWér ne servent pas qu'à améliorer la plateforme. Anonymisées et agrégées, elles peuvent éclairer les politiques publiques de santé sexuelle et reproductive au Sénégal — en documentant les besoins, les barrières et les leviers d'action.",
        method: 'Diffusion : rapports publics, publications académiques, dialogue avec les institutions.',
      },
    ],

    ethics: {
      label: 'Éthique',
      title: 'Nos engagements de recherche.',
      items: [
        'Consentement éclairé pour toute participation à la recherche',
        'Anonymisation systématique des données collectées',
        'Droit de retrait à tout moment, sans justification',
        'Sécurisation conforme à la loi sénégalaise n°2008-12',
        'Refus de toute commercialisation des données',
        'Soumission aux comités éthiques compétents lorsque requis',
        'Transparence sur les méthodes et limites des études',
      ],
    },

    cta: {
      title: 'Vous êtes chercheur(e), partenaire institutionnel ou souhaitez collaborer ?',
      text: "Nous travaillons avec des chercheur(e)s, des structures de santé et des partenaires institutionnels engagés sur les questions de santé féminine.",
      btn1: 'Nous contacter',
      btn2: 'Voir les partenaires',
    },

    indicators: {
      label: 'Indicateurs',
      title: 'Ce que nous mesurons.',
      subtitle: "Mesurer avec rigueur, éviter la surinterprétation. Voici les indicateurs que nous suivons.",
      note: "Les indicateurs évoluent au fil des phases. Tous peuvent être mesurés avec fiabilité.",
      items: [
        { title: "Utilisation de l'application", text: "Fréquence, durée, modules. Identifier qui utilise et qui n'utilise pas." },
        { title: 'Compréhension des informations', text: "Mesurer la littératie en santé avant et après utilisation." },
        { title: 'Confiance', text: "Niveau de confiance dans la fiabilité de l'information et de la plateforme." },
        { title: 'Intention de consulter', text: "Affirmer le souhait de consulter un professionnel de santé." },
        { title: 'Consultation effective', text: "Autant que possible : suivi des utilisatrices après utilisation." },
        { title: 'Français et Wolof', text: "Répartition d'utilisation par langue, indicateur clé d'accessibilité." },
        { title: 'Profils utilisatrices', text: "Âge, localisation, éducation, statut matrimonial — pour mesurer si SaxalWér rejoint une seule catégorie." },
      ],
    },
  },

  wo: {
    hero: {
      label: 'Xam-xam & impact',
      title: 'Benn mbir bu sell ci jëfë jigéen yi.',
      subtitle: "SaxalWér dëkk ci benn xam-xam bu sell, ci santé publique, économie de la santé, normes sociales, études de genre, xibaar comportementales ak santé numérique. Ñu def lu ñu xam mu am njëg — ñu seet lu ñu def.",
    },
    approach: {
      label: 'Démarche',
      title: 'SaxalWér est fondé sur une démarche rigoureuse de recherche-action, combinant science sociale et technologie.',
      items: [
        {
          num: '01',
          title: 'Recherche de terrain',
          text: "Des entretiens qualitatifs menés avec des femmes et filles de différentes régions du Sénégal ont permis d'identifier les besoins réels, les barrières d'accès et les tabous qui structurent les pratiques de santé.",
        },
        {
          num: '02',
          title: 'Cadre décolonial',
          text: "Notre approche refuse d'imposer des modèles de santé numérique développés pour d'autres contextes. Nous travaillons à partir des savoirs locaux, des langues vernaculaires et des systèmes de représentation propres au contexte sénégalais.",
        },
        {
          num: '03',
          title: 'Innovation responsable',
          text: "La technologie est au service des femmes, pas l'inverse. Chaque fonctionnalité est évaluée à l'aune de son utilité réelle pour les utilisatrices et de son respect de leur dignité et de leur autonomie.",
        },
      ],
    },
    why: {
      label: 'Mbir bi',
      title: 'Lan tax xam-xam dëkk ci topp.',
      text: "Def benn plateforme santé jigéen ngir Senegaal sax xam-xam bi, mën a def benn outil bu yenniku. Bëgg yi, taabël yi, làkk yi ak jëfandikukaay wér-kër dañu wuute. Sax xam-xam ci dëkk, ñu def ngir sunu bopp, moo nekk ngir jigéen yi ñu wax leen jëfë.",
      pillars: [
        { title: 'Santé publique', text: "Xam mbir wér-kër yu sori biomédical." },
        { title: 'Économie wér-kër', text: "Seet njëg, accessibilité ak soutenabilité." },
        { title: 'Normes sociales', text: "Xam lu sosa géewël ak jëfandikukaay." },
        { title: 'Études de genre', text: "Xam inégalité ci njëg ak prise en charge." },
        { title: 'Xibaar comportementales', text: "Xool ni jigéen yi jëfandikoo outil numérique yi." },
        { title: 'Santé numérique', text: "Def tontu yu yemale ci dëkk yu am ressources yu genn." },
      ],
    },
    sections: [
      {
        num: '01',
        title: 'Xam bëgg yu géewël.',
        text: "Bu njëkk étape mooy dégg. Lan lañu jigéen yi du wax ci publik, sax bërëb? Ak entretiens, focus groups ak analyse jëfandikukaay wér-kër, SaxalWér xam bëgg yu géewël yooyu ngir def leen tontu yu am njëg.",
        method: 'Méthode : entretiens, focus groups, analyse thématique.',
      },
      {
        num: '02',
        title: 'Test acceptabilité culturelle.',
        text: "Benn outil numérique santé du tëj sax mu am acceptabilité culturelle. Mooy làkk, ton, image, exemple, ak rapport ak autorité doktor, yaram ak intimité. SaxalWér test jëfandikukaay yëp ak jigéen yi ngir déploiement.",
        method: 'Méthode : tests jëfandikukaay, walk-throughs, analyse réception.',
      },
      {
        num: '03',
        title: "Seet impact ci njëg xibaar.",
        text: "Liggéey amen mooy seet ndax jigéen yi jëfandikoo SaxalWér jël xibaar bu gënn — bu sell, bu gënnël, bu yemale ci seen yëgël. Seetaat bi nekk ci kanam jëf, ci jëf ak ci jaar jëf, ci indicateur yu def ak sell.",
        method: 'Méthode : pré-test / post-test, échelles, littératie santé.',
      },
      {
        num: '04',
        title: "Seet intention laaj ak orientation ci sopoon.",
        text: "Njëg bu mujj SaxalWér du soppal laaj ak doktor, dafa def laaj am njëg. Ñu seet sax jëfandikukaay yi wax dañu am intention laaj bu yokk, ak — bu mën — sax dañu laaj ci dëgg jaar jëfë plateforme bi. Seetaat bi gënn : ñu du wax ñu mooy cause bu nekk.",
        method: 'Méthode : auto-déclaration, suivi longitudinal, indicateur comportement santé.',
      },
      {
        num: '05',
        title: "Dëkk xibaar ak yëg éthique.",
        text: "Yëp xam-xam SaxalWér yëg principe éthique : consentement éclairé, anonymisation, droit retrait, sécurisation xibaar. Sunu protocole dëkk ci loi sénégalaise protection xibaar personnel ak ci comités éthique bu am solo.",
        method: 'Cadre : loi sénégalaise n°2008-12, déclaration Helsinki, comités éthique.',
      },
      {
        num: '06',
        title: "Def recommandation ngir politique publique.",
        text: "Xibaar yu ñu jël ci SaxalWér du jox SaxalWér rekk. Anonyme ak agrégé, mën a saxal politique publique santé reproductive ci Senegaal — ci documenter bëgg, taabël ak leviers.",
        method: 'Diffusion : rapport publik, publication académique, jokkoo ak institutions.',
      },
    ],
    indicators: {
      label: 'Indicateur yi',
      title: 'Lu ñu seet.',
      subtitle: "Seet ak sell, sax surinterprétation. Lii mooy indicateur yu njool ñu suuf.",
      note: "Indicateur yi dinañu sopiku ci phase yi. Yëp du ñu mën a seet ak sell bu nekk.",
      items: [
        { title: "Jëfandikoo aplikasion bi", text: "Fréquence, diir, modul. Xam lu jëfandikoo ak lu du jëfandikoo." },
        { title: 'Xam xibaar yi', text: "Seet littératie santé ci kanam ak ci jaar." },
        { title: 'Yëgël', text: "Niveau yëgël jëfandikukaay yi ci xibaar ak plateforme." },
        { title: 'Intention laaj', text: "Sopiku ngir laaj ak doktor." },
        { title: 'Laaj ci dëgg', text: "Bu mën seet : jëfandikoo sopoon yi jaar jëfë." },
        { title: 'Faransee ak Wolof', text: "Répartition jëfandikoo ci làkk, indicateur njool accessibilité." },
        { title: 'Yëkk profil yi', text: "At, dëkk, xam-xam, statut matrimonial — ngir seet SaxalWér du jëfë benn lëkkale rekk." },
      ],
    },
    ethics: {
      label: 'Éthique',
      title: 'Sunu engagement xam-xam.',
      items: [
        'Consentement éclairé ngir yëp bokk ci xam-xam',
        'Anonymisation yëp xibaar yu ñu jël',
        'Droit retrait ci yëp moment, sax justification',
        'Sécurisation yemale ci loi sénégalaise n°2008-12',
        'Yenniku yëp commercialisation xibaar',
        'Soumission ci comités éthique bu am solo',
        'Transparence ci méthode ak mbir yi yenniku',
      ],
    },
    cta: {
      title: 'Yaa chercheure, partenaire institutionnel walla bëgg a collaborer ?',
      text: "Ñu liggéey ak chercheure, sopoon ak partenaire institutionnel yu bokk ci santé jigéen.",
      btn1: 'Jokkoo ak ñu',
      btn2: 'Xool partenaire yi',
    },
  },
}

/* ═══════════════════════════════════════════
   COMPOSANT PRINCIPAL
   ═══════════════════════════════════════════ */
export default function ResearchContent() {
  const language = useLanguage()
  const t = content[language as keyof typeof content] as typeof content.fr

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

      {t.approach && (
        <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
          <div className="max-w-3xl mx-auto">
            <span className="text-label block mb-5 text-[#A65D40]/70">{t.approach.label}</span>
            <h2 className="title-h2 mb-5">{t.approach.title}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {t.approach.items.map((item, i) => (
                <div key={i} className="card-value !py-6 !px-5 bg-white/90 border border-[#1A3C34]/10 rounded-[28px] shadow-sm">
                  <span className="block text-[#A65D40]/40 mb-4 font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.3rem, 2vw, 1.5rem)' }}>
                    {item.num}
                  </span>
                  <h3 className="text-[#1A3C34] font-semibold mb-3" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.1rem)' }}>{item.title}</h3>
                  <p className="text-sm text-[#7D5A44]/85 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ POURQUOI ═════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.why.label}</span>
          <h2 className="title-h2 mb-5">{t.why.title}</h2>
          <p className="prose-saxal mb-10" style={{ maxWidth: '60ch' }}>{t.why.text}</p>
          <div className="w-10 h-px bg-[#A65D40] mb-12" />

          {/* 6 piliers disciplinaires */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.why.pillars.map((p, i) => (
              <div key={i} className="card-value !py-5 !px-4">
                <span className="dot-gold mb-2" aria-hidden="true" />
                <h3 className="text-[#1A3C34] font-medium text-center text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)' }}>
                  {p.title}
                </h3>
                <p className="text-xs text-[#7D5A44]/75 font-light text-center leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6 SECTIONS DE RECHERCHE ══════════════ */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto">
          {t.sections.map((section, i) => (
            <article
              key={i}
              className={`pb-12 md:pb-14 ${i < t.sections.length - 1 ? 'mb-12 md:mb-14 border-b border-[#1A3C34]/8' : ''}`}
            >
              {/* Numéro */}
              <span
                className="block text-[#A65D40]/40 mb-4 font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                {section.num}
              </span>

              {/* Titre */}
              <h2 className="title-h2 mb-5">{section.title}</h2>

              {/* Texte */}
              <p className="prose-saxal mb-5" style={{ maxWidth: '62ch' }}>{section.text}</p>

              {/* Méthode */}
              <p className="text-xs text-[#1A3C34]/55 font-light italic leading-relaxed border-l-2 border-[#A65D40]/30 pl-4 py-1" style={{ maxWidth: '55ch' }}>
                {section.method}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ══ INDICATEURS ══════════════════════════ */}
      <section className="py-16 md:py-24 px-6 bg-[#1A3C34]">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#D4AF37]/60 text-label block mb-5">{t.indicators.label}</span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', lineHeight: 1.2 }}
          >
            {t.indicators.title}
          </h2>
          <p className="text-white/55 font-light text-sm leading-relaxed mb-5" style={{ maxWidth: '60ch' }}>
            {t.indicators.subtitle}
          </p>
          <p className="text-white/40 font-light text-xs italic leading-relaxed mb-12" style={{ maxWidth: '60ch' }}>
            {t.indicators.note}
          </p>
          <div className="w-10 h-px bg-[#D4AF37]/30 mb-12" />

          <ul className="flex flex-col gap-0">
            {t.indicators.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-5 py-5 border-b border-white/8 last:border-0"
              >
                <span className="text-[#D4AF37]/50 text-xs font-light tracking-widest shrink-0 mt-1.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3
                    className="text-white/90 mb-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(0.95rem, 1.7vw, 1.1rem)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/50 font-light text-sm leading-relaxed" style={{ maxWidth: '55ch' }}>
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ ÉTHIQUE ══════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.ethics.label}</span>
          <h2 className="title-h2 mb-3">{t.ethics.title}</h2>
          <div className="w-10 h-px bg-[#A65D40] mb-10" />

          <ul className="flex flex-col gap-3">
            {t.ethics.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4 p-5 bg-white/40 border border-[#1A3C34]/8 rounded-2xl">
                <svg className="w-5 h-5 text-[#A65D40] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-[#7D5A44]/90 font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div style={{ maxWidth: '44ch' }}>
            <h2 className="title-h3 mb-3">{t.cta.title}</h2>
            <p className="text-secondary text-sm">{t.cta.text}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact" className="btn-primary whitespace-nowrap">{t.cta.btn1}</Link>
            <Link href="/partenaires" className="btn-secondary whitespace-nowrap">{t.cta.btn2}</Link>
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

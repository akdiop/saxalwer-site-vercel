'use client'

// Contenu complet de la page d'accueil
// Utilise useLanguage() pour s'adapter à fr/wo

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './SiteWrapper'
import MedicalDisclaimer from './MedicalDisclaimer'
import NewsletterForm from './NewsletterForm'

/* ─── Icônes SVG inline ─── */
const IconInfo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
)
const IconCompass = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>
)
const IconCycle = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
)
const IconDirectory = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)
const IconLanguage = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
  </svg>
)
const IconLock = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
)

/* ─── Données de contenu ─── */
const content = {
  fr: {
    hero: {
      title: 'SaxalWér — La santé intime, en confiance.',
      subtitle: "Une application intelligente et culturellement sensible pour aider les filles et les femmes à comprendre, suivre et protéger leur santé sexuelle et reproductive.",
      cta1: 'Participer aux tests',
      cta2: "Découvrir l'application",
      newsletterLabel: 'Être notifiée du lancement',
    },
    problem: {
      label: 'Le constat',
      title: 'Des questions qui restent sans réponse.',
      intro: "Au Sénégal, comme dans de nombreux pays d'Afrique subsaharienne, les questions liées à la santé sexuelle et reproductive sont entourées de silence. Elles n'osent pas être posées ou sont difficiles à exprimer avec les mots justes.",
      items: [
        { icon: '🔇', title: 'Le tabou social', text: "Parler de son cycle, d'une douleur intime ou d'une grossesse est souvent perçu comme inapproprié ou irrespectueux. Les femmes se retrouvent seules face à des questions vitales." },
        { icon: '🗣️', title: 'Les barrières linguistiques', text: "La majorité des ressources de santé existantes sont en français. Pour des millions de femmes qui pensent en wolof, pulaar ou sérère, l'information est inaccessible." },
        { icon: '🔍', title: "Le manque d'information fiable", text: "Entre les rumeurs, les croyances non vérifiées et les contenus étrangers inadaptés, il est difficile de trouver une information à la fois juste et culturellement compréhensible." },
        { icon: '😶', title: 'La peur du jugement', text: "Consulter une professionnelle de santé ou chercher de l'information en ligne peut être vécu comme une honte. Cette peur empêche des femmes d'accéder à des soins essentiels." },
      ],
    },
    solution: {
      label: 'La réponse',
      title: 'Un espace qui vous appartient.',
      text: "SaxalWér est une plateforme conçue depuis et pour le contexte sénégalais. Elle offre un accès confidentiel, scientifiquement fiable et culturellement adapté à l'information en santé sexuelle et reproductive — dans votre langue, selon vos réalités.",
      pillars: [
        { title: 'Confidentielle', text: "Aucune donnée partagée sans consentement. Votre espace reste le vôtre." },
        { title: 'Culturellement ancrée', text: "Contenus pensés pour les réalités sénégalaises, en français et en langues locales." },
        { title: 'Scientifiquement fiable', text: "Informations validées par des professionnelles de santé. Jamais de diagnostic, toujours de l'éducation." },
      ],
    },
    features: {
      label: 'Fonctionnalités',
      title: 'Ce que SaxalWér proposera.',
      subtitle: "L'application est en cours de prototypage. Voici les fonctionnalités prévues.",
      items: [
        { icon: <IconInfo />, title: 'Information santé fiable', text: "Des contenus éducatifs validés sur la santé menstruelle, la contraception, les IST, la grossesse et la ménopause." },
        { icon: <IconCompass />, title: 'Orientation intelligente', text: "Un parcours personnalisé qui guide vers les bonnes ressources selon la situation de l'utilisatrice." },
        { icon: <IconCycle />, title: 'Suivi du cycle', text: "Un outil simple et discret pour comprendre son cycle menstruel et anticiper ses variations." },
        { icon: <IconDirectory />, title: 'Annuaire de professionnelles', text: "Une liste de structures de santé et de professionnelles de confiance accessibles au Sénégal." },
        { icon: <IconLanguage />, title: 'Contenus en français et wolof', text: "L'information dans la langue dans laquelle on pense. Pulaar et sérère à venir." },
        { icon: <IconLock />, title: 'Confidentialité renforcée', text: "Navigation discrète, pas de données sensibles stockées, respect total de la vie privée." },
      ],
    },
    diff: {
      label: 'Notre singularité',
      title: 'Une innovation sociale africaine.',
      text: "SaxalWér n'est pas une application de santé de plus. C'est une réponse à une réalité spécifique, construite avec les femmes qu'elle est censée servir. Elle s'inscrit dans une démarche de santé numérique décoloniale : refuser de transposer des modèles étrangers, partir des savoirs locaux, des normes sociales et des langues vernaculaires pour construire un outil qui fait sens ici.",
      points: [
        "Co-construite avec les utilisatrices dès la phase de recherche",
        "Fondée sur une démarche scientifique rigoureuse et éthique",
        "Ancrée dans les réalités socioculturelles du Sénégal",
        "Disponible en langues locales, pas seulement en français",
      ],
    },
    research: {
      label: 'Recherche & impact',
      title: 'Une démarche rigoureuse.',
      text: "SaxalWér est fondée sur une recherche qualitative menée auprès de femmes et filles de différentes régions du Sénégal. Chaque fonctionnalité est pensée à partir de leurs besoins réels, testée avec elles, et évaluée selon des indicateurs d'impact mesurables.",
      steps: [
        { num: '01', title: 'Recherche qualitative', text: "Entretiens et groupes de discussion pour comprendre les besoins, les tabous et les pratiques de santé." },
        { num: '02', title: 'Co-design', text: "Conception participative avec les utilisatrices pour construire des solutions qui leur ressemblent." },
        { num: '03', title: 'Tests utilisatrices', text: "Phases de prototypage, de test et d'itération pour affiner l'interface et les contenus." },
        { num: '04', title: 'Évaluation continue', text: "Mesure de l'impact, de l'accessibilité et de la satisfaction à chaque étape du développement." },
      ],
    },
    cta: {
      title: "Tu veux contribuer à construire une santé numérique plus intime, plus juste et plus accessible ?",
      subtitle: "Rejoins les premières utilisatrices qui co-construisent SaxalWér. Ta voix compte.",
      btn1: 'Rejoindre les tests',
      btn2: 'Nous contacter',
      newsletterLabel: 'Ou inscris-toi pour être notifiée du lancement',
    },
  },
  wo: {
    hero: {
      title: 'SaxalWér — Wér-kër bi, ci yëgël.',
      subtitle: "Benn aplikasion bu xarala te bu yem ci aaduna ngir jëfë jigéen yi ak doom-jigéen yi xam, siiw, ak dëgg seen wér-kër ak njool.",
      cta1: 'Bokk ci testukaay',
      cta2: 'Xam aplikasion bi',
      newsletterLabel: 'Xool bu góor ci yëngu',
    },
    problem: {
      label: 'Mbir mi',
      title: 'Laaj yu nekk ci kaw, laaj yëp.',
      intro: "Ci Senegaal, laaj yu wax ak wér-kër ak njool dañu am taabël yu bare.",
      items: [
        { icon: '🔇', title: 'Géewël bi', text: "Wax ci sa njool, benn daw ci ndeyjoor walla benn guné, mën a def honte. Jigéen yi dañu soxor ci laaj yu am solo." },
        { icon: '🗣️', title: 'Yenniku làkk', text: "Xibaar yu wér-kër bu bari dañu leen def ci Faransee. Ngir jigéen yu xam-xam ci Wolof, Pulaar walla Sérère, xibaar bi dëkk soxor." },
        { icon: '🔍', title: 'Xamel xibaar bu baax', text: "Ci diiwaan yi ak xibaar yu kanam, dafa metti a xamal benn xibaar bu sell te bu yem." },
        { icon: '😶', title: 'Ragal mbokk', text: "Laaj ak doktor walla xaar ci internet mën a def honte. Ragal bi du jëfë jigéen yi jël sopoon bu am solo." },
      ],
    },
    solution: {
      label: 'Tontu bi',
      title: 'Benn bërëb bu moom sa bopp.',
      text: "SaxalWér dëkk ci Senegaal ngir Senegaal. Dafa jox benn njëg bu gënn, bu sell ak bu yem ci wér-kër ak njool — ci sa làkk, ci sa aaduna.",
      pillars: [
        { title: 'Ceebu géewal', text: "Xaar xibaar personal dañu ko yónneel. Sa bërëb dëkk ci sa yëg." },
        { title: 'Yemale ci aaduna', text: "Contenu def ci yëgël yi ci Senegaal, ci Faransee ak làkk yi ci biir réew." },
        { title: 'Xibaar bu sell', text: "Xibaar yi sellal ak doktor. Diagnostic amul, xam-xam rekk." },
      ],
    },
    features: {
      label: 'Jëfandikukaay',
      title: 'Lu SaxalWér dinaa def.',
      subtitle: "Aplikasion bi mu ngi def. Lii mooy jëfandikukaay yi ñu bëgg def.",
      items: [
        { icon: <IconInfo />, title: 'Xibaar wér bu sell', text: "Contenu yu sellal ci njool, contraception, IST, guné ak ménopause." },
        { icon: <IconCompass />, title: 'Orientation bu xarala', text: "Benn parcours bu soppeeku ngir jëfë jigéen yi dem ci xibaar yu baax." },
        { icon: <IconCycle />, title: 'Siiw njool', text: "Benn outil bu yomb ngir xam sa njool menstruel ak seen yëgël." },
        { icon: <IconDirectory />, title: 'Liste doktor yi', text: "Liste yu sopoon ak yu am solo ci Senegaal." },
        { icon: <IconLanguage />, title: 'Faransee ak Wolof', text: "Xibaar ci sa làkk. Pulaar ak Sérère ñëwoon nañu." },
        { icon: <IconLock />, title: 'Ceebu géewal bu sell', text: "Navigation bu gënn, xaar xibaar sensible amul, respect total." },
      ],
    },
    diff: {
      label: 'Sunu yëgël',
      title: 'Benn innovation sociale bu Afrik.',
      text: "SaxalWér du benn aplikasion santé bu yëp. Mooy benn tontu ci benn dëkk bu sell, def ak jigéen yi ñu bëgg jëfandikoo ko. Dëkk ci benn mbir bu bàyyi koloniyalism : bàyyi jooju modeel yu kanam, dëkk ci xam-xam bu dëkk, aaduna ak làkk ngir def benn outil bu am njëg fii.",
      points: [
        "Co-def ak jigéen yi ci xam-xam bi kanam",
        "Dëkk ci benn xam-xam bu sell te bu am xarala",
        "Yemale ci dëkk ak aaduna ci Senegaal",
        "Am ci làkk yi, moo nekk Faransee rekk",
      ],
    },
    research: {
      label: 'Xam-xam & impact',
      title: 'Benn mbir bu sell.',
      text: "SaxalWér dëkk ci benn xam-xam qualitative def ak jigéen ak doom-jigéen ci Senegaal. Jëfandikukaay yëp dañu leen def ci seen bëgg yu sell, testukaay ak seen yëgël, seetaat ci impact yu am njëg.",
      steps: [
        { num: '01', title: 'Xam-xam qualitative', text: "Laaj ak groupes ngir xam bëgg, taabël ak jëfandikukaay wér-kër." },
        { num: '02', title: 'Co-design', text: "Def ak jigéen yi ngir def tontu yu yemale ci seen." },
        { num: '03', title: 'Testukaay', text: "Phase prototype, test ak sopiku ngir sos interface ak contenu." },
        { num: '04', title: 'Évaluation ci kanam', text: "Seet impact, njëg ak satisfaction ci jëf yëp." },
      ],
    },
    cta: {
      title: "Bëgg nga bokk ci def benn santé numérique bu gënn, bu sell ak bu am njëg ?",
      subtitle: "Bokk ak jigéen yi bu njëkkër ñu def SaxalWér. Sa xel am solo.",
      btn1: 'Bokk ci testukaay',
      btn2: 'Jokkoo ak ñu',
      newsletterLabel: 'Walla bind ngir xamal sa yëngu',
    },
  },
}

/* ═══════════════════════════════════════════
   COMPOSANT PRINCIPAL
   ═══════════════════════════════════════════ */
export default function HomeContent() {
  const language = useLanguage()
  const t = content[language]

  return (
    <main className="flex-1 bg-[#F5F1E6]">

      {/* ══ 1. HERO ══════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 md:pt-36 md:pb-28">

        {/* Filigrane respirant */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.025 }}
          aria-hidden="true"
        >
          <div className="w-[70vw] max-w-[520px] aspect-square relative animate-[breathe_7s_ease-in-out_infinite]">
            <Image src="/assets/logo.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-0 animate-fade-up">

          {/* Logo + badge */}
          <div className="mb-12 flex flex-col items-center gap-4">
            <div className="w-24 h-24 md:w-32 md:h-32 relative">
              <Image src="/assets/logo.png" alt="SaxalWér" fill className="object-contain" priority />
            </div>
            <span className="badge badge-soon">
              {language === 'wo' ? 'Ñëwoon nañu' : 'Bientôt disponible'}
            </span>
          </div>

          {/* Titre */}
          <h1 className="title-hero mb-6">{t.hero.title}</h1>

          {/* Sous-titre */}
          <p className="prose-saxal text-center mb-12 mx-auto" style={{ maxWidth: '52ch' }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-14">
            <Link href="/participer-aux-tests" className="btn-primary">
              {t.hero.cta1}
            </Link>
            <Link href="/application" className="btn-secondary">
              {t.hero.cta2}
            </Link>
          </div>

          {/* Newsletter */}
          <div className="w-full">
            <p className="text-label text-center mb-5">{t.hero.newsletterLabel}</p>
            <NewsletterForm language={language} />
          </div>
        </div>
      </section>

      {/* ══ 2. PROBLÈME ══════════════════════════ */}
      <section className="bg-[#1A3C34] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12 md:mb-16">
            <span className="text-[#D4AF37]/70 text-label mb-4 block">{t.problem.label}</span>
            <h2 className="text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.2 }}>
              {t.problem.title}
            </h2>
            <p className="text-white/65 font-light leading-relaxed text-sm md:text-base" style={{ maxWidth: '55ch' }}>
              {t.problem.intro}
            </p>
            <div className="w-10 h-px bg-[#D4AF37]/40 mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.problem.items.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white/5 border border-white/8 rounded-2xl">
                <span className="text-2xl shrink-0 mt-0.5" role="img" aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 className="text-white/90 text-base font-medium mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1rem, 1.8vw, 1.15rem)' }}>
                    {item.title}
                  </h3>
                  <p className="text-white/55 font-light text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. SOLUTION ══════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto">

          <div className="mb-14">
            <span className="text-label mb-4 block text-[#A65D40]/70">{t.solution.label}</span>
            <h2 className="title-h2 mb-6">{t.solution.title}</h2>
            <p className="prose-saxal" style={{ maxWidth: '60ch' }}>{t.solution.text}</p>
            <div className="w-10 h-px bg-[#A65D40] mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.solution.pillars.map((p, i) => (
              <div key={i} className="card-feature">
                <span className="dot-gold shrink-0" aria-hidden="true" />
                <h3 className="title-h4">{p.title}</h3>
                <p className="text-secondary">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. FONCTIONNALITÉS ═══════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">

          <div className="mb-14">
            <span className="text-label mb-4 block text-[#A65D40]/70">{t.features.label}</span>
            <h2 className="title-h2 mb-4">{t.features.title}</h2>
            <p className="text-secondary" style={{ maxWidth: '52ch' }}>{t.features.subtitle}</p>
            <div className="w-10 h-px bg-[#A65D40] mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.features.items.map((feat, i) => (
              <div key={i} className="card-feature flex-row items-start gap-4">
                <div className="icon-wrap shrink-0">{feat.icon}</div>
                <div>
                  <h3 className="title-h4 mb-2">{feat.title}</h3>
                  <p className="text-secondary text-sm">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. DIFFÉRENCIATION ═══════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12">
            <span className="text-label mb-4 block text-[#A65D40]/70">{t.diff.label}</span>
            <h2 className="title-h2 mb-6">{t.diff.title}</h2>
            <div className="w-10 h-px bg-[#A65D40] mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            <p className="prose-saxal" style={{ maxWidth: '55ch' }}>{t.diff.text}</p>
            <ul className="flex flex-col gap-4">
              {t.diff.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="dot-gold shrink-0 mt-2" aria-hidden="true" />
                  <span className="text-sm text-[#7D5A44]/85 font-light leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ 6. RECHERCHE & IMPACT ════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">

          <div className="mb-14">
            <span className="text-label mb-4 block text-[#A65D40]/70">{t.research.label}</span>
            <h2 className="title-h2 mb-5">{t.research.title}</h2>
            <p className="prose-saxal mb-6" style={{ maxWidth: '58ch' }}>{t.research.text}</p>
            <div className="w-10 h-px bg-[#A65D40]" />
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col gap-0 pl-8">
            {t.research.steps.map((step, i) => (
              <div key={i} className="relative pb-10 last:pb-0">
                {/* Point timeline */}
                <div className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full border-2 border-[#A65D40] bg-[#EDE8D5]" aria-hidden="true" />
                {/* Ligne verticale */}
                {i < t.research.steps.length - 1 && (
                  <div className="absolute -left-[1.85rem] top-5 bottom-0 w-px bg-[#A65D40]/20" aria-hidden="true" />
                )}
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-[#A65D40]/50 text-xs font-light tracking-widest">{step.num}</span>
                  <h3 className="title-h4">{step.title}</h3>
                </div>
                <p className="text-secondary text-sm" style={{ maxWidth: '52ch' }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. CTA FINAL ═════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-[#1A3C34]">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">

          <h2 className="text-white leading-[1.25]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>
            {t.cta.title}
          </h2>

          <p className="text-white/60 font-light text-sm md:text-base leading-relaxed" style={{ maxWidth: '48ch' }}>
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link href="/participer-aux-tests"
              className="px-8 py-3.5 bg-[#A65D40] text-white text-sm font-medium rounded-full hover:bg-[#B5622A] transition-colors duration-200 whitespace-nowrap">
              {t.cta.btn1}
            </Link>
            <Link href="/contact"
              className="px-8 py-3.5 bg-transparent text-white text-sm font-light rounded-full border border-white/25 hover:border-white/50 transition-colors duration-200 whitespace-nowrap">
              {t.cta.btn2}
            </Link>
          </div>

          {/* Newsletter dans le CTA */}
          <div className="w-full max-w-md mt-4">
            <p className="text-white/45 text-label mb-5">{t.cta.newsletterLabel}</p>
            <NewsletterForm language={language} />
          </div>
        </div>
      </section>

      {/* ══ DISCLAIMER MÉDICAL ═══════════════════ */}
      <div className="bg-[#F5F1E6] px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <MedicalDisclaimer variant="full" />
        </div>
      </div>

    </main>
  )
}

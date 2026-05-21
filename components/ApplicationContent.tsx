'use client'

import Link from 'next/link'
import { useLanguage } from './SiteWrapper'
import MedicalDisclaimer from './MedicalDisclaimer'

/* ─── Icônes modules ─── */
const IconBook = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
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
const IconJournal = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
)
const IconDirectory = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)
const IconMap = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)
const IconAudio = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
  </svg>
)
const IconCommunity = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>
)
const IconAlert = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
)

const moduleIcons: Record<string, JSX.Element> = {
  bibliotheque: <IconBook />,
  assistant: <IconCompass />,
  cycle: <IconCycle />,
  journal: <IconJournal />,
  annuaire: <IconDirectory />,
  carte: <IconMap />,
  audio: <IconAudio />,
  communaute: <IconCommunity />,
  urgence: <IconAlert />,
}

/* ─── Contenu ─── */
const content = {
  fr: {
    hero: {
      label: "L'application",
      badge: 'En cours de prototypage',
      title: 'Un espace conçu pour vous.',
      subtitle: "SaxalWér n'est pas encore disponible. Voici ce qu'elle proposera — des outils pensés pour les réalités des femmes au Sénégal, sans jugement, en toute confidentialité.",
    },
    modules: {
      label: 'Les modules',
      title: 'Ce que SaxalWér proposera.',
      items: [
        {
          key: 'bibliotheque',
          title: 'Bibliothèque santé',
          subtitle: 'Information fiable, dans votre langue.',
          text: "Des fiches éducatives claires sur la santé menstruelle, la contraception, les IST, la grossesse, la ménopause et les violences basées sur le genre. Chaque contenu est validé par des professionnelles de santé, disponible en français et en wolof.",
          tags: ['Validé médicalement', 'Français & Wolof', 'Accessible hors connexion'],
        },
        {
          key: 'assistant',
          title: "Assistant d'orientation intelligent",
          subtitle: 'Guidée, pas diagnostiquée.',
          text: "Un assistant conversationnel qui oriente l'utilisatrice selon ses symptômes et ses questions — vers les bonnes ressources, les bonnes professionnelles, sans jamais poser de diagnostic médical. Il pose des questions simples, dans la langue de l'utilisatrice, avec sensibilité culturelle.",
          tags: ['Non diagnostique', 'Multilingue', 'Culturellement sensible'],
        },
        {
          key: 'cycle',
          title: 'Suivi du cycle',
          subtitle: 'Comprendre son corps, à son rythme.',
          text: "Un outil simple pour noter, comprendre et anticiper son cycle menstruel. Les données restent sur l'appareil de l'utilisatrice et ne sont jamais partagées. SaxalWér ne tire pas de conclusions médicales à partir du suivi — elle aide à mieux se connaître.",
          tags: ['Données locales', 'Confidentiel', 'Pédagogique'],
        },
        {
          key: 'journal',
          title: 'Journal intime santé',
          subtitle: 'Un espace pour soi.',
          text: "Un journal personnel protégé par un code ou une empreinte digitale, où noter ses ressentis, ses questions, ses observations. Un espace libre, sans jugement, qui n'est accessible qu'à l'utilisatrice.",
          tags: ['Protégé par code', 'Privé', 'Libre expression'],
        },
        {
          key: 'annuaire',
          title: 'Annuaire de professionnelles de santé',
          subtitle: 'Trouver la bonne personne, sans anxiété.',
          text: "Une liste de médecins, sages-femmes, gynécologues et structures de santé au Sénégal — avec des informations sur leur spécialité, leur localisation et leur accessibilité. Filtrable par ville, type de soin et langue parlée.",
          tags: ['Sénégal', 'Filtrable', 'Mis à jour régulièrement'],
        },
        {
          key: 'carte',
          title: 'Carte des structures de santé',
          subtitle: 'Accéder aux soins, où que vous soyez.',
          text: "Une carte interactive des structures de santé proches — hôpitaux régionaux, centres de santé, cases de santé, maternités. Pensée pour les zones rurales comme pour les villes, même avec une connexion limitée.",
          tags: ['Zones rurales', 'Hors connexion possible', 'Mise à jour'],
        },
        {
          key: 'audio',
          title: 'Ressources audio',
          subtitle: 'Pour celles qui préfèrent écouter.',
          text: "Des contenus de santé sous format audio en wolof, pulaar et sérère. Pensées pour les femmes peu habituées à la lecture numérique ou qui préfèrent recevoir l'information à travers la voix, comme dans la tradition orale.",
          tags: ['Wolof · Pulaar · Sérère', 'Oral & culturel', 'Accessible à toutes'],
        },
        {
          key: 'communaute',
          title: 'Communauté sécurisée',
          subtitle: 'Ensemble, sans se dévoiler.',
          text: "Un espace d'échange anonyme et modéré où les femmes peuvent poser des questions, partager des expériences et s'entraider — sans révéler leur identité. Une modération active garantit la sécurité et le respect de l'espace.",
          tags: ['Anonyme', 'Modéré', 'Bienveillant'],
        },
        {
          key: 'urgence',
          title: 'Urgence et orientation',
          subtitle: 'Quand chaque minute compte.',
          text: "Un accès rapide aux ressources d'urgence : numéros de structures de santé, lignes d'écoute, protocoles d'orientation en cas de violence, de grossesse à risque ou d'urgence gynécologique. Accessible en deux clics, même sans connexion internet.",
          tags: ['Accès rapide', 'Hors connexion', 'Violence & urgences'],
        },
      ],
    },
    limits: {
      label: 'Ce que SaxalWér ne fait pas',
      title: 'Des limites assumées, par éthique.',
      subtitle: "La clarté sur ce que SaxalWér ne fait pas est aussi importante que ce qu'elle fait. Ces limites ne sont pas des faiblesses — elles sont des engagements éthiques.",
      items: [
        {
          title: "Ne remplace pas une consultation médicale",
          text: "SaxalWér est un outil d'éducation et d'orientation. Pour tout problème de santé, une consultation avec une professionnelle reste indispensable.",
        },
        {
          title: "Ne pose pas de diagnostic",
          text: "Aucune fonctionnalité de SaxalWér ne peut identifier une maladie, une infection ou une condition médicale. Ce n'est pas son rôle, et ce ne le sera jamais.",
        },
        {
          title: "Ne vend pas les données personnelles",
          text: "Les données des utilisatrices ne sont pas commercialisées, partagées avec des annonceurs ou utilisées à des fins autres que le fonctionnement du service. Jamais.",
        },
        {
          title: "Ne culpabilise pas les utilisatrices",
          text: "Aucun message de SaxalWér ne juge, ne moralise ou ne culpabilise. Chaque femme est libre de ses choix. SaxalWér informe, elle ne prescrit pas de comportements.",
        },
        {
          title: "Ne force pas à parler de sujets sensibles",
          text: "L'utilisatrice choisit ce qu'elle explore, ce qu'elle note, ce qu'elle partage. Aucun module n'est obligatoire. Le rythme est le sien.",
        },
      ],
    },
    stores: {
      label: 'Disponibilité',
      title: 'Bientôt disponible sur',
      text: "L'application est en cours de prototypage. Inscrivez-vous pour être notifiée dès le lancement.",
      soon: 'App Store & Google Play — Bientôt disponible',
    },
    cta: {
      title: 'Envie de tester l\'application avant son lancement ?',
      text: 'Rejoignez les premières utilisatrices qui co-construisent SaxalWér.',
      btn: 'Participer aux tests',
    },
  },
  wo: {
    hero: {
      label: 'Aplikasion bi',
      badge: 'Mu ngi def',
      title: 'Benn bërëb def ngir yow.',
      subtitle: "SaxalWér du am ci kanam. Lii mooy lu dinaa def — outil yu def ci yëgël jigéen yi ci Senegaal, sax géewël, ci ceebu géewal.",
    },
    modules: {
      label: 'Modul yi',
      title: 'Lu SaxalWér dinaa def.',
      items: [
        {
          key: 'bibliotheque',
          title: 'Bibliotèk wér-kër',
          subtitle: 'Xibaar bu sell, ci sa làkk.',
          text: "Fiches éducatives yu sell ci njool, contraception, IST, guné, ménopause ak violence. Yëp sellal ak doktor, am ci Faransee ak Wolof.",
          tags: ['Sellal ak doktor', 'Faransee & Wolof', 'Am sax internet'],
        },
        {
          key: 'assistant',
          title: "Assistant d'orientation",
          subtitle: 'Orientation, moo nekk diagnostic.',
          text: "Benn assistant bu wax ak jëfandikukaay yi ngir leen jëfë ci xibaar yu baax, ci doktor yu baax — sax def diagnostic. Dafa foggali laaj yu yomb, ci sa làkk, ci yëg aaduna.",
          tags: ['Du diagnostic', 'Làkk yu bari', 'Yemale ci aaduna'],
        },
        {
          key: 'cycle',
          title: 'Siiw njool',
          subtitle: 'Xam sa yaram, ci sa yëg.',
          text: "Benn outil bu yomb ngir bind, xam ak yeg sa njool menstruel. Xibaar yi dëkk ci sa telefonn te du yónneel benn. SaxalWér du def xam-xam bu doktor — dafa jëfë xam sa bopp.",
          tags: ['Xibaar ci telefonn', 'Ceebu géewal', 'Xam-xam'],
        },
        {
          key: 'journal',
          title: 'Journal intime wér-kër',
          subtitle: 'Benn bërëb ngir sa bopp.',
          text: "Benn journal personal bu dëkk ak benn code walla empreinte digitale, ngir bind sa xel, sa laaj, sa xam-xam. Benn bërëb bu sell, sax géewël, bu jëfandikoo sa bopp rekk.",
          tags: ['Dëkk ak code', 'Personnel', 'Yëgël bu sell'],
        },
        {
          key: 'annuaire',
          title: 'Liste doktor yi',
          subtitle: 'Xam benn doktor bu baax, sax anxiété.',
          text: "Liste dokter, sages-femmes, gynécologues ak sopoon ci Senegaal — ak xibaar seen spécialité, seen dëkk ak seen njëg. Filtrable ak dëkk, soin ak làkk.",
          tags: ['Senegaal', 'Filtrable', 'Yokk ci kanam'],
        },
        {
          key: 'carte',
          title: 'Carte sopoon yi',
          subtitle: 'Dem ci sopoon, fi nga nekk.',
          text: "Benn carte interactive ci sopoon yu wëre — hôpital régionaux, centres de santé, cases de santé, maternités. Def ngir dëkk yu genn rekk ak dëkk yu bari, sax connexion soxor.",
          tags: ['Dëkk yu genn', 'Am sax connexion', 'Yokk'],
        },
        {
          key: 'audio',
          title: 'Xibaar audio',
          subtitle: 'Ngir ñi bëgg a dégg.',
          text: "Contenu wér-kër ci audio ci Wolof, Pulaar ak Sérère. Def ngir jigéen yu xam-xam digital soxor walla yu bëgg a jël xibaar ci ndigël, ci aaduna ba tëj.",
          tags: ['Wolof · Pulaar · Sérère', 'Oral & culturel', 'Ngir yëp'],
        },
        {
          key: 'communaute',
          title: 'Communauté bu dëkk',
          subtitle: 'Bokk, sax def sa tur.',
          text: "Benn bërëb échange bu gënn ak bu siiw fi jigéen yi mën a foggali laaj, bokk yëgël ak dëfar seen — sax def seen tur. Benn modération active garantit sécurité bi ak yëg bërëb bi.",
          tags: ['Anonyme', 'Siiw', 'Bienveillant'],
        },
        {
          key: 'urgence',
          title: 'Urgence ak orientation',
          subtitle: 'Bu njëkk dëkk ak solo.',
          text: "Benn njëg yu gaaw ci ressources urgence yi : numéro sopoon yi, lignes d'écoute, protocoles orientation ci violence, guné bu daw walla urgence gynécologique. Njëg ci ñaar clic, sax connexion internet amul.",
          tags: ['Gaaw', 'Am sax connexion', 'Violence & urgences'],
        },
      ],
    },
    limits: {
      label: 'Lu SaxalWér du def',
      title: 'Mbir yu dëkk, ci éthique.',
      subtitle: "Xam-xam ci lu SaxalWér du def am solo tantu lu def. Mbir yi du jappeel — dañu mooy engagement yu éthique.",
      items: [
        {
          title: "Du soppal laaj ak doktor",
          text: "SaxalWér mooy benn outil xam-xam ak orientation. Ngir yëp mbir wér-kër, laaj ak benn doktor dafa am solo.",
        },
        {
          title: "Du def diagnostic",
          text: "Jëfandikukaay amul ci SaxalWér bu mën a xamal benn yaxantu, benn infection walla benn condition médicale. Moo nekk rôle bi, te dinoo nekk jamm.",
        },
        {
          title: "Du jaay xibaar personal",
          text: "Xibaar jëfandikukaay yi dañu du leen jaay, yónneel ak annonceurs walla jëfandikoo ci mbir yenn bu moo nekk jëfandikukaay bi. Jamm.",
        },
        {
          title: "Du def jigéen yi xam honte",
          text: "Xibaar amul ci SaxalWér bu gënnël, bu moraliser walla bu def honte. Jigéen yëp sori ci seen xel. SaxalWér jox xibaar, du prescri comportement.",
        },
        {
          title: "Du bugg jëfandikukaay yi wax ci mbir yu am taabël",
          text: "Jëfandikukaay bi sori ci lu mu xam, lu mu bind, lu mu yónneel. Modul amul bu jëf gàtt. Sa yëg moo dëkk.",
        },
      ],
    },
    stores: {
      label: 'Njëg',
      title: 'Ñëwoon nañu ci',
      text: "Aplikasion bi mu ngi def. Bind ngir xamal sa yëngu.",
      soon: 'App Store & Google Play — Ñëwoon nañu',
    },
    cta: {
      title: "Bëgg nga test aplikasion bi ci kanam yëngu bi ?",
      text: 'Bokk ak jigéen yi bu njëkkër ñu def SaxalWér.',
      btn: 'Bokk ci testukaay',
    },
  },
}

/* ═══════════════════════════════════════════
   COMPOSANT PRINCIPAL
   ═══════════════════════════════════════════ */
export default function ApplicationContent() {
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
          <div className="flex items-center gap-3 mb-6">
            <span className="text-label text-[#A65D40]/70">{t.hero.label}</span>
            <span className="badge badge-soon">{t.hero.badge}</span>
          </div>
          <h1 className="title-hero mb-6">{t.hero.title}</h1>
          <p className="prose-saxal" style={{ maxWidth: '58ch' }}>{t.hero.subtitle}</p>
          <div className="w-10 h-px bg-[#A65D40] mt-8" />
        </div>
      </section>

      {/* ══ MODULES ══════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.modules.label}</span>
          <h2 className="title-h2 mb-3">{t.modules.title}</h2>
          <div className="w-10 h-px bg-[#A65D40] mb-14" />

          <div className="flex flex-col gap-5">
            {t.modules.items.map((mod, i) => (
              <div key={mod.key} className="card p-0 overflow-hidden">
                {/* En-tête module */}
                <div className="flex items-start gap-4 p-6 pb-5">
                  <div className="icon-wrap shrink-0 mt-0.5">
                    {moduleIcons[mod.key]}
                  </div>
                  <div className="flex-1 min-w-0">
                    {/* Numéro + titre */}
                    <div className="flex items-baseline gap-2.5 mb-1">
                      <span className="text-[#A65D40]/40 text-xs font-light tracking-widest">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="title-h4">{mod.title}</h3>
                    </div>
                    {/* Sous-titre */}
                    <p className="text-[#A65D40] text-xs font-light tracking-wide italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)' }}>
                      {mod.subtitle}
                    </p>
                  </div>
                </div>

                {/* Séparateur */}
                <div className="h-px bg-[#1A3C34]/6 mx-6" />

                {/* Corps */}
                <div className="p-6 pt-5">
                  <p className="text-secondary text-sm leading-relaxed mb-5" style={{ maxWidth: '58ch' }}>
                    {mod.text}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {mod.tags.map((tag, j) => (
                      <span key={j} className="badge badge-green">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CE QUE SAXALWÉR NE FAIT PAS ═════════ */}
      <section className="py-16 md:py-24 px-6 bg-[#1A3C34]">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#D4AF37]/60 text-label block mb-5">{t.limits.label}</span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', lineHeight: 1.2 }}
          >
            {t.limits.title}
          </h2>
          <p className="text-white/55 font-light text-sm leading-relaxed mb-12" style={{ maxWidth: '55ch' }}>
            {t.limits.subtitle}
          </p>
          <div className="w-10 h-px bg-[#D4AF37]/30 mb-12" />

          <div className="flex flex-col gap-0">
            {t.limits.items.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 py-7 border-b border-white/8 last:border-0"
              >
                {/* Croix discrète */}
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-white/90 mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1rem, 1.8vw, 1.15rem)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/50 font-light text-sm leading-relaxed" style={{ maxWidth: '55ch' }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DISPONIBILITÉ ════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#F5F1E6]">
        <div className="max-w-3xl mx-auto">
          <span className="text-label block mb-5 text-[#A65D40]/70">{t.stores.label}</span>
          <h2 className="title-h2 mb-4">{t.stores.title}</h2>
          <p className="prose-saxal mb-10" style={{ maxWidth: '48ch' }}>{t.stores.text}</p>

          {/* Boutons stores désactivés */}
          <div className="flex flex-wrap gap-3 mb-4">
            {[
              { label: 'App Store', path: 'M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z', vb: '0 0 384 512' },
              { label: 'Google Play', path: 'M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z', vb: '0 0 512 512' },
            ].map(store => (
              <div key={store.label} className="flex items-center gap-3 px-5 py-3 bg-white/40 border border-[#1A3C34]/10 rounded-xl opacity-60 cursor-default select-none">
                <svg viewBox={store.vb} fill="currentColor" className="w-5 h-5 text-[#1A3C34] shrink-0" aria-hidden="true">
                  <path d={store.path} />
                </svg>
                <div>
                  <div className="text-[9px] text-[#1A3C34]/50 tracking-widest uppercase leading-tight">
                    {language === 'wo' ? 'ÑËWOON NAÑU CI' : 'BIENTÔT DISPONIBLE SUR'}
                  </div>
                  <div className="text-sm font-medium text-[#1A3C34] leading-tight">{store.label}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#7D5A44]/50 font-light italic">
            * {language === 'wo' ? 'Aplikasion bi mu ngi def.' : "L'application est en cours de prototypage."}
          </p>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 bg-[#EDE8D5]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div style={{ maxWidth: '44ch' }}>
            <h2 className="title-h3 mb-3">{t.cta.title}</h2>
            <p className="text-secondary text-sm">{t.cta.text}</p>
          </div>
          <Link href="/participer-aux-tests" className="btn-primary shrink-0 whitespace-nowrap">
            {t.cta.btn}
          </Link>
        </div>
      </section>

      {/* ══ DISCLAIMER ═══════════════════════════ */}
      <div className="bg-[#F5F1E6] px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <MedicalDisclaimer variant="full" />
        </div>
      </div>

    </main>
  )
}

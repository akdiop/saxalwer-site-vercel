export type Language = 'fr' | 'wo'

export const translations = {
  fr: {
    nav: {
      home:        'Accueil',
      about:       "À propos",
      app:         "L'application",
      resources:   'Ressources santé',
      research:    'Recherche & impact',
      participate: 'Participer aux tests',
      partners:    'Partenaires',
      contact:     'Contact',
    },
    hero: {
      badge:                 'Bientôt disponible',
      headline:              "L'information en santé, réinventée pour les femmes et les filles au Sénégal.",
      subtitle:              "Une plateforme intelligente et culturellement sensible conçue pour lever les tabous autour de la santé sexuelle et reproductive au Sénégal.",
      newsletterLabel:       'Être notifiée du lancement',
      newsletterPlaceholder: 'Votre adresse email',
      newsletterButton:      "S'inscrire",
      newsletterSuccess:     'Merci ! Vous serez notifiée du lancement.',
      newsletterError:       'Veuillez entrer une adresse email valide.',
      ctaParticipate:        'Participer aux tests',
      contactLabel:          'Nous contacter',
      comingSoon:            "L'application est en cours de prototypage",
      storeLabel:            'BIENTÔT DISPONIBLE SUR',
    },
    disclaimer: {
      text:  "Les informations proposées par SaxalWér sont à visée éducative uniquement. Elles ne constituent pas un diagnostic médical et ne remplacent pas une consultation avec une professionnelle de santé.",
      short: "Information éducative — ne remplace pas une consultation médicale.",
    },
    inDevelopment: 'En cours de développement',
    footer: {
      copyright: 'SaxalWér — Information fiable et adaptable en santé féminine',
      location:  'Dakar, Sénégal — 2026',
      legal:     'Mentions légales',
      privacy:   'Confidentialité',
      medical:   'Avertissement médical',
      terms:     "Conditions d'utilisation",
    },
  },
  wo: {
    nav: {
      home:        'Kanam',
      about:       'Ci sunu bopp',
      app:         'Aplikasion bi',
      resources:   'Xibaar yu wér',
      research:    'Xam-xam & impact',
      participate: 'Bokk ci testukaay',
      partners:    'Partenaire yi',
      contact:     'Jokkoo',
    },
    hero: {
      badge:                 'Ñëwoon nañu',
      headline:              "Xibaar yu wér ci wér-kër, yëp yem ci jigéen yi ak doom-jigéen yi ci Senegaal.",
      subtitle:              "Benn plateforme bu wér ci internet, bu am xarala, bu am yëkk ci aaduna ak seetal yi.",
      newsletterLabel:       'Xool bu góor ci yëngu',
      newsletterPlaceholder: 'Sa adrés email',
      newsletterButton:      'Bind',
      newsletterSuccess:     'Jërëjëf ! Dinaa la xamle bu yëngu.',
      newsletterError:       'Baal sa adrés email bu baax.',
      ctaParticipate:        'Bokk ci testukaay',
      contactLabel:          'Jokkoo ak ñu',
      comingSoon:            'Aplikasion bi mu ngi def',
      storeLabel:            'ÑËWOON NAÑU CI',
    },
    disclaimer: {
      text:  'Xibaar yi SaxalWér jox dañu ko ngir xam-xam rekk. Dañu du def diagnostic bu doktor te dañu du soppal laaj ak doktor.',
      short: 'Xibaar ngir xam-xam — du soppal laaj ak doktor.',
    },
    inDevelopment: 'Mu ngi def',
    footer: {
      copyright: 'SaxalWér — Xibaar yu mat te yemale ci wér-kër jigéen',
      location:  'Dakar, Senegaal — 2026',
      legal:     'Seetu légal',
      privacy:   'Ceebu géewal',
      medical:   'Xibaar bu doktor',
      terms:     'Mbir yu jëfandikukaay',
    },
  },
} as const

export function getT(lang: Language) {
  return translations[lang] ?? translations.fr
}

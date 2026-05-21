export type Language = 'fr' | 'wo';

export const translations: Record<Language, {
  nav: {
    home: string;
    about: string;
    features: string;
    research: string;
    userTests: string;
    contact: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    newsletterLabel: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    newsletterSuccess: string;
    newsletterError: string;
    contactLabel: string;
    comingSoon: string;
    badgeSoon: string;
  };
  whySaxalWer: {
    title: string;
    feature1Title: string;
    feature1Description: string;
    feature2Title: string;
    feature2Description: string;
    feature3Title: string;
    feature3Description: string;
  };
  about: {
    title: string;
    subtitle: string;
    block1Title: string;
    block1Text: string;
    block2Title: string;
    block2Text: string;
    block3Title: string;
    block3Text: string;
    valuesTitle: string;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
  };
  features: {
    title: string;
    subtitle: string;
    f1Title: string;
    f1Text: string;
    f2Title: string;
    f2Text: string;
    f3Title: string;
    f3Text: string;
    f4Title: string;
    f4Text: string;
    f5Title: string;
    f5Text: string;
    f6Title: string;
    f6Text: string;
  };
  research: {
    title: string;
    subtitle: string;
    r1Title: string;
    r1Text: string;
    r2Title: string;
    r2Text: string;
    r3Title: string;
    r3Text: string;
    approachTitle: string;
    approachText: string;
  };
  userTests: {
    title: string;
    subtitle: string;
    phase1Title: string;
    phase1Text: string;
    phase2Title: string;
    phase2Text: string;
    phase3Title: string;
    phase3Text: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  feedback: {
    title: string;
    subtitle: string;
    buttonLabel: string;
    note: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    successMessage: string;
    errorMessage: string;
    partnerTitle: string;
    partnerText: string;
    pressTitle: string;
    pressText: string;
  };
  footer: {
    copyright: string;
    location: string;
    storeLabel: string;
  };
}> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      features: 'Fonctionnalités',
      research: 'Recherche',
      userTests: 'Tests utilisatrices',
      contact: 'Contact',
    },
    hero: {
      headline: "L'information en santé, réinventée pour les femmes et les filles au Sénégal.",
      subtitle: "Une plateforme intelligente et culturellement sensible conçue pour lever les tabous autour de la santé sexuelle et reproductive au Sénégal.",
      newsletterLabel: "Restez informé(e) du lancement",
      newsletterPlaceholder: "Votre adresse email",
      newsletterButton: "S'inscrire",
      newsletterSuccess: "Merci ! Vous serez informé(e) du lancement.",
      newsletterError: "Veuillez entrer une adresse email valide.",
      contactLabel: "Nous contacter",
      comingSoon: "L'application est en cours de développement",
      badgeSoon: "Bientôt disponible",
    },
    whySaxalWer: {
      title: "Pourquoi SaxalWér ?",
      feature1Title: "Culturellement adapté",
      feature1Description: "Informations en français et langues locales, respectant nos réalités culturelles.",
      feature2Title: "Confidentiel",
      feature2Description: "Vos données personnelles protégées dans un espace sécurisé et privé.",
      feature3Title: "Accessible",
      feature3Description: "Un outil intelligent, adaptable et personnalisé, conçu par et pour les femmes pour améliorer l'accès à la santé sexuelle et reproductive.",
    },
    about: {
      title: "À propos de SaxalWér",
      subtitle: "Une initiative née d'un constat simple : les femmes et les filles au Sénégal manquent d'accès à une information fiable, culturellement adaptée et confidentielle sur leur santé.",
      block1Title: "Notre origine",
      block1Text: "SaxalWér est né d'une recherche de terrain sur les dynamiques socioculturelles liées à la santé reproductive en Afrique subsaharienne. Face aux silences, aux tabous et aux barrières linguistiques, nous avons conçu une réponse technologique ancrée dans les réalités locales.",
      block2Title: "Notre mission",
      block2Text: "Offrir à chaque femme et fille au Sénégal un accès confidentiel, culturellement sensible et scientifiquement fiable à l'information en santé sexuelle et reproductive — dans sa langue, selon ses normes.",
      block3Title: "Notre cadre",
      block3Text: "SaxalWér s'inscrit dans une approche décoloniale de la santé numérique. Nous refusons de transposer des modèles étrangers. Chaque contenu, chaque interface, chaque interaction est pensé depuis et pour le contexte sénégalais.",
      valuesTitle: "Nos valeurs",
      value1: "Ancrage culturel",
      value2: "Confidentialité",
      value3: "Rigueur scientifique",
      value4: "Autonomie féminine",
    },
    features: {
      title: "Fonctionnalités",
      subtitle: "Une plateforme pensée pour répondre aux besoins réels des femmes et filles au Sénégal.",
      f1Title: "Information en langues locales",
      f1Text: "Contenus disponibles en français, wolof, pulaar et sérère. L'information de santé dans la langue dans laquelle on pense.",
      f2Title: "Espace confidentiel",
      f2Text: "Aucune donnée personnelle partagée. Un espace sûr pour poser des questions sans jugement.",
      f3Title: "Contenu culturellement ancré",
      f3Text: "Chaque contenu est conçu en tenant compte des normes sociales, des pratiques culturelles et du contexte local.",
      f4Title: "Navigation simple",
      f4Text: "Interface épurée et accessible, conçue pour les utilisatrices peu habituées aux outils numériques.",
      f5Title: "Intelligence adaptative",
      f5Text: "La plateforme s'adapte au profil de l'utilisatrice pour proposer une information pertinente et personnalisée.",
      f6Title: "Ressources vérifiées",
      f6Text: "Tous les contenus sont validés par des professionnel(le)s de santé et des expert(e)s en santé reproductive.",
    },
    research: {
      title: "Recherche & innovation sociale",
      subtitle: "SaxalWér est fondé sur une démarche rigoureuse de recherche-action, combinant science sociale et technologie.",
      r1Title: "Recherche de terrain",
      r1Text: "Des entretiens qualitatifs menés avec des femmes et filles de différentes régions du Sénégal ont permis d'identifier les besoins réels, les barrières d'accès et les tabous qui structurent les pratiques de santé.",
      r2Title: "Cadre décolonial",
      r2Text: "Notre approche refuse d'imposer des modèles de santé numérique développés pour d'autres contextes. Nous travaillons à partir des savoirs locaux, des langues vernaculaires et des systèmes de représentation propres au contexte sénégalais.",
      r3Title: "Innovation responsable",
      r3Text: "La technologie est au service des femmes, pas l'inverse. Chaque fonctionnalité est évaluée à l'aune de son utilité réelle pour les utilisatrices et de son respect de leur dignité et de leur autonomie.",
      approachTitle: "Notre méthode",
      approachText: "SaxalWér s'appuie sur le programme de méthodes de recherche de Leaders of Africa Institute et sur des collaborations avec des acteurs de la santé reproductive en Afrique de l'Ouest. Nous combinons recherche qualitative, co-design et évaluation continue pour construire une plateforme véritablement utile.",
    },
    userTests: {
      title: "Tests utilisatrices",
      subtitle: "SaxalWér est co-construit avec les femmes et filles qu'il est censé servir. Les tests utilisatrices sont au cœur de notre démarche.",
      phase1Title: "Phase 1 — Exploration",
      phase1Text: "Entretiens individuels et groupes de discussion avec des femmes de différents profils, âges et régions. Identification des besoins, des freins et des attentes vis-à-vis d'un outil numérique de santé.",
      phase2Title: "Phase 2 — Prototypage",
      phase2Text: "Tests du prototype avec un groupe restreint d'utilisatrices. Observation de la navigation, des incompréhensions et des réactions face aux contenus. Itérations rapides sur l'interface et les contenus.",
      phase3Title: "Phase 3 — Validation",
      phase3Text: "Tests à plus grande échelle dans différentes zones géographiques. Mesure de l'accessibilité, de la compréhension et de la satisfaction. Validation finale avant lancement.",
      ctaTitle: "Participer aux tests",
      ctaText: "Vous êtes une femme ou une fille au Sénégal et vous souhaitez contribuer à la construction de SaxalWér ? Contactez-nous pour rejoindre notre groupe de tests.",
      ctaButton: "Je veux participer",
    },
    contact: {
      title: "Contact",
      subtitle: "Vous souhaitez en savoir plus, collaborer ou rejoindre l'aventure SaxalWér ?",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "Votre adresse email",
      messageLabel: "Message",
      messagePlaceholder: "Votre message…",
      sendButton: "Envoyer",
      successMessage: "Message envoyé. Nous vous répondrons dans les plus brefs délais.",
      errorMessage: "Une erreur est survenue. Veuillez réessayer.",
      partnerTitle: "Partenariats & collaborations",
      partnerText: "Vous êtes une organisation, un bailleur de fonds ou un(e) chercheur(se) souhaitant collaborer avec SaxalWér ? Écrivez-nous à contact@saxalwer.com",
      pressTitle: "Presse & médias",
      pressText: "Pour toute demande presse ou interview, contactez-nous directement à contact@saxalwer.com",
    },
    feedback: {
      title: "Donnez-nous votre avis",
      subtitle: "Votre retour est précieux pour construire une plateforme qui répond vraiment à vos besoins. Ce formulaire est anonyme et ne prend que 2 minutes.",
      buttonLabel: "Répondre au formulaire",
      note: "Vos réponses sont anonymes et confidentielles.",
    },
    footer: {
      copyright: "SaxalWér — Information fiable et adaptable en santé féminine",
      location: "Dakar, Sénégal — 2026",
      storeLabel: "DISPONIBLE SUR",
    },
  },

  wo: {
    nav: {
      home: 'Kanam',
      about: 'Ci sunu bopp',
      features: 'Jëfandikukaay',
      research: 'Xam-xam',
      userTests: 'Testukaay',
      contact: 'Jokkoo',
    },
    hero: {
      headline: "Xibaar yu wér ci wér-kër, yëp yem ci jigéen yi ak doom-jigéen yi ci Senegaal.",
      subtitle: "Benn plateforme bu wér ci internet, bu am xarala, bu am yëkk ci aaduna ak seetal yi, ngir jëfandikoo xibaar yu wér ci wér-kër ak njool.",
      newsletterLabel: "Xool bu góor ci yëngu",
      newsletterPlaceholder: "Sa adrés email",
      newsletterButton: "Bind",
      newsletterSuccess: "Jërëjëf ! Dinaa la xamle bu yëngu.",
      newsletterError: "Baal sa adrés email bu baax.",
      contactLabel: "Jokkoo ak ñu",
      comingSoon: "Aplikasion bi mu ngi ñëw",
      badgeSoon: "Ñëwoon nañu",
    },
    whySaxalWer: {
      title: "Lan mooy SaxalWér ?",
      feature1Title: "Yemale ci aaduna",
      feature1Description: "Xibaar ci Faransee ak làkk yi ci biir réew, di yem ci sunuy aaduna.",
      feature2Title: "Ceebu géewal",
      feature2Description: "Sa xibaar yi gënn ci benn bërëb bu am tëral.",
      feature3Title: "Am njëg",
      feature3Description: "Jëfandikukaay bu xarala te soppeeku, ñu sosal ko jigéen ñi ngir ñu man a sàmm seen wér-gi-yaram.",
    },
    about: {
      title: "Ci SaxalWér",
      subtitle: "Benn mbir bu dëkk ci benn yëgël bu yomb : jigéen yi ak doom-jigéen yi ci Senegaal dañu soxor xibaar yu baax, yu yemale ak yu gënn ci wér-kër moom.",
      block1Title: "Féete bi",
      block1Text: "SaxalWér dafa féete ci benn xam-xam ci dëkk ci sunu bërëb ci wér-kër ak njool ci Afrik. Ñu gis géewël, taabël ak yenniku làkk, ñu def benn tontu teknoloji bu dëkk ci dëkk.",
      block2Title: "Sunu njëg",
      block2Text: "Jox jigéen ak doom-jigéen yëp ci Senegaal benn njëg bu gënn, bu yemale ci aaduna ak bu am xam-xam ci wér-kër ak njool — ci sa làkk, ci sa aaduna.",
      block3Title: "Sunu sëriñ",
      block3Text: "SaxalWér dëkk ci benn mbir bu bàyyi koloniyalism ci wér-kër digital. Ñu bàyyi jooju modeel yu kanam. Yëp contenu, yëp interface, yëp jëfandikukaay dafa xam-xam ci Senegaal.",
      valuesTitle: "Sunu njëg yi",
      value1: "Dëkk ci aaduna",
      value2: "Ceebu géewal",
      value3: "Xam-xam bu sell",
      value4: "Jigéen dafa am solo",
    },
    features: {
      title: "Jëfandikukaay",
      subtitle: "Benn plateforme bu xam-xam ci jigéen ak doom-jigéen yi ci Senegaal.",
      f1Title: "Xibaar ci làkk yi",
      f1Text: "Contenu am ci Faransee, Wolof, Pulaar ak Sérère. Xibaar wér ci sa làkk.",
      f2Title: "Bërëb bu gënn",
      f2Text: "Xaar xibaar personal. Benn bërëb bu sell ngir foggali laaj.",
      f3Title: "Contenu bu dëkk",
      f3Text: "Yëp contenu dafa xam-xam ci aaduna, jëfandikukaay ak dëkk bi.",
      f4Title: "Jëfandikukaay bu yomb",
      f4Text: "Interface bu sell, ngir jigéen yu xam-xam digital soxor.",
      f5Title: "Xarala bu soppeeku",
      f5Text: "Plateforme bi dafa soppeeku ci sa bërëb ngir jox xibaar bu yem.",
      f6Title: "Xibaar yu sell",
      f6Text: "Yëp contenu dafa sellal ci dokter ak expert ci wér-kër ak njool.",
    },
    research: {
      title: "Xam-xam ak innovation",
      subtitle: "SaxalWér dafa dëkk ci xam-xam ak teknoloji.",
      r1Title: "Xam-xam ci dëkk",
      r1Text: "Laaj ak jigéen ak doom-jigéen ci Senegaal ngir xam seen bëgg, seen yenniku ak seen taabël ci wér-kër.",
      r2Title: "Mbir bu bàyyi koloniyalism",
      r2Text: "Sunu mbir bàyyi jooju modeel yu kanam. Ñu liggéey ak xam-xam bu dëkk, làkk ak représentation ci Senegaal.",
      r3Title: "Innovation bu am xam-xam",
      r3Text: "Teknoloji dëkk ci jigéen yi, moo nekk ak ñoom. Yëp jëfandikukaay dafa seetaat ci njëg bi moo am ngir jigéen yi.",
      approachTitle: "Sunu mbir",
      approachText: "SaxalWér dëkk ci Leaders of Africa Institute ak collaborasion ak acteur ci wér-kër ak njool ci Afrik ci Kanam. Ñu bokk xam-xam, co-design ak évaluation ngir def benn plateforme bu am njëg.",
    },
    userTests: {
      title: "Testukaay",
      subtitle: "SaxalWér dafa def ak jigéen ak doom-jigéen. Testukaay dëkk ci sunu mbir.",
      phase1Title: "Étape 1 — Xam-xam",
      phase1Text: "Laaj ak jigéen yi ci bërëb yu bari. Xam seen bëgg, seen yenniku ak seen bëgg ci outil digital ci wér-kër.",
      phase2Title: "Étape 2 — Prototype",
      phase2Text: "Test ci prototype ak jigéen yi soxor. Xool navigation, yenniku ak réaction ci contenu. Sos interface ak contenu.",
      phase3Title: "Étape 3 — Valide",
      phase3Text: "Test ci dëkk yu bari. Seet njëg, xam-xam ak satisfaction. Valide tëj lañu yëngu.",
      ctaTitle: "Bokk ci testukaay",
      ctaText: "Yaa jigéen walla doom-jigéen ci Senegaal te bëgg a bokk ci SaxalWér ? Jokkoo ak ñu.",
      ctaButton: "Bëgg naa bokk",
    },
    contact: {
      title: "Jokkoo",
      subtitle: "Bëgg nga xam ak yokk walla bokk ci SaxalWér ?",
      nameLabel: "Tur",
      namePlaceholder: "Sa tur",
      emailLabel: "Email",
      emailPlaceholder: "Sa adrés email",
      messageLabel: "Xibaar",
      messagePlaceholder: "Sa xibaar…",
      sendButton: "Yónni",
      successMessage: "Xibaar bi ñu ko jël. Dinañu la tontu ci kanam.",
      errorMessage: "Am na lañu sàkk. Jëf tukki.",
      partnerTitle: "Partenariat ak collaboration",
      partnerText: "Yaa organisation, bailleur walla chercheur bëgg collaborer ak SaxalWér ? Bind ñu : contact@saxalwer.com",
      pressTitle: "Presse ak médias",
      pressText: "Ngir laaj presse walla interview, jokkoo ak ñu : contact@saxalwer.com",
    },
    feedback: {
      title: "Jox sa xel",
      subtitle: "Sa tontu dafa am solo ngir def benn plateforme bu yem ci sa bëgg. Formulaire bi du xaar sa tur te du dëkk feen.",
      buttonLabel: "Tontu ci formulaire bi",
      note: "Sa tontu du xaar sa tur.",
    },
    footer: {
      copyright: "SaxalWér — Xibaar yu mat te yemale ci wér-kër jigéen ngir yëp",
      location: "Dakar, Senegaal — 2026",
      storeLabel: "AM CI",
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang] ?? translations.fr;
}
// Note: feedback section added below in translations object

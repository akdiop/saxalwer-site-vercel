import { motion } from 'motion/react';
import { Language, getTranslation } from '../i18n/translations';

interface WhySaxalWerProps {
  language: Language;
}

const icons = [
  // Icône info / globe
  <svg key="1" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01" />
  </svg>,
  // Icône cadenas
  <svg key="2" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
  // Icône mobile
  <svg key="3" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>,
];

export function WhySaxalWer({ language }: WhySaxalWerProps) {
  const t = getTranslation(language);

  const features = [
    { icon: icons[0], title: t.whySaxalWer.feature1Title, desc: t.whySaxalWer.feature1Description },
    { icon: icons[1], title: t.whySaxalWer.feature2Title, desc: t.whySaxalWer.feature2Description },
    { icon: icons[2], title: t.whySaxalWer.feature3Title, desc: t.whySaxalWer.feature3Description },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-10 md:py-14">
      {/* Titre de section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 md:mb-12"
      >
        <h3
          className="text-2xl md:text-3xl text-[#1A3C34] mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          {t.whySaxalWer.title}
        </h3>
        <div className="w-12 h-px bg-[#A65D40] mx-auto" />
      </motion.div>

      {/* Grille 3 colonnes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 text-[#A65D40]">{feat.icon}</div>
            <h4
              className="text-lg font-medium text-[#1A3C34] mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {feat.title}
            </h4>
            <p className="text-sm text-[#7D5A44] leading-relaxed font-light max-w-xs">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

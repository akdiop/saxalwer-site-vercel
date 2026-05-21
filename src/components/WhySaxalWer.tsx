import { motion } from 'motion/react';
import { Language, getTranslation } from '../i18n/translations';

interface WhySaxalWerProps {
  language: Language;
}

const icons = [
  // Ancrage culturel — mains / communauté
  <svg key="1" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-5 7.8-5 7.8S3 13.2 3 16.5a9 9 0 0018 0c0-3.3-4-5.7-4-5.7S13.2 8.4 12 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
  </svg>,
  // Confidentialité — œil barré
  <svg key="2" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
  </svg>,
  // Accessibilité — téléphone avec cœur
  <svg key="3" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5c0 0-2.25-1.5-2.25-3a2.25 2.25 0 014.5 0c0 1.5-2.25 3-2.25 3z" />
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

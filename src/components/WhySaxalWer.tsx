import { motion } from 'framer-motion'
import { Language, getTranslation } from '../i18n/translations';

interface WhySaxalWerProps { language: Language; }

const icons = [
  <svg key="1" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-5 7.8-5 7.8S3 13.2 3 16.5a9 9 0 0018 0c0-3.3-4-5.7-4-5.7S13.2 8.4 12 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
  </svg>,
  <svg key="2" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>,
  <svg key="3" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
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
    <section className="w-full">
      {/* Séparateur visuel */}
      <div className="w-full border-t border-[#1A3C34]/8 mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h2
          className="text-[#1A3C34] mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
          }}
        >
          {t.whySaxalWer.title}
        </h2>
        <div className="w-10 h-px bg-[#A65D40] mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex flex-col items-center text-center px-4 py-8 bg-white/30 border border-[#1A3C34]/6 rounded-2xl"
          >
            <div className="mb-5 text-[#A65D40] p-3 bg-[#A65D40]/6 rounded-full">{feat.icon}</div>
            <h3
              className="text-[#1A3C34] mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              }}
            >
              {feat.title}
            </h3>
            <p className="text-sm text-[#7D5A44]/85 leading-relaxed font-light max-w-[26ch]">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

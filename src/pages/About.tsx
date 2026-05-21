import { motion } from 'motion/react';
import { PageLayout } from '../components/PageLayout';
import { Language, getTranslation } from '../i18n/translations';

interface AboutProps { language: Language; }

const valueIcons = [
  // Ancrage culturel — arbre/racines
  <svg key="1" className="w-6 h-6 text-[#A65D40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-5 7.8-5 7.8S3 13.2 3 16.5a9 9 0 0018 0c0-3.3-4-5.7-4-5.7S13.2 8.4 12 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
  </svg>,
  // Confidentialité — cadenas
  <svg key="2" className="w-6 h-6 text-[#A65D40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>,
  // Rigueur scientifique — loupe
  <svg key="3" className="w-6 h-6 text-[#A65D40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>,
  // Autonomie féminine — femme/étoile
  <svg key="4" className="w-6 h-6 text-[#A65D40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l.5 1.5H14l-1.25.9.5 1.6L12 12.1l-1.25.9.5-1.6L10 10.5h1.5L12 9z" />
  </svg>,
];

export function About({ language }: AboutProps) {
  const t = getTranslation(language);
  const a = t.about;

  const blocks = [
    { title: a.block1Title, text: a.block1Text },
    { title: a.block2Title, text: a.block2Text },
    { title: a.block3Title, text: a.block3Text },
  ];

  const values = [a.value1, a.value2, a.value3, a.value4];

  return (
    <PageLayout title={a.title} subtitle={a.subtitle}>
      <div className="flex flex-col gap-12 mb-16">
        {blocks.map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="border-l-2 border-[#A65D40]/30 pl-6 py-2"
          >
            <h2
              className="text-xl md:text-2xl text-[#1A3C34] mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              {block.title}
            </h2>
            <p className="text-sm md:text-base text-[#7D5A44] font-light leading-relaxed">
              {block.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-xl md:text-2xl text-[#1A3C34] mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          {a.valuesTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center py-6 px-4 bg-white/40 border border-[#1A3C34]/8 rounded-2xl gap-3"
            >
              {valueIcons[i]}
              <span
                className="text-sm text-[#1A3C34] font-medium leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}
              >
                {value}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  );
}

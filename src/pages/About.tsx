import { motion } from 'motion/react';
import { PageLayout } from '../components/PageLayout';
import { Language, getTranslation } from '../i18n/translations';

interface AboutProps { language: Language; }

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

      {/* Blocs texte */}
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

      {/* Valeurs */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-xl md:text-2xl text-[#1A3C34] mb-6"
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
              className="flex flex-col items-center text-center py-6 px-4 bg-white/40 border border-[#1A3C34]/8 rounded-2xl"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mb-3" aria-hidden="true" />
              <span
                className="text-sm text-[#1A3C34] font-medium"
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

import { motion } from 'motion/react';
import { PageLayout } from '../components/PageLayout';
import { Language, getTranslation } from '../i18n/translations';

interface ResearchProps { language: Language; }

export function Research({ language }: ResearchProps) {
  const t = getTranslation(language);
  const r = t.research;

  const pillars = [
    { title: r.r1Title, text: r.r1Text },
    { title: r.r2Title, text: r.r2Text },
    { title: r.r3Title, text: r.r3Text },
  ];

  return (
    <PageLayout title={r.title} subtitle={r.subtitle}>

      {/* 3 piliers */}
      <div className="flex flex-col gap-8 mb-14">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="flex gap-5"
          >
            {/* Numéro */}
            <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
              <span
                className="text-[#A65D40]/60 text-sm"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                0{i + 1}
              </span>
              {i < pillars.length - 1 && (
                <div className="flex-1 w-px bg-[#A65D40]/15 min-h-[40px]" />
              )}
            </div>
            {/* Contenu */}
            <div className="pb-6">
              <h2
                className="text-xl md:text-2xl text-[#1A3C34] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                {pillar.title}
              </h2>
              <p className="text-sm md:text-base text-[#7D5A44] font-light leading-relaxed">
                {pillar.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bloc méthode */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-7 bg-[#1A3C34]/4 border border-[#1A3C34]/10 rounded-2xl"
      >
        <h2
          className="text-xl md:text-2xl text-[#1A3C34] mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          {r.approachTitle}
        </h2>
        <p className="text-sm md:text-base text-[#7D5A44] font-light leading-relaxed">
          {r.approachText}
        </p>
      </motion.div>
    </PageLayout>
  );
}

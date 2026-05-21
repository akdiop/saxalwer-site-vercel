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
      <div className="flex flex-col gap-0 mb-16 pl-8">
        <div className="absolute left-[calc(1.5rem+1px)] top-0 bottom-0 w-px" aria-hidden="true" />
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="relative pb-12 last:pb-0"
          >
            <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#A65D40] bg-[#F5F1E6]" aria-hidden="true" />
            <div className="absolute -left-[1.85rem] top-5 bottom-0 w-px bg-[#A65D40]/15 last:hidden" aria-hidden="true" />
            <h2
              className="text-[#1A3C34] mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}
            >
              <span className="text-[#A65D40]/50 mr-2 text-sm font-light">0{i + 1}</span>
              {pillar.title}
            </h2>
            <p className="text-sm md:text-base text-[#7D5A44]/85 font-light leading-relaxed" style={{ maxWidth: '58ch' }}>
              {pillar.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 bg-[#1A3C34]/4 border border-[#1A3C34]/10 rounded-2xl"
      >
        <h2
          className="text-[#1A3C34] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}
        >
          {r.approachTitle}
        </h2>
        <p className="text-sm md:text-base text-[#7D5A44]/85 font-light leading-relaxed" style={{ maxWidth: '58ch' }}>
          {r.approachText}
        </p>
      </motion.div>
    </PageLayout>
  );
}

export default Research;

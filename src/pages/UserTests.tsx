import { motion } from 'motion/react';
import { PageLayout } from '../components/PageLayout';
import { Language, getTranslation } from '../i18n/translations';

interface UserTestsProps { language: Language; }

export function UserTests({ language }: UserTestsProps) {
  const t = getTranslation(language);
  const u = t.userTests;

  const phases = [
    { title: u.phase1Title, text: u.phase1Text },
    { title: u.phase2Title, text: u.phase2Text },
    { title: u.phase3Title, text: u.phase3Text },
  ];

  return (
    <PageLayout title={u.title} subtitle={u.subtitle}>

      {/* Phases — timeline verticale */}
      <div className="relative flex flex-col gap-0 mb-14 pl-6">
        {/* Ligne verticale */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-[#A65D40]/20"
          aria-hidden="true"
        />

        {phases.map((phase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="relative pb-10 last:pb-0"
          >
            {/* Point sur la timeline */}
            <div
              className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#A65D40] bg-[#F5F1E6]"
              aria-hidden="true"
            />
            <h2
              className="text-lg md:text-xl text-[#1A3C34] mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              {phase.title}
            </h2>
            <p className="text-sm md:text-base text-[#7D5A44] font-light leading-relaxed">
              {phase.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA participation */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-7 bg-white/50 border border-[#A65D40]/20 rounded-2xl text-center flex flex-col items-center gap-4"
      >
        <h2
          className="text-xl md:text-2xl text-[#1A3C34]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          {u.ctaTitle}
        </h2>
        <p className="text-sm text-[#7D5A44] font-light leading-relaxed max-w-md">
          {u.ctaText}
        </p>
        <a
          href="/contact"
          className="inline-block mt-2 px-8 py-3 bg-[#7D5A44] text-white text-sm font-medium rounded-full hover:bg-[#A65D40] transition-colors duration-300"
        >
          {u.ctaButton}
        </a>
      </motion.div>
    </PageLayout>
  );
}

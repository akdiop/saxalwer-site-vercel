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
      <div className="relative flex flex-col gap-0 mb-16 pl-8">
        {phases.map((phase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="relative pb-12 last:pb-0"
          >
            <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#A65D40] bg-[#F5F1E6]" aria-hidden="true" />
            {i < phases.length - 1 && (
              <div className="absolute -left-[1.85rem] top-5 h-full w-px bg-[#A65D40]/15" aria-hidden="true" />
            )}
            <h2
              className="text-[#1A3C34] mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.05rem, 2vw, 1.3rem)' }}
            >
              {phase.title}
            </h2>
            <p className="text-sm md:text-base text-[#7D5A44]/85 font-light leading-relaxed" style={{ maxWidth: '58ch' }}>
              {phase.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 md:p-10 bg-white/50 border border-[#A65D40]/15 rounded-2xl text-center flex flex-col items-center gap-5"
      >
        <h2
          className="text-[#1A3C34]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}
        >
          {u.ctaTitle}
        </h2>
        <p className="text-sm text-[#7D5A44]/85 font-light leading-relaxed max-w-md">
          {u.ctaText}
        </p>
        <a
          href="/contact"
          className="inline-block mt-2 px-8 py-3.5 bg-[#7D5A44] text-white text-sm font-medium rounded-full hover:bg-[#A65D40] transition-colors duration-300"
        >
          {u.ctaButton}
        </a>
      </motion.div>
    </PageLayout>
  );
}

export default UserTests;

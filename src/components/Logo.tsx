import { motion } from 'framer-motion';
import { Language, getTranslation } from '../i18n/translations';

interface LogoProps { language: Language; }

export function Logo({ language }: LogoProps) {
  const t = getTranslation(language);

  return (
    <div className="flex flex-col items-center gap-5">
      <motion.div
        className="w-24 h-24 md:w-32 md:h-32"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <img
          src="/assets/logo.png"
          alt="SaxalWér"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.span
        className="inline-block px-6 py-1.5 bg-[#C04000]/5 border border-[#C04000]/15 rounded-full text-[#C04000] text-[11px] font-medium tracking-[0.14em] uppercase"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        {t.hero.badgeSoon}
      </motion.span>
    </div>
  );
}

import { motion } from 'motion/react';
import { Language } from '../i18n/translations';
import { getTranslation } from '../i18n/translations';

interface LogoProps {
  language: Language;
}

export function Logo({ language }: LogoProps) {
  const t = getTranslation(language);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Image du logo */}
      <motion.div
        className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <img
          src="/assets/logo.png"
          alt="SaxalWér — Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Badge "Bientôt disponible" */}
      <motion.span
        className="inline-block px-7 py-2 bg-[#C04000]/5 border border-[#C04000]/20 rounded-full text-[#C04000] text-sm font-medium tracking-wide"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {t.hero.badgeSoon}
      </motion.span>
    </div>
  );
}

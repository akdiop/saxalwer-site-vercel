import { motion } from 'motion/react';
import { Logo } from './Logo';
import { NewsletterForm } from './NewsletterForm';
import { WhySaxalWer } from './WhySaxalWer';
import { Language, getTranslation } from '../i18n/translations';

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const t = getTranslation(language);

  return (
    <main className="flex-1 flex flex-col items-center px-5 py-14 md:py-20 relative overflow-hidden bg-[#F5F1E6]">

      {/* Filigrane baobab — animation de respiration */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        animate={{ scale: [1, 1.02, 1], opacity: [0.04, 0.055, 0.04] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <img
          src="/assets/logo.png"
          alt=""
          className="w-[190vw] h-[190vw] sm:w-[120vw] sm:h-[120vw] md:w-[90vw] md:h-[90vw] max-w-none object-contain"
        />
      </motion.div>

      {/* Contenu principal */}
      <div className="max-w-3xl w-full mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center gap-0"
        >
          {/* Logo + badge */}
          <div className="mb-12 md:mb-16">
            <Logo language={language} />
          </div>

          {/* Headline */}
          <h1
            className="text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.18] text-[#1A3C34] mb-7 max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            {t.hero.headline}
          </h1>

          {/* Sous-titre */}
          <p className="text-base md:text-lg text-[#7D5A44] leading-relaxed mb-14 max-w-xl mx-auto font-light">
            {t.hero.subtitle}
          </p>

          {/* Bloc "Pourquoi SaxalWér" */}
          <div className="w-full mb-16">
            <WhySaxalWer language={language} />
          </div>

          {/* Newsletter */}
          <div className="w-full mb-12">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#1A3C34]/55 mb-5">
              {t.hero.newsletterLabel}
            </p>
            <NewsletterForm language={language} />
          </div>

          {/* Séparateur */}
          <div className="w-14 h-px bg-[#1A3C34]/10 mb-10" />

          {/* Boutons app stores (à venir) */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* App Store */}
              <div className="flex items-center gap-3 px-5 py-2.5 bg-white/40 border border-[#1A3C34]/10 rounded-xl opacity-70 cursor-default select-none">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5 text-[#1A3C34] shrink-0" aria-hidden="true">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-[#1A3C34]/55 tracking-wide">{t.footer.storeLabel}</div>
                  <div className="text-sm font-medium leading-tight text-[#1A3C34]">App Store</div>
                </div>
              </div>
              {/* Google Play */}
              <div className="flex items-center gap-3 px-5 py-2.5 bg-white/40 border border-[#1A3C34]/10 rounded-xl opacity-70 cursor-default select-none">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 text-[#1A3C34] shrink-0" aria-hidden="true">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-[#1A3C34]/55 tracking-wide">{t.footer.storeLabel}</div>
                  <div className="text-sm font-medium leading-tight text-[#1A3C34]">Google Play</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#7D5A44]/65 font-light italic">
              * {t.hero.comingSoon}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2.5">
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#1A3C34]/55">
              {t.hero.contactLabel}
            </span>
            <a
              href="mailto:contact@saxalwer.com"
              className="text-[#7D5A44] hover:text-[#A65D40] transition-colors duration-300 font-light text-sm pb-px border-b border-[#A65D40]/30 hover:border-[#A65D40]"
            >
              contact@saxalwer.com
            </a>
          </div>

        </motion.div>
      </div>
    </main>
  );
}

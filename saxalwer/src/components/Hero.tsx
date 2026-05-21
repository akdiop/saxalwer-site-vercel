import { motion } from 'motion/react';
import { Logo } from './Logo';
import { NewsletterForm } from './NewsletterForm';
import { WhySaxalWer } from './WhySaxalWer';
import { Language, getTranslation } from '../i18n/translations';

interface HeroProps { language: Language; }

export function Hero({ language }: HeroProps) {
  const t = getTranslation(language);

  return (
    <main className="flex-1 bg-[#F5F1E6] relative overflow-hidden">

      {/* Filigrane — très discret, centré, ne gêne pas le texte */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ opacity: 0.025 }}
        aria-hidden="true"
      >
        <img
          src="/assets/logo.png"
          alt=""
          className="w-[80vw] h-[80vw] max-w-[600px] object-contain"
        />
      </div>

      {/* Zone principale — padding généreux pour laisser respirer */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-8 text-center pt-32 md:pt-40 pb-20 md:pb-28">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <div className="mb-10 md:mb-14">
            <Logo language={language} />
          </div>

          {/* Headline */}
          <h1
            className="text-[#1A3C34] leading-[1.2] mb-7 md:mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 'clamp(1.9rem, 4.5vw, 3.25rem)',
            }}
          >
            {t.hero.headline}
          </h1>

          {/* Sous-titre */}
          <p
            className="text-[#7D5A44]/90 leading-relaxed font-light mb-16 md:mb-20"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.0625rem)', maxWidth: '52ch' }}
          >
            {t.hero.subtitle}
          </p>

          {/* Section Pourquoi SaxalWér */}
          <div className="w-full mb-20 md:mb-24">
            <WhySaxalWer language={language} />
          </div>

          {/* Newsletter */}
          <div className="w-full mb-16 md:mb-20">
            <p
              className="font-medium tracking-[0.18em] uppercase text-[#1A3C34]/50 mb-6"
              style={{ fontSize: '11px' }}
            >
              {t.hero.newsletterLabel}
            </p>
            <NewsletterForm language={language} />
          </div>

          {/* Séparateur */}
          <div className="w-12 h-px bg-[#1A3C34]/10 mb-14" />

          {/* App Stores — à venir */}
          <div className="flex flex-col items-center gap-5 mb-14">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: 'M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z', vb: '0 0 384 512', label: 'App Store' },
                { icon: 'M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z', vb: '0 0 512 512', label: 'Google Play' },
              ].map(store => (
                <div
                  key={store.label}
                  className="flex items-center gap-3 px-5 py-3 bg-white/40 border border-[#1A3C34]/10 rounded-xl opacity-65 cursor-default select-none"
                >
                  <svg viewBox={store.vb} fill="currentColor" className="w-5 h-5 text-[#1A3C34] shrink-0" aria-hidden="true">
                    <path d={store.icon} />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] leading-tight text-[#1A3C34]/50 tracking-widest uppercase">{t.footer.storeLabel}</div>
                    <div className="text-sm font-medium leading-tight text-[#1A3C34]">{store.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#7D5A44]/55 font-light italic">
              * {t.hero.comingSoon}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-3">
            <span
              className="font-medium tracking-[0.18em] uppercase text-[#1A3C34]/50"
              style={{ fontSize: '11px' }}
            >
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

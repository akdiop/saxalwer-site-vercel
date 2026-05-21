import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../i18n/translations';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages = [
  { code: 'fr' as Language, nativeName: 'Français' },
  { code: 'wo' as Language, nativeName: 'Wolof' },
];

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const current = languages.find(l => l.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(v => !v)}
        aria-label="Changer de langue"
        aria-expanded={isOpen}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#4A2F27]/20 bg-white/40 hover:bg-white/60 transition-all duration-300 text-sm text-[#4A2F27] backdrop-blur-sm"
      >
        {/* Icône globe */}
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="font-light tracking-wide">{current?.code.toUpperCase()}</span>
        {/* Chevron */}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay invisible pour fermer en cliquant dehors */}
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-lg border border-[#4A2F27]/10 overflow-hidden min-w-[160px] z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { onLanguageChange(lang.code); setIsOpen(false); }}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors duration-200 ${
                    currentLanguage === lang.code
                      ? 'bg-[#A65D40]/10 text-[#1A3C34] font-medium'
                      : 'hover:bg-[#F5F1E6] text-[#7D5A44] font-light'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span>{lang.nativeName}</span>
                    {currentLanguage === lang.code && (
                      <svg className="w-4 h-4 text-[#A65D40] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

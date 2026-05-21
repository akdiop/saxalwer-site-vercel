import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Language, getTranslation } from '../i18n/translations';

interface NavProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Nav({ language, onLanguageChange }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = getTranslation(language);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/',                label: t.nav.home },
    { to: '/a-propos',        label: t.nav.about },
    { to: '/fonctionnalites', label: t.nav.features },
    { to: '/recherche',       label: t.nav.research },
    { to: '/tests',           label: t.nav.userTests },
    { to: '/contact',         label: t.nav.contact },
  ];

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F1E6]/96 backdrop-blur-md shadow-[0_1px_0_rgba(26,60,52,0.08)]'
          : 'bg-[#F5F1E6]/75 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-[4.5rem] flex items-center justify-between gap-8">

        <NavLink
          to="/"
          onClick={close}
          className="font-medium uppercase tracking-[0.18em] text-[#4A2F27] text-[11px] shrink-0 hover:text-[#A65D40] transition-colors duration-200"
        >
          SaxalWér
        </NavLink>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={close}
              className={({ isActive }) =>
                `text-[11px] tracking-wide transition-colors duration-200 pb-px ${
                  isActive
                    ? 'text-[#1A3C34] font-medium border-b border-[#A65D40]'
                    : 'text-[#7D5A44]/70 font-light hover:text-[#1A3C34] border-b border-transparent'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1.5 shrink-0">
          {(['fr', 'wo'] as Language[]).map(lang => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`text-[11px] px-2.5 py-1 rounded-full transition-all duration-200 tracking-wider ${
                language === lang
                  ? 'bg-[#1A3C34] text-white'
                  : 'text-[#7D5A44]/60 hover:text-[#1A3C34]'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1 shrink-0"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-px bg-[#4A2F27] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-[#4A2F27] transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#4A2F27] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-[#F5F1E6] border-t border-[#1A3C34]/8"
          >
            <nav className="flex flex-col px-6 py-2" aria-label="Navigation mobile">
              {links.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={close}
                  className={({ isActive }) =>
                    `py-3.5 text-sm border-b border-[#1A3C34]/5 last:border-0 transition-colors duration-200 ${
                      isActive ? 'text-[#1A3C34] font-medium' : 'text-[#7D5A44] font-light'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-3 py-4">
                <span className="text-[10px] text-[#7D5A44]/50 uppercase tracking-widest">Langue</span>
                {(['fr', 'wo'] as Language[]).map(lang => (
                  <button
                    key={lang}
                    onClick={() => { onLanguageChange(lang); close(); }}
                    className={`text-xs px-3 py-1 rounded-full transition-all duration-200 ${
                      language === lang
                        ? 'bg-[#1A3C34] text-white'
                        : 'text-[#7D5A44]/70 border border-[#1A3C34]/20'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

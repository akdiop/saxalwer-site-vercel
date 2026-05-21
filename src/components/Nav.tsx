import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Language, getTranslation } from '../i18n/translations';

interface NavProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Nav({ language, onLanguageChange }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = getTranslation(language);
  const location = useLocation();

  const links = [
    { to: '/',            label: t.nav.home },
    { to: '/a-propos',   label: t.nav.about },
    { to: '/fonctionnalites', label: t.nav.features },
    { to: '/recherche',  label: t.nav.research },
    { to: '/tests',      label: t.nav.userTests },
    { to: '/contact',    label: t.nav.contact },
  ];

  // Ferme le menu mobile au changement de page
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E6]/90 backdrop-blur-sm border-b border-[#1A3C34]/8">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">

        {/* Logo texte — lien vers accueil */}
        <NavLink
          to="/"
          className="font-medium uppercase tracking-[0.14em] text-[#4A2F27] text-xs hover:text-[#A65D40] transition-colors duration-200"
          onClick={handleLinkClick}
        >
          SaxalWér
        </NavLink>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-xs font-light tracking-wide transition-colors duration-200 pb-0.5 ${
                  isActive
                    ? 'text-[#1A3C34] border-b border-[#A65D40]'
                    : 'text-[#7D5A44]/80 hover:text-[#1A3C34] border-b border-transparent'
                }`
              }
              onClick={handleLinkClick}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Sélecteur de langue desktop */}
        <div className="hidden md:flex items-center gap-2">
          {(['fr', 'wo'] as Language[]).map(lang => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`text-xs px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === lang
                  ? 'bg-[#1A3C34] text-white'
                  : 'text-[#7D5A44]/70 hover:text-[#1A3C34]'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Bouton burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1.5"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-px bg-[#4A2F27] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-[#4A2F27] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#4A2F27] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#F5F1E6] border-t border-[#1A3C34]/8"
          >
            <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Navigation mobile">
              {links.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `py-2.5 text-sm font-light border-b border-[#1A3C34]/5 last:border-0 transition-colors duration-200 ${
                      isActive ? 'text-[#1A3C34] font-medium' : 'text-[#7D5A44]'
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Langue mobile */}
              <div className="flex items-center gap-3 pt-3 mt-1">
                <span className="text-xs text-[#7D5A44]/60 uppercase tracking-widest">Langue</span>
                {(['fr', 'wo'] as Language[]).map(lang => (
                  <button
                    key={lang}
                    onClick={() => { onLanguageChange(lang); setMenuOpen(false); }}
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

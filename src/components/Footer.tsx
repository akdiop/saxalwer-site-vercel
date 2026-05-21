import { Language, getTranslation } from '../i18n/translations';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const t = getTranslation(language);

  return (
    <footer className="py-9 px-5 bg-[#F5F1E6] border-t border-[#1A3C34]/5 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-light tracking-wide">
        {/* Nom */}
        <div className="font-medium uppercase tracking-[0.12em] text-[#4A2F27] text-xs">
          SaxalWér
        </div>
        {/* Copyright */}
        <div className="text-[#7D5A44]/75 text-center text-xs">
          {t.footer.copyright}
        </div>
        {/* Localisation */}
        <div className="text-[#7D5A44]/75 text-xs flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" aria-hidden="true" />
          {t.footer.location}
        </div>
      </div>
    </footer>
  );
}

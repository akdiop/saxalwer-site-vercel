import { Language, getTranslation } from '../i18n/translations';

interface FooterProps { language: Language; }

export function Footer({ language }: FooterProps) {
  const t = getTranslation(language);

  return (
    <footer className="py-10 px-6 md:px-10 bg-[#F5F1E6] border-t border-[#1A3C34]/6 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-medium uppercase tracking-[0.14em] text-[#4A2F27] text-[11px]">
          SaxalWér
        </div>
        <div className="text-[#7D5A44]/65 text-center text-xs font-light">
          {t.footer.copyright}
        </div>
        <div className="text-[#7D5A44]/65 text-xs font-light flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" aria-hidden="true" />
          {t.footer.location}
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'motion/react';
import { Language, getTranslation } from '../i18n/translations';

interface FeedbackBannerProps {
  language: Language;
  googleFormUrl?: string;
}

export function FeedbackBanner({ language, googleFormUrl = "https://forms.google.com" }: FeedbackBannerProps) {
  const t = getTranslation(language);
  const f = t.feedback;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7 }}
      className="w-full bg-[#1A3C34]/4 border-t border-b border-[#1A3C34]/8 py-12 px-6"
    >
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
        {/* Icône */}
        <div className="text-[#A65D40]">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        </div>

        {/* Titre */}
        <h2
          className="text-2xl md:text-3xl text-[#1A3C34]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          {f.title}
        </h2>

        {/* Sous-titre */}
        <p className="text-sm md:text-base text-[#7D5A44] font-light leading-relaxed max-w-lg">
          {f.subtitle}
        </p>

        {/* Bouton */}
        <motion.a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#1A3C34] text-white text-sm font-medium rounded-full hover:bg-[#A65D40] transition-colors duration-300"
        >
          {f.buttonLabel}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </motion.a>

        {/* Note confidentialité */}
        <p className="text-xs text-[#7D5A44]/60 font-light flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-[#D4AF37] shrink-0" aria-hidden="true" />
          {f.note}
        </p>
      </div>
    </motion.section>
  );
}

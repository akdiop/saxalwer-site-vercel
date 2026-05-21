import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

/** Gabarit partagé par toutes les pages intérieures.
 *  Garde le fond beige, le padding nav, et l'animation d'entrée. */
export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <main className="flex-1 bg-[#F5F1E6] pt-20 pb-20 px-5 relative overflow-hidden">

      {/* Filigrane baobab discret */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.025]"
        aria-hidden="true"
      >
        <img
          src="/assets/logo.png"
          alt=""
          className="w-[100vw] h-[100vw] max-w-none object-contain"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* En-tête de page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-14 md:mb-16"
        >
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-[#1A3C34] leading-[1.2] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg text-[#7D5A44] font-light leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="w-12 h-px bg-[#A65D40] mt-6" />
        </motion.div>

        {/* Contenu de la page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}

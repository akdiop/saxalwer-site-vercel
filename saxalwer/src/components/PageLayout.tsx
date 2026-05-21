import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <main className="flex-1 bg-[#F5F1E6] relative overflow-hidden">

      {/* Filigrane très discret */}
      <div
        className="absolute inset-0 flex items-start justify-end pointer-events-none overflow-hidden"
        style={{ opacity: 0.02 }}
        aria-hidden="true"
      >
        <img
          src="/assets/logo.png"
          alt=""
          className="w-[40vw] max-w-[320px] object-contain mt-10 mr-4"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 md:pb-32">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 md:mb-20"
        >
          <h1
            className="text-[#1A3C34] leading-[1.2] mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-[#7D5A44]/85 font-light leading-relaxed mb-7"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.0625rem)', maxWidth: '58ch' }}
            >
              {subtitle}
            </p>
          )}
          <div className="w-10 h-px bg-[#A65D40]" />
        </motion.div>

        {/* Contenu */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Language, getTranslation } from '../i18n/translations';

interface NewsletterFormProps {
  language: Language;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterForm({ language }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const t = getTranslation(language);

  const resetAfter = (ms: number) => {
    setTimeout(() => {
      setStatus('idle');
      setErrorMessage('');
    }, ms);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage(t.hero.newsletterError);
      resetAfter(5000);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-3eafc923/newsletter/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        resetAfter(6000);
      } else {
        setStatus('error');
        setErrorMessage(data.error ?? t.hero.newsletterError);
        resetAfter(5000);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t.hero.newsletterError);
      resetAfter(5000);
    }
  };

  const isDisabled = status === 'loading' || status === 'success';

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.hero.newsletterPlaceholder}
            disabled={isDisabled}
            required
            className="flex-1 px-6 py-3.5 bg-white/60 border border-[#4A2F27]/30 rounded-full text-[#4A2F27] placeholder:text-[#B2967D] focus:outline-none focus:ring-2 focus:ring-[#A65D40]/30 focus:border-[#A65D40] transition-all duration-300 disabled:opacity-60 text-sm"
          />
          <motion.button
            type="submit"
            disabled={isDisabled}
            whileHover={isDisabled ? {} : { scale: 1.02 }}
            whileTap={isDisabled ? {} : { scale: 0.97 }}
            className="px-8 py-3.5 bg-[#7D5A44] text-white rounded-full font-medium text-sm hover:bg-[#A65D40] transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'loading' ? '…' : t.hero.newsletterButton}
          </motion.button>
        </div>

        {/* Message succès */}
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-[#1A3C34] text-sm font-light flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" aria-hidden="true" />
            {t.hero.newsletterSuccess}
          </motion.p>
        )}

        {/* Message erreur */}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-[#A65D40] text-sm font-light"
            role="alert"
          >
            {errorMessage}
          </motion.p>
        )}
      </form>
    </div>
  );
}

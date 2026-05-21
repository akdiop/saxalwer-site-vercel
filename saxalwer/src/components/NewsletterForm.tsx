import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Language, getTranslation } from '../i18n/translations';

interface NewsletterFormProps { language: Language; }
type Status = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterForm({ language }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const t = getTranslation(language);

  const reset = (ms: number) => setTimeout(() => { setStatus('idle'); setErrorMessage(''); }, ms);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage(t.hero.newsletterError);
      reset(5000);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-3eafc923/newsletter/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${publicAnonKey}` },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setEmail('');
        reset(6000);
      } else {
        setStatus('error');
        setErrorMessage(data.error ?? t.hero.newsletterError);
        reset(5000);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t.hero.newsletterError);
      reset(5000);
    }
  };

  const disabled = status === 'loading' || status === 'success';

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t.hero.newsletterPlaceholder}
            disabled={disabled}
            required
            className="flex-1 px-6 py-4 bg-white/70 border border-[#4A2F27]/25 rounded-full text-[#4A2F27] text-sm placeholder:text-[#B2967D] focus:outline-none focus:ring-2 focus:ring-[#A65D40]/25 focus:border-[#A65D40] transition-all duration-300 disabled:opacity-60"
          />
          <motion.button
            type="submit"
            disabled={disabled}
            whileHover={disabled ? {} : { scale: 1.02 }}
            whileTap={disabled ? {} : { scale: 0.97 }}
            className="px-8 py-4 bg-[#7D5A44] text-white rounded-full font-medium text-sm hover:bg-[#A65D40] transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'loading' ? '…' : t.hero.newsletterButton}
          </motion.button>
        </div>

        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-[#1A3C34] text-sm font-light flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
            {t.hero.newsletterSuccess}
          </motion.p>
        )}
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

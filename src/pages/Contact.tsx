import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { PageLayout } from '../components/PageLayout';
import { Language, getTranslation } from '../i18n/translations';

interface ContactProps { language: Language; }

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact({ language }: ContactProps) {
  const t = getTranslation(language);
  const c = t.contact;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Pour l'instant : envoi simulé. Connecte Supabase ou Resend ici plus tard.
    await new Promise(r => setTimeout(r, 1000));
    setStatus('success');
    setName(''); setEmail(''); setMessage('');
    setTimeout(() => setStatus('idle'), 6000);
  };

  const inputClass = "w-full px-5 py-3 bg-white/60 border border-[#4A2F27]/20 rounded-full text-[#4A2F27] placeholder:text-[#B2967D] focus:outline-none focus:ring-2 focus:ring-[#A65D40]/25 focus:border-[#A65D40] transition-all duration-300 text-sm font-light";

  return (
    <PageLayout title={c.title} subtitle={c.subtitle}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14">

        {/* Formulaire — 3/5 */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium tracking-[0.15em] uppercase text-[#1A3C34]/55 mb-2">
                {c.nameLabel}
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={c.namePlaceholder}
                required
                disabled={status === 'loading' || status === 'success'}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium tracking-[0.15em] uppercase text-[#1A3C34]/55 mb-2">
                {c.emailLabel}
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={c.emailPlaceholder}
                required
                disabled={status === 'loading' || status === 'success'}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium tracking-[0.15em] uppercase text-[#1A3C34]/55 mb-2">
                {c.messageLabel}
              </label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={c.messagePlaceholder}
                required
                rows={5}
                disabled={status === 'loading' || status === 'success'}
                className="w-full px-5 py-3.5 bg-white/60 border border-[#4A2F27]/20 rounded-2xl text-[#4A2F27] placeholder:text-[#B2967D] focus:outline-none focus:ring-2 focus:ring-[#A65D40]/25 focus:border-[#A65D40] transition-all duration-300 text-sm font-light resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              whileHover={status === 'idle' ? { scale: 1.02 } : {}}
              whileTap={status === 'idle' ? { scale: 0.97 } : {}}
              className="self-start px-8 py-3 bg-[#7D5A44] text-white text-sm font-medium rounded-full hover:bg-[#A65D40] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? '…' : c.sendButton}
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-[#1A3C34] font-light flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                {c.successMessage}
              </motion.p>
            )}
          </form>
        </div>

        {/* Infos contact — 2/5 */}
        <div className="md:col-span-2 flex flex-col gap-8 pt-1">
          <div>
            <h2
              className="text-lg text-[#1A3C34] mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              {c.partnerTitle}
            </h2>
            <div className="w-8 h-px bg-[#A65D40] mb-3" />
            <p className="text-sm text-[#7D5A44] font-light leading-relaxed">
              {c.partnerText}
            </p>
          </div>
          <div>
            <h2
              className="text-lg text-[#1A3C34] mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              {c.pressTitle}
            </h2>
            <div className="w-8 h-px bg-[#A65D40] mb-3" />
            <p className="text-sm text-[#7D5A44] font-light leading-relaxed">
              {c.pressText}
            </p>
          </div>
          <div className="pt-2">
            <a
              href="mailto:contact@saxalwer.com"
              className="text-[#7D5A44] hover:text-[#A65D40] transition-colors duration-300 font-light text-sm pb-px border-b border-[#A65D40]/30 hover:border-[#A65D40]"
            >
              contact@saxalwer.com
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

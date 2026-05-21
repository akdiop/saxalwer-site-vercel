import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── Palette officielle SaxalWér ───
      colors: {
        beige:      { DEFAULT: '#F5F1E6', dark: '#EDE8D5' },
        deepGreen:  { DEFAULT: '#1A3C34', light: '#1A3C3415', mid: '#1A3C3430' },
        terracotta: { DEFAULT: '#A65D40', light: '#A65D4015', mid: '#A65D4030' },
        copper:     { DEFAULT: '#B5622A' },
        cocoa:      { DEFAULT: '#4A2F27', light: '#7D5A44', muted: '#B2967D' },
        gold:       { DEFAULT: '#D4AF37', light: '#D4AF3720' },
      },

      // ─── Typographie ───
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        inter:     ['var(--font-inter)', 'Inter', 'sans-serif'],
      },

      // ─── Tailles fluides avec clamp() ───
      fontSize: {
        'hero':  ['clamp(1.9rem, 4.5vw, 3.25rem)', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
        'h1':    ['clamp(1.75rem, 4vw, 3rem)',      { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'h2':    ['clamp(1.4rem, 2.8vw, 2rem)',     { lineHeight: '1.25', letterSpacing: '-0.005em' }],
        'h3':    ['clamp(1.1rem, 2.2vw, 1.5rem)',   { lineHeight: '1.3' }],
        'h4':    ['clamp(1rem, 1.8vw, 1.2rem)',     { lineHeight: '1.4' }],
        'body':  ['clamp(0.9rem, 1.5vw, 1rem)',     { lineHeight: '1.75' }],
        'small': ['clamp(0.8rem, 1.2vw, 0.875rem)', { lineHeight: '1.6' }],
        'label': ['0.6875rem',                      { lineHeight: '1.5', letterSpacing: '0.16em' }],
      },

      // ─── Espacements ───
      spacing: {
        'section': 'clamp(4rem, 8vw, 7rem)',
        'block':   'clamp(2rem, 4vw, 3.5rem)',
        'prose':   'clamp(1rem, 2vw, 1.5rem)',
      },

      // ─── Largeurs max texte ───
      maxWidth: {
        'prose-sm': '52ch',
        'prose':    '65ch',
        'prose-lg': '72ch',
        'page':     '72rem',
      },

      // ─── Bordures ───
      borderRadius: {
        'pill': '9999px',
        'card': '1rem',
        'card-lg': '1.25rem',
      },

      // ─── Ombres très discrètes ───
      boxShadow: {
        'soft':   '0 1px 3px rgba(26,60,52,0.06), 0 1px 2px rgba(26,60,52,0.04)',
        'card':   '0 2px 8px rgba(26,60,52,0.06)',
        'nav':    '0 1px 0 rgba(26,60,52,0.08)',
        'button': '0 1px 2px rgba(0,0,0,0.05)',
      },

      // ─── Transitions ───
      transitionDuration: {
        DEFAULT: '200ms',
        'slow': '400ms',
      },

      // ─── Animations ───
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'breathe': {
          '0%, 100%': { opacity: '0.04', transform: 'scale(1)' },
          '50%':      { opacity: '0.055', transform: 'scale(1.02)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'breathe': 'breathe 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config

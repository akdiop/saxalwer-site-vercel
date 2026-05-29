// Layout racine — métadonnées SEO globales
// SaxalWér — santé reproductive Sénégal, application santé féminine

import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '@/styles/globals.css'
import '@/styles/saxalwer-polish.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = 'https://www.saxalwer.com'
const SITE_NAME = 'SaxalWér'
const SITE_DESCRIPTION = "SaxalWér est une application intelligente et culturellement sensible dédiée à l'information et à l'orientation en santé sexuelle et reproductive féminine au Sénégal."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SaxalWér — Santé féminine au Sénégal, en confiance',
    template: '%s — SaxalWér',
  },
  description: SITE_DESCRIPTION,

  keywords: [
    'santé reproductive Sénégal',
    'santé intime femmes',
    'santé sexuelle et reproductive',
    'application santé féminine Afrique',
    'santé digitale Sénégal',
    'santé des adolescentes',
    'santé féminine confidentielle',
    'information santé wolof',
    'SaxalWér',
    'santé reproductive Afrique de l\'Ouest',
    'plateforme santé femmes',
    'éducation santé Sénégal',
  ],

  authors: [{ name: 'SaxalWér', url: SITE_URL }],
  creator: 'SaxalWér',
  publisher: 'SaxalWér',
  applicationName: SITE_NAME,
  category: 'health',

  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'SaxalWér — Santé féminine au Sénégal, en confiance',
    description: SITE_DESCRIPTION,
    locale: 'fr_SN',
    alternateLocale: ['fr_FR', 'wo_SN'],
    images: [
      { url: '/og-image.png', width: 1080, height: 1080, alt: 'SaxalWér — Santé féminine' },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SaxalWér — Santé féminine au Sénégal',
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@saxalwer',
    site: '@saxalwer',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    languages: { 'fr-SN': SITE_URL, 'wo-SN': SITE_URL },
  },

  verification: {
    // À ajouter quand tu auras Google Search Console et Bing Webmaster
    // google: 'xxxxxxxxxxxxxxxxxxxx',
  },
}

/* ── JSON-LD structuré ── */
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  description: SITE_DESCRIPTION,
  email: 'contact@saxalwer.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dakar',
    addressCountry: 'SN',
  },
  areaServed: [
    { '@type': 'Country', name: 'Sénégal' },
    { '@type': 'Place', name: "Afrique de l'Ouest" },
  ],
  sameAs: [],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: ['SaxalWer', 'SAXALWER', 'saxalwer.com'],
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: 'fr-SN',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo.png`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#F5F1E6" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="SN" />
        <meta name="geo.placename" content="Dakar, Sénégal" />
        <meta name="geo.position" content="14.6928;-17.4467" />
        <meta name="ICBM" content="14.6928, -17.4467" />

        {/* JSON-LD pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#F5F1E6] text-[#7D5A44]">
        {/* Skip to content — accessibilité clavier */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#1A3C34] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
        >
          Aller au contenu principal
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

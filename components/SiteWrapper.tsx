'use client'

// Layout global — enveloppe toutes les pages
// Le site reste temporairement en français jusqu'à relecture linguistique du wolof.

import { ReactNode, createContext, useContext, useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Language } from '@/lib/translations'

interface Props { children: ReactNode }

const ACTIVE_LANGUAGE: Language = 'fr'

export default function SiteWrapper({ children }: Props) {
  const language = ACTIVE_LANGUAGE

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'fr'
    }
  }, [])

  return (
    <>
      <Nav language={language} />
      <div className="flex-1 flex flex-col">
        <LanguageProvider language={language}>
          {children}
        </LanguageProvider>
      </div>
      <Footer language={language} />
    </>
  )
}

// Contexte langue — permet aux pages enfants de lire la langue active
const LanguageContext = createContext<Language>('fr')

export function LanguageProvider({ language, children }: { language: Language; children: ReactNode }) {
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): Language {
  return useContext(LanguageContext)
}

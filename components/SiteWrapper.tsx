'use client'

// Layout global — enveloppe toutes les pages
// Gère la langue et fournit Nav + Footer à tout le site

import { useState, ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Language } from '@/lib/translations'

interface Props { children: ReactNode }

export default function SiteWrapper({ children }: Props) {
  const [language, setLanguage] = useState<Language>('fr')

  return (
    <>
      <Nav language={language} onLanguageChange={setLanguage} />
      <div className="flex-1 flex flex-col">
        {/* Passe la langue aux enfants via un contexte simple */}
        <LanguageProvider language={language}>
          {children}
        </LanguageProvider>
      </div>
      <Footer language={language} />
    </>
  )
}

// Contexte langue — permet aux pages enfants de lire la langue active
import { createContext, useContext } from 'react'

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

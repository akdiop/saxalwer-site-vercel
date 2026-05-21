import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { SEOProvider } from './components/SEO';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { FeedbackBanner } from './components/FeedbackBanner';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Research } from './pages/Research';
import { UserTests } from './pages/UserTests';
import { Contact } from './pages/Contact';
import { Language } from './i18n/translations';

// ⚠️ Remplace cette URL par celle de ton Google Form
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/TON_FORM_ID/viewform";

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');

  return (
    <SEOProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-[#F5F1E6] text-[#7D5A44]">
          <Nav language={language} onLanguageChange={setLanguage} />
          <Routes>
            <Route path="/"                index element={<Home language={language} />} />
            <Route path="/a-propos"        element={<About language={language} />} />
            <Route path="/fonctionnalites" element={<Features language={language} />} />
            <Route path="/recherche"       element={<Research language={language} />} />
            <Route path="/tests"           element={<UserTests language={language} />} />
            <Route path="/contact"         element={<Contact language={language} />} />
          </Routes>
          <FeedbackBanner language={language} googleFormUrl={GOOGLE_FORM_URL} />
          <Footer language={language} />
        </div>
      </BrowserRouter>
    </SEOProvider>
  );
}

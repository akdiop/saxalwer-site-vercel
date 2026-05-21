import { Hero } from '../components/Hero';
import { Language } from '../i18n/translations';

interface HomeProps { language: Language; }

/** La page d'accueil réutilise simplement le composant Hero existant. */
export function Home({ language }: HomeProps) {
  return <Hero language={language} />;
}

export default Home;

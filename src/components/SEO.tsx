import { Helmet, HelmetProvider } from 'react-helmet-async';

const siteTitle = "SaxalWér — Information fiable et adaptable en santé féminine.";
const metaDescription = "Plateforme numérique culturellement sensible qui améliore l'accès à l'information en santé sexuelle et reproductive pour les femmes et les filles au Sénégal.";
const siteUrl = "https://www.saxalwer.com";
const ogImage = `${siteUrl}/og-image.png`;

export function SEO() {
  return (
    <Helmet>
      <html lang="fr" />
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content="santé sexuelle, santé reproductive, femmes Sénégal, éducation santé, santé numérique, SaxalWér" />
      <meta name="author" content="SaxalWér" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_SN" />
      <meta property="og:site_name" content="SaxalWér" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@saxalwer" />

      {/* App / thème */}
      <meta name="theme-color" content="#F5F1E6" />
      <meta name="apple-mobile-web-app-title" content="SaxalWér" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Géolocalisation Sénégal */}
      <meta name="geo.region" content="SN" />
      <meta name="geo.placename" content="Sénégal" />

      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
}

export function SEOProvider({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <SEO />
      {children}
    </HelmetProvider>
  );
}

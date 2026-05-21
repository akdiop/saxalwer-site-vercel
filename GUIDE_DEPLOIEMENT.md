# Guide de déploiement SaxalWér — OVH

## Structure finale du projet

```
saxalwer/
├── public/
│   ├── assets/
│   │   └── logo.png          ← IMPORTANT : copie ton image-0.png ici
│   ├── og-image.png          ← Image de partage (1200×630px) — à créer
│   └── favicon.svg           ← Optionnel
├── src/
│   ├── components/
│   │   ├── App.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Logo.tsx
│   │   ├── NewsletterForm.tsx
│   │   ├── SEO.tsx
│   │   └── WhySaxalWer.tsx
│   ├── i18n/
│   │   └── translations.ts
│   ├── utils/supabase/
│   │   └── info.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.local                ← NE PAS mettre en ligne
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Étape 1 — Préparer ton logo

Dans ton projet actuel, tu as `src/imports/image-0.png`.

**Fais ceci :**
1. Crée le dossier `public/assets/` dans ton projet
2. Copie `image-0.png` dans ce dossier
3. Renomme-le `logo.png`

---

## Étape 2 — Configurer Supabase

1. Ouvre ton tableau de bord Supabase → Settings → API
2. Copie ton **Project URL** (ex: `abcdefgh`)
   et ta **anon public key**
3. Ouvre le fichier `.env.local` et remplace les valeurs :

```
VITE_SUPABASE_PROJECT_ID=abcdefgh
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
```

⚠️ Ce fichier ne sera jamais mis en ligne (il est dans .gitignore).

---

## Étape 3 — Installer les dépendances

Ouvre un terminal dans le dossier du projet, puis tape :

```bash
npm install
```

Attends que tout s'installe (1-2 minutes).

---

## Étape 4 — Tester en local

```bash
npm run dev
```

Ouvre http://localhost:5173 dans ton navigateur.
Vérifie que tout s'affiche correctement.

---

## Étape 5 — Construire le site

```bash
npm run build
```

Cette commande crée un dossier `/dist` avec tous les fichiers prêts pour la mise en ligne.

---

## Étape 6 — Mettre en ligne sur OVH

### Option A — FTP (FileZilla ou équivalent)

1. Connecte-toi à ton hébergement OVH via FTP
   (FileZilla → Hôte: ftp.ton-domaine.com, Utilisateur + Mot de passe depuis l'espace client OVH)
2. Va dans le dossier `www/` ou `public_html/` sur le serveur
3. **Supprime** les fichiers existants si nécessaire
4. **Copie tout le contenu** du dossier `/dist` (pas le dossier lui-même, son contenu)
5. Attends la fin du transfert

### Option B — Gestionnaire de fichiers OVH

1. Espace client OVH → Hébergements → Gestionnaire de fichiers
2. Va dans `www/`
3. Supprime l'ancien contenu
4. Glisse-dépose le contenu du dossier `/dist`

---

## Après chaque modification du code

1. `npm run build` (re-génère le `/dist`)
2. Ré-upload le contenu du `/dist` sur OVH

---

## Créer l'image og-image.png

Cette image apparaît quand tu partages le lien sur WhatsApp, LinkedIn, etc.
Format : **1200 × 630 pixels**

Crée-la dans Canva avec :
- Fond : #F5F1E6 (beige)
- Logo SaxalWér centré
- Slogan en Cormorant Garamond, couleur #1A3C34
- Exporte en PNG et place dans `public/og-image.png`

---

## Problèmes fréquents

**Page blanche après upload :** Vérifie que tu as bien uploadé le CONTENU du /dist, pas le dossier /dist lui-même.

**Le formulaire newsletter ne fonctionne pas :** Vérifie que les variables VITE_SUPABASE_* sont correctes dans .env.local avant le build.

**Les images n'apparaissent pas :** Vérifie que `public/assets/logo.png` existe bien.

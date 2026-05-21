# Guide complet — Mettre SaxalWér en ligne sur OVH
## Pour débutante, étape par étape

---

## CE QUE TU AS REÇU

Le fichier ZIP contient tout le code du site, prêt à être utilisé.
Tu n'as pas besoin de comprendre le code — juste de suivre les étapes.

---

## OUTILS NÉCESSAIRES (à installer avant de commencer)

### 1. Node.js
C'est le programme qui permet de construire le site.
→ Télécharge-le sur : https://nodejs.org
→ Clique sur le bouton vert "LTS" (la version stable)
→ Installe-le normalement (suivre les étapes d'installation)
→ Pour vérifier que c'est installé : ouvre un terminal et tape :
   node --version
   Tu dois voir un numéro comme "v20.x.x"

### 2. Un éditeur de texte (optionnel mais utile)
→ Télécharge Visual Studio Code : https://code.visualstudio.com
→ C'est gratuit et simple

### 3. FileZilla (pour l'upload sur OVH)
→ Télécharge-le sur : https://filezilla-project.org
→ Clique sur "Download FileZilla Client"

---

## ÉTAPE 1 — EXTRAIRE LE ZIP

1. Télécharge le fichier `saxalwer-site.zip`
2. Fais un clic droit dessus → "Extraire tout" (Windows) ou double-clic (Mac)
3. Tu obtiens un dossier appelé `saxalwer`
4. Place ce dossier où tu veux sur ton ordinateur
   (ex : Bureau, Documents, etc.)

---

## ÉTAPE 2 — COPIER TON LOGO

Ton logo s'appelle `image-0.png` dans ton projet Figma.

1. Trouve ce fichier sur ton ordinateur
2. Dans le dossier `saxalwer`, ouvre le dossier `public`
3. Crée un nouveau dossier appelé `assets` à l'intérieur
4. Copie ton logo dedans
5. Renomme-le `logo.png`

Le résultat doit ressembler à :
```
saxalwer/
└── public/
    └── assets/
        └── logo.png   ✓
```

---

## ÉTAPE 3 — CONFIGURER SUPABASE

Supabase est le service qui reçoit les inscriptions à la newsletter.

1. Va sur https://supabase.com et connecte-toi
2. Ouvre ton projet
3. Dans le menu gauche, clique sur l'icône ⚙️ (Settings)
4. Clique sur "API"
5. Tu vois deux informations importantes :
   - "Project URL" → copie la partie entre https:// et .supabase.co
     Exemple : si c'est https://abcdefgh.supabase.co → copie abcdefgh
   - "anon public" → c'est la longue clé qui commence par eyJ...

6. Dans le dossier `saxalwer`, trouve le fichier `.env.local`
   ⚠️ Sur Mac, les fichiers qui commencent par un point sont cachés.
      Pour les voir : Cmd + Shift + . (point)
   ⚠️ Sur Windows, active "Afficher les fichiers cachés" dans l'explorateur

7. Ouvre `.env.local` avec un éditeur de texte (Bloc-notes ou VS Code)
8. Remplace les valeurs :

   AVANT :
   NEXT_PUBLIC_SUPABASE_PROJECT_ID=ton-project-id-ici
   NEXT_PUBLIC_SUPABASE_ANON_KEY=ta-anon-key-ici

   APRÈS (exemple) :
   NEXT_PUBLIC_SUPABASE_PROJECT_ID=abcdefgh
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

9. Sauvegarde le fichier (Ctrl+S ou Cmd+S)

---

## ÉTAPE 4 — OUVRIR UN TERMINAL

### Sur Windows :
1. Ouvre le dossier `saxalwer`
2. Dans la barre d'adresse en haut, clique dessus
3. Tape `cmd` et appuie sur Entrée
   → Une fenêtre noire s'ouvre, tu es déjà dans le bon dossier

### Sur Mac :
1. Ouvre le dossier `saxalwer`
2. Fais un clic droit sur le dossier (pas dedans, sur le dossier lui-même)
3. Clique sur "Nouveau terminal au dossier"
   → Ou : ouvre Terminal, tape `cd ` (avec un espace), puis glisse le dossier dedans

---

## ÉTAPE 5 — INSTALLER LES DÉPENDANCES

Dans le terminal, tape exactement :

```
npm install
```

Appuie sur Entrée.
Attends 1 à 3 minutes. Tu verras du texte défiler — c'est normal.
Quand c'est terminé, tu revois le curseur clignoter.

---

## ÉTAPE 6 — TESTER LE SITE EN LOCAL

Dans le terminal, tape :

```
npm run dev
```

Appuie sur Entrée.
Tu verras apparaître quelque chose comme :
  Local:   http://localhost:5173/

Ouvre cette adresse dans ton navigateur.
→ Tu dois voir le site SaxalWér.

✓ Vérifie que le logo apparaît
✓ Vérifie que le texte est en français
✓ Vérifie que le bouton FR/WO fonctionne
✓ Vérifie que le formulaire newsletter est visible

Pour arrêter le serveur : appuie sur Ctrl+C dans le terminal.

---

## ÉTAPE 7 — CONSTRUIRE LE SITE POUR LA MISE EN LIGNE

Dans le terminal, tape :

```
npm run build
```

Appuie sur Entrée.
Attends 30 secondes environ.
Quand c'est terminé, un nouveau dossier `/dist` est apparu dans `saxalwer`.
Ce dossier contient le site prêt à mettre en ligne.

---

## ÉTAPE 8 — METTRE EN LIGNE SUR OVH

### Trouver tes identifiants FTP OVH :
1. Va sur https://www.ovh.com/manager/
2. Connecte-toi à ton espace client
3. Clique sur ton hébergement
4. Clique sur "FTP - SSH"
5. Note :
   - Serveur FTP (ex: ftp.cluster0XX.hosting.ovh.net)
   - Identifiant FTP
   - Mot de passe (si tu l'as oublié, clique sur "Modifier le mot de passe")

### Configurer FileZilla :
1. Ouvre FileZilla
2. En haut, remplis :
   - Hôte : ftp.cluster0XX.hosting.ovh.net (ton serveur FTP)
   - Identifiant : ton identifiant FTP
   - Mot de passe : ton mot de passe FTP
   - Port : 21
3. Clique sur "Connexion rapide"
4. Si une fenêtre s'ouvre pour confirmer → clique OK

### Uploader les fichiers :
1. Dans FileZilla, à gauche tu vois ton ordinateur
   → Navigue jusqu'au dossier `saxalwer/dist`
   → Sélectionne TOUT le contenu du dossier dist
     (Ctrl+A ou Cmd+A pour tout sélectionner)

2. À droite tu vois le serveur OVH
   → Cherche le dossier `www` ou `public_html`
   → Double-clique dessus pour l'ouvrir

3. Fais un clic droit sur les fichiers sélectionnés à gauche
   → "Envoyer"
   → Attends que tous les fichiers soient transférés

4. Ouvre ton domaine dans le navigateur → le site est en ligne ! 🎉

---

## RÉCAPITULATIF VISUEL

```
ORDINATEUR                          SERVEUR OVH
-----------                         -----------
saxalwer/
├── src/           (code source)
├── public/
│   └── assets/
│       └── logo.png
├── .env.local     (clés Supabase)
│
│   npm run build
│        ↓
├── dist/          ─────────────→   www/
│   ├── index.html                  ├── index.html
│   ├── assets/                     ├── assets/
│   └── ...                         └── ...
```

---

## EN CAS DE PROBLÈME

**"npm : commande introuvable"**
→ Node.js n'est pas installé. Reprends l'Étape Outils.

**"Page blanche sur le site"**
→ Tu as uploadé le dossier `dist` lui-même au lieu de son contenu.
→ Entre dans le dossier dist, sélectionne tout ce qu'il y a dedans,
  et upload ça dans `www/`.

**"Le logo n'apparaît pas"**
→ Vérifie que le fichier est bien dans `public/assets/logo.png`
→ Le fichier doit s'appeler exactement `logo.png` (minuscules)

**"Le formulaire newsletter ne fonctionne pas"**
→ Vérifie les valeurs dans `.env.local`
→ Refais `npm run build` après avoir modifié `.env.local`

**"Je ne vois pas le fichier .env.local"**
→ Windows : Dans l'explorateur → Affichage → cocher "Éléments masqués"
→ Mac : Dans le dossier, appuie sur Cmd + Shift + . (point)

---

## POUR CHAQUE MODIFICATION FUTURE

1. Modifie le code
2. `npm run build`
3. Ré-upload le contenu de `/dist` sur OVH (écrase les anciens fichiers)


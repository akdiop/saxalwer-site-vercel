# Connecter saxalwer.com (OVH) à Vercel
## Guide complet pour débutante

---

## VUE D'ENSEMBLE

```
TON DOMAINE          TON SITE
saxalwer.com   →→→   Vercel (hébergement gratuit)
   (OVH)             ↑
                     GitHub (stockage du code)
```

Le parcours complet :
1. Mettre le code sur GitHub
2. Connecter GitHub à Vercel
3. Dire à OVH de pointer vers Vercel
4. Vérifier que tout fonctionne

Temps estimé : 30 à 45 minutes

---

## AVANT DE COMMENCER

Tu as besoin de :
- Un compte GitHub (gratuit) → https://github.com
- Un compte Vercel (gratuit) → https://vercel.com
- Accès à ton espace client OVH → https://www.ovh.com/manager

---

## ÉTAPE 1 — PRÉPARER TON CODE

### 1.1 — Créer le fichier vercel.json

Dans le dossier racine de ton projet `saxalwer/`,
crée un nouveau fichier appelé exactement `vercel.json`
et colle ce contenu dedans :

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Ce fichier dit à Vercel comment gérer les URLs de ton site React.
Sans lui, les pages /a-propos, /contact etc. renverront une erreur 404.

### 1.2 — Vérifier le fichier .gitignore

Ouvre le fichier `.gitignore` à la racine du projet.
Vérifie qu'il contient au minimum ces lignes :

```
node_modules/
dist/
.env.local
.env
```

Si ces lignes sont déjà là, ne change rien.
Si elles manquent, ajoute-les.

### 1.3 — Créer le fichier .env.production

Dans le dossier racine, crée un fichier `.env.production`
et colle ce contenu (avec tes vraies valeurs Supabase) :

```
NEXT_PUBLIC_SUPABASE_PROJECT_ID=ton-project-id-ici
NEXT_PUBLIC_SUPABASE_ANON_KEY=ta-anon-key-ici
```

⚠️ Ce fichier ne sera PAS mis sur GitHub (il est dans .gitignore).
Tu entreras ces valeurs directement dans Vercel plus tard.

---

## ÉTAPE 2 — METTRE LE CODE SUR GITHUB

### 2.1 — Créer un compte GitHub

Va sur https://github.com
Clique sur "Sign up"
Choisis un identifiant, un email, un mot de passe
Valide ton email

### 2.2 — Créer un nouveau dépôt (repository)

1. Une fois connecté(e), clique sur le bouton vert "New"
   (ou va sur https://github.com/new)
2. Remplis :
   - Repository name : saxalwer
   - Description : SaxalWér — Santé féminine au Sénégal
   - Visibilité : choisis "Private" (ton code reste privé)
3. NE coche PAS "Add a README file"
4. Clique sur "Create repository"
5. GitHub affiche une page avec des instructions.
   Garde cette page ouverte.

### 2.3 — Installer Git sur ton ordinateur

Git est l'outil qui envoie ton code sur GitHub.

Windows :
→ Télécharge Git sur https://git-scm.com/download/win
→ Installe avec tous les paramètres par défaut

Mac :
→ Ouvre le Terminal
→ Tape : git --version
→ Si Git n'est pas installé, une fenêtre s'ouvre pour l'installer automatiquement

Pour vérifier que Git est installé :
→ Ouvre un terminal
→ Tape : git --version
→ Tu dois voir un numéro comme "git version 2.x.x"

### 2.4 — Envoyer ton code sur GitHub

Ouvre un terminal dans ton dossier saxalwer/
(comme expliqué dans le guide précédent)

Tape ces commandes une par une.
Appuie sur Entrée après chaque ligne.

```
git init
```
(initialise Git dans ton dossier)

```
git add .
```
(prépare tous les fichiers à envoyer)

```
git commit -m "Premier envoi — SaxalWér"
```
(crée une sauvegarde nommée)

```
git branch -M main
```
(nomme ta branche principale "main")

Maintenant retourne sur la page GitHub ouverte à l'étape 2.2.
Tu vois une ligne qui ressemble à :
  git remote add origin https://github.com/TON-NOM/saxalwer.git

Copie cette ligne exactement telle qu'elle apparaît sur GitHub
et colle-la dans ton terminal, puis appuie sur Entrée.

Ensuite tape :
```
git push -u origin main
```

GitHub va te demander ton nom d'utilisateur et ton mot de passe.
⚠️ Pour le mot de passe, GitHub n'accepte plus le mot de passe classique.
   Tu dois utiliser un "Personal Access Token" :
   1. Va sur https://github.com/settings/tokens
   2. Clique "Generate new token" → "Generate new token (classic)"
   3. Note : "Vercel deploy"
   4. Expiration : 90 days
   5. Coche la case "repo"
   6. Clique "Generate token"
   7. Copie le token affiché (il commence par ghp_...)
      ⚠️ Il ne sera affiché qu'une seule fois — copie-le maintenant
   8. Utilise ce token comme mot de passe dans le terminal

Quand le push est terminé, recharge la page GitHub :
tu dois voir tous tes fichiers en ligne. ✓

---

## ÉTAPE 3 — DÉPLOYER SUR VERCEL

### 3.1 — Créer un compte Vercel

Va sur https://vercel.com
Clique "Sign Up"
Choisis "Continue with GitHub" → c'est plus simple
Autorise Vercel à accéder à GitHub

### 3.2 — Importer ton projet

1. Sur le tableau de bord Vercel, clique "Add New..." → "Project"
2. Tu vois tes dépôts GitHub. Cherche "saxalwer"
3. Clique "Import" en face de saxalwer

### 3.3 — Configurer le projet

Vercel détecte automatiquement que c'est un projet Vite/React.
Vérifie ces paramètres :

- Framework Preset : Vite ✓
- Root Directory : ./ (laisser par défaut)
- Build Command : npm run build ✓
- Output Directory : dist ✓

### 3.4 — Ajouter les variables d'environnement Supabase

Avant de cliquer "Deploy", tu dois entrer tes clés Supabase.

Cherche la section "Environment Variables" sur la même page.

Ajoute ces deux variables :

Variable 1 :
  Name  : VITE_SUPABASE_PROJECT_ID
  Value : (ton project ID Supabase)

Variable 2 :
  Name  : VITE_SUPABASE_ANON_KEY
  Value : (ta clé anon Supabase)

Pour trouver ces valeurs :
→ Va sur https://supabase.com → ton projet → Settings → API

### 3.5 — Lancer le déploiement

Clique "Deploy"
Attends 1 à 2 minutes
Tu dois voir "Congratulations!" et l'URL de ton site
  Ex : saxalwer-abc123.vercel.app

Clique sur cette URL pour vérifier que ton site s'affiche. ✓

---

## ÉTAPE 4 — CONNECTER TON DOMAINE OVH À VERCEL

### 4.1 — Ajouter le domaine dans Vercel

1. Dans Vercel, ouvre ton projet saxalwer
2. Clique sur l'onglet "Settings"
3. Dans le menu gauche, clique "Domains"
4. Dans le champ, tape : saxalwer.com
   puis clique "Add"
5. Ajoute aussi : www.saxalwer.com
   puis clique "Add"

Vercel va te donner des informations DNS.
Laisse cette page ouverte — tu en as besoin à l'étape suivante.

Tu vas voir quelque chose comme :

Pour saxalwer.com (sans www) :
  Type : A
  Valeur : 76.76.21.21

Pour www.saxalwer.com :
  Type : CNAME
  Valeur : cname.vercel-dns.com

⚠️ Les valeurs exactes peuvent légèrement différer.
   Utilise TOUJOURS celles que Vercel t'affiche, pas celles de cet exemple.

### 4.2 — Modifier les DNS dans OVH

1. Va sur https://www.ovh.com/manager/
2. Connecte-toi
3. Dans le menu gauche, clique "Web Cloud"
4. Clique "Noms de domaine"
5. Clique sur "saxalwer.com"
6. Clique sur l'onglet "Zone DNS"

Tu vas voir une liste d'enregistrements DNS.

#### Modifier l'enregistrement A (pour saxalwer.com sans www)

1. Cherche la ligne avec :
   - Type : A
   - Sous-domaine : (vide ou @)
2. Clique sur les 3 petits points à droite → "Modifier"
3. Remplace la valeur par : 76.76.21.21
   (ou la valeur A que Vercel t'a donnée)
4. Clique "Confirmer"

#### Modifier l'enregistrement CNAME (pour www)

1. Cherche la ligne avec :
   - Type : CNAME
   - Sous-domaine : www
2. Si elle existe → clique les 3 points → "Modifier"
   Si elle n'existe pas → clique "Ajouter une entrée" → choisis CNAME
3. Remplis :
   - Sous-domaine : www
   - Valeur cible : cname.vercel-dns.com.
     (avec un point à la fin — c'est normal)
4. Clique "Confirmer"

#### NE TOUCHE PAS aux autres enregistrements

En particulier, ne modifie pas :
- Les enregistrements MX (ils gèrent tes emails)
- Les enregistrements TXT (ils vérifient ton domaine)
- Les enregistrements NS

Si tu touches à ces enregistrements, tes emails pourraient ne plus fonctionner.

### 4.3 — Attendre la propagation DNS

Les changements DNS prennent du temps à se propager sur Internet.

Durée normale : 30 minutes à 24 heures
Le plus souvent : environ 1 heure

Pour vérifier la propagation :
→ Va sur https://dnschecker.org
→ Entre saxalwer.com
→ Choisis le type "A"
→ Tu dois voir la valeur Vercel (76.76.21.21) apparaître partout

---

## ÉTAPE 5 — VÉRIFIER QUE TOUT FONCTIONNE

Une fois la propagation terminée :

1. Ouvre https://www.saxalwer.com dans un navigateur
   → Tu dois voir ton site SaxalWér ✓

2. Vérifie que le cadenas HTTPS est présent dans la barre d'adresse
   → Vercel gère le certificat SSL automatiquement ✓

3. Vérifie que la navigation fonctionne :
   → Clique sur "À propos", "Contact", etc.
   → Les URLs /a-propos, /contact doivent s'ouvrir ✓

4. Envoie un email à ton adresse @saxalwer.com pour vérifier
   que les emails fonctionnent toujours ✓

---

## POUR CHAQUE MODIFICATION FUTURE DU SITE

C'est là que Vercel devient très pratique.
Tu n'as plus besoin de FTP ni de builder manuellement.

1. Modifie le code sur ton ordinateur
2. Ouvre le terminal dans le dossier saxalwer/
3. Tape ces 3 commandes :

```
git add .
git commit -m "Description de ce que tu as changé"
git push
```

Vercel détecte automatiquement le push
et redéploie ton site en 1 à 2 minutes. ✓

---

## RÉSUMÉ VISUEL

```
TON ORDINATEUR
     │
     │  git push
     ▼
  GITHUB
(code stocké)
     │
     │  déploiement automatique
     ▼
  VERCEL
(site hébergé)
     │
     │  DNS
     ▼
   OVH
(saxalwer.com pointe ici)
     │
     ▼
www.saxalwer.com ← ce que voit l'utilisatrice
```

---

## EN CAS DE PROBLÈME

**"Page 404 sur les sous-pages"**
→ Vérifie que le fichier vercel.json est bien à la racine du projet
→ Refais un git push si tu viens de le créer

**"Le site ne s'affiche pas encore"**
→ Attends encore — la propagation DNS peut prendre jusqu'à 24h
→ Vérifie sur https://dnschecker.org

**"Mes emails ne fonctionnent plus"**
→ Tu as probablement modifié les enregistrements MX par erreur
→ Contacte le support OVH pour restaurer les MX d'origine

**"Erreur de build sur Vercel"**
→ Dans Vercel, clique sur ton déploiement → "View Logs"
→ Copie le message d'erreur et partage-le pour obtenir de l'aide

**"Le formulaire newsletter ne fonctionne pas"**
→ Vérifie que les variables VITE_SUPABASE_* sont bien dans Vercel
→ Vercel → Settings → Environment Variables


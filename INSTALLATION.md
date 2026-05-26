# PPL Coach — Guide d'installation PWA

## Fichiers fournis
- `workout_app.html` — l'application complète
- `manifest.json` — configuration PWA
- `sw.js` — service worker (mode hors ligne)
- `generate-icons.html` — générateur d'icônes (à utiliser une seule fois)

---

## Étape 1 — Créer les icônes

1. Ouvre `generate-icons.html` dans ton navigateur
2. Deux fichiers se téléchargent automatiquement : `icon-192.png` et `icon-512.png`
3. Place ces deux fichiers dans le même dossier que les autres fichiers

---

## Étape 2 — Héberger sur GitHub Pages (gratuit)

1. Crée un compte sur **github.com** si tu n'en as pas
2. Clique sur **"New repository"** (bouton vert en haut à droite)
3. Nomme le dépôt : `ppl-coach` (ou ce que tu veux)
4. Coche **"Public"** (nécessaire pour GitHub Pages gratuit)
5. Clique **"Create repository"**
6. Sur la page du dépôt, clique **"uploading an existing file"**
7. Glisse-dépose les 5 fichiers :
   - `workout_app.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
8. Clique **"Commit changes"**

### Activer GitHub Pages
1. Va dans **Settings** (onglet du dépôt)
2. Menu gauche : **Pages**
3. Source : **Deploy from a branch**
4. Branch : **main** → dossier **/ (root)**
5. Clique **Save**

Après 1-2 minutes, ton app est disponible à l'adresse :
**`https://TON-NOM.github.io/ppl-coach/workout_app.html`**

---

## Étape 3 — Installer sur iPhone

1. Ouvre Safari sur ton iPhone
2. Va sur l'URL de ton app GitHub Pages
3. Appuie sur l'icône **Partager** (carré avec flèche vers le haut)
4. Fais défiler et appuie sur **"Sur l'écran d'accueil"**
5. Nomme l'app **PPL Coach** → **Ajouter**

L'app apparaît sur ton écran d'accueil comme une vraie application, en plein écran, sans barre Safari.

---

## Étape 4 — Installer sur Android

1. Ouvre Chrome sur ton Android
2. Va sur l'URL de ton app GitHub Pages
3. Chrome affiche automatiquement une bannière **"Ajouter à l'écran d'accueil"**
4. Ou : menu (3 points) → **"Ajouter à l'écran d'accueil"**
5. Confirme → l'app s'installe

---

## Fonctionnement hors ligne

Une fois installée, l'app fonctionne **sans connexion internet** grâce au service worker. Toutes tes données (historique, charges, reps, notes) restent dans le localStorage de ton téléphone.

---

## Mise à jour de l'app

Si tu modifies `workout_app.html` et que tu l'upload à nouveau sur GitHub :
1. Modifie la version dans `sw.js` : `const CACHE = 'ppl-coach-v2';` (changer v1 en v2)
2. Upload les deux fichiers modifiés sur GitHub
3. L'app se met à jour automatiquement au prochain lancement avec connexion

---

## Compatibilité

| Plateforme | Support |
|---|---|
| iPhone (Safari) | ✓ iOS 11.3+ |
| Android (Chrome) | ✓ Android 5+ |
| PC Chrome/Edge | ✓ Installable comme app |
| PC Firefox/Safari | ✓ Fonctionne dans le navigateur |

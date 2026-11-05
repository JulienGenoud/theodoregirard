# Passation du projet www.theodoregirard.fr

Site documentaire consacré à **Théodore Girard (1851-1918)** : avoué et maire de Melle, sénateur des Deux-Sèvres, garde des Sceaux (1910-1911), et à son **recueil de 146 pages** de coupures de presse (1872-1876).

---

## 1. Accès & Commandes d'exécution

- **Dépôt local** : `/Users/julien/theo/theodoregirard` (branche `main`)
- **Dépôt distant** : `git@github.com:JulienGenoud/theodoregirard.git`
- **Pile technique** : Vite 6, React 19, Tailwind CSS 3, SSR/SSG maison (`scripts/prerender.mjs`), 147 pages HTML statiques (`/` et `/recueil/page-1/` à `/recueil/page-146/`).
- **Commandes de contrôle** :
  ```bash
  npm run typecheck
  npm run build
  npm run preview # port 4173
  ```
- **Déploiement GitHub Pages** : tout push sur `main` lance `.github/workflows/deploy.yml`. Ne **jamais** lancer `npm run deploy` manuellement pendant ce workflow.
- **Push Git SSH obligatoire** :
  ```bash
  GIT_SSH_COMMAND="ssh -o BatchMode=yes" git push git@github.com:JulienGenoud/theodoregirard.git main
  ```

---

## 2. Règle absolue : Zéro invention

- **Chaque fait et phrase doit être sourcé** (Sénat Jolly, tables nominatives, data.bnf.fr, presse d'époque, transcription radio de Dominique Breillat, scans du recueil).
- **Citations entre « »** : doivent être reproduites **mot pour mot** depuis les originaux (scans dans `public/livre/pdf/` vérifiés avec `pdftoppm`).
- **Termes strictement interdits** (inventés par une IA en février 2026) :
  - ❌ *« Livre de combat »*
  - ❌ *« La Forge d'un Républicain »*
  - ❌ *« guerre des journaux »*
  - ❌ *« une conscience de la République »*
  - ✅ Employer uniquement **« le recueil »**. Le document d'origine n'a pas de titre ; sa table manuscrite est sobrement intitulée *« Table »*.

---

## 3. Architecture des fichiers

- `src/data/content.ts` : ensemble des textes éditoriaux et biographiques (sourcés en commentaire).
- `src/data/book.ts` :
  - `TOC_SECTIONS` : table des matières des articles (pages 1 à 124 calquées sur la table manuscrite de Girard, scans p. 133-139).
  - `PAGE_NOTES` : notes de lecture associées à chaque page (notamment pour toutes les suites d'articles).
- `src/seo.ts` : métadonnées, Open Graph et JSON-LD Schema.org (`Person`, `Book`, `AudioObject`).
- `src/components/` : composants React autonomes (`BookReader.tsx`, `PageView.tsx`, `BookIndex.tsx`, `Biography.tsx`, etc.).
- `content/ocr/pN.txt` : OCR brut des pages imprimées, injecté dans les pages dédiées `/recueil/page-N/`.
- `content/radio/transcription-relue.txt` : transcription de l'émission *« Rue des hommes politiques »* (Radio Accords, Dominique Breillat).

---

## 4. Ce qui a été fait (commits récents)

1. **Vérification intégrale des citations mot pour mot** sur scans haute résolution :
   - Peine de mort (p. 5-6), Circulaire Lefranc (p. 4), Ordre moral et bonapartisme (p. 9, 16, 25, 81), duel et presse (p. 77, 101), querelle du prédicateur carme (p. 61, 64), procès Mouroux (p. 124-125), discours manuscrits de 1880 (p. 126-132), portrait du Figaro (p. 144-145), obsèques dans Le Mémorial (1918).
2. **Formulations prudentes sur les conflits de sources** :
   - Début mandat de maire : 1884 (Sénat) / 1885 (radio).
   - Fin 1er mandat de maire : 1908 (arbre familial p. 146) / 1909 (Wikipédia). Retour en 1913 (Wikipédia seul, spécifié non corroboré).
   - Questeur : 1903 (Jolly) / 1908 (radio et arbre p. 146).
   - Adjoint au maire : 1878 (Jolly) / 9 février 1881 (arbre p. 146).
   - Page 124 : coquille d'époque relevée (« vendredi 6 juillet 1876 » était un jeudi).
3. **Pages sans texte propre (Suites d'articles)** :
   - Ajout systématique dans `PAGE_NOTES` (`book.ts`) pour les pages 6, 11, 28, 32, 37, 59, 72, 77, 86, 98, 101, 108, 127-128, 130-132, 134-139, 145.
4. **Vocabulaire d'interface** :
   - Harmonisation : « Index du recueil », « du recueil » (élimination des reliquats « livre »).

---

## 5. Reste à faire / Points de vigilance

1. **Option transcription manuelle** :
   - Transcrire les pages manuscrites (126-132 pour les discours, 133-139 pour la table, 140 et 146 pour l'arbre généalogique) pour enrichir `content/ocr/` ou les notes.
2. **Droits** :
   - Clarifier l'usage de l'archive sonore radio (accord RCF / D. Breillat).
   - Statuer sur le maintien des scans sous droits réservés (p. 141 Dictionnaire Jolly PUF 1968, p. 142 Le Populaire du Centre 1922, p. 146 arbre postérieur à 1918).
3. **Piste non affirmative** :
   - Ne jamais affirmer comme un fait prouvé qu'Arthur Lanlair est Théodore Girard (simple hypothèse d'après l'entrée « Ma réponse au jésuite » p. 96).

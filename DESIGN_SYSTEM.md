# SaxalWér — Design System

## Couleurs

| Nom        | Hex       | Usage |
|------------|-----------|-------|
| beige      | #F5F1E6   | Fond général |
| deepGreen  | #1A3C34   | Titres, nav active, bouton dark |
| terracotta | #A65D40   | Accents, icônes, séparateurs, hover |
| copper     | #B5622A   | Variante terracotta |
| cocoa      | #4A2F27   | Texte foncé, bouton principal |
| cocoa-light| #7D5A44   | Corps de texte |
| gold       | #D4AF37   | Points décoratifs, séparateurs |

## Typographie

- **Titres** : Cormorant Garamond — classes `.title-hero` `.title-h1` `.title-h2` `.title-h3` `.title-h4`
- **Corps** : Inter — classes `.text-body` `.text-secondary` `.text-label` `.text-quote`
- **Labels** : Inter 500, uppercase, tracking-wide — classe `.text-label`

## Boutons

```tsx
<button className="btn-primary">Action principale</button>
<button className="btn-secondary">Action secondaire</button>
<button className="btn-dark">CTA important</button>
<a className="link-text">Lien texte</a>
```

## Cartes

```tsx
<div className="card">Carte de base</div>
<div className="card-feature">Carte fonctionnalité</div>
<div className="card-value">Carte valeur centrée</div>
<div className="card-info">Bloc informatif vert</div>
<div className="card-accent">Bloc CTA terracotta</div>
<div className="card-wip">En cours de développement</div>
```

## Formulaires

```tsx
<label className="form-label">Email</label>
<input className="input" type="email" />
<textarea className="textarea" rows={5} />
<p className="form-message-success">Succès</p>
<p className="form-message-error">Erreur</p>
```

## Composants réutilisables

```tsx
<MedicalDisclaimer variant="short" />  // ou "full"
<InDevelopment />
<InDevelopment message="Contenu en cours de rédaction" />
```

## Badges

```tsx
<span className="badge badge-soon">Bientôt disponible</span>
<span className="badge badge-green">Actif</span>
<span className="badge badge-gold">Nouveau</span>
```

## Séparateurs

```tsx
<span className="divider" />          // Trait terracotta sous titre
<span className="divider-section" />  // Trait vert entre sections
```

## Utilitaires

```tsx
<p className="prose-saxal">Texte corps max 65ch</p>
<span className="dot-gold" />         // Point décoratif or
<span className="text-muted">Discret</span>
<span className="text-faint">Très discret</span>
```

## Règles visuelles

- **Pas de rose** — jamais
- **Pas d'ombres lourdes** — box-shadow très légères uniquement
- **Pas de gradients** — fonds unis ou translucides
- **Pas d'images médicalisées froides**
- **Filigrane logo** : opacity 0.025, coin ou centré
- **Animations** : douces, 200-800ms, ease-out
- **Espacement** : généreux — sections bien séparées

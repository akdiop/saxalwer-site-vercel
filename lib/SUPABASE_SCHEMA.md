# Supabase — Schéma SQL

## Tables à créer dans Supabase

Va dans **SQL Editor** sur ton dashboard Supabase et lance ces requêtes :

```sql
-- ──────────────────────────────────
-- 1. Newsletter
-- ──────────────────────────────────
create table newsletter_subscriptions (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  language    text default 'fr',
  created_at  timestamptz default now()
);

-- ──────────────────────────────────
-- 2. Contact
-- ──────────────────────────────────
create table contact_messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  subject     text,
  message     text not null,
  language    text default 'fr',
  created_at  timestamptz default now()
);

-- ──────────────────────────────────
-- 3. Participation aux tests
-- ──────────────────────────────────
create table participation_requests (
  id                   uuid primary key default gen_random_uuid(),
  first_name           text not null,
  age                  int,
  city                 text,
  preferred_language   text,
  participation_types  text[],
  is_guardian_of_minor text,
  contact              text not null,
  consent              boolean default false,
  language             text default 'fr',
  created_at           timestamptz default now()
);

-- ──────────────────────────────────
-- 4. Partenaires
-- ──────────────────────────────────
create table partner_requests (
  id            uuid primary key default gen_random_uuid(),
  organization  text not null,
  contact_name  text not null,
  email         text not null,
  partner_type  text,
  message       text,
  language      text default 'fr',
  created_at    timestamptz default now()
);

-- ──────────────────────────────────
-- Activer Row Level Security (RLS)
-- ──────────────────────────────────
alter table newsletter_subscriptions  enable row level security;
alter table contact_messages          enable row level security;
alter table participation_requests    enable row level security;
alter table partner_requests          enable row level security;

-- ──────────────────────────────────
-- Politique : autoriser uniquement l'insertion publique
-- (personne ne peut lire les données depuis le site)
-- ──────────────────────────────────
create policy "Allow public insert on newsletter"
  on newsletter_subscriptions for insert
  to anon
  with check (true);

create policy "Allow public insert on contact"
  on contact_messages for insert
  to anon
  with check (true);

create policy "Allow public insert on participation"
  on participation_requests for insert
  to anon
  with check (true);

create policy "Allow public insert on partners"
  on partner_requests for insert
  to anon
  with check (true);
```

## Variables d'environnement

Dans `.env.local` (et dans Vercel → Settings → Environment Variables) :

```
NEXT_PUBLIC_SUPABASE_PROJECT_ID=ton-project-id
NEXT_PUBLIC_SUPABASE_ANON_KEY=ta-anon-key
```

Trouve ces valeurs dans Supabase → Settings → API.

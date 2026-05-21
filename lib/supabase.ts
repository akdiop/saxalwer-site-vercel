// ─────────────────────────────────────────────
// Supabase — client + helpers pour tous les formulaires
// ─────────────────────────────────────────────

export const projectId =
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID ??
  process.env.VITE_SUPABASE_PROJECT_ID ??
  ''

export const publicAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.VITE_SUPABASE_ANON_KEY ??
  ''

const SUPABASE_URL = `https://${projectId}.supabase.co/rest/v1`

/* ─── Helper REST commun ─── */
async function postToTable<T extends Record<string, unknown>>(
  table: string,
  payload: T
): Promise<{ ok: boolean; error?: string }> {
  if (!projectId || !publicAnonKey) {
    return { ok: false, error: 'Configuration Supabase manquante.' }
  }
  try {
    const res = await fetch(`${SUPABASE_URL}/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: publicAnonKey,
        Authorization: `Bearer ${publicAnonKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(payload),
    })
    if (res.ok) return { ok: true }
    const data = await res.json().catch(() => ({}))
    return { ok: false, error: data?.message ?? 'Erreur réseau.' }
  } catch {
    return { ok: false, error: 'Erreur réseau.' }
  }
}

/* ─── Newsletter ─── */
export type NewsletterPayload = {
  email: string
  language: 'fr' | 'wo'
}

export async function subscribeNewsletter(payload: NewsletterPayload) {
  return postToTable('newsletter_subscriptions', {
    email: payload.email,
    language: payload.language,
    created_at: new Date().toISOString(),
  })
}

/* ─── Contact ─── */
export type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
  language: 'fr' | 'wo'
}

export async function sendContact(payload: ContactPayload) {
  return postToTable('contact_messages', {
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    message: payload.message,
    language: payload.language,
    created_at: new Date().toISOString(),
  })
}

/* ─── Participation aux tests ─── */
export type ParticipationPayload = {
  first_name: string
  age: number
  city: string
  preferred_language: string
  participation_types: string[]    // ['test', 'focus', 'both']
  is_guardian_of_minor: 'yes' | 'no' | ''
  contact: string                  // email ou WhatsApp
  consent: boolean
  language: 'fr' | 'wo'
}

export async function submitParticipation(payload: ParticipationPayload) {
  return postToTable('participation_requests', {
    ...payload,
    created_at: new Date().toISOString(),
  })
}

/* ─── Partenaires ─── */
export type PartnerPayload = {
  organization: string
  contact_name: string
  email: string
  partner_type: string             // 'institution' | 'funder' | 'research' | 'health' | 'media' | 'other'
  message: string
  language: 'fr' | 'wo'
}

export async function submitPartner(payload: PartnerPayload) {
  return postToTable('partner_requests', {
    ...payload,
    created_at: new Date().toISOString(),
  })
}

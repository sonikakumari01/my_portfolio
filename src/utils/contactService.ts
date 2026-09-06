export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

/**
 * Sends a contact message.
 *
 * This is intentionally not wired to a real backend yet — there isn't
 * one to call. Replace the body of this function with a real request
 * (e.g. to your own API route, or a service like Formspree / EmailJS)
 * once one exists. Configure the endpoint and any keys via environment
 * variables (e.g. `import.meta.env.VITE_CONTACT_ENDPOINT`) — never hard
 * code secrets in frontend source.
 *
 * Example real implementation:
 *
 *   const response = await fetch(import.meta.env.VITE_CONTACT_ENDPOINT, {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!response.ok) return { ok: false, error: 'Something went wrong. Please try again.' };
 *   return { ok: true };
 */
export async function sendContactMessage(payload: ContactPayload): Promise<ContactResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  if (!endpoint) {
    return {
      ok: false,
      error:
        'The contact form is not connected to a messaging service yet. Please reach out directly by email in the meantime.',
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      return { ok: false, error: 'Something went wrong sending your message. Please try again.' };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error — please check your connection and try again.' };
  }
}

export function validateContactPayload(payload: ContactPayload): Partial<Record<keyof ContactPayload, string>> {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!payload.name.trim()) errors.name = 'Please enter your name.';
  if (!payload.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!payload.subject.trim()) errors.subject = 'Please add a subject.';
  if (!payload.message.trim()) {
    errors.message = 'Please write a message.';
  } else if (payload.message.trim().length < 10) {
    errors.message = 'Please write a bit more detail (at least 10 characters).';
  }

  return errors;
}

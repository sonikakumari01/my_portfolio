import { ChangeEvent, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, XCircle } from 'lucide-react';
import { personal, socials } from '@/data/portfolio';
import { sendContactMessage, validateContactPayload, type ContactPayload } from '@/utils/contactService';

const initialForm: ContactPayload = { name: '', email: '', subject: '', message: '' };

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleChange = (field: keyof ContactPayload) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validateContactPayload(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus('submitting');
    const result = await sendContactMessage(form);
    if (result.ok) {
      setStatus('success');
      setStatusMessage('Your message has been sent. Thank you for reaching out!');
      setForm(initialForm);
    } else {
      setStatus('error');
      setStatusMessage(result.error);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-28" aria-labelledby="contact-heading">
      <div className="section-container grid grid-cols-1 gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="contact-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mt-3 max-w-prose text-text-secondary">
            Have an opportunity, question, or just want to say hello? I&apos;d love to hear from you.
          </p>

          <div className="mt-8 space-y-4">
            <a href={socials.email} className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary-500">
              <Mail className="h-4 w-4 flex-shrink-0" />
              {personal.email}
            </a>
            <p className="flex items-center gap-3 text-sm text-text-secondary">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              {personal.location}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={socials.github ?? undefined}
              aria-disabled={!socials.github}
              onClick={(e) => !socials.github && e.preventDefault()}
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-border ${
                socials.github ? 'text-text-secondary hover:text-primary-500' : 'cursor-not-allowed text-text-secondary/40'
              }`}
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={socials.linkedin ?? undefined}
              aria-disabled={!socials.linkedin}
              onClick={(e) => !socials.linkedin && e.preventDefault()}
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-border ${
                socials.linkedin ? 'text-text-secondary hover:text-primary-500' : 'cursor-not-allowed text-text-secondary/40'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={socials.email}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary hover:text-primary-500"
              aria-label="Send an email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 rounded-2xl border border-border bg-card p-7 shadow-soft dark:shadow-soft-dark"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Full name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm outline-none focus:border-primary-500"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm outline-none focus:border-primary-500"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={handleChange('subject')}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm outline-none focus:border-primary-500"
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1.5 text-xs text-red-500">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={handleChange('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="mt-1.5 w-full resize-none rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm outline-none focus:border-primary-500"
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white transition-opacity disabled:opacity-70"
          >
            {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>

          <div role="status" aria-live="polite">
            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-emerald-500">
                <CheckCircle2 className="h-4 w-4" /> {statusMessage}
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-red-500">
                <XCircle className="h-4 w-4" /> {statusMessage}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

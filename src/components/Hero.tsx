import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personal, socials } from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const badges = ['React.js', 'JavaScript', 'Java', 'Python', 'Node.js'];

function SocialLink({
  href,
  label,
  Icon,
}: {
  href: string | null;
  label: string;
  Icon: typeof Github;
}) {
  const disabled = !href;
  return (
    <a
      href={href ?? undefined}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
      aria-label={disabled ? `${label} (link coming soon)` : label}
      aria-disabled={disabled}
      onClick={(e) => disabled && e.preventDefault()}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors ${
        disabled
          ? 'cursor-not-allowed text-text-secondary/40'
          : 'text-text-secondary hover:border-primary-500/40 hover:text-primary-500'
      }`}
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
      aria-label="Introduction"
    >
      {/* Subtle animated background: soft glow orbs + minimal grid */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgb(var(--color-border)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-border)) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, black 40%, transparent 90%)',
          }}
        />
        <motion.div
          animate={reducedMotion ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary-500/20 blur-[100px]"
        />
        <motion.div
          animate={reducedMotion ? undefined : { x: [0, -24, 0], y: [0, 24, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 top-40 h-80 w-80 rounded-full bg-accent-cyan/20 blur-[110px]"
        />
      </div>

      <div className="section-container grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm text-primary-500">Hi, I&apos;m Sonika Kumari</p>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Aspiring Software</span>
            <br />
            Developer
          </h1>

          <p className="mt-6 max-w-prose text-lg text-text-secondary">{personal.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2" aria-label="Core technologies">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-text-secondary"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-primary-500/40"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-text-secondary underline decoration-border underline-offset-4 hover:text-primary-500"
            >
              Contact me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialLink href={'https://github.com/sonikakumari01'} label="GitHub" Icon={Github} />
            <SocialLink href={'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEuJcqPUtQTDwAAAaB4HyhY03i6_5fpdnNstU4aWGPb7vH7AGtrEiGFMfBFKg_0T7Qz5JKp4iYBvc3wbL8cTH3jcTss4wSfx82kcm7c25zPZU8w9mtGIQR9_mUhZ8ZeUgrqXeE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsonika-kumari-329b223b1%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app'} label="LinkedIn" Icon={Linkedin} />
            <SocialLink href={socials.email} label="Email" Icon={Mail} />
          </div>
        </motion.div>

        {/* Visual column: profile image + signature code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative mx-auto h-52 w-52 sm:h-64 sm:w-64">
            <div
              className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-500 via-accent-violet to-accent-cyan p-[3px] ${
                reducedMotion ? '' : 'animate-float'
              }`}
            >
              <div className="h-full w-full overflow-hidden rounded-[calc(2rem-3px)] bg-card">
                <img
                  src={personal.profileImage}
                  alt={`Portrait of ${personal.name}`}
                  className="h-full w-full object-cover"
                  width={256}
                  height={256}
                  loading="eager"
                  onError={(e) => {
                    // Graceful fallback while the real photo hasn't been added yet.
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div
                  className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-accent-cyan/10 font-display text-5xl font-semibold text-primary-500 dark:from-card dark:to-card"
                  aria-hidden="true"
                >
                  SK
                </div>
              </div>
            </div>
          </div>

          {/* Signature moment: a small, real code snippet describing Sonika */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 rounded-2xl border border-border bg-card p-5 font-mono text-xs shadow-soft dark:shadow-soft-dark sm:text-sm"
          >
            <div className="mb-3 flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed text-text-secondary">
              <code>
                <span className="text-accent-violet">const</span> developer = {'{'}
                {'\n'}  name: <span className="text-accent-cyan">&apos;Sonika Kumari&apos;</span>,
                {'\n'}  role: <span className="text-accent-cyan">&apos;Aspiring Software Developer&apos;</span>,
                {'\n'}  learning: [<span className="text-accent-cyan">&apos;React&apos;</span>,{' '}
                <span className="text-accent-cyan">&apos;Node.js&apos;</span>],
                {'\n'}  location: <span className="text-accent-cyan">&apos;Simdega, India&apos;</span>,
                {'\n'}
                {'}'}
                <span className="animate-blink text-primary-500">|</span>
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-text-secondary sm:flex"
      >
        <span className="font-mono text-[11px]">scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

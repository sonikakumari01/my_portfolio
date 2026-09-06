import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-28" aria-labelledby="resume-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-gradient-to-br from-primary-500/10 via-card to-accent-cyan/10 p-10 text-center sm:p-14"
        >
          <h2 id="resume-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something meaningful
          </h2>
          <p className="mx-auto mt-3 max-w-prose text-text-secondary">
            Explore my education, technical skills, certification, and development journey.
          </p>
          <a
            href={personal.resumeUrl}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-500 px-7 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            Download resume
          </a>
          <p className="mt-3 text-xs text-text-secondary/70">
            If the file isn&apos;t available yet, this link will resolve once{' '}
            <code className="font-mono">{personal.resumeUrl}</code> is added.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

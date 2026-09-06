import { motion } from 'framer-motion';
import { Award, Download, ExternalLink } from 'lucide-react';
import { certifications } from '@/data/portfolio';

export default function Certification() {
  return (
    <section id="certification" className="py-24 sm:py-28" aria-labelledby="certification-heading">
      <div className="section-container">
        <h2 id="certification-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Certification
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft dark:shadow-soft-dark"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-cyan text-white">
                <Award className="h-5 w-5" />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold">{cert.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{cert.description}</p>
              {(cert.issuer || cert.date) && (
                <p className="mt-2 text-xs text-text-secondary/80">
                  {[cert.issuer, cert.date].filter(Boolean).join(' · ')}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-primary-500/40"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View certificate
                </a>
                <a
                  href={cert.fileUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-500 transition-colors hover:bg-primary-500/20"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>
              </div>
              <p className="mt-3 text-xs text-text-secondary/70">
                Buttons will resolve once the certificate file is added at{' '}
                <code className="font-mono">{cert.fileUrl}</code>.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

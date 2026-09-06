import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="border-y border-border bg-surface py-24 sm:py-28" aria-labelledby="education-heading">
      <div className="section-container">
        <h2 id="education-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Education
        </h2>

        <ol className="relative mt-14 space-y-10 border-l border-border pl-8 sm:pl-10">
          {education.map((entry, index) => (
            <motion.li
              key={entry.stage}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[calc(2rem+1px)] top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-primary-500 sm:-left-[calc(2.5rem+1px)]">
                <GraduationCap className="h-4 w-4" />
              </span>

              <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary-500/40">
                <p className="font-mono text-xs text-primary-500">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{entry.stage}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {entry.institution ?? (
                    <span className="italic text-text-secondary/70">Institution to be updated</span>
                  )}
                </p>
                <p className="mt-2 text-sm font-medium text-text-primary">
                  {entry.detail ?? <span className="text-text-secondary/70">Details to be updated</span>}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { bio } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28" aria-labelledby="about-heading">
      <div className="section-container grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="about-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            About me
          </h2>
          <p className="mt-4 max-w-prose text-text-secondary">{bio.intro}</p>

          <ul className="mt-8 space-y-3">
            {bio.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-8 shadow-soft dark:shadow-soft-dark"
        >
          <h3 className="font-display text-xl font-semibold">Career objective</h3>
          <p className="mt-3 text-text-secondary">{bio.objective}</p>
        </motion.div>
      </div>
    </section>
  );
}

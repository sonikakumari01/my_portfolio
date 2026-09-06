import { motion } from 'framer-motion';
import { strengths } from '@/data/portfolio';

export default function Strengths() {
  return (
    <section className="border-y border-border bg-surface py-24 sm:py-28" aria-labelledby="strengths-heading">
      <div className="section-container">
        <h2 id="strengths-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          What I bring
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary-500/40"
            >
              <h3 className="font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

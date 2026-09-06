import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28" aria-labelledby="skills-heading">
      <div className="section-container">
        <h2 id="skills-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Technical skills
        </h2>
        <p className="mt-3 max-w-prose text-text-secondary">
          Technologies I use and am actively building depth in, organized by area.
        </p>

        <div className="mt-12 space-y-12">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-text-secondary/80">
                {group.category}
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.skills.map((skill, index) => {
                  const Icon = (Icons as unknown as Record<string, LucideIcon>)[skill.icon] ?? Icons.Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-soft dark:hover:shadow-soft-dark"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-4 font-display text-sm font-semibold">{skill.name}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">{skill.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

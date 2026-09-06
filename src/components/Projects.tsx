import { motion } from 'framer-motion';
import { ExternalLink, Github, Loader2, Sparkles } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-surface py-24 sm:py-28" aria-labelledby="projects-heading">
      <div className="section-container">
        <h2 id="projects-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h2>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-border bg-card px-8 py-16 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">Projects coming soon</h3>
            <p className="mt-2 max-w-md text-sm text-text-secondary">
              I&apos;m currently building and refining projects that demonstrate my skills in modern web
              development and programming.
            </p>
          </motion.div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary-500/40"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-primary-500/10 to-accent-cyan/10">
                    <span className="font-display text-2xl font-semibold text-primary-500/60">
                      {project.title
                        .split(' ')
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join('')}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                    {project.status === 'in-progress' && (
                      <span className="flex flex-shrink-0 items-center gap-1.5 rounded-full border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-text-secondary">
                        <Loader2 className="h-3 w-3 animate-spin" />
                        In progress
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-text-secondary">{project.description}</p>

                  {project.stack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.githubUrl || project.liveUrl ? (
                    <div className="mt-5 flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View source code for ${project.title} on GitHub`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary hover:text-primary-500"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary hover:text-primary-500"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <p className="mt-5 text-xs text-text-secondary/70">Links will be added once available.</p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

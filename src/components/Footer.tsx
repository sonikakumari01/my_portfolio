import { Github, Linkedin, Mail } from 'lucide-react';
import { navItems, personal, socials } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container flex flex-col gap-10 py-14 sm:flex-row sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{personal.name}</p>
          <p className="mt-2 max-w-xs text-sm text-text-secondary">
            Learning, building, and growing through technology.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={socials.github ?? undefined}
              aria-disabled={!socials.github}
              onClick={(e) => !socials.github && e.preventDefault()}
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-border ${
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
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-border ${
                socials.linkedin ? 'text-text-secondary hover:text-primary-500' : 'cursor-not-allowed text-text-secondary/40'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={socials.email}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary hover:text-primary-500"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-text-secondary hover:text-primary-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border py-5">
        <p className="section-container text-center text-xs text-text-secondary/70">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

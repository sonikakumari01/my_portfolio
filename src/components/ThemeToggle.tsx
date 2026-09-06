import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:text-primary-500 hover:border-primary-500/40"
    >
      <Sun className={`h-4 w-4 transition-all ${isDark ? 'scale-0 opacity-0 absolute' : 'scale-100 opacity-100'}`} />
      <Moon className={`h-4 w-4 transition-all ${isDark ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'}`} />
    </button>
  );
}

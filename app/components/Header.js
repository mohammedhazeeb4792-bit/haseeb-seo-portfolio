import { nav, profile } from "../data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-night/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-semibold">{profile.name}</a>
        <nav aria-label="Main" className="hidden gap-6 text-sm sm:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-slate-600 transition-colors hover:text-link dark:text-slate-400 dark:hover:text-sky-400">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

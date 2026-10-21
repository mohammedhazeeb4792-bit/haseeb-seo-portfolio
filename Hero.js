import { profile } from "../data/content";

// The hero is styled as a search result: the query types itself, then the candidate appears as the top hit.
export default function Hero() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-6 pb-10 pt-14 sm:pt-24">
      <div className="flex max-w-2xl items-center gap-3 rounded-full border border-slate-300 px-5 py-3 shadow-sm dark:border-slate-700">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
        </svg>
        <span className="type text-base" aria-label="Search query: seo executive uae">seo executive uae</span>
      </div>

      <div className="result mt-8 max-w-2xl">
        <p className="text-sm text-slate-600 dark:text-slate-400">mohammed-hazeeb &rsaquo; portfolio</p>
        <h1 className="mt-1 text-2xl font-semibold leading-snug text-link sm:text-4xl dark:text-sky-400">
          {profile.name}: {profile.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-700 dark:text-slate-300">{profile.positioning}</p>
        <p className="mt-2 text-sm text-serp dark:text-green-400">{profile.availability}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-link dark:bg-sky-500 dark:text-night dark:hover:bg-sky-400">
            See the case study
          </a>
          <a href="#contact" className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium transition hover:border-link hover:text-link dark:border-slate-700 dark:hover:border-sky-400 dark:hover:text-sky-400">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}

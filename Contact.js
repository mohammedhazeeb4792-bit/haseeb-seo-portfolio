import { profile } from "../data/content";

export default function Contact() {
  return (
    <div>
      <p className="max-w-prose text-lg">Hiring for an SEO or digital marketing role in the UAE? Send me a message.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-link dark:bg-sky-500 dark:text-night dark:hover:bg-sky-400">
          Email {profile.email}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium transition hover:border-link hover:text-link dark:border-slate-700">
          LinkedIn
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium transition hover:border-link hover:text-link dark:border-slate-700">
          {profile.phone}
        </a>
      </div>
    </div>
  );
}

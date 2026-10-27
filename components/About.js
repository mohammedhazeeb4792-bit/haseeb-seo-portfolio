import { profile } from "../data/content";

export default function About() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      <p className="max-w-prose text-lg leading-relaxed sm:col-span-2">{profile.summary}</p>
      <dl className="space-y-3 text-sm">
        <div><dt className="text-slate-500">Based in</dt><dd className="font-medium">{profile.location}</dd></div>
        <div><dt className="text-slate-500">Languages</dt><dd className="font-medium">{profile.languages}</dd></div>
        <div><dt className="text-slate-500">Looking for</dt><dd className="font-medium">{profile.seeking}</dd></div>
      </dl>
    </div>
  );
}

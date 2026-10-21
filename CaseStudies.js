import { caseStudy } from "../data/content";

export default function CaseStudies() {
  return (
    <div>
      <p className="max-w-prose text-lg leading-relaxed">{caseStudy.intro}</p>
      <p className="mt-3">
        <a href={caseStudy.url} target="_blank" rel="noreferrer" className="text-link underline-offset-4 hover:underline dark:text-sky-400">
          Visit thecontroller.ai
        </a>
      </p>
      <p className="mt-4 inline-block rounded-md border-l-4 border-serp bg-green-50 px-4 py-3 text-sm dark:bg-green-950/40">
        {caseStudy.result}
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {caseStudy.workstreams.map((w) => (
          <article key={w.name} className="rounded-lg border border-slate-200 p-6 transition-colors hover:border-link dark:border-slate-800 dark:hover:border-sky-400">
            <h3 className="text-lg font-semibold">{w.name}</h3>
            <p className="mt-3 text-sm"><span className="font-medium">Problem: </span>{w.problem}</p>
            <p className="mt-2 text-sm"><span className="font-medium">What I did: </span>{w.solution}</p>
            <p className="mt-4 text-xs text-slate-500">{w.tools}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

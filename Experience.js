import { experience } from "../data/content";

export default function Experience() {
  return (
    <ol className="space-y-10 border-l border-slate-300 pl-6 dark:border-slate-700">
      {experience.map((e) => (
        <li key={e.role + e.company}>
          <p className="text-sm text-slate-500">{e.period}</p>
          <h3 className="text-xl font-semibold">
            {e.role},{" "}
            {e.url ? (
              <a href={e.url} target="_blank" rel="noreferrer" className="text-link underline-offset-4 hover:underline dark:text-sky-400">{e.company}</a>
            ) : (
              e.company
            )}
          </h3>
          <p className="text-sm text-slate-500">{e.place}</p>
          <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 leading-relaxed">
            {e.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}

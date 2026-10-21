import { skills } from "../data/content";

export default function Skills() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {skills.map((g) => (
        <div key={g.group}>
          <h3 className="mb-3 font-semibold">{g.group}</h3>
          <ul className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <li key={s} className="rounded-full border border-slate-300 px-3 py-1 text-sm dark:border-slate-700">{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

import { education } from "../data/content";

export default function Education() {
  return (
    <ul className="space-y-4">
      {education.map((e) => (
        <li key={e.name} className="flex flex-col justify-between gap-1 sm:flex-row">
          <div>
            <p className="font-medium">{e.name}</p>
            <p className="text-sm text-slate-500">{e.school}</p>
          </div>
          <p className="text-sm text-slate-500">{e.period}</p>
        </li>
      ))}
    </ul>
  );
}

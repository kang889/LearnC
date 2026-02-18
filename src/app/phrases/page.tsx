import Link from "next/link";
import { lessons } from "@/data/lessons";

export default function PhrasesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">全部短语课程</h1>
      <ul className="space-y-3">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link
              href={`/lesson/${lesson.id}`}
              className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-200"
            >
              <span className="text-xl font-semibold text-slate-900">{lesson.topic}</span>
              <span className="rounded-lg bg-slate-900 px-3 py-1 text-sm font-bold text-white">{lesson.phrases.length} 条</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

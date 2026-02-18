"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Phrase } from "@/data/lessons";
import { PhraseCard } from "@/components/PhraseCard";
import { calculateNextProgress, type ReviewResult } from "@/lib/srs";
import { getProgress, setProgress } from "@/lib/storage";

type LessonSessionProps = {
  title: string;
  phrases: Phrase[];
  emptyText: string;
};

export function LessonSession({ title, phrases, emptyText }: LessonSessionProps) {
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(0);
  const current = phrases[index];

  const progressLabel = useMemo(() => `${Math.min(index + 1, phrases.length)} / ${phrases.length}`, [index, phrases.length]);

  async function submitResult(result: ReviewResult) {
    if (!current) {
      return;
    }

    const previous = await getProgress(current.id);
    const next = calculateNextProgress(current.id, previous, result);
    await setProgress(current.id, next);

    if (index >= phrases.length - 1) {
      setCompleted((v) => v + 1);
      setIndex((v) => v + 1);
      return;
    }

    setCompleted((v) => v + 1);
    setIndex((v) => v + 1);
  }

  if (phrases.length === 0) {
    return (
      <div className="space-y-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="rounded-xl bg-white p-4 text-lg shadow-sm ring-1 ring-slate-200">{emptyText}</p>
        <Link href="/" className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-lg font-semibold text-white">
          返回首页
        </Link>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="space-y-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="rounded-2xl bg-green-100 p-5 text-green-900">
          <p className="text-xl font-semibold">完成啦！今天已练习 {completed} 条。</p>
        </div>
        <Link href="/" className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-lg font-semibold text-white">
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <PhraseCard phrase={current} indexLabel={progressLabel} onKnow={() => submitResult("know")} onDontKnow={() => submitResult("dont")} />
      <Link href="/" className="inline-flex rounded-xl bg-slate-200 px-4 py-3 text-base font-semibold text-slate-900">
        结束并返回
      </Link>
    </div>
  );
}

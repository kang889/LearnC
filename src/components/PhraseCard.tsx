"use client";

import { speakEnglish } from "@/lib/tts";
import type { Phrase } from "@/data/lessons";

type PhraseCardProps = {
  phrase: Phrase;
  onKnow: () => void;
  onDontKnow: () => void;
  indexLabel: string;
};

export function PhraseCard({ phrase, onKnow, onDontKnow, indexLabel }: PhraseCardProps) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
      <p className="mb-2 text-sm text-slate-500">{indexLabel}</p>
      <h2 className="text-3xl font-bold leading-snug text-slate-900">{phrase.english}</h2>
      <p className="mt-4 text-xl text-slate-700">{phrase.chinese}</p>
      {phrase.pinyin ? <p className="mt-2 text-base text-slate-500">{phrase.pinyin}</p> : null}

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => speakEnglish(phrase.english, 0.75)}
          className="rounded-xl bg-blue-100 px-4 py-4 text-lg font-semibold text-blue-800"
        >
          🔊 慢速
        </button>
        <button
          type="button"
          onClick={() => speakEnglish(phrase.english, 1)}
          className="rounded-xl bg-blue-600 px-4 py-4 text-lg font-semibold text-white"
        >
          🔊 正常
        </button>
        <button
          type="button"
          onClick={onKnow}
          className="rounded-xl bg-green-600 px-4 py-4 text-lg font-semibold text-white"
        >
          ✅ 我会了
        </button>
        <button
          type="button"
          onClick={onDontKnow}
          className="rounded-xl bg-red-600 px-4 py-4 text-lg font-semibold text-white"
        >
          ❌ 不会
        </button>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { allPhrases } from "@/data/lessons";
import { getAllProgress, exportProgressJson, importProgressJson, resetAllProgress } from "@/lib/storage";
import { getDueCount, getLearningStreak } from "@/lib/srs";

export default function HomePage() {
  const [dueToday, setDueToday] = useState(0);
  const [streak, setStreak] = useState(0);
  const [jsonText, setJsonText] = useState("");
  const [message, setMessage] = useState("");

  async function refreshStats() {
    const all = await getAllProgress();
    setDueToday(getDueCount(all));
    setStreak(getLearningStreak(all));
  }

  useEffect(() => {
    refreshStats().catch(() => setMessage("读取进度失败"));
  }, []);

  const totalPhrases = useMemo(() => allPhrases.length, []);

  async function handleExport() {
    const json = await exportProgressJson();
    setJsonText(json);
    setMessage("已导出进度到下方文本框");
  }

  async function handleImport() {
    try {
      await importProgressJson(jsonText);
      await refreshStats();
      setMessage("导入成功");
    } catch (error) {
      setMessage(error instanceof Error ? `导入失败：${error.message}` : "导入失败");
    }
  }

  async function handleReset() {
    const ok = window.confirm("确定要清空所有学习进度吗？此操作不可恢复。");
    if (!ok) {
      return;
    }

    await resetAllProgress();
    await refreshStats();
    setJsonText("");
    setMessage("已重置全部进度");
  }

  return (
    <div className="space-y-4">
      <header className="space-y-2">
        <h1 className="text-4xl font-extrabold text-slate-900">Learn English</h1>
        <p className="text-base text-slate-600">英语口语学习工具（离线可用）</p>
      </header>

      <section className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">连续学习</p>
          <p className="text-2xl font-bold">{streak} 天</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">今日到期</p>
          <p className="text-2xl font-bold">{dueToday} 条</p>
        </div>
      </section>

      <section className="space-y-3">
        <Link href="/lesson/greetings" className="block rounded-2xl bg-blue-600 px-5 py-5 text-center text-2xl font-bold text-white">
          今天
        </Link>
        <Link href="/review" className="block rounded-2xl bg-green-600 px-5 py-5 text-center text-2xl font-bold text-white">
          复习
        </Link>
        <Link href="/phrases" className="block rounded-2xl bg-slate-900 px-5 py-5 text-center text-2xl font-bold text-white">
          短语
        </Link>
      </section>

      <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-xl font-bold">进度工具（可选）</h2>
        <p className="mt-1 text-sm text-slate-600">总短语 {totalPhrases} 条。可将学习记录导出为 JSON，复制保存到本地。</p>
        <div className="mt-3 grid grid-cols-1 gap-2">
          <button type="button" onClick={handleExport} className="rounded-xl bg-slate-900 px-4 py-3 text-left text-lg font-semibold text-white">
            导出进度
          </button>
          <button type="button" onClick={handleImport} className="rounded-xl bg-blue-600 px-4 py-3 text-left text-lg font-semibold text-white">
            导入进度
          </button>
          <button type="button" onClick={handleReset} className="rounded-xl bg-red-600 px-4 py-3 text-left text-lg font-semibold text-white">
            重置进度
          </button>
        </div>
        <textarea
          className="mt-3 h-36 w-full rounded-xl border border-slate-300 p-3 text-sm"
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
          placeholder="这里会显示导出的 JSON，或粘贴导入 JSON"
        />
        {message ? <p className="mt-2 text-sm text-slate-700">{message}</p> : null}
      </section>
    </div>
  );
}

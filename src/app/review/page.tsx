"use client";

import { useEffect, useState } from "react";
import { LessonSession } from "@/components/LessonSession";
import { allPhrases, type Phrase } from "@/data/lessons";
import { isDueToday } from "@/lib/srs";
import { getAllProgress } from "@/lib/storage";

export default function ReviewPage() {
  const [duePhrases, setDuePhrases] = useState<Phrase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProgress()
      .then((all) => {
        const dueIds = new Set(all.filter((item) => isDueToday(item.nextDueISO)).map((item) => item.phraseId));
        setDuePhrases(allPhrases.filter((phrase) => dueIds.has(phrase.id)));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-lg">加载复习队列中...</p>;
  }

  return <LessonSession title="今日复习" phrases={duePhrases} emptyText="今天没有到期项目，太棒了！" />;
}

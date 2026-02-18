export type ReviewResult = "know" | "dont";

export type PhraseProgress = {
  phraseId: string;
  intervalDays: number;
  nextDueISO: string;
  lastResult: ReviewResult;
  updatedAtISO: string;
};

const MAX_INTERVAL_DAYS = 60;

function startOfLocalDay(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function toISODate(date: Date) {
  return date.toISOString();
}

export function isDueToday(nextDueISO: string, now = new Date()) {
  const due = new Date(nextDueISO);
  return due <= startOfLocalDay(now);
}

export function getDueCount(progressList: PhraseProgress[], now = new Date()) {
  return progressList.filter((item) => isDueToday(item.nextDueISO, now)).length;
}

export function calculateNextProgress(
  phraseId: string,
  previous: PhraseProgress | null,
  result: ReviewResult,
  now = new Date(),
): PhraseProgress {
  const currentInterval = previous?.intervalDays ?? 1;
  const nextInterval = result === "know" ? Math.min(Math.max(currentInterval, 1) * 2, MAX_INTERVAL_DAYS) : 1;

  const nextDate = startOfLocalDay(now);
  if (result === "know") {
    nextDate.setDate(nextDate.getDate() + nextInterval);
  } else {
    nextDate.setDate(nextDate.getDate() + 1);
  }

  return {
    phraseId,
    intervalDays: nextInterval,
    nextDueISO: toISODate(nextDate),
    lastResult: result,
    updatedAtISO: toISODate(now),
  };
}

export function getLearningStreak(progressList: PhraseProgress[], now = new Date()) {
  const uniqueDays = new Set(
    progressList.map((item) => {
      const date = new Date(item.updatedAtISO);
      return new Date(date.getFullYear(), date.getMonth(), date.getDate()).toDateString();
    }),
  );

  let streak = 0;
  const cursor = startOfLocalDay(now);

  while (uniqueDays.has(cursor.toDateString())) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

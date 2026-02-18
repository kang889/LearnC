import { LessonSession } from "@/components/LessonSession";
import { getLessonById } from "@/data/lessons";

type LessonPageProps = {
  params: Promise<{ lessonId: string }>;
};

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = await params;
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return (
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">课程不存在</h1>
        <p className="text-lg text-slate-600">请返回短语列表选择课程。</p>
      </div>
    );
  }

  return <LessonSession title={`课程：${lesson.topic}`} phrases={lesson.phrases} emptyText="当前课程没有短语。" />;
}

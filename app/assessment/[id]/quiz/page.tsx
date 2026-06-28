import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAssessmentById } from '@/data/assessments';
import QuizClient from '@/components/QuizClient';

async function getAssessmentData(id: string) {
  try {
    const mod = await import(`@/data/assessments/${id}`);
    return mod.default as import('@/lib/types').Assessment;
  } catch {
    return null;
  }
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meta = getAssessmentById(id);
  if (!meta) notFound();

  const assessment = await getAssessmentData(id);
  if (!assessment) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <p className="text-text-secondary">该测评内容正在筹备中，敬请期待！</p>
        <Link href="/" className="text-accent hover:underline mt-4 inline-block">返回首页</Link>
      </div>
    );
  }

  return <QuizClient assessment={assessment} />;
}
import { notFound } from 'next/navigation';
import { getAssessmentById } from '@/data/assessments';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const assessment = getAssessmentById(id);

  if (!assessment) {
    return { title: '测评未找到' };
  }

  return {
    title: assessment.title + ' - ' + assessment.subtitle,
    description: assessment.description,
    keywords: [assessment.title, assessment.category, '心理测评', '情感测评', assessment.subtitle],
    openGraph: {
      title: assessment.title + ' | 关系研究所',
      description: assessment.description,
      type: 'website',
    },
  };
}

export default async function AssessmentIntroPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const assessment = getAssessmentById(id);

  if (!assessment) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-4xl mb-4 block">{assessment.icon}</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
          {assessment.title}
        </h1>
        <p className="text-text-secondary">{assessment.subtitle}</p>
      </div>

      <div className="bg-white rounded-xl border border-border p-6 mb-6">
        <h2 className="font-bold text-primary mb-3">测评介绍</h2>
        <p className="text-text-secondary leading-relaxed">{assessment.description}</p>
      </div>

      <div className="bg-white rounded-xl border border-border p-6 mb-6">
        <h2 className="font-bold text-primary mb-3">测评详情</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-text-secondary">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2" />
            </svg>
            共{assessment.questionCount}道题目
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            约{assessment.estimatedMinutes}分钟
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586L7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            免费基础结果
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <span className="text-accent font-bold">¥9.9</span>
            详细报告
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href={`/assessment/${id}/quiz`}
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary-light transition-colors shadow-md"
        >
          开始测试
        </Link>
        <p className="text-xs text-text-muted mt-3">
          请根据真实感受作答，没有对错之分
        </p>
      </div>
    </div>
  );
}
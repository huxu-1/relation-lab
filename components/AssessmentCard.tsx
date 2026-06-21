import Link from 'next/link';
import { AssessmentMeta } from '@/lib/types';

export default function AssessmentCard({ assessment }: { assessment: AssessmentMeta }) {
  return (
    <Link
      href={`/assessment/${assessment.id}`}
      className="group block bg-white rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl flex-shrink-0">{assessment.icon}</span>
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-primary group-hover:text-accent transition-colors leading-tight">
              {assessment.title}
            </h2>
            <p className="text-sm text-text-muted mt-0.5">{assessment.subtitle}</p>
          </div>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
          {assessment.description}
        </p>
        <div className="flex items-center justify-between text-xs text-text-muted">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2" />
              </svg>
              {assessment.questionCount}题
            </span>
            <span className="inline-flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              约{assessment.estimatedMinutes}分钟
            </span>
          </div>
          <span className="bg-bg-secondary px-2 py-1 rounded text-text-muted font-medium">
            {assessment.category}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-accent font-medium">免费获取基础结果 →</span>
          <span className="text-xs text-text-muted">详细报告 ¥9.9</span>
        </div>
      </div>
    </Link>
  );
}
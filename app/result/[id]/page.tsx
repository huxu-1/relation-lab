'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { AssessmentResult } from '@/lib/types';
import Link from 'next/link';
import BookRecommendation from '@/components/BookRecommendation';
import WeChatConsultation from '@/components/WeChatConsultation';
import ShareCard from '@/components/ShareCard';
import { getBooksForAssessment, getSharePhrase } from '@/data/books';
import { getAssessmentById } from '@/data/assessments';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const key = searchParams.get('key');

  const result = useMemo<AssessmentResult | null>(() => {
    if (typeof window === 'undefined' || !key) return null;
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }, [key]);

  const error = !key || !result;

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-text-secondary">未找到测评结果，请重新测试。</p>
        <Link href="/" className="text-accent hover:underline mt-4 inline-block">返回首页</Link>
      </div>
    );
  }

  if (!result) {
    return <div className="max-w-2xl mx-auto px-4 py-12 text-center"><p className="text-text-muted">正在加载...</p></div>;
  }

  const maxScore = Math.max(...result.freeResult.dimensionBreakdown.map(d => d.score));
  const assessmentMeta = getAssessmentById(result.assessmentId);
  const books = getBooksForAssessment(result.assessmentId);
  const sharePhrase = getSharePhrase(result.assessmentId);
  const siteUrl = 'https://www.guanxiyanjiusuo.cn';

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Result Header */}
      <div className="text-center mb-8">
        <p className="text-sm text-text-muted mb-2">你的测评结果</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
          {result.freeResult.profileName}
        </h1>
        <p className="text-text-secondary leading-relaxed max-w-lg mx-auto">
          {result.paidResult.profileDescription}
        </p>
      </div>

      {/* Dimension Breakdown */}
      <div className="bg-white rounded-xl border border-border p-6 mb-6">
        <h2 className="font-bold text-primary mb-4">各维度得分</h2>
        <div className="space-y-4">
          {result.freeResult.dimensionBreakdown.map(dim => (
            <div key={dim.name}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="font-medium text-text-secondary">{dim.name}</span>
                <span className="text-text-muted">{dim.score}分</span>
              </div>
              <div className="w-full h-3 bg-bg-secondary rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${maxScore > 0 ? (dim.score / maxScore) * 100 : 0}%`, backgroundColor: dim.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Report - 免费展示 */}
      <div className="space-y-6">
        {/* 行为特征 */}
        <div className="bg-white rounded-xl border border-border p-6">
          <h2 className="font-bold text-primary mb-3">行为特征</h2>
          <ul className="space-y-2">
            {result.paidResult.traits.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-text-secondary">
                <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* 改善建议 */}
        <div className="bg-white rounded-xl border border-border p-6">
          <h2 className="font-bold text-primary mb-3">改善建议</h2>
          <ul className="space-y-2">
            {result.paidResult.suggestions.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-text-secondary">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* 兼容性说明 */}
        {result.paidResult.compatibilityNotes.length > 0 && (
          <div className="bg-white rounded-xl border border-border p-6">
            <h2 className="font-bold text-primary mb-3">兼容性说明</h2>
            <div className="space-y-3">
              {result.paidResult.compatibilityNotes.map((note, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${note.level === 'high' ? 'bg-green-100 text-green-700' : note.level === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                    {note.level === 'high' ? '高度兼容' : note.level === 'medium' ? '中等兼容' : '低度兼容'}
                  </span>
                  <span className="text-sm text-text-secondary">{note.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 详细章节 */}
        {result.paidResult.detailedSections.map((section, i) => (
          <div key={i} className="bg-white rounded-xl border border-border p-6">
            <h2 className="font-bold text-primary mb-3">{section.title}</h2>
            <p className="text-text-secondary leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* 分隔线 */}
      <div className="border-t border-border my-8"></div>

      {/* 推荐书籍 */}
      <BookRecommendation books={books} />

      {/* 微信咨询 */}
      <WeChatConsultation />

      {/* 分享卡片 */}
      <ShareCard
        assessmentTitle={assessmentMeta?.title || '情感关系测评'}
        profileName={result.freeResult.profileName}
        sharePhrase={sharePhrase}
        siteUrl={siteUrl}
      />

      {/* 返回首页 */}
      <div className="text-center mt-8 pb-4">
        <Link href="/" className="text-accent hover:underline text-sm">
          ← 返回全部测评
        </Link>
      </div>
    </div>
  );
}

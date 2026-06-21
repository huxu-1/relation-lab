'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AssessmentResult } from '@/lib/types';
import Link from 'next/link';

function verifyUnlockCode(resultKey: string, unlockCode: string): boolean {
  // Client-side verification - mirrors server-side logic
  const salt = 'relation-lab-salt';
  const expected = sha256Short(resultKey + salt);
  return unlockCode === expected;
}

function sha256Short(input: string): string {
  // Simplified client-side hash - full verification on server
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(16, '0').substring(0, 16);
}

export default function ResultPage() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const key = searchParams.get('key');
    const unlock = searchParams.get('unlock');
    if (!key) { setError(true); return; }
    try {
      const data = localStorage.getItem(key);
      if (!data) { setError(true); return; }
      setResult(JSON.parse(data));
      if (unlock && verifyUnlockCode(key, unlock)) {
        setIsUnlocked(true);
      }
    } catch { setError(true); }
  }, [searchParams]);

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-text-secondary">未找到测评结果，请重新测试。</p>
        <Link href="/" className="text-accent hover:underline mt-4 inline-block">返回首页</Link>
      </div>
    );
  }

  if (!result) return <div className="max-w-2xl mx-auto px-4 py-12 text-center"><p className="text-text-muted">正在加载...</p></div>;

  const maxScore = Math.max(...result.freeResult.dimensionBreakdown.map(d => d.score));

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Result Header */}
      <div className="text-center mb-8">
        <p className="text-sm text-text-muted mb-2">你的测评结果</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
          {result.freeResult.profileName}
        </h1>
        <p className="text-text-secondary leading-relaxed max-w-lg mx-auto">
          {isUnlocked ? result.paidResult.profileDescription : result.freeResult.profileBrief}
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

      {isUnlocked ? (
        /* Full Paid Report */
        <div className="space-y-6">
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

          {result.paidResult.detailedSections.map((section, i) => (
            <div key={i} className="bg-white rounded-xl border border-border p-6">
              <h2 className="font-bold text-primary mb-3">{section.title}</h2>
              <p className="text-text-secondary leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      ) : (
        /* Free result - CTA for paid */
        <div className="bg-primary/5 rounded-xl border-2 border-accent/30 p-6 mb-6">
          <h2 className="font-bold text-primary mb-2">解锁完整报告</h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            基础结果只揭示了你的类型，完整报告包含：深度性格分析、行为特征清单、改善建议、兼容性说明等7个章节。
          </p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-accent">¥9.9</span>
              <span className="text-sm text-text-muted ml-2">完整报告</span>
            </div>
            <Link href={`/payment/${result.assessmentId}?key=${searchParams.get('key')}`} className="px-6 py-3 rounded-lg bg-accent text-white font-bold hover:bg-primary transition-colors shadow-md">
              立即解锁
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
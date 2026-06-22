'use client';

import { useState } from 'react';

export default function FeedbackForm({ assessmentId }: { assessmentId: string }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === 0 && !feedback.trim()) return;

    const feedbackData = {
      assessmentId,
      rating,
      feedback: feedback.trim(),
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage for owner to review
    const existing = JSON.parse(localStorage.getItem('all-feedback') || '[]');
    existing.push(feedbackData);
    localStorage.setItem('all-feedback', JSON.stringify(existing));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-6 text-center">
        <p className="text-sm text-green-700 font-medium">
          感谢你的反馈！你的意见帮助我们持续改进测评质量。
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-border p-5 mt-6">
      <h3 className="font-bold text-primary mb-2 text-sm">反馈与建议</h3>
      <p className="text-xs text-text-muted mb-4">
        测评结果对你有帮助吗？欢迎告诉我们你的真实感受
      </p>

      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-4">
        <span className="text-xs text-text-muted mr-2">准确度评分：</span>
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="text-xl transition-transform hover:scale-110"
          >
            <span className={(hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'}>
              ★
            </span>
          </button>
        ))}
      </div>

      {/* Text Feedback */}
      <textarea
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
        placeholder="你觉得测评题目贴合实际吗？结果准确吗？有什么建议？（选填）"
        className="w-full px-3 py-2 rounded-lg border border-border text-sm text-text focus:border-accent focus:outline-none resize-none"
        rows={3}
        maxLength={500}
      />
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-text-muted">{feedback.length}/500</span>
        <button
          onClick={handleSubmit}
          disabled={rating === 0 && !feedback.trim()}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            rating > 0 || feedback.trim()
              ? 'bg-primary text-white hover:bg-primary-light'
              : 'bg-bg-secondary text-text-muted cursor-not-allowed'
          }`}
        >
          提交反馈
        </button>
      </div>
    </div>
  );
}

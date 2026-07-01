'use client';

import { useState } from 'react';

export default function SiteFeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [contact, setContact] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!feedback.trim()) return;
    setSubmitting(true);
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feedback: feedback.trim(), contact: contact.trim() }),
      });
      setSubmitted(true);
      setFeedback('');
      setContact('');
    } catch {
      alert('提交失败，请稍后重试');
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl border border-border p-6 text-center">
        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586L7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="font-bold text-primary mb-1">感谢你的反馈！</p>
        <p className="text-sm text-text-muted">你的意见对我们很重要，会帮助我们持续改进。</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-3 text-sm text-accent hover:underline"
        >
          再写一条
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <textarea
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
        placeholder="你对这个网站有什么看法？哪些地方做得好，哪些地方需要改进？"
        rows={4}
        maxLength={500}
        className="w-full px-4 py-3 rounded-lg border border-border text-text text-sm focus:border-accent focus:outline-none resize-none"
      />
      <div className="flex items-center justify-between mt-2 mb-3">
        <span className="text-xs text-text-muted">{feedback.length}/500</span>
      </div>
      <input
        type="text"
        value={contact}
        onChange={e => setContact(e.target.value)}
        placeholder="联系方式（选填，方便我们回复你）"
        maxLength={50}
        className="w-full px-4 py-2.5 rounded-lg border border-border text-text text-sm focus:border-accent focus:outline-none mb-4"
      />
      <button
        onClick={handleSubmit}
        disabled={!feedback.trim() || submitting}
        className={`w-full py-3 rounded-lg font-bold text-sm transition-all ${
          feedback.trim() && !submitting
            ? 'bg-accent text-white hover:bg-primary shadow-md'
            : 'bg-bg-secondary text-text-muted cursor-not-allowed'
        }`}
      >
        {submitting ? '提交中...' : '提交反馈'}
      </button>
    </div>
  );
}

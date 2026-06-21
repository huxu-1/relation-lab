'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const resultKey = searchParams.get('key') || '';
  const [nickname, setNickname] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    if (!nickname.trim()) return;
    setLoading(true);
    try {
      await fetch('/api/payment/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resultKey, nickname: nickname.trim() }),
      });
      setSubmitted(true);
    } catch {
      alert('通知发送失败，请稍后重试或直接联系客服');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-primary text-center mb-6">支付解锁完整报告</h1>

      {/* Steps */}
      <div className="bg-white rounded-xl border border-border p-6 mb-6">
        <h2 className="font-bold text-primary mb-4">付款步骤</h2>
        <ol className="space-y-3 text-text-secondary text-sm">
          <li className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold flex-shrink-0">1</span>
            <span>使用支付宝扫描下方二维码，支付 <strong className="text-accent">¥9.9</strong></span>
          </li>
          <li className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold flex-shrink-0">2</span>
            <span>付款后填写你的昵称，点击"我已付款"通知我们</span>
          </li>
          <li className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold flex-shrink-0">3</span>
            <span>我们确认收款后，会通过微信发送完整报告链接给你</span>
          </li>
        </ol>
      </div>

      {/* QR Code */}
      <div className="bg-white rounded-xl border border-border p-6 mb-6 text-center">
        <h2 className="font-bold text-primary mb-3">支付宝扫码付款</h2>
        <div className="w-48 h-48 mx-auto bg-bg-secondary rounded-lg flex items-center justify-center mb-3">
          <img src="/images/alipay-qr.png" alt="支付宝收款码" className="w-full h-full object-contain" />
        </div>
        <p className="text-xs text-text-muted">请确认付款金额为 ¥9.9</p>
      </div>

      {/* Confirmation form */}
      {!submitted ? (
        <div className="bg-white rounded-xl border border-border p-6">
          <h2 className="font-bold text-primary mb-3">付款确认</h2>
          <input
            type="text"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            placeholder="输入你的昵称（用于识别付款）"
            className="w-full px-4 py-3 rounded-lg border border-border text-text focus:border-accent focus:outline-none text-sm"
          />
          <button
            onClick={handleConfirm}
            disabled={!nickname.trim() || loading}
            className={`w-full mt-4 py-3 rounded-lg font-bold text-base transition-all ${
              nickname.trim() && !loading
                ? 'bg-accent text-white hover:bg-primary shadow-md'
                : 'bg-bg-secondary text-text-muted cursor-not-allowed'
            }`}
          >
            {loading ? '发送中...' : '我已付款'}
          </button>
        </div>
      ) : (
        <div className="bg-primary/5 rounded-xl border border-accent/30 p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586L7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="font-bold text-primary mb-2">付款通知已发送</h2>
          <p className="text-text-secondary text-sm">
            我们已收到你的付款通知，确认收款后会通过微信发送完整报告链接。通常在1-2小时内完成确认。
          </p>
          <Link href="/" className="text-accent hover:underline mt-4 inline-block text-sm">返回首页</Link>
        </div>
      )}
    </div>
  );
}
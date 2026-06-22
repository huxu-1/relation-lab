'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const resultKey = searchParams.get('key') || '';
  const [nickname, setNickname] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const mobile = /android|iphone|ipad|ipod|mobile|phone/.test(ua);
    setIsMobile(mobile);
  }, []);

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
    <div className="max-w-md mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg">
          R
        </div>
        <h1 className="text-xl font-bold text-primary mb-1">支付解锁完整报告</h1>
        <p className="text-sm text-text-muted">¥9.9 · 一次性付费 · 永久查看</p>
      </div>

      {/* Payment Card */}
      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden mb-6">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/70">关系研究所</p>
              <p className="text-lg font-bold">完整深度报告</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/70">应付金额</p>
              <p className="text-2xl font-bold">¥9.9</p>
            </div>
          </div>
        </div>

        {/* QR Code Area */}
        <div className="p-6">
          {isMobile ? (
            <div className="text-center">
              <p className="text-sm text-text-secondary mb-4 font-medium">
                📱 手机用户请按以下步骤操作：
              </p>
              <div className="bg-blue-50 rounded-lg p-3 mb-4 text-left">
                <ol className="space-y-2 text-xs text-text-secondary">
                  <li className="flex gap-2">
                    <span className="font-bold text-primary flex-shrink-0">1.</span>
                    <span>长按下方二维码图片，保存到手机相册</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary flex-shrink-0">2.</span>
                    <span>打开支付宝App，点击"扫一扫"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary flex-shrink-0">3.</span>
                    <span>点击右上角"相册"，选择刚保存的二维码</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary flex-shrink-0">4.</span>
                    <span>确认付款金额为 <strong className="text-accent">¥9.9</strong></span>
                  </li>
                </ol>
              </div>
              <div className="w-52 h-52 mx-auto bg-white rounded-xl border-2 border-primary/20 p-3 shadow-sm">
                <img
                  src="/images/alipay-qr.png"
                  alt="支付宝收款码 - 长按保存"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-text-muted mt-2">↑ 长按二维码保存图片</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-sm text-text-secondary mb-4 font-medium">
                📲 请用手机支付宝扫描下方二维码
              </p>
              <div className="w-52 h-52 mx-auto bg-white rounded-xl border-2 border-primary/20 p-3 shadow-sm">
                <img
                  src="/images/alipay-qr.png"
                  alt="支付宝收款码"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-text-muted mt-2">请确认付款金额为 ¥9.9</p>
            </div>
          )}
        </div>

        {/* Payment Status */}
        <div className="border-t border-border px-6 py-3 bg-bg-secondary/50">
          <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>支付宝安全支付 · 关系研究所</span>
          </div>
        </div>
      </div>

      {/* Confirmation form */}
      {!submitted ? (
        <div className="bg-white rounded-xl border border-border p-6">
          <h2 className="font-bold text-primary mb-2">付款确认</h2>
          <p className="text-xs text-text-muted mb-4">
            付款后请填写昵称并点击下方按钮，我们会尽快确认收款
          </p>
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
            {loading ? '发送中...' : '✓ 我已付款，通知确认'}
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
          <p className="text-text-secondary text-sm leading-relaxed">
            我们已收到你的付款通知，确认收款后会通过微信发送完整报告链接。<br />
            通常在1-2小时内完成确认。
          </p>
          <Link href="/" className="text-accent hover:underline mt-4 inline-block text-sm">返回首页</Link>
        </div>
      )}

      {/* Trust Footer */}
      <div className="mt-6 text-center">
        <p className="text-xs text-text-muted leading-relaxed">
          🔒 支付通过支付宝官方渠道完成，安全可靠<br />
          完整报告包含：深度分析、行为特征、改善建议、兼容性说明
        </p>
      </div>
    </div>
  );
}

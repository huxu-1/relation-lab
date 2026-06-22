'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// 支付宝收款链接 - 手机点击直接跳转
const ALIPAY_URL = 'https://qr.alipay.com/paipai/personal.htm';

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

  // 手机端点击跳转支付宝
  const handleAlipayClick = () => {
    const alipayAppUrl = `alipays://platformapi/startapp?saId=10000007&qrcode=${encodeURIComponent(ALIPAY_URL)}`;
    const startTime = Date.now();

    // 尝试打开支付宝App
    window.location.href = alipayAppUrl;

    // 2秒后检测是否还在当前页面（App未安装）
    setTimeout(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed < 3000) {
        // App未安装，跳转网页版收银台
        window.location.href = ALIPAY_URL;
      }
    }, 2000);
  };

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
            /* 手机端：点击直接跳转支付宝 */
            <div className="text-center">
              <button
                onClick={handleAlipayClick}
                className="w-full block"
              >
                <div className="w-52 h-52 mx-auto bg-white rounded-xl border-2 border-primary/20 p-3 shadow-sm relative overflow-hidden">
                  <img
                    src="/images/alipay-qr.png"
                    alt="支付宝收款码 - 点击付款"
                    className="w-full h-full object-contain"
                  />
                  {/* 点击遮罩提示 */}
                  <div className="absolute inset-0 bg-primary/0 hover:bg-primary/10 flex items-center justify-center transition-all rounded-xl">
                    <div className="opacity-0 hover:opacity-100 transition-opacity bg-white/90 rounded-lg px-3 py-2 shadow-md">
                      <p className="text-xs font-bold text-primary">点击付款 →</p>
                    </div>
                  </div>
                </div>
              </button>

              {/* 支付宝跳转按钮 */}
              <button
                onClick={handleAlipayClick}
                className="w-full mt-4 py-3 rounded-lg bg-[#1677FF] text-white font-bold text-base hover:bg-[#0e5fd8] transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93C7.05 19.44 4 16.08 4 12c0-.61.08-1.21.21-1.78L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-1.81-1.32-3.47-2.91-4.39-.49-.27-1.04-.42-1.6-.42-.56 0-1.11.15-1.6.42-.42.24-.88.38-1.35.38-.47 0-.93-.14-1.35-.38-.49-.27-1.04-.42-1.6-.42-.56 0-1.11.15-1.6.42-.42.24-.88.38-1.35.38-.47 0-.93-.14-1.35-.38-.49-.27-1.04-.42-1.6-.42v2c.56 0 1.11.15 1.6.42.42.24.88.38 1.35.38.47 0 .93-.14 1.35-.38.49-.27 1.04-.42 1.6-.42.56 0 1.11.15 1.6.42.42.24.88.38 1.35.38.47 0 .93-.14 1.35-.38.49-.27 1.04-.42 1.6-.42v-2c-.56 0-1.11.15-1.6.42-.42.24-.88.38-1.35.38-.47 0-.93-.14-1.35-.38-.49-.27-1.04-.42-1.6-.42z" />
                </svg>
                点击打开支付宝付款
              </button>
              <p className="text-xs text-text-muted mt-2">
                点击后将自动打开支付宝，确认付款金额为 ¥9.9
              </p>

              {/* 备用：长按识别 */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-text-muted mb-2">无法跳转？可长按下方二维码保存后扫码：</p>
                <div className="w-32 h-32 mx-auto bg-white rounded-lg border border-border p-2">
                  <img
                    src="/images/alipay-qr.png"
                    alt="支付宝收款码 - 长按保存"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* 电脑端：显示二维码扫码 */
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

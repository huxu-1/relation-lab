'use client';

import { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';

interface ShareCardProps {
  assessmentTitle: string;
  profileName: string;
  sharePhrase: string;
  siteUrl: string;
}

export default function ShareCard({ assessmentTitle, profileName, sharePhrase, siteUrl }: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    QRCode.toDataURL(siteUrl, {
      width: 120,
      margin: 1,
      color: { dark: '#2D3340', light: '#ffffff' },
    }).then(setQrDataUrl).catch(() => {});
  }, [siteUrl]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = siteUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSaveCard = async () => {
    if (!qrDataUrl) return;
    setSaving(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas not supported');

      // 卡片尺寸
      const W = 750;
      const H = 1060;
      canvas.width = W;
      canvas.height = H;

      // 背景
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, W, H);

      // 头部渐变背景
      const grad = ctx.createLinearGradient(0, 0, W, 200);
      grad.addColorStop(0, '#2D3340');
      grad.addColorStop(1, '#4A5568');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, 200);

      // 头部文字
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.font = '24px sans-serif';
      ctx.fillText('关系研究所', W / 2, 80);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText('专业情感关系测评', W / 2, 130);

      // 主体内容
      ctx.fillStyle = '#9CA3AF';
      ctx.font = '26px sans-serif';
      ctx.fillText(assessmentTitle, W / 2, 320);

      ctx.fillStyle = '#4B5563';
      ctx.font = '30px sans-serif';
      ctx.fillText('你的结果是', W / 2, 400);

      ctx.fillStyle = '#2D3340';
      ctx.font = 'bold 64px sans-serif';
      ctx.fillText(profileName.length > 8 ? profileName.slice(0, 8) : profileName, W / 2, 500);

      // 分割线
      ctx.strokeStyle = '#E5E7EB';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(100, 600);
      ctx.lineTo(W - 100, 600);
      ctx.stroke();

      // 二维码
      const qrImg = new Image();
      qrImg.crossOrigin = 'anonymous';
      const qrLoaded = new Promise<void>((resolve) => {
        qrImg.onload = () => resolve();
        qrImg.onerror = () => resolve();
        qrImg.src = qrDataUrl;
      });
      await qrLoaded;
      const qrSize = 200;
      ctx.drawImage(qrImg, W / 2 - qrSize - 20, 660, qrSize, qrSize);

      // 二维码旁边文字
      ctx.textAlign = 'left';
      ctx.fillStyle = '#4B5563';
      ctx.font = '28px sans-serif';
      ctx.fillText('扫码来测一测', W / 2 + 20, 740);
      ctx.fillStyle = '#9CA3AF';
      ctx.font = '24px sans-serif';
      ctx.fillText('guanxiyanjiusuo.cn', W / 2 + 20, 790);

      // 底部水印
      ctx.textAlign = 'center';
      ctx.fillStyle = '#D1D5DB';
      ctx.font = '22px sans-serif';
      ctx.fillText('— 关系研究所 —', W / 2, H - 50);

      // 下载
      const link = document.createElement('a');
      link.download = `关系研究所-${profileName}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch {
      alert('保存失败，请截图分享');
    }
    setSaving(false);
  };

  return (
    <div className="mt-8">
      <div className="text-center mb-5">
        <h2 className="text-lg font-bold text-primary mb-1">分享你的结果</h2>
        <p className="text-sm text-text-muted">{sharePhrase}</p>
      </div>

      {/* 分享卡片 - 可截图保存 */}
      <div className="flex justify-center mb-4">
        <div
          ref={cardRef}
          className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg"
          style={{ backgroundColor: '#ffffff' }}
        >
          {/* 卡片头部 */}
          <div
            className="px-6 py-4 text-white text-center"
            style={{ background: 'linear-gradient(135deg, #2D3340 0%, #4A5568 100%)' }}
          >
            <p className="text-xs opacity-80 mb-1">关系研究所</p>
            <p className="text-sm font-bold">专业情感关系测评</p>
          </div>

          {/* 卡片主体 */}
          <div className="px-6 py-6 text-center">
            <p className="text-sm text-gray-500 mb-2">{assessmentTitle}</p>
            <p className="text-base text-gray-700 mb-3">你的结果是</p>
            <p className="text-2xl font-bold mb-4" style={{ color: '#2D3340' }}>
              {profileName}
            </p>
            <div className="border-t border-gray-200 pt-4 flex items-center justify-center gap-3">
              {qrDataUrl && (
                <img src={qrDataUrl} alt="二维码" className="w-20 h-20" />
              )}
              <div className="text-left">
                <p className="text-xs text-gray-600 font-medium">扫码来测一测</p>
                <p className="text-xs text-gray-400">guanxiyanjiusuo.cn</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex gap-3">
        <button
          onClick={handleCopyLink}
          className="flex-1 py-3 rounded-lg bg-white border border-border text-primary font-bold text-sm hover:bg-bg-secondary transition-colors flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586L7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              已复制
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2M8 5a2 2 0 002 2h4a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              复制链接
            </>
          )}
        </button>
        <button
          onClick={handleSaveCard}
          disabled={saving}
          className="flex-1 py-3 rounded-lg bg-accent text-white font-bold text-sm hover:bg-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {saving ? (
            <>保存中...</>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              保存卡片
            </>
          )}
        </button>
      </div>
      <p className="text-xs text-text-muted text-center mt-3">
        保存卡片图片后，可直接分享到朋友圈或发送给好友
      </p>
    </div>
  );
}

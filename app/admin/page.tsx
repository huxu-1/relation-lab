'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [secret, setSecret] = useState('');
  const [resultKey, setResultKey] = useState('');
  const [unlockLink, setUnlockLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    if (secret.trim()) setAuthenticated(true);
  };

  const handleConfirm = async () => {
    if (!resultKey.trim()) return;
    setLoading(true);
    try {
      const resp = await fetch('/api/admin/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resultKey: resultKey.trim(), secret: secret.trim() }),
      });
      const data = await resp.json();
      if (data.success) {
        setUnlockLink(data.unlockLink);
      } else {
        alert(data.error || '确认失败');
      }
    } catch {
      alert('请求失败，请稍后重试');
    }
    setLoading(false);
  };

  if (!authenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-primary text-center mb-6">管理后台登录</h1>
        <input
          type="password"
          value={secret}
          onChange={e => setSecret(e.target.value)}
          placeholder="输入管理密码"
          className="w-full px-4 py-3 rounded-lg border border-border text-text focus:border-accent focus:outline-none"
        />
        <button
          onClick={handleLogin}
          disabled={!secret.trim()}
          className="w-full mt-4 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-light disabled:bg-bg-secondary disabled:text-text-muted"
        >
          登录
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-primary mb-6">订单确认</h1>

      <div className="bg-white rounded-xl border border-border p-6 mb-6">
        <h2 className="font-bold text-primary mb-3">确认收款并生成解锁链接</h2>
        <p className="text-sm text-text-muted mb-4">
          输入Server酱通知中的结果Key，确认收款后生成解锁链接，通过微信发给用户。
        </p>
        <input
          type="text"
          value={resultKey}
          onChange={e => setResultKey(e.target.value)}
          placeholder="输入结果Key（如：result-attachment-style-1234567890）"
          className="w-full px-4 py-3 rounded-lg border border-border text-text focus:border-accent focus:outline-none text-sm"
        />
        <button
          onClick={handleConfirm}
          disabled={!resultKey.trim() || loading}
          className="w-full mt-4 py-3 rounded-lg bg-accent text-white font-bold hover:bg-primary disabled:bg-bg-secondary disabled:text-text-muted"
        >
          {loading ? '生成中...' : '确认并生成解锁链接'}
        </button>
      </div>

      {unlockLink && (
        <div className="bg-primary/5 rounded-xl border border-accent/30 p-6">
          <h2 className="font-bold text-primary mb-2">解锁链接已生成</h2>
          <p className="text-sm text-text-muted mb-3">复制以下链接通过微信发送给用户：</p>
          <div className="bg-white rounded-lg border border-border p-3 text-sm text-accent break-all select-all">
            {unlockLink}
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(unlockLink)}
            className="w-full mt-3 py-2 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary-light"
          >
            复制链接
          </button>
        </div>
      )}
    </div>
  );
}
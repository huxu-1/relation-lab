'use client';

export default function WeChatConsultation() {
  return (
    <div className="mt-8">
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border p-6 sm:p-8">
        <div className="text-center mb-5">
          <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-primary flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.83-1.55c.84.24 1.74.37 2.67.37h.27a5.5 5.5 0 015.23-3.5c.17 0 .33.01.5.03.16-.43.25-.88.25-1.35 0-3.31-3.36-6-7.5-6H9.5zm-3 4.5a1 1 0 110 2 1 1 0 010-2zm5 0a1 1 0 110 2 1 1 0 010-2zM15 12c-3.59 0-6.5 2.46-6.5 5.5S11.41 23 15 23c.74 0 1.44-.12 2.09-.33L19.5 24l-.5-2.25c1.5-.94 2.5-2.41 2.5-4.25 0-3.04-2.91-5.5-6.5-5.5zm-2 4a.75.75 0 110 1.5.75.75 0 010-1.5zm4 0a.75.75 0 110 1.5.75.75 0 010-1.5z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-primary mb-1">一对一深度咨询</h2>
          <p className="text-sm text-text-muted">需要更专业的分析？添加微信获取个性化建议</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* 微信二维码 */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl border-2 border-border p-2 shadow-sm">
              <img
                src="/images/wechat-qr.png"
                alt="微信二维码"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-text-muted text-xs text-center">微信二维码<br/>待上传</div>';
                  }
                }}
              />
            </div>
            <p className="text-xs text-text-muted text-center mt-2">扫码添加微信</p>
          </div>

          {/* 咨询内容 */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              测评结果揭示了你的关系模式，但每个人的情况都是独特的。如果你在亲密关系中遇到困惑，可以预约一对一深度咨询。
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                <span>深度解读你的测评结果，结合实际情况分析</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                <span>针对你的具体困境给出可执行的建议</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                <span>隐私保密，专业且真诚</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

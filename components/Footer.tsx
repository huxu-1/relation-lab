export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="text-white font-bold mb-2">关系研究所</h3>
            <p className="text-white/60 leading-relaxed">
              基于心理学理论的专业情感关系测评平台，帮助你深入了解自己和伴侣的关系模式。
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">专业依据</h3>
            <ul className="text-white/60 space-y-1">
              <li>Bartholomew依恋模型</li>
              <li>Chapman爱的语言理论</li>
              <li>关系动力学研究</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">声明</h3>
            <p className="text-white/60 leading-relaxed">
              测评结果仅供参考，不构成专业心理咨询建议。如有严重情感困扰，请寻求专业心理咨询师帮助。
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 pt-4 text-center text-xs text-white/40">
          © 2026 关系研究所 · 基于心理学研究的专业测评
        </div>
      </div>
    </footer>
  );
}
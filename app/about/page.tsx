import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '关于我们',
  description: '关系研究所 - 基于心理学理论的专业情感关系测评平台，帮助你深入了解自己和伴侣的关系模式。',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-2xl">
          R
        </div>
        <h1 className="text-3xl font-bold text-primary mb-3">关于关系研究所</h1>
        <p className="text-text-secondary leading-relaxed">
          我们致力于将专业的心理学研究成果，转化为每个人都能使用的情感关系测评工具。
        </p>
      </div>

      {/* Mission */}
      <section className="bg-white rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-primary mb-3">我们的使命</h2>
        <p className="text-text-secondary leading-relaxed mb-3">
          每个人都值得拥有健康的情感关系，但很多人对自己在关系中的行为模式缺乏清晰认知。
          关系研究所的目标，是帮助你用科学的方法了解自己，发现关系中的潜在问题，并提供可操作的改善方向。
        </p>
        <p className="text-text-secondary leading-relaxed">
          我们相信，自我觉察是改变的第一步。通过专业测评，你可以更客观地认识自己的依恋风格、
          沟通模式和情感需求，从而做出更明智的关系选择。
        </p>
      </section>

      {/* Theory */}
      <section className="bg-white rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-primary mb-4">专业理论依据</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
            <div>
              <p className="font-medium text-text">Bartholomew 依恋模型</p>
              <p className="text-sm text-text-muted">基于Bowlby依恋理论，从自我价值和他人可信度两个维度划分四种依恋风格</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
            <div>
              <p className="font-medium text-text">Chapman 爱的五种语言</p>
              <p className="text-sm text-text-muted">由Gary Chapman提出，识别每个人表达和接收爱的核心方式</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
            <div>
              <p className="font-medium text-text">Sternberg 爱情三角理论</p>
              <p className="text-sm text-text-muted">Robert Sternberg提出，从亲密、激情、承诺三个维度分析爱情构成</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
            <div>
              <p className="font-medium text-text">Gottman 冲突研究</p>
              <p className="text-sm text-text-muted">基于John Gottman 40年关系研究，识别健康与不健康的冲突模式</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-primary mb-4">测评流程</h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="w-7 h-7 rounded-full bg-primary text-white text-sm flex items-center justify-center font-bold flex-shrink-0">1</span>
            <div>
              <p className="font-medium text-text">选择测评</p>
              <p className="text-sm text-text-muted">根据你的需求选择合适的测评主题</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="w-7 h-7 rounded-full bg-primary text-white text-sm flex items-center justify-center font-bold flex-shrink-0">2</span>
            <div>
              <p className="font-medium text-text">如实作答</p>
              <p className="text-sm text-text-muted">根据真实感受选择最符合你的选项，没有对错之分</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="w-7 h-7 rounded-full bg-primary text-white text-sm flex items-center justify-center font-bold flex-shrink-0">3</span>
            <div>
              <p className="font-medium text-text">免费查看基础结果</p>
              <p className="text-sm text-text-muted">立即获得你的类型画像和各维度得分</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="w-7 h-7 rounded-full bg-accent text-white text-sm flex items-center justify-center font-bold flex-shrink-0">4</span>
            <div>
              <p className="font-medium text-text">解锁完整报告（¥9.9）</p>
              <p className="text-sm text-text-muted">获取深度分析、行为特征、改善建议和兼容性说明</p>
            </div>
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section className="bg-white rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-primary mb-4">常见问题</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium text-text mb-1">测评结果准吗？</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              我们的测评基于经过学术验证的心理学理论模型。结果的准确性取决于你作答时的诚实程度——
              请根据真实感受选择，而非你“希望”的自己。
            </p>
          </div>
          <div>
            <p className="font-medium text-text mb-1">为什么要付费？</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              基础结果完全免费，帮助你快速了解自己的类型。完整报告包含深度分析、行为特征、
              改善建议等内容，9.9元用于支持平台持续运营和测评内容的持续优化。
            </p>
          </div>
          <div>
            <p className="font-medium text-text mb-1">我的数据安全吗？</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              测评结果仅存储在你的浏览器本地，我们不会收集你的个人信息。
              付费确认仅使用昵称识别，不涉及任何敏感信息。
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-primary/5 rounded-xl border border-border p-6 mb-8">
        <h2 className="text-lg font-bold text-primary mb-2">重要声明</h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          关系研究所提供的测评结果仅供参考和自我探索用途，不构成专业心理咨询或医学诊断建议。
          如你有严重的情感困扰或心理问题，请寻求专业心理咨询师或医疗机构帮助。
          测评结果不应对你的人际关系决策产生决定性影响。
        </p>
      </section>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-light transition-colors shadow-md"
        >
          开始测评
        </Link>
      </div>
    </div>
  );
}

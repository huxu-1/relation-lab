import { assessments } from '@/data/assessments';
import AssessmentCard from '@/components/AssessmentCard';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '关系研究所',
    description: '基于心理学理论的专业情感关系测评平台',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
      description: '免费完整深度报告',
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
          用科学方式，读懂你的关系
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          基于心理学理论的专业测评，帮你深入理解依恋模式、沟通方式、关系质量——不再凭感觉猜测，而是用数据看清真相。
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-text-muted">
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586L7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            免费完整报告
          </span>
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586L7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            心理学理论支撑
          </span>
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586L7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            8-10分钟完成
          </span>
        </div>
      </section>

      {/* Assessment Cards */}
      <section>
        <h2 className="text-xl font-bold text-primary mb-6">全部专业测评</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {assessments.map(assessment => (
            <AssessmentCard key={assessment.id} assessment={assessment} />
          ))}
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="mt-8 mb-8">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 sm:p-8 border border-pink-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">需要一对一专业帮助？</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                如果测评结果让你感到困惑，或想深入解决关系问题，我们提供专业心理咨询师一对一服务
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586L7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  情感关系、家庭关系、人际关系咨询
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586L7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  电话/微信/邮件多种联系方式
                </li>
              </ul>
            </div>
            <a
              href="/consultation"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              了解咨询服务
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="mt-12 bg-bg-secondary rounded-xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-primary mb-1">学术理论支撑</h3>
            <p className="text-sm text-text-muted">基于Bartholomew、Chapman等经典心理学研究模型</p>
          </div>
          <div>
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-primary mb-1">隐私安全保障</h3>
            <p className="text-sm text-text-muted">测评数据完全匿名，不收集任何个人身份信息</p>
          </div>
          <div>
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L0 14h11v7l13-11h-3z" />
              </svg>
            </div>
            <h3 className="font-bold text-primary mb-1">即时结果反馈</h3>
            <p className="text-sm text-text-muted">完成测评后立即获取完整深度报告，全部免费</p>
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Phone, Mail, Calendar } from 'lucide-react';

export default function ConsultationPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'relationship',
      title: '情感关系咨询',
      description: '解决恋爱、婚姻中的困惑和问题',
      icon: '',
      price: '¥200/小时'
    },
    {
      id: 'family',
      title: '家庭关系咨询',
      description: '处理亲子关系、婆媳关系等家庭问题',
      icon: '🏠',
      price: '¥200/小时'
    },
    {
      id: 'personal',
      title: '个人成长咨询',
      description: '自我认知、情绪管理、职业规划等',
      icon: '',
      price: '¥150/小时'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">返回首页</span>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            一对一心理咨询
          </h1>
          <div className="w-20"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            专业心理咨询服务
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们提供专业的一对一心理咨询服务，帮助您解决情感、家庭和成长中的各种困惑
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedService === service.id
                  ? 'ring-2 ring-pink-500 shadow-lg'
                  : 'hover:scale-105'
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-pink-600 font-semibold">{service.price}</div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            预约方式
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">电话咨询</h4>
              <p className="text-gray-600">138-xxxx-xxxx</p>
              <p className="text-sm text-gray-500 mt-1">工作日 9:00-18:00</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">微信咨询</h4>
              <p className="text-gray-600">扫描二维码添加</p>
              <p className="text-sm text-gray-500 mt-1">随时留言回复</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">邮件咨询</h4>
              <p className="text-gray-600">contact@example.com</p>
              <p className="text-sm text-gray-500 mt-1">24小时内回复</p>
            </div>
          </div>

          {/* WeChat QR Code Placeholder */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-gray-100 rounded-lg p-6">
              <div className="w-48 h-48 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">微信二维码</span>
              </div>
              <p className="text-gray-600 font-medium">扫码添加咨询师微信</p>
              <p className="text-sm text-gray-500 mt-1">备注"心理咨询"优先通过</p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            咨询流程
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: '预约咨询', desc: '通过电话/微信/邮件联系' },
              { step: '2', title: '初步沟通', desc: '了解您的基本情况和需求' },
              { step: '3', title: '确定方案', desc: '制定个性化咨询方案' },
              { step: '4', title: '开始咨询', desc: '按时进行一对一咨询' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-yellow-800">
            <strong>温馨提示：</strong>心理咨询需要建立在相互信任的基础上，我们会严格保护您的隐私。所有咨询内容将严格保密。
          </p>
        </div>
      </main>
    </div>
  );
}

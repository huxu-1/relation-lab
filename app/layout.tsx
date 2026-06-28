import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '关系研究所 - 专业情感关系测评平台',
    template: '%s | 关系研究所',
  },
  description: '基于心理学理论的专业情感关系测评，包括依恋风格、爱的语言、爱情三角、冲突模式、共情能力等多维度评估，帮助你深入了解自己和伴侣的关系模式。全部免费，完成测评即可获取完整深度报告。',
  keywords: ['情感测评', '心理测评', '依恋风格', '爱的语言', '关系满意度', '共情能力', '爱情三角', '冲突模式', '择偶画像', '分手修复', '关系研究所'],
  openGraph: {
    title: '关系研究所 - 专业情感关系测评平台',
    description: '基于心理学理论的专业情感关系测评，帮助你深入了解关系模式',
    type: 'website',
    locale: 'zh_CN',
    siteName: '关系研究所',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col bg-bg text-text antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
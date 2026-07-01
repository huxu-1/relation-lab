import type { Metadata } from 'next';
import Link from 'next/link';
import { bookRecommendations, BookRecommendation as BookType } from '@/data/books';
import { assessments } from '@/data/assessments';

export const metadata: Metadata = {
  title: '延伸阅读与咨询',
  description: '关系研究所推荐的心理学与情感关系专业书籍，以及一对一深度咨询服务。',
};

// 合并所有书籍，去重
function getAllBooks(): { book: BookType; assessmentTitle: string; assessmentId: string }[] {
  const seen = new Set<string>();
  const result: { book: BookType; assessmentTitle: string; assessmentId: string }[] = [];
  
  assessments.forEach(a => {
    const books = bookRecommendations[a.id] || [];
    books.forEach(book => {
      if (!seen.has(book.title)) {
        seen.add(book.title);
        result.push({ book, assessmentTitle: a.title, assessmentId: a.id });
      }
    });
  });
  
  return result;
}

export default function BooksPage() {
  const allBooks = getAllBooks();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary flex items-center justify-center text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">延伸阅读与咨询</h1>
        <p className="text-text-secondary leading-relaxed max-w-lg mx-auto">
          基于心理学理论的专业书籍推荐，帮助你更深入地理解情感关系。同时提供一对一深度咨询服务。
        </p>
      </div>

      {/* Books List */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-primary mb-5">推荐书籍</h2>
        <div className="space-y-4">
          {allBooks.map((item, i) => (
            <a
              key={i}
              href={item.book.jdUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl border border-border p-5 hover:shadow-md hover:border-accent transition-all"
            >
              <h3 className="font-bold text-accent text-base mb-1 hover:underline">{item.book.title}</h3>
              <p className="text-xs text-text-muted mb-2">{item.book.author}</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">{item.book.description}</p>
              <span className="inline-block text-xs bg-bg-secondary px-2 py-1 rounded text-text-muted">
                关联测评：{item.assessmentTitle}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* WeChat Consultation */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border p-6 sm:p-8 mb-8">
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
          <div className="flex-shrink-0">
            <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl border-2 border-border p-2 shadow-sm">
              <img
                src="/images/wechat-qr.png"
                alt="微信二维码"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-text-muted text-center mt-2">扫码添加微信</p>
          </div>

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
      </section>

      {/* Back */}
      <div className="text-center">
        <Link href="/" className="text-accent hover:underline text-sm">
          ← 返回全部测评
        </Link>
      </div>
    </div>
  );
}

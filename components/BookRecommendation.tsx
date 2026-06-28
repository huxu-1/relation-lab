'use client';

import { BookRecommendation as BookType } from '@/data/books';

export default function BookRecommendation({ books }: { books: BookType[] }) {
  if (!books || books.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="text-center mb-5">
        <h2 className="text-lg font-bold text-primary mb-1">延伸阅读</h2>
        <p className="text-sm text-text-muted">基于你的测评结果，推荐以下专业书籍深入探索</p>
      </div>
      <div className="space-y-4">
        {books.map((book, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-border p-4 sm:p-5 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow"
          >
            {/* 书籍信息 */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-primary text-base mb-1">{book.title}</h3>
              <p className="text-xs text-text-muted mb-2">{book.author}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{book.description}</p>
            </div>
            {/* 购买按钮 */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href={book.jdUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#E1251B] text-white text-sm font-bold hover:bg-[#c91d14] transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1a1 1 0 000-2H3zM5 4a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm2 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" />
                </svg>
                京东购买
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

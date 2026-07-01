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
          <a
            key={i}
            href={book.jdUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl border border-border p-4 sm:p-5 hover:shadow-md hover:border-accent transition-all"
          >
            <h3 className="font-bold text-accent text-base mb-1 hover:underline">{book.title}</h3>
            <p className="text-xs text-text-muted mb-2">{book.author}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{book.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

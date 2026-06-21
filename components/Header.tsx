import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
            R
          </div>
          <div>
            <h1 className="text-lg font-bold text-primary leading-tight group-hover:text-accent transition-colors">
              关系研究所
            </h1>
            <p className="text-xs text-text-muted leading-tight hidden sm:block">
              专业情感关系测评平台
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-text-secondary">
          <Link href="/" className="hover:text-primary transition-colors font-medium">
            全部测评
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            关于我们
          </Link>
        </nav>
      </div>
    </header>
  );
}
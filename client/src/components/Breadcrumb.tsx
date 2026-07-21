import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-slate-900 border-b border-cyan-400/20 py-4 px-4">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/">
            <a className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
          </Link>
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-gray-600" />
              {idx === items.length - 1 ? (
                <span className="text-gray-300 font-semibold">{item.label}</span>
              ) : (
                <Link href={item.href}>
                  <a className="text-gray-400 hover:text-cyan-400 transition-colors">{item.label}</a>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

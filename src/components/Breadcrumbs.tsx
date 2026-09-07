import { Link, useRouter } from '../router/RouterContext';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { language } = useRouter();
  const homeLabel = language === 'hi' ? 'मुख्य पृष्ठ' : 'Home';

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-sm font-medium text-slate-500 overflow-x-auto whitespace-nowrap py-1">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 hover:text-emerald-700 text-slate-600 transition-colors"
      >
        <Home className="w-4 h-4 text-slate-400" />
        <span>{homeLabel}</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <div key={idx} className="inline-flex items-center">
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400 flex-shrink-0" />
            {isLast || !item.path ? (
              <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-emerald-700 text-slate-600 transition-colors truncate max-w-xs"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}

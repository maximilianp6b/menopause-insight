import React from 'react';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-slate-600" />
          </div>
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl font-serif font-bold text-slate-900 tracking-tighter">
              Menopause<span className="text-brand-600">Insight</span>
            </span>
          </Link>
        </div>

        {/* Removed Nav Links - Keep users focused on the article */}

        <div className="flex items-center space-x-6">
          <div className="hidden md:block text-xs font-bold text-slate-500 uppercase tracking-widest">
            Advertorial
          </div>
          <Search className="w-5 h-5 text-slate-400" />
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-slate-800" />
            <span className="absolute -top-2 -right-2 bg-marketing-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              1
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
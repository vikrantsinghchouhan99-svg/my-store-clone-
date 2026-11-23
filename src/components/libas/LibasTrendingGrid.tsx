'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLibas } from '@/context/LibasContext';
import { LibasProductCard } from '@/components/libas/LibasProductCard';
import { ArrowRight } from 'lucide-react';

export function LibasTrendingGrid() {
  const { products } = useLibas();
  const [tab, setTab] = useState<'All' | 'Suits' | 'Kurtas' | 'Sarees' | 'Plus-Size'>('All');

  const filtered = products.filter((p) => {
    if (tab === 'All') return true;
    if (tab === 'Plus-Size') return p.isExtraLove || p.category === 'Plus-Size';
    return p.category === tab;
  });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Category switcher tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E6E6E6] gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#71006A]">
              CURATED SELECTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#252525] mt-0.5">
              Trending Celebratory Ensembles
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {(['All', 'Suits', 'Kurtas', 'Sarees', 'Plus-Size'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                  tab === t
                    ? 'bg-[#71006A] text-white shadow-xs'
                    : 'bg-[#F5F5F5] text-[#4D4D4D] hover:bg-[#E6E6E6] hover:text-[#252525]'
                }`}
              >
                {t === 'Plus-Size' ? 'ExtraLove (3XL-6XL)' : t}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filtered.slice(0, 8).map((product) => (
            <LibasProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            href="/suits"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-[#71006A] text-[#71006A] hover:bg-[#71006A] hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <span>View Complete Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

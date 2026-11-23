'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function LibasFestiveBanners() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Banner 1: Wedding & Royal Festive */}
          <div className="relative rounded-2xl overflow-hidden bg-[#71006A] text-white p-8 sm:p-10 flex flex-col justify-between min-h-[320px] group shadow-md">
            {/* Background Image overlay */}
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
                alt="Wedding Edit"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#71006A] via-[#71006A]/80 to-transparent z-1" />

            <div className="relative z-10 space-y-2 max-w-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-[#FF8C91] text-[10px] font-bold tracking-widest uppercase font-mono">
                <Sparkles className="w-3 h-3" /> ROYAL CEREMONY
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
                The Wedding & Grand Soirée Edit
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Opulent micro-velvet, pure Chanderi silk, and hand-embroidered zari ensembles created for unforgettable nuptials.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <Link
                href="/suits?occasion=Wedding"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#71006A] text-xs font-bold tracking-wider uppercase hover:bg-[#FAF7F9] transition-all shadow-md"
              >
                <span>Shop Wedding Suits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Banner 2: ExtraLove Plus Size Exclusive */}
          <div className="relative rounded-2xl overflow-hidden bg-[#252525] text-white p-8 sm:p-10 flex flex-col justify-between min-h-[320px] group shadow-md">
            <div className="absolute inset-0 z-0 opacity-35 group-hover:opacity-45 transition-opacity">
              <img
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
                alt="ExtraLove Collection"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#252525] via-[#252525]/85 to-transparent z-1" />

            <div className="relative z-10 space-y-2 max-w-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF8C91]/30 text-[#FF8C91] text-[10px] font-bold tracking-widest uppercase font-mono">
                EXTRALOVE • 3XL TO 6XL
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
                Fashion Has No Size Boundaries
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Dedicated plus-size silhouettes designed with custom drape, stretch linings, and flattering cuts for fuller curves.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <Link
                href="/plus-size"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF8C91] text-[#71006A] text-xs font-bold tracking-wider uppercase hover:bg-white transition-all shadow-md"
              >
                <span>Explore ExtraLove (3XL-6XL)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

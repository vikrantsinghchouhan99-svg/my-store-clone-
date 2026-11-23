'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Percent, Heart, Shield } from 'lucide-react';

export function LibasHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F9] border-b border-[#E6E6E6]">
      {/* Decorative Brand Accent Gradient */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#71006A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FF8C91]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#71006A]/10 text-[#71006A] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#71006A]" />
              <span>THE FESTIVE EDIT 2026 • UP TO 60% OFF</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#252525] leading-[1.08] tracking-tight">
              Grace in Every Thread. <br />
              <span className="italic font-light text-[#71006A]">Timeless Festive Grandeur.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#4D4D4D] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover exquisitely tailored Anarkalis, Sharara sets, sheer silk organza sarees, and breathable pure cotton kurtas crafted for celebratory moments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/suits"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#71006A] hover:bg-[#5C0056] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Shop Festive Suits</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/sarees"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-[#71006A] text-[#71006A] hover:bg-[#71006A]/5 font-bold text-xs uppercase tracking-wider transition-all text-center"
              >
                Explore Sarees
              </Link>

              <Link
                href="/sale"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#FF8C91] hover:bg-[#ff7a80] text-[#71006A] font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Percent className="w-3.5 h-3.5" />
                <span>Flat 50% Off</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E6E6E6] max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-serif font-bold text-[#71006A]">10M+</p>
                <p className="text-[11px] text-[#737373]">Satisfied Customers</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#71006A]">XS - 6XL</p>
                <p className="text-[11px] text-[#737373]">Inclusive Fit For All</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#71006A]">100%</p>
                <p className="text-[11px] text-[#737373]">Pure Ethnic Craft</p>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Primary Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white aspect-[3/4] bg-[#F5F5F5]">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
                  alt="Libas Festive Anarkali"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
                />
              </div>

              {/* Floating Plum Spotlight Card */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl border border-[#E6E6E6] shadow-xl max-w-[210px] hidden sm:block">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#71006A] font-extrabold">
                  Trending Pick
                </span>
                <p className="text-xs font-bold text-[#252525] line-clamp-1 mt-0.5">
                  Purple Silk Anarkali Set
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xs font-bold text-[#71006A]">₹3,499</span>
                  <span className="text-[10px] text-[#999999] line-through">₹6,999</span>
                  <span className="text-[10px] text-emerald-700 font-bold">50% OFF</span>
                </div>
              </div>

              {/* Floating ExtraLove Badge */}
              <div className="absolute top-4 -right-4 bg-[#71006A] text-white px-3.5 py-1.5 rounded-full shadow-lg text-[10px] font-bold tracking-wider uppercase hidden sm:block">
                ExtraLove: XS to 6XL
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

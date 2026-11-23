'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Award, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

export default function AboutPage() {
  const signaturePieces = LIBAS_PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Story Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
            THE ATELIER & PHILOSOPHY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#252525] leading-tight">
            Crafting the Soul of Contemporary Indian Fashion
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] leading-relaxed max-w-2xl mx-auto">
            Born from a deep reverence for India&apos;s rich handloom traditions, Libas bridges ancestral textile heritage with fresh, effortless silhouettes designed for modern women across the globe.
          </p>
        </div>

        {/* Hero Visual Banner Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 items-center">
          <div className="md:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-[#F5F5F5] shadow-lg border border-[#E6E6E6]">
            <img
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
              alt="Indian Craftsmanship"
              className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
            />
          </div>
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-bold">
              SINCE 1993
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#252525]">
              Every Stitch Tells An Unhurried Story
            </h2>
            <p className="text-xs text-[#4D4D4D] leading-relaxed">
              We collaborate with over 2,500 master artisans across Jaipur, Chanderi, Lucknow, and Varanasi. Every motif, gota patti accent, and wooden block print is rendered with meticulous precision, honouring slow fashion and ethical artisan communities.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-[#E6E6E6]">
              <div>
                <p className="text-2xl font-serif font-bold text-[#71006A]">30+ Yrs</p>
                <p className="text-[11px] text-[#737373]">Of Ethnic Craft Heritage</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#71006A]">10M+</p>
                <p className="text-[11px] text-[#737373]">Women Dressed Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Craft */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-bold">
              OUR TEXTILE ROOTS
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#252525] mt-1">
              Hallmark Crafts & Artistry
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#252525]">Chanderi Silk Weaving</h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                Handwoven diaphanous silks interwoven with fine gold and silver zari yarns for lightweight festive shimmer.
              </p>
            </div>

            <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#252525]">Jaipuri Hand-Block Prints</h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                Vegetable dyes transferred onto pure cambric cotton using hand-carved teakwood blocks in Sanganer and Bagru.
              </p>
            </div>

            <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#252525]">Lucknowi Chikankari</h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                Delicate needlecraft shadow work and tonal jaali stitches celebrating Awadhi courtly elegance.
              </p>
            </div>

            <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#252525]">ExtraLove Inclusivity</h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                A dedicated size revolution offering identical bespoke designs from XS up to 6XL without compromises.
              </p>
            </div>
          </div>
        </div>

        {/* Curated Heritage Product Showcase */}
        <div className="pt-8 border-t border-[#E6E6E6]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
                SIGNATURE CREATIONS
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#252525] mt-1">
                Timeless Masterpieces From Our Atelier
              </h2>
            </div>
            <Link
              href="/suits"
              className="text-xs font-bold text-[#71006A] hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              <span>Explore All Outfits</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {signaturePieces.map((p) => (
              <LibasProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

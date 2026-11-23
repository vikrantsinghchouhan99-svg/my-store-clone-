'use client';

import React from 'react';
import Link from 'next/link';
import { Leaf, Droplets, Sun, Recycle, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

export default function SustainabilityPage() {
  const cottonPicks = LIBAS_PRODUCTS.filter((p) => p.fabric.toLowerCase().includes('cotton')).slice(0, 4);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-700 font-extrabold flex items-center justify-center gap-1.5">
            <Leaf className="w-3.5 h-3.5" />
            CONSCIOUS ETHNIC FASHION
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
            Mindful Threads For A Greener Planet
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
            We believe timeless elegance shouldn&apos;t cost the Earth. From certified organic cottons to zero-waste packaging, discover our ongoing journey towards circularity and ethical craftsmanship.
          </p>
        </div>

        {/* 4 Eco Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#252525]">100% Organic Cotton</h3>
            <p className="text-xs text-[#737373] leading-relaxed">
              Grown without chemical fertilizers, pesticide sprays, or synthetic runoff, keeping soil fertile and groundwater pure.
            </p>
          </div>

          <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#252525]">Non-Toxic Azo-Free Dyes</h3>
            <p className="text-xs text-[#737373] leading-relaxed">
              Our vibrant hues use certified safe, skin-friendly mineral pigments and closed-loop effluent water recycling.
            </p>
          </div>

          <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Recycle className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#252525]">Zero Single-Use Plastic</h3>
            <p className="text-xs text-[#737373] leading-relaxed">
              Orders are wrapped in 100% compostable cornstarch bags and FSC-certified recyclable cardboard cartons.
            </p>
          </div>

          <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#252525]">Fair Artisan Living Wages</h3>
            <p className="text-xs text-[#737373] leading-relaxed">
              Direct, transparent livelihood security and safe ergonomic workspaces for our community of handloom weavers.
            </p>
          </div>
        </div>

        {/* Environmental Impact Counter */}
        <div className="bg-[#FAF7F9] border border-[#E6E6E6] rounded-2xl p-8 sm:p-10 mb-16 text-center">
          <h3 className="text-xl font-serif font-bold text-[#252525] mb-2">Our Environmental Milestone by Numbers</h3>
          <p className="text-xs text-[#737373] max-w-lg mx-auto mb-8">
            Verifiable sustainability metrics achieved across our manufacturing clusters over the past calendar year.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-serif font-bold text-emerald-800">120,000 L</p>
              <p className="text-xs text-[#4D4D4D] mt-1 font-medium">Recycled Water Reused</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-emerald-800">45,000+</p>
              <p className="text-xs text-[#4D4D4D] mt-1 font-medium">Trees Planted With Afforestation NGOs</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-emerald-800">92%</p>
              <p className="text-xs text-[#4D4D4D] mt-1 font-medium">Fabric Scraps Upcycled Into Accessories</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-emerald-800">0%</p>
              <p className="text-xs text-[#4D4D4D] mt-1 font-medium">Landfill Plastic Footprint</p>
            </div>
          </div>
        </div>

        {/* Featured Sustainable Pure Cotton Edit */}
        <div className="pt-8 border-t border-[#E6E6E6]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-800 font-extrabold">
                BREATHABLE BOTANICAL CRAFT
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#252525] mt-1">
                Conscious 100% Pure Cotton Collection
              </h2>
            </div>
            <Link
              href="/kurtas?fabric=Cotton"
              className="text-xs font-bold text-[#71006A] hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              <span>Explore Cotton Wear</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {cottonPicks.map((p) => (
              <LibasProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

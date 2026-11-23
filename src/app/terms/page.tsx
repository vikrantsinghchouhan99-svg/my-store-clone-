'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

export default function TermsPage() {
  const featuredStyles = LIBAS_PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold flex items-center justify-center gap-1.5">
            <FileText className="w-3.5 h-3.5" />
            LEGAL & COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
            Last Updated: January 2026. Please review these governing terms and commercial conditions carefully before using our platform or placing an order.
          </p>
        </div>

        {/* Quick Summary Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#252525]">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Authentic Guarantee</span>
            </div>
            <p className="text-[11px] text-[#737373]">100% genuine handcrafted ethnic garments sourced directly from ateliers.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#252525]">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Transparent Pricing</span>
            </div>
            <p className="text-[11px] text-[#737373]">All prices displayed in INR or USD include applicable GST and export taxes.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#252525]">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>15-Day Free Returns</span>
            </div>
            <p className="text-[11px] text-[#737373]">Hassle-free doorstep collection with complete refunds to original payment method.</p>
          </div>
        </div>

        {/* Structured Legal Text */}
        <div className="space-y-8 text-xs sm:text-sm text-[#4D4D4D] leading-relaxed mb-16 max-w-4xl mx-auto border-t border-b border-[#E6E6E6] py-10">
          
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-[#252525]">1. Introduction & Acceptance</h2>
            <p>
              Welcome to Libas (operable via Libas Consumer Products Ltd., &ldquo;Libas&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;). By accessing, browsing, registering an account, or purchasing from our digital storefront or physical ateliers, you acknowledge and unconditionally agree to abide by these Terms & Conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-[#252525]">2. Account Security & Brute-Force Safeguards</h2>
            <p>
              When creating an account, you agree to maintain the strict confidentiality of your credentials. In accordance with our security framework, after 3 consecutive failed login attempts, accounts are temporarily locked for a 30-second cooldown period to prevent unauthorized brute-force attempts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-[#252525]">3. Pricing, Payments & Currency</h2>
            <p>
              Prices are inclusive of Indian Goods and Services Tax (GST). We accept Cash on Delivery (COD), UPI (Google Pay, PhonePe, Paytm, QR), Credit & Debit cards (Visa, MasterCard, RuPay), and major Net Banking portals. All payments are encrypted via PCI-DSS compliant payment gateways.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-[#252525]">4. Deliveries & Reverse Logistics</h2>
            <p>
              Domestic transit timelines average 2-4 business days. While we take every effort to meet delivery milestones, transit delays due to natural incidents, courier logistics, or remote geographic locations will be updated transparently via SMS and Email tracking links.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-[#252525]">5. Intellectual Property</h2>
            <p>
              All trademarks, product silhouette photography, editorial copy, textile print patterns, and proprietary software code are protected by intellectual property laws. Unauthorized reproduction or commercial re-distribution without written permission is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-[#252525]">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be interpreted, construed, and enforced in accordance with the laws of the Republic of India. Any legal dispute or claim arising from these terms shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
            </p>
          </section>

        </div>

        {/* Featured Products */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
                HANDCRAFTED ELEVATION
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#252525] mt-1">
                Explore Best-Selling Festive Silhouettes
              </h2>
            </div>
            <Link
              href="/suits"
              className="text-xs font-bold text-[#71006A] hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              <span>Shop All Outfits</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {featuredStyles.map((p) => (
              <LibasProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

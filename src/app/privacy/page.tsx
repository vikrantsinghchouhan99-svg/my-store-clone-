'use client';

import React from 'react';
import Link from 'next/link';
import { Lock, ShieldCheck, Key, EyeOff, ArrowRight } from 'lucide-react';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

export default function PrivacyPage() {
  const featuredStyles = LIBAS_PRODUCTS.slice(1, 5);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            DATA PRIVACY & INTEGRITY
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
            Privacy & Data Protection Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
            Your trust is our cornerstone. We employ bank-grade encryption and stringent privacy controls to ensure your personal and payment information remains confidential and strictly guarded.
          </p>
        </div>

        {/* 3 Privacy Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-2">
            <div className="w-9 h-9 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
              <Key className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#252525]">256-Bit SSL Encryption</h3>
            <p className="text-xs text-[#737373] leading-relaxed">
              Every data transfer, checkout session, and credential transmission is guarded with TLS 1.3 cryptographic protocols.
            </p>
          </div>

          <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-2">
            <div className="w-9 h-9 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
              <EyeOff className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#252525]">Zero Third-Party Selling</h3>
            <p className="text-xs text-[#737373] leading-relaxed">
              We never sell, rent, monetize, or trade your personal email, phone number, or purchase habits to advertising brokers.
            </p>
          </div>

          <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-2">
            <div className="w-9 h-9 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#252525]">PCI-DSS Certified</h3>
            <p className="text-xs text-[#737373] leading-relaxed">
              Card data is tokenized directly via RBI-licensed payment gateways; we never store raw CVVs or card credentials.
            </p>
          </div>
        </div>

        {/* Structured Policy Content */}
        <div className="space-y-8 text-xs sm:text-sm text-[#4D4D4D] leading-relaxed mb-16 max-w-4xl mx-auto border-t border-b border-[#E6E6E6] py-10">
          
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-[#252525]">1. Information We Collect</h2>
            <p>
              When you browse or interact with our storefront, we collect details necessary to fulfill your orders, such as your full name, shipping and billing address, email address, phone number, and selected size preference. We do not store raw credit card numbers or UPI PINs.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-[#252525]">2. How Your Information Is Used</h2>
            <p>
              Your data is utilized solely for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Processing, packaging, and dispatching your orders with logistics partners (Bluedart, Delhivery).</li>
              <li>Sending live WhatsApp/SMS and email shipment dispatch tracking links and delivery OTPs.</li>
              <li>Processing authorized returns, exchanges, or refunds directly to your original bank/UPI channel.</li>
              <li>Preventing malicious bot activities and unauthorized login brute-force attacks.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-[#252525]">3. Cookies & Session Storage</h2>
            <p>
              We use lightweight functional session cookies to remember the contents of your shopping bag, wishlist, and preferred currency switcher (₹ INR / $ USD). You can disable cookies at any time via your browser preferences without disabling basic browsing.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-[#252525]">4. Your Right to Access & Data Deletion</h2>
            <p>
              You have the right to request a complete export or permanent deletion of your customer profile, order history, and saved address books at any time. Simply send an email request to <strong>privacy@libas.in</strong>, and our Data Protection Officer will action it within 48 business hours.
            </p>
          </section>

        </div>

        {/* Featured Products */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
                PEACE OF MIND SHOPPING
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#252525] mt-1">
                Curated Festive Picks For You
              </h2>
            </div>
            <Link
              href="/suits"
              className="text-xs font-bold text-[#71006A] hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              <span>Explore All Collections</span>
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

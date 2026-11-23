'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RotateCcw, PackageCheck, Truck, ShieldCheck, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

export default function ReturnsPage() {
  const [orderId, setOrderId] = useState('');
  const [reason, setReason] = useState('size');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setSubmitted(true);
    }
  };

  const exchangeProducts = LIBAS_PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
            EASY 15-DAY RETURNS & EXCHANGES
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
            Hassle-Free Return / Exchange Portal
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
            Not completely in love with your outfit? We offer free doorstep pickup and instant replacements or full refunds to original payment source within 15 days of delivery.
          </p>
        </div>

        {/* 4-Step Process Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#FAF7F9] p-4 rounded-xl border border-[#E6E6E6] text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center mx-auto font-bold text-sm">
              1
            </div>
            <h4 className="text-xs font-bold text-[#252525]">Submit Request</h4>
            <p className="text-[11px] text-[#737373]">Enter your Order ID and select return or size exchange.</p>
          </div>
          <div className="bg-[#FAF7F9] p-4 rounded-xl border border-[#E6E6E6] text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center mx-auto font-bold text-sm">
              2
            </div>
            <h4 className="text-xs font-bold text-[#252525]">Doorstep Pickup</h4>
            <p className="text-[11px] text-[#737373]">Our courier partner collects the package at zero extra charge.</p>
          </div>
          <div className="bg-[#FAF7F9] p-4 rounded-xl border border-[#E6E6E6] text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center mx-auto font-bold text-sm">
              3
            </div>
            <h4 className="text-xs font-bold text-[#252525]">Quality Check</h4>
            <p className="text-[11px] text-[#737373]">Item verified with original brand tags and unworn condition.</p>
          </div>
          <div className="bg-[#FAF7F9] p-4 rounded-xl border border-[#E6E6E6] text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center mx-auto font-bold text-sm">
              4
            </div>
            <h4 className="text-xs font-bold text-[#252525]">Instant Refund</h4>
            <p className="text-[11px] text-[#737373]">Amount credited back to your bank, UPI, or replacement dispatched.</p>
          </div>
        </div>

        {/* Return Initiation Card */}
        <div className="max-w-xl mx-auto bg-[#FAF7F9] border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 shadow-xs mb-16">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-[#252525] flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-[#71006A]" />
                <span>Initiate Return / Exchange</span>
              </h3>
              
              <div>
                <label className="text-xs font-bold text-[#252525] block mb-1">
                  Order ID *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. LIB-749102"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs text-[#252525] outline-none font-mono uppercase"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#252525] block mb-1">
                  Registered Email or Phone *
                </label>
                <input
                  type="text"
                  required
                  placeholder="user@example.com or 10-digit mobile"
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs text-[#252525] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#252525] block mb-1">
                  Reason for Return / Exchange
                </label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs text-[#252525] outline-none"
                >
                  <option value="size">Size didn&apos;t fit (Too loose / Too tight)</option>
                  <option value="exchange">Exchange for another size</option>
                  <option value="fabric">Fabric / Color different than expected</option>
                  <option value="defective">Defective / Damaged garment</option>
                  <option value="mind">Changed my mind</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#71006A] hover:bg-[#5C0056] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 mt-2"
              >
                <span>Find Order & Schedule Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#252525]">
                Return Request Registered!
              </h3>
              <p className="text-xs text-[#737373] max-w-sm mx-auto leading-relaxed">
                Your request for order <strong>{orderId.toUpperCase()}</strong> has been submitted. Our executive will arrive for reverse pickup within 24-48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-lg border border-[#71006A] text-[#71006A] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF7F9]"
              >
                Track Another Request
              </button>
            </div>
          )}
        </div>

        {/* Featured Exchange Recommendations */}
        <div className="pt-8 border-t border-[#E6E6E6]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
                RECOMMENDED ALTERNATIVES
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#252525] mt-1">
                Popular Styles For Instant Exchange
              </h2>
            </div>
            <Link
              href="/suits"
              className="text-xs font-bold text-[#71006A] hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              <span>View All Collections</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {exchangeProducts.map((p) => (
              <LibasProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

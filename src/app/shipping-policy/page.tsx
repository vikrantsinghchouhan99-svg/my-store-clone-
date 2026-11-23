'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Truck, Clock, MapPin, Check, ShieldCheck, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

export default function ShippingPolicyPage() {
  const [pincode, setPincode] = useState('');
  const [checkResult, setCheckResult] = useState<{ checked: boolean; isDeliverable: boolean; days: string } | null>(null);

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      const isMetro = ['11', '40', '56', '50', '60', '70'].some((prefix) => pincode.startsWith(prefix));
      setCheckResult({
        checked: true,
        isDeliverable: true,
        days: isMetro ? '1-2 Business Days (Express Metro)' : '3-4 Business Days',
      });
    }
  };

  const readyToShipProducts = LIBAS_PRODUCTS.slice(2, 6);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
            SAFE & TIMELY DISPATCH
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
            We partner with premier express logistics services to ensure your ethnic ensembles reach your doorstep safely, securely, and impeccably packaged.
          </p>
        </div>

        {/* 3 Value Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#252525]">Free Domestic Delivery</h3>
            <p className="text-xs text-[#737373] leading-relaxed">
              Enjoy 100% Free Shipping on all orders above ₹999 across India. Nominal ₹99 fee applies on smaller orders.
            </p>
          </div>

          <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#252525]">24-48 Hr Express Metros</h3>
            <p className="text-xs text-[#737373] leading-relaxed">
              Same-day or next-day dispatch for Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Kolkata pin codes.
            </p>
          </div>

          <div className="bg-[#FAF7F9] p-6 rounded-2xl border border-[#E6E6E6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#252525]">International Express</h3>
            <p className="text-xs text-[#737373] leading-relaxed">
              We ship to 30+ international destinations including USA, UK, UAE, Canada, and Australia via DHL Express.
            </p>
          </div>
        </div>

        {/* Pincode Estimator */}
        <div className="bg-[#FAF7F9] border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 max-w-xl mx-auto mb-16 shadow-xs">
          <h3 className="text-base font-serif font-bold text-[#252525] mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#71006A]" />
            <span>Check Delivery Timeline For Your Area</span>
          </h3>
          <p className="text-xs text-[#737373] mb-4">
            Enter your 6-digit delivery pincode to see estimated delivery dates and Cash on Delivery availability.
          </p>

          <form onSubmit={handlePincodeCheck} className="flex gap-2">
            <input
              type="text"
              maxLength={6}
              required
              placeholder="Enter 6-digit Pincode (e.g. 110001)"
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
              className="flex-1 px-4 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs font-mono outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-[#71006A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5C0056] transition-colors"
            >
              Check
            </button>
          </form>

          {checkResult && (
            <div className="mt-4 p-3.5 bg-white border border-emerald-200 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#252525]">
                <p className="font-bold text-emerald-800">Delivery Available to Pincode {pincode}</p>
                <p className="text-[#737373]">Estimated Transit: {checkResult.days} • Cash on Delivery Available</p>
              </div>
            </div>
          )}
        </div>

        {/* Policy Details Table */}
        <div className="bg-white border border-[#E6E6E6] rounded-2xl overflow-hidden mb-16 shadow-xs">
          <div className="bg-[#FAF7F9] px-6 py-4 border-b border-[#E6E6E6]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#71006A] font-mono">
              Domestic Shipping Rates & Schedules
            </h3>
          </div>
          <div className="divide-y divide-[#E6E6E6] text-xs">
            <div className="grid grid-cols-3 p-4 bg-[#FAF7F9]/50 font-bold text-[#252525]">
              <div>Order Value</div>
              <div>Estimated Delivery</div>
              <div>Shipping Fee</div>
            </div>
            <div className="grid grid-cols-3 p-4 text-[#4D4D4D]">
              <div>₹999 and above</div>
              <div>2 - 4 Business Days</div>
              <div className="text-emerald-700 font-bold">FREE</div>
            </div>
            <div className="grid grid-cols-3 p-4 text-[#4D4D4D]">
              <div>Below ₹999</div>
              <div>3 - 5 Business Days</div>
              <div>₹99 flat fee</div>
            </div>
            <div className="grid grid-cols-3 p-4 text-[#4D4D4D]">
              <div>Cash on Delivery (COD)</div>
              <div>Available up to ₹10,000</div>
              <div>₹49 handling fee</div>
            </div>
            <div className="grid grid-cols-3 p-4 text-[#4D4D4D]">
              <div>International Delivery</div>
              <div>5 - 7 Business Days</div>
              <div>Calculated at checkout based on weight</div>
            </div>
          </div>
        </div>

        {/* Featured Ready-to-Ship Products */}
        <div className="pt-8 border-t border-[#E6E6E6]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
                READY TO SHIP
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#252525] mt-1">
                Fast-Dispatch Festive Essentials
              </h2>
            </div>
            <Link
              href="/sale"
              className="text-xs font-bold text-[#71006A] hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              <span>Explore Fast Ship Items</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {readyToShipProducts.map((p) => (
              <LibasProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

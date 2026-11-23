'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Truck, CheckCircle2, Clock, MapPin, Package, ArrowRight, ShieldCheck } from 'lucide-react';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [phone, setPhone] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setIsSearched(true);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
            LIVE DISPATCH & LOGISTICS
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
            Track Your Libas Consignment
          </h1>
          <p className="text-xs sm:text-sm text-[#737373]">
            Enter your Order ID (e.g. <strong>LIB-884920</strong>) and registered mobile number to check real-time transit status.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-[#FAF7F9] border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 shadow-xs max-w-xl mx-auto mb-10">
          <form onSubmit={handleTrack} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#252525] block mb-1">
                Order ID / AWB Number *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. LIB-884920"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs text-[#252525] outline-none font-mono uppercase"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#252525] block mb-1">
                Registered Mobile Number / Email *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. +91 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs text-[#252525] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#71006A] hover:bg-[#5C0056] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Truck className="w-4 h-4" />
              <span>Track Consignment</span>
            </button>
          </form>
        </div>

        {/* Live Timeline Result (shown when tracked or demonstration) */}
        {isSearched && (
          <div className="bg-white border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#E6E6E6] gap-2">
              <div>
                <span className="text-[10px] font-mono text-[#71006A] font-bold">CONSIGNMENT FOUND</span>
                <h3 className="text-lg font-bold text-[#252525]">Order #{orderId.toUpperCase()}</h3>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Out for Delivery
                </span>
                <p className="text-[11px] text-[#737373] mt-0.5 font-mono">Carrier: BlueDart Express (AWB: BD99482103)</p>
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-6 pl-4 border-l-2 border-[#71006A]/30 relative">
              <div className="relative pl-6">
                <span className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-[#71006A] ring-4 ring-[#FAF7F9]" />
                <h4 className="text-xs font-bold text-[#252525]">Out for Delivery</h4>
                <p className="text-[11px] text-[#737373]">Consignment dispatched with courier agent. Expected delivery today by 6:00 PM.</p>
                <span className="text-[10px] text-[#999999] font-mono">Today, 09:30 AM</span>
              </div>

              <div className="relative pl-6">
                <span className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-[#71006A] ring-4 ring-[#FAF7F9]" />
                <h4 className="text-xs font-bold text-[#252525]">Arrived at Delivery Hub (Jaipur Central)</h4>
                <p className="text-[11px] text-[#737373]">Package scanned and assigned for route dispatch.</p>
                <span className="text-[10px] text-[#999999] font-mono">Yesterday, 10:15 PM</span>
              </div>

              <div className="relative pl-6">
                <span className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-emerald-600 ring-4 ring-[#FAF7F9]" />
                <h4 className="text-xs font-bold text-[#252525]">Dispatched from Libas Central Warehouse</h4>
                <p className="text-[11px] text-[#737373]">Quality check cleared, tamper-proof packaging applied.</p>
                <span className="text-[10px] text-[#999999] font-mono">22 Nov, 03:40 PM</span>
              </div>

              <div className="relative pl-6">
                <span className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-emerald-600 ring-4 ring-[#FAF7F9]" />
                <h4 className="text-xs font-bold text-[#252525]">Order Confirmed</h4>
                <p className="text-[11px] text-[#737373]">Payment authorized and order sent to fulfillment atelier.</p>
                <span className="text-[10px] text-[#999999] font-mono">22 Nov, 11:20 AM</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E6E6] flex items-center justify-between text-xs text-[#737373]">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#71006A]" /> Contactless Safe Delivery Guaranteed</span>
              <button
                onClick={() => setIsSearched(false)}
                className="text-[#71006A] font-semibold hover:underline"
              >
                Track Another Order
              </button>
            </div>
          </div>
        )}

        {/* Featured Products */}
        <div className="pt-12 mt-12 border-t border-[#E6E6E6]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
                NEW ARRIVALS
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#252525] mt-1">
                While You Wait For Your Delivery
              </h2>
            </div>
            <Link
              href="/suits"
              className="text-xs font-bold text-[#71006A] hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              <span>Explore All Suits</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {LIBAS_PRODUCTS.slice(0, 4).map((p) => (
              <LibasProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck, RotateCcw, Truck, Award, Mail, Phone } from 'lucide-react';

export function LibasFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#FAF7F9] border-t border-[#E6E6E6]">
      {/* 4 Value Pillars */}
      <div className="border-b border-[#E6E6E6] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F3EBF2] text-[#71006A] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wide">Free Shipping</h4>
              <p className="text-[11px] text-[#737373]">On all orders above ₹999 pan India</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F3EBF2] text-[#71006A] flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wide">15 Days Return</h4>
              <p className="text-[11px] text-[#737373]">Hassle-free doorstep exchange & return</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F3EBF2] text-[#71006A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wide">100% Genuine</h4>
              <p className="text-[11px] text-[#737373]">Direct from Libas verified ateliers</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F3EBF2] text-[#71006A] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wide">COD Available</h4>
              <p className="text-[11px] text-[#737373]">Pay on delivery across 25,000+ pincodes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-[#E6E6E6] bg-[#71006A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 space-y-1 text-center lg:text-left">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#FF8C91] font-bold">
                LIBAS PRIVILEGE CLUB
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Sign Up & Get Flat ₹500 OFF
              </h3>
              <p className="text-xs text-white/80 max-w-md mx-auto lg:mx-0">
                Be the first to access festive collection drops, wedding edits, and private VIP sales.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 text-white flex items-center justify-center gap-2 text-xs font-semibold">
                  <Check className="w-4 h-4 text-[#FF8C91]" />
                  <span>Welcome to Libas Privilege Club. Check your inbox for your ₹500 coupon!</span>
                </div>
              ) : (
                <form onSubmit={handleSub} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-white text-[#252525] rounded-lg text-xs outline-none placeholder-[#999999]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-[#252525] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Intro */}
          <div className="col-span-2 space-y-3">
            <span className="font-serif tracking-widest text-3xl font-extrabold uppercase text-[#71006A]">
              LIBAS
            </span>
            <p className="text-xs text-[#737373] max-w-sm leading-relaxed">
              Libas is India&apos;s leading ethnic fashion destination creating contemporary ethnic wear, suits, sarees, and festive silhouettes with comfortable fabrics, inclusive sizing (XS to 6XL), and honest craft.
            </p>
            <div className="pt-2 space-y-1 text-xs text-[#4D4D4D]">
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#71006A]" /> +91 98999 90772 (Mon-Sat, 9am - 7pm)</p>
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#71006A]" /> care@libas.in</p>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#71006A] font-mono">Categories</h4>
            <ul className="space-y-1.5 text-xs text-[#737373]">
              <li><Link href="/suits" className="hover:text-[#71006A]">Suits & Sets</Link></li>
              <li><Link href="/kurtas" className="hover:text-[#71006A]">Kurtas & Kurtis</Link></li>
              <li><Link href="/sarees" className="hover:text-[#71006A]">Sarees</Link></li>
              <li><Link href="/dresses" className="hover:text-[#71006A]">Ethnic Dresses</Link></li>
              <li><Link href="/loungewear" className="hover:text-[#71006A]">Co-ords & Loungewear</Link></li>
              <li><Link href="/plus-size" className="hover:text-[#71006A]">ExtraLove (3XL-6XL)</Link></li>
              <li><Link href="/sale" className="hover:text-[#71006A] text-[#D92D20] font-semibold">Festive Sale</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#71006A] font-mono">Customer Help</h4>
            <ul className="space-y-1.5 text-xs text-[#737373]">
              <li><Link href="/track-order" className="hover:text-[#71006A]">Track Order</Link></li>
              <li><Link href="/returns" className="hover:text-[#71006A]">Return / Exchange Request</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-[#71006A]">Shipping & Delivery Policy</Link></li>
              <li><Link href="/contact" className="hover:text-[#71006A]">Contact Customer Care</Link></li>
              <li><Link href="/faqs" className="hover:text-[#71006A]">FAQs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#71006A] font-mono">About Libas</h4>
            <ul className="space-y-1.5 text-xs text-[#737373]">
              <li><Link href="/about" className="hover:text-[#71006A]">Our Story & Craft</Link></li>
              <li><Link href="/stores" className="hover:text-[#71006A]">Store Locator</Link></li>
              <li><Link href="/sustainability" className="hover:text-[#71006A]">Sustainability</Link></li>
              <li><Link href="/terms" className="hover:text-[#71006A]">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#71006A]">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-[#E6E6E6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#999999]">
          <p>© 2026 Libas Consumer Products Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-[#737373]">
            <span>100% Encrypted & Safe Checkout</span>
            <span>•</span>
            <span>PCI-DSS Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

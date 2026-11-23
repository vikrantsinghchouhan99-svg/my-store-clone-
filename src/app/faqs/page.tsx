'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, Search, MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

interface FAQItem {
  category: string;
  q: string;
  a: string;
}

const FAQ_LIST: FAQItem[] = [
  // Orders & Tracking
  {
    category: 'Orders',
    q: 'How can I track my Libas order in real time?',
    a: 'You can easily track your parcel by clicking on "Track Order" in the top navigation or footer. Simply enter your Order ID (e.g. LIB-884920) and registered phone number to view live courier transit milestones.',
  },
  {
    category: 'Orders',
    q: 'Can I cancel or modify an order after placing it?',
    a: 'Orders can be cancelled directly through your account or by emailing care@libas.in within 4 hours of placement. Once an order has entered warehouse fulfillment and has been dispatched, cancellation is no longer possible, but you can refuse delivery or initiate a free 15-day return upon arrival.',
  },
  // Payments & Checkout
  {
    category: 'Payments',
    q: 'Which payment options are supported at checkout?',
    a: 'We support all major payment modes: Cash on Delivery (COD), UPI (Google Pay, PhonePe, Paytm, BHIM, and QR scan), Credit/Debit Cards (Visa, MasterCard, RuPay, Maestro), and Net Banking across 50+ Indian banks. All transactions are protected by 256-bit bank-grade SSL encryption.',
  },
  {
    category: 'Payments',
    q: 'How long does a refund take to reflect in my bank account?',
    a: 'Once your return item is collected and passes quality inspection at our warehouse (typically 24-48 hours after pickup), UPI and card refunds are processed instantly and reflect within 2 to 5 business days. For COD orders, refund is transferred directly to your bank account or UPI ID.',
  },
  // Returns & Exchanges
  {
    category: 'Returns',
    q: 'What is Libas’s return and exchange policy?',
    a: 'We offer a 100% free 15-day doorstep return and exchange policy from the date of delivery. Items must have their original brand tags attached, remain unwashed, and be in unworn condition. Doorstep pickup is completely free of charge.',
  },
  {
    category: 'Returns',
    q: 'How do I exchange an item for a different size?',
    a: 'Simply go to our "Return / Exchange Request" page, enter your Order ID, and select "Exchange for another size". Our delivery partner will deliver the new size and collect the old piece in a single doorstep handover.',
  },
  // Sizing & Fit
  {
    category: 'Sizing',
    q: 'What sizes are available in the ExtraLove collection?',
    a: 'Our signature ExtraLove line is custom-engineered for curvy Indian silhouettes, available in sizes 3XL, 4XL, 5XL, and 6XL with special armhole, bust, and hip ease for exceptional all-day comfort.',
  },
  {
    category: 'Sizing',
    q: 'How do I know which size to order?',
    a: 'Each product page features a detailed Size Guide with exact garment measurements in inches and centimeters (Bust, Waist, Hip, Kurta Length). If you are between two sizes, we suggest choosing the larger size for a relaxed ethnic drape.',
  },
  // Fabric & Care
  {
    category: 'Fabric',
    q: 'Are your silk and micro-velvet garments dry clean only?',
    a: 'Yes, premium festive fabrics like Chanderi silk, Banarasi brocades, and Micro-Velvet should be professionally dry cleaned to preserve the delicate zari and foil threadwork. Pure cambric cotton kurtas are safe for gentle machine wash.',
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = ['All', 'Orders', 'Payments', 'Returns', 'Sizing', 'Fabric'];

  const filteredFaqs = FAQ_LIST.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredStyles = LIBAS_PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
            KNOWLEDGE BASE & SUPPORT
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
            Find immediate answers regarding orders, payments, doorstep exchange, fabric care, and our inclusive sizing guide.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="w-4 h-4 text-[#999999] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. refund, return size, COD, dry clean)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FAF7F9] border border-[#E6E6E6] text-xs text-[#252525] outline-none focus:border-[#71006A] transition-colors"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#71006A] text-white shadow-xs'
                  : 'bg-[#FAF7F9] text-[#4D4D4D] hover:bg-[#E6E6E6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 max-w-3xl mx-auto mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#E6E6E6] rounded-xl overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#FAF7F9] transition-colors gap-4"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#252525]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#71006A] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-[#4D4D4D] leading-relaxed border-t border-[#F5F5F5] bg-[#FAF7F9]/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-xs text-[#999999]">
              No questions found matching &ldquo;{searchQuery}&rdquo;. Try another search or contact support.
            </div>
          )}
        </div>

        {/* Help Banner Box */}
        <div className="bg-[#FAF7F9] border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-serif font-bold text-[#252525]">Still have questions?</h3>
            <p className="text-xs text-[#737373]">Our customer assistance team is ready to help 6 days a week.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-[#71006A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5C0056] transition-colors shadow-sm"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Featured Products */}
        <div className="pt-8 border-t border-[#E6E6E6]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
                TRENDING NOW
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#252525] mt-1">
                Explore Best-Selling Festive Designs
              </h2>
            </div>
            <Link
              href="/suits"
              className="text-xs font-bold text-[#71006A] hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              <span>View All Suits</span>
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

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, MessageSquare, Check, HelpCircle, ArrowRight } from 'lucide-react';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

const FAQS = [
  {
    q: 'How do I place an exchange or return request?',
    a: 'You can initiate a return or exchange within 15 days of delivery by navigating to our Track Order page or writing to care@libas.in with your Order ID.',
  },
  {
    q: 'What is the shipping time for domestic orders?',
    a: 'Standard domestic delivery takes 2 to 4 business days. Metro cities (Delhi, Mumbai, Bengaluru) typically receive orders within 48 hours.',
  },
  {
    q: 'Do you offer Cash on Delivery (COD)?',
    a: 'Yes, Cash on Delivery is supported across 25,000+ Indian pincodes for orders up to ₹10,000.',
  },
  {
    q: 'What sizing options does ExtraLove support?',
    a: 'Our ExtraLove plus size label offers sizes 3XL, 4XL, 5XL, and 6XL specifically tailored with custom grading and roomier silhouettes.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
            CONCIERGE & SUPPORT
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
            How Can We Assist You?
          </h1>
          <p className="text-xs sm:text-sm text-[#737373]">
            Our dedicated client care team is available Monday through Saturday from 9:00 AM to 7:00 PM IST.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#F3EBF2] text-[#71006A] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#252525]">Telephone Concierge</h3>
            <p className="text-xs text-[#737373]">Direct phone assistance for order inquiries and sizing advice.</p>
            <p className="font-mono text-xs font-bold text-[#71006A]">+91 98999 90772</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#F3EBF2] text-[#71006A] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#252525]">Email Care</h3>
            <p className="text-xs text-[#737373]">Send detailed inquiries with order photos or measurement requests.</p>
            <p className="font-mono text-xs font-bold text-[#71006A]">care@libas.in</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#F3EBF2] text-[#71006A] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-[#252525]">Headquarters</h3>
            <p className="text-xs text-[#737373]">Plot No. 12, Phase-IV, Udyog Vihar, Gurugram, Haryana - 122016, India</p>
            <p className="text-[11px] font-semibold text-[#71006A]">Open Mon - Sat</p>
          </div>
        </div>

        {/* Message Form & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-serif font-bold text-[#252525] mb-2">Send Us A Message</h3>
            <p className="text-xs text-[#737373] mb-6">We usually respond within 4 business hours.</p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#FAF7F9] border border-[#71006A]/30 text-center space-y-2">
                <div className="w-10 h-10 bg-[#71006A] text-white rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#252525]">Message Received</h4>
                <p className="text-xs text-[#737373]">Thank you for contacting Libas. A support ticket has been created and our team will get in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#252525] block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#252525] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#252525] block mb-1">Order ID (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. LIB-884920"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none font-mono uppercase"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#252525] block mb-1">Subject *</label>
                  <select className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none">
                    <option>Order & Delivery Status</option>
                    <option>Return or Exchange Inquiry</option>
                    <option>Size & Fit Assistance</option>
                    <option>Payment & Refund</option>
                    <option>Other Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#252525] block mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#71006A] hover:bg-[#5C0056] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* FAQs */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#252525] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#71006A]" /> Frequently Asked Questions
            </h3>

            <div className="space-y-3 pt-2">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-1">
                  <h4 className="text-xs font-bold text-[#252525]">{faq.q}</h4>
                  <p className="text-xs text-[#737373] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="pt-12 mt-12 border-t border-[#E6E6E6]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
                CLIENT FAVORITES
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#252525] mt-1">
                Explore Most Loved Ensembles
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
            {LIBAS_PRODUCTS.slice(0, 4).map((p) => (
              <LibasProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

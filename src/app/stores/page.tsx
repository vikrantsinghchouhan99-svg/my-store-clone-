'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Navigation, Search, Check, ArrowRight, Sparkles } from 'lucide-react';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

interface Store {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  timing: string;
  features: string[];
}

const STORES: Store[] = [
  {
    id: 'st-delhi-1',
    name: 'Libas Flagship Atelier - South Extension',
    city: 'Delhi NCR',
    address: 'E-14, Part-2, Main Market, South Extension, New Delhi - 110049',
    phone: '+91 11 4105 8822',
    timing: '10:30 AM - 9:00 PM (Open All 7 Days)',
    features: ['Bridal Couture Studio', 'Bespoke Alteration Desk', 'Personal Stylist'],
  },
  {
    id: 'st-delhi-2',
    name: 'Libas Boutique - DLF Mall of India',
    city: 'Delhi NCR',
    address: 'First Floor, F-214, Sector 18, Noida, Uttar Pradesh - 201301',
    phone: '+91 120 422 9100',
    timing: '11:00 AM - 9:30 PM (Open All 7 Days)',
    features: ['ExtraLove Plus Size Range', 'Festive Ready-To-Wear'],
  },
  {
    id: 'st-mumbai-1',
    name: 'Libas Experience Centre - Bandra West',
    city: 'Mumbai',
    address: 'Linking Road, Near Khar Telephone Exchange, Bandra West, Mumbai - 400052',
    phone: '+91 22 2640 1199',
    timing: '11:00 AM - 9:30 PM (Open All 7 Days)',
    features: ['Silk Sarees Gallery', 'Express Alterations', 'VIP Fitting Suites'],
  },
  {
    id: 'st-blr-1',
    name: 'Libas Atelier - Indiranagar',
    city: 'Bengaluru',
    address: '100ft Road, Opposite To Starbucks, HAL 2nd Stage, Indiranagar, Bengaluru - 560038',
    phone: '+91 80 4112 7744',
    timing: '10:30 AM - 9:00 PM (Open All 7 Days)',
    features: ['Curated Festive Edit', 'Cotton Dailywear Pavilion'],
  },
  {
    id: 'st-jaipur-1',
    name: 'Libas Heritage Atelier - MI Road',
    city: 'Jaipur',
    address: 'Mirza Ismail Road, Near Panch Batti, Jaipur, Rajasthan - 302001',
    phone: '+91 141 236 5500',
    timing: '10:00 AM - 8:30 PM (Open All 7 Days)',
    features: ['Hand-Block Printing Archive', 'Direct Artisan Craft Showcase'],
  },
  {
    id: 'st-hyd-1',
    name: 'Libas Couture Studio - Jubilee Hills',
    city: 'Hyderabad',
    address: 'Road No. 36, Near Peddamma Temple Metro, Jubilee Hills, Hyderabad - 500033',
    phone: '+91 40 2355 6677',
    timing: '10:30 AM - 9:00 PM (Open All 7 Days)',
    features: ['Royal Wedding Zari Edit', 'Custom Drape Consultants'],
  },
];

export default function StoresPage() {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const cities = ['All', 'Delhi NCR', 'Mumbai', 'Bengaluru', 'Jaipur', 'Hyderabad'];

  const filteredStores = STORES.filter((st) => {
    const matchesCity = selectedCity === 'All' || st.city === selectedCity;
    const matchesSearch =
      st.name.toLowerCase().includes(search.toLowerCase()) ||
      st.address.toLowerCase().includes(search.toLowerCase()) ||
      st.city.toLowerCase().includes(search.toLowerCase());
    return matchesCity && matchesSearch;
  });

  const inStoreFavorites = LIBAS_PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
            EXCLUSIVE RETAIL ATELIERS
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
            Find A Libas Store Near You
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
            Experience our rich handwoven silks, custom draping, and complimentary alterations in person at our flagship experiential stores across India.
          </p>
        </div>

        {/* City Filter & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          <div className="flex items-center flex-wrap gap-2">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCity(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCity === c
                    ? 'bg-[#71006A] text-white shadow-xs'
                    : 'bg-[#FAF7F9] text-[#4D4D4D] hover:bg-[#E6E6E6]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#999999] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search store by area..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#FAF7F9] border border-[#E6E6E6] text-xs text-[#252525] outline-none focus:border-[#71006A]"
            />
          </div>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredStores.map((st) => (
            <div
              key={st.id}
              className="bg-[#FAF7F9] border border-[#E6E6E6] rounded-2xl p-6 flex flex-col justify-between hover:border-[#71006A]/40 transition-colors shadow-xs"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#71006A] font-extrabold px-2.5 py-0.5 rounded-full bg-white border border-[#E6E6E6]">
                  {st.city}
                </span>
                <h3 className="text-base font-serif font-bold text-[#252525] leading-snug">
                  {st.name}
                </h3>
                <p className="text-xs text-[#737373] flex items-start gap-2 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#71006A] shrink-0 mt-0.5" />
                  <span>{st.address}</span>
                </p>
                <p className="text-xs text-[#4D4D4D] flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#71006A]" />
                  <span>{st.phone}</span>
                </p>
                <p className="text-xs text-[#4D4D4D] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#71006A]" />
                  <span>{st.timing}</span>
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E6E6E6] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {st.features.map((f, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-[#252525] bg-white px-2 py-0.5 rounded border border-[#E6E6E6]"
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(st.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-lg bg-white border border-[#71006A] text-[#71006A] hover:bg-[#71006A] hover:text-white transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured In-Store Arrivals */}
        <div className="pt-8 border-t border-[#E6E6E6]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
                NEW IN STORES
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#252525] mt-1">
                Trending In Flagship Stores This Week
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
            {inStoreFavorites.map((p) => (
              <LibasProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

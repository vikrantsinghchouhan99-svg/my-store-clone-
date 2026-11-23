'use client';

import React from 'react';
import Link from 'next/link';

const CIRCLE_CATEGORIES = [
  {
    name: 'Suits & Sets',
    href: '/suits',
    img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=300&auto=format&fit=crop',
    tag: 'From ₹1,899',
  },
  {
    name: 'Kurtas',
    href: '/kurtas',
    img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=300&auto=format&fit=crop',
    tag: 'From ₹899',
  },
  {
    name: 'Sarees',
    href: '/sarees',
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=300&auto=format&fit=crop',
    tag: 'From ₹2,199',
  },
  {
    name: 'Ethnic Dresses',
    href: '/dresses',
    img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=300&auto=format&fit=crop',
    tag: 'From ₹1,699',
  },
  {
    name: 'Co-ords & Lounge',
    href: '/loungewear',
    img: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=300&auto=format&fit=crop',
    tag: 'From ₹1,299',
  },
  {
    name: 'ExtraLove (3XL-6XL)',
    href: '/plus-size',
    img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=300&auto=format&fit=crop',
    tag: 'Special Fit',
  },
  {
    name: 'Sale Up to 60%',
    href: '/sale',
    img: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=300&auto=format&fit=crop',
    tag: 'Flat 50-60%',
  },
];

export function LibasCategoryCircles() {
  return (
    <section className="py-8 bg-white border-b border-[#E6E6E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-4 sm:gap-6 py-2">
          {CIRCLE_CATEGORIES.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="flex flex-col items-center group shrink-0 text-center w-20 sm:w-24"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 border-2 border-[#71006A]/30 group-hover:border-[#71006A] transition-all overflow-hidden shadow-xs">
                <img
                  src={cat.img}
                  alt={cat.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=300&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-top rounded-full group-hover:scale-108 transition-transform duration-300"
                />
              </div>
              <span className="text-[11px] font-bold text-[#252525] group-hover:text-[#71006A] mt-2 line-clamp-1 transition-colors">
                {cat.name}
              </span>
              <span className="text-[9px] text-[#71006A] font-semibold">{cat.tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

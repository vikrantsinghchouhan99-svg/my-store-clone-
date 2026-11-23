'use client';

import React from 'react';
import Link from 'next/link';
import { useLibas } from '@/context/LibasContext';
import { LibasProductCard } from '@/components/libas/LibasProductCard';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist, products } = useLibas();

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-6 border-b border-[#E6E6E6] mb-8">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
            YOUR SAVED STYLES
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#252525] mt-1">
            My Wishlist ({wishlist.length})
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] mt-1">
            Items saved here remain available across your devices so you can purchase whenever ready.
          </p>
        </div>

        {wishlistedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlistedProducts.map((prod) => (
              <LibasProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center space-y-4 max-w-sm mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#FAF7F9] text-[#71006A] flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold text-[#252525]">Your Wishlist is Empty</h2>
            <p className="text-xs text-[#737373]">
              Explore our festive suit sets, kurtas, and sarees to save your favorite designs for later.
            </p>
            <Link
              href="/suits"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#71006A] text-white text-xs font-bold uppercase tracking-wider shadow-sm mt-2"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

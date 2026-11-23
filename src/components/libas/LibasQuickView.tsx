'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLibas } from '@/context/LibasContext';
import { X, Star, ShoppingBag, Heart, Shield, RotateCcw, Truck, Check } from 'lucide-react';

export function LibasQuickView() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    wishlist,
    toggleWishlist,
    formatPrice,
  } = useLibas();

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState('');
  const [pincodeMessage, setPincodeMessage] = useState<string | null>(null);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWishlisted = wishlist.includes(product.id);
  const activeColor = selectedColor || product.colors[0]?.name || 'Standard';
  const activeSize = selectedSize || product.sizes[0] || 'Free Size';

  const checkDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setPincodeMessage('Delivery by Thursday, 27 Nov • Cash on Delivery Available');
    } else {
      setPincodeMessage('Please enter a valid 6-digit Pincode');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden z-10 my-8 border border-[#E6E6E6]">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#252525] border border-[#E6E6E6] shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery */}
          <div className="bg-[#F5F5F5] p-5 flex flex-col justify-between">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-white mb-3">
              <img
                src={product.images[selectedImg] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop';
                }}
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    className={`w-14 h-18 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImg === idx ? 'border-[#71006A] scale-102' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img
                      src={img}
                      alt="Thumb"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=300&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#737373]">
                <span className="uppercase tracking-widest text-[10px] font-bold text-[#71006A]">
                  {product.category} {product.subCategory && `• ${product.subCategory}`}
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-[#252525]">{product.rating.toFixed(1)}</span>
                  <span>({product.reviewsCount})</span>
                </div>
              </div>

              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#252525] leading-snug">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2.5">
                <span className="text-xl font-bold text-[#252525]">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm text-[#999999] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="text-xs font-bold text-[#71006A]">
                  ({product.discountPercentage}% OFF)
                </span>
              </div>

              <p className="text-xs text-[#737373] leading-relaxed line-clamp-3">
                {product.description}
              </p>

              {/* Fabric & Occasion Tags */}
              <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                <span className="px-2 py-0.5 rounded bg-[#F5F5F5] text-[#252525]">
                  Fabric: <strong>{product.fabric}</strong>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#F5F5F5] text-[#252525]">
                  Occasion: <strong>{product.occasion}</strong>
                </span>
              </div>

              {/* Sizes */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span>Select Size: <strong className="text-[#71006A]">{activeSize}</strong></span>
                  <span className="text-[11px] text-[#71006A] underline cursor-pointer">Size Guide</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-10 px-3 py-1.5 rounded-md text-xs font-semibold border transition-all ${
                        activeSize === s
                          ? 'bg-[#71006A] text-white border-[#71006A]'
                          : 'border-[#E6E6E6] text-[#252525] hover:bg-[#F5F5F5]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pincode delivery check */}
              <form onSubmit={checkDelivery} className="pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter 6-digit Pincode"
                    value={pincode}
                    maxLength={6}
                    onChange={(e) => setPincode(e.target.value)}
                    className="flex-1 px-3 py-1.5 bg-[#F5F5F5] border border-[#E6E6E6] rounded-md text-xs text-[#252525] outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#252525] text-white text-xs font-semibold rounded-md"
                  >
                    Check
                  </button>
                </div>
                {pincodeMessage && (
                  <p className="text-[11px] text-emerald-700 font-medium mt-1.5 flex items-center gap-1">
                    <Check className="w-3 h-3" /> {pincodeMessage}
                  </p>
                )}
              </form>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-3 border-t border-[#E6E6E6]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    addToCart(product, qty, activeColor, activeSize);
                    setQuickViewProduct(null);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#71006A] text-white font-bold text-xs tracking-wider uppercase hover:bg-[#5C0056] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Bag</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 rounded-xl border border-[#E6E6E6] transition-colors ${
                    isWishlisted ? 'bg-[#71006A] text-white border-[#71006A]' : 'hover:bg-[#F5F5F5] text-[#252525]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="text-center">
                <Link
                  href={`/product/${product.id}`}
                  onClick={() => setQuickViewProduct(null)}
                  className="text-xs text-[#71006A] font-semibold hover:underline"
                >
                  View Full Product Specifications & Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

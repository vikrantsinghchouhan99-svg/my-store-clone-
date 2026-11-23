'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLibas } from '@/context/LibasContext';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';
import {
  Star,
  ShoppingBag,
  Heart,
  Share2,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { LibasProductCard } from '@/components/libas/LibasProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart, wishlist, toggleWishlist, formatPrice } = useLibas();

  const id = params?.id as string;
  const product = LIBAS_PRODUCTS.find((p) => p.id === id) || LIBAS_PRODUCTS[0];

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Free Size');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  const isWishlisted = wishlist.includes(product.id);
  const related = LIBAS_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setPincodeStatus('Available! Express Delivery by Thursday • Free Shipping on Prepaid Orders');
    } else {
      setPincodeStatus('Please enter a valid 6-digit Indian pincode.');
    }
  };

  return (
    <div className="bg-white min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-[#737373] pb-6">
          <Link href="/" className="hover:text-[#71006A]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/${product.category.toLowerCase()}`} className="hover:text-[#71006A]">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#252525] font-semibold line-clamp-1">{product.name}</span>
        </nav>

        {/* Product Hero Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Gallery Column */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible shrink-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    className={`w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImg === idx ? 'border-[#71006A] scale-102 shadow-xs' : 'border-[#E6E6E6] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumb" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Stage Image */}
            <div className="flex-1 rounded-2xl overflow-hidden bg-[#F5F5F5] aspect-[3/4] border border-[#E6E6E6] relative group">
              <img
                src={product.images[selectedImg] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md shadow-md transition-all ${
                  isWishlisted ? 'bg-[#71006A] text-white' : 'bg-white/80 hover:bg-white text-[#252525]'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Details & Actions Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#71006A]">
                {product.category} {product.subCategory && `• ${product.subCategory}`}
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#252525] leading-snug">
                {product.name}
              </h1>
              <p className="text-xs text-[#737373]">{product.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 pt-1">
                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-0.5 rounded text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{product.rating.toFixed(1)}</span>
                </div>
                <span className="text-xs text-[#737373]">({product.reviewsCount} customer reviews)</span>
              </div>
            </div>

            {/* Price section */}
            <div className="p-4 rounded-xl bg-[#FAF7F9] border border-[#E6E6E6] flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-[#252525]">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm text-[#999999] line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-xs font-extrabold text-[#71006A] bg-[#FF8C91]/30 px-2 py-0.5 rounded">
                SAVE {product.discountPercentage}% OFF
              </span>
            </div>

            {/* Color Swatches */}
            <div>
              <label className="text-xs font-bold text-[#252525] block mb-2">
                Color: <span className="font-normal text-[#737373]">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-7 h-7 rounded-full border transition-all ${
                      selectedColor === c.name
                        ? 'ring-2 ring-[#71006A] ring-offset-2 scale-110'
                        : 'border-[#E6E6E6] hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span>Select Size: <strong className="text-[#71006A]">{selectedSize}</strong></span>
                <span className="text-[#71006A] underline cursor-pointer text-[11px]">Size Chart</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-11 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all ${
                      selectedSize === s
                        ? 'bg-[#71006A] text-white border-[#71006A]'
                        : 'border-[#E6E6E6] text-[#252525] hover:bg-[#F5F5F5]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <button
                  onClick={() => addToCart(product, quantity, selectedColor, selectedSize)}
                  className="flex-1 py-4 px-6 rounded-xl bg-[#71006A] hover:bg-[#5C0056] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Bag</span>
                </button>
              </div>

              <button
                onClick={() => {
                  addToCart(product, quantity, selectedColor, selectedSize);
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-[#252525] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Buy Now with 1-Click
              </button>
            </div>

            {/* Delivery & Pincode Checker */}
            <div className="pt-4 border-t border-[#E6E6E6] space-y-2">
              <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wider">
                Check Delivery & COD Availability
              </h4>
              <form onSubmit={handlePincodeCheck} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1 px-3 py-2 bg-[#F5F5F5] border border-[#E6E6E6] rounded-lg text-xs outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#252525] text-white text-xs font-semibold rounded-lg"
                >
                  Check
                </button>
              </form>
              {pincodeStatus && (
                <p className="text-xs text-emerald-700 font-medium flex items-center gap-1 mt-1">
                  <Check className="w-3.5 h-3.5" /> {pincodeStatus}
                </p>
              )}
            </div>

            {/* Specifications Accordion List */}
            <div className="space-y-2 pt-4 border-t border-[#E6E6E6] text-xs">
              <h4 className="font-bold text-[#252525] uppercase tracking-wide">Product Details & Craft</h4>
              <p className="text-[#737373] leading-relaxed">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-[#4D4D4D]">
                <div>Fabric: <strong className="text-[#252525]">{product.fabric}</strong></div>
                <div>Occasion: <strong className="text-[#252525]">{product.occasion}</strong></div>
                <div>Pattern: <strong className="text-[#252525]">{product.pattern}</strong></div>
                <div>Wash Care: <strong className="text-[#252525]">{product.washCare}</strong></div>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products Carousel */}
        {related.length > 0 && (
          <div className="mt-20 pt-10 border-t border-[#E6E6E6]">
            <h3 className="text-2xl font-serif font-bold text-[#252525] mb-6">
              You May Also Admire
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((rel) => (
                <LibasProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

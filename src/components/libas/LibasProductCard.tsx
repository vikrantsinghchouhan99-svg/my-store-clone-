'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LibasProduct } from '@/types/libas';
import { useLibas } from '@/context/LibasContext';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';

interface LibasProductCardProps {
  product: LibasProduct;
}

export function LibasProductCard({ product }: LibasProductCardProps) {
  const { addToCart, wishlist, toggleWishlist, setQuickViewProduct, formatPrice } = useLibas();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div
      className="group relative flex flex-col bg-white rounded-xl border border-[#E6E6E6] overflow-hidden hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Box */}
      <div
        className="relative aspect-[3/4] bg-[#F5F5F5] overflow-hidden cursor-pointer"
        onClick={() => setQuickViewProduct(product)}
      >
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500 ease-out"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop';
          }}
        />

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isExtraLove && (
            <span className="px-2 py-0.5 rounded bg-[#71006A] text-white text-[9px] font-bold uppercase tracking-wider shadow-xs">
              ExtraLove (3XL-6XL)
            </span>
          )}
          {product.discountPercentage > 0 && (
            <span className="px-2 py-0.5 rounded bg-[#FF8C91] text-[#71006A] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
              {product.discountPercentage}% OFF
            </span>
          )}
          {product.isBestSeller && !product.isExtraLove && (
            <span className="px-2 py-0.5 rounded bg-[#252525] text-white text-[9px] font-bold uppercase tracking-wider shadow-xs">
              Trending
            </span>
          )}
        </div>

        {/* Wishlist Floating Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all shadow-xs z-10 ${
            isWishlisted
              ? 'bg-[#71006A] text-white'
              : 'bg-white/80 hover:bg-white text-[#252525]'
          }`}
          aria-label="Save to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Desktop Quick View Overlay */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[88%] py-2 bg-white/95 hover:bg-white text-[#252525] hover:text-[#71006A] rounded-lg text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center gap-1.5 backdrop-blur-xs"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Details Content */}
      <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
        <div className="space-y-1.5">
          {/* Rating & Fabric */}
          <div className="flex items-center justify-between text-[11px] text-[#737373]">
            <span className="uppercase tracking-wider font-medium text-[10px]">{product.fabric}</span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3 h-3 fill-current" />
              <span className="font-bold text-[#252525]">{product.rating.toFixed(1)}</span>
              <span className="text-[#999999]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <Link
            href={`/product/${product.id}`}
            className="font-medium text-xs sm:text-sm text-[#252525] hover:text-[#71006A] line-clamp-1 transition-colors block"
          >
            {product.name}
          </Link>

          {/* Tagline */}
          <p className="text-[11px] text-[#737373] line-clamp-1">{product.tagline}</p>

          {/* Color swatches */}
          {product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 pt-1">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedColor === c.name
                      ? 'ring-2 ring-[#71006A] ring-offset-1 scale-110'
                      : 'border-[#E6E6E6] hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                  aria-label={c.name}
                />
              ))}
              <span className="text-[10px] text-[#999999] ml-1">{selectedColor}</span>
            </div>
          )}
        </div>

        {/* Pricing & Add to Bag */}
        <div className="pt-2.5 border-t border-[#F5F5F5] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-sm sm:text-base text-[#252525]">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-[#999999] line-through">
              {formatPrice(product.originalPrice)}
            </span>
          </div>

          <button
            onClick={() => addToCart(product, 1, selectedColor)}
            className="p-2 sm:px-3 sm:py-1.5 rounded-md bg-[#71006A] text-white hover:bg-[#5C0056] active:scale-95 transition-all text-xs font-semibold flex items-center gap-1"
            aria-label="Add to Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLibas } from '@/context/LibasContext';
import { LibasProductCard } from '@/components/libas/LibasProductCard';
import { SlidersHorizontal, ArrowUpDown, X, Check, Filter } from 'lucide-react';

interface LibasCollectionPageProps {
  category: string;
  title: string;
  tagline: string;
}

function CollectionContent({ category, title, tagline }: LibasCollectionPageProps) {
  const searchParams = useSearchParams();
  const { products, formatPrice } = useLibas();

  // Query parameter extraction
  const styleParam = searchParams.get('style');
  const fabricParam = searchParams.get('fabric');
  const occasionParam = searchParams.get('occasion');
  const typeParam = searchParams.get('type');
  const catParam = searchParams.get('cat');

  // Filter states
  const [userSubCategory, setUserSubCategory] = useState<string | null>(null);
  const [userFabric, setUserFabric] = useState<string | null>(null);
  const [userOccasion, setUserOccasion] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('All');
  const [priceMax, setPriceMax] = useState<number>(10000);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const selectedSubCategory = userSubCategory ?? (styleParam || typeParam || catParam || 'All');
  const selectedFabric = userFabric ?? (fabricParam || 'All');
  const selectedOccasion = userOccasion ?? (occasionParam || 'All');

  const setSelectedSubCategory = (val: string) => setUserSubCategory(val);
  const setSelectedFabric = (val: string) => setUserFabric(val);
  const setSelectedOccasion = (val: string) => setUserOccasion(val);

  // Base products for this page category
  const baseProducts = products.filter((p) => {
    if (category === 'All') return true;
    if (category === 'Plus-Size') return p.isExtraLove || p.category === 'Plus-Size';
    if (category === 'Sale') return p.discountPercentage >= 50 || p.category === 'Sale';
    return p.category.toLowerCase() === category.toLowerCase();
  });

  // Extract available subcategories for chips
  const subCategories = [
    'All',
    ...Array.from(
      new Set(
        baseProducts.map((p) => {
          if (p.subCategory) {
            return p.subCategory.replace(' Suits', '').replace(' Dresses', '').replace(' Sarees', '');
          }
          return p.occasion;
        })
      )
    ),
  ];

  const fabrics = ['All', 'Silk', 'Cotton', 'Velvet', 'Georgette', 'Organza'];
  const occasions = ['All', 'Wedding', 'Festive', 'Daily Wear', 'Party', 'Office Wear'];
  const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL'];

  const filteredProducts = baseProducts.filter((p) => {
    const matchesSub =
      selectedSubCategory === 'All' ||
      (p.subCategory && p.subCategory.toLowerCase().includes(selectedSubCategory.toLowerCase())) ||
      p.name.toLowerCase().includes(selectedSubCategory.toLowerCase());

    const matchesFabric =
      selectedFabric === 'All' || p.fabric.toLowerCase().includes(selectedFabric.toLowerCase());

    const matchesOccasion =
      selectedOccasion === 'All' || p.occasion.toLowerCase().includes(selectedOccasion.toLowerCase());

    const matchesSize =
      selectedSize === 'All' ||
      p.sizes.includes(selectedSize) ||
      p.sizes.some((s) => s.includes(selectedSize));

    const matchesPrice = p.price <= priceMax;

    return matchesSub && matchesFabric && matchesOccasion && matchesSize && matchesPrice;
  });

  // Sorting
  const sorted = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'discount') return b.discountPercentage - a.discountPercentage;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const clearAllFilters = () => {
    setSelectedSubCategory('All');
    setSelectedFabric('All');
    setSelectedOccasion('All');
    setSelectedSize('All');
    setPriceMax(10000);
  };

  const hasActiveFilters =
    selectedSubCategory !== 'All' ||
    selectedFabric !== 'All' ||
    selectedOccasion !== 'All' ||
    selectedSize !== 'All' ||
    priceMax < 10000;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Category Header Banner */}
      <div className="bg-[#FAF7F9] border-b border-[#E6E6E6] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
              LIBAS EDITORIAL COLLECTION
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
              {tagline}
            </p>
            <p className="text-[11px] font-mono font-bold text-[#71006A] pt-1">
              Showing {sorted.length} Handcrafted Designs
            </p>
          </div>

          {/* Subcategory Horizontal Quick Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-6 pb-2">
            {subCategories.map((sub) => {
              const active = selectedSubCategory.toLowerCase() === sub.toLowerCase();
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap shadow-2xs ${
                    active
                      ? 'bg-[#71006A] text-white shadow-xs'
                      : 'bg-white border border-[#E6E6E6] text-[#252525] hover:border-[#71006A] hover:text-[#71006A]'
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 2. Top Filter Bar */}
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#E6E6E6] gap-4">
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#71006A] text-[#71006A] text-xs font-semibold"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Refine Filters ({hasActiveFilters ? 'Active' : 'All'})</span>
          </button>

          {/* Active Chips */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap">
            <span className="text-xs text-[#737373] font-medium mr-1">Active:</span>
            {selectedSubCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF7F9] border border-[#71006A]/30 text-xs font-bold text-[#71006A]">
                Style: {selectedSubCategory}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedSubCategory('All')} />
              </span>
            )}
            {selectedFabric !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF7F9] border border-[#71006A]/30 text-xs font-bold text-[#71006A]">
                Fabric: {selectedFabric}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedFabric('All')} />
              </span>
            )}
            {selectedOccasion !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF7F9] border border-[#71006A]/30 text-xs font-bold text-[#71006A]">
                Occasion: {selectedOccasion}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedOccasion('All')} />
              </span>
            )}
            {selectedSize !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF7F9] border border-[#71006A]/30 text-xs font-bold text-[#71006A]">
                Size: {selectedSize}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedSize('All')} />
              </span>
            )}
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-[#71006A] hover:underline font-bold ml-2"
              >
                Clear All
              </button>
            )}
            {!hasActiveFilters && (
              <span className="text-xs text-[#999999]">All styles displayed</span>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 ml-auto">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#737373]" />
            <span className="text-xs text-[#737373] font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-bold text-[#252525] outline-none cursor-pointer border-none pr-1"
            >
              <option value="featured">Featured & Trending</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="discount">Highest Discount</option>
              <option value="rating">Customer Ratings</option>
            </select>
          </div>
        </div>

        {/* 3. Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
          
          {/* Left Filter Sidebar */}
          <div className={`space-y-6 ${showMobileFilter ? 'block' : 'hidden lg:block'} col-span-1`}>
            <div className="flex items-center justify-between pb-3 border-b border-[#E6E6E6]">
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[#71006A]">
                Filter By Attributes
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-[11px] text-[#71006A] hover:underline font-bold"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Fabric */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#252525] block uppercase tracking-wide">
                Fabric Material
              </label>
              <div className="space-y-1 text-xs">
                {fabrics.map((fab) => (
                  <button
                    key={fab}
                    onClick={() => setSelectedFabric(fab)}
                    className={`flex items-center justify-between w-full py-1 text-left transition-colors ${
                      selectedFabric === fab ? 'text-[#71006A] font-bold' : 'text-[#4D4D4D] hover:text-[#252525]'
                    }`}
                  >
                    <span>{fab}</span>
                    {selectedFabric === fab && <Check className="w-3.5 h-3.5 text-[#71006A]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion */}
            <div className="space-y-2 pt-4 border-t border-[#F5F5F5]">
              <label className="text-xs font-bold text-[#252525] block uppercase tracking-wide">
                Occasion
              </label>
              <div className="space-y-1 text-xs">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setSelectedOccasion(occ)}
                    className={`flex items-center justify-between w-full py-1 text-left transition-colors ${
                      selectedOccasion === occ ? 'text-[#71006A] font-bold' : 'text-[#4D4D4D] hover:text-[#252525]'
                    }`}
                  >
                    <span>{occ}</span>
                    {selectedOccasion === occ && <Check className="w-3.5 h-3.5 text-[#71006A]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="space-y-2 pt-4 border-t border-[#F5F5F5]">
              <label className="text-xs font-bold text-[#252525] block uppercase tracking-wide">
                Size
              </label>
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-1 rounded text-xs font-semibold border transition-all text-center ${
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

            {/* Max Price Slider */}
            <div className="space-y-2 pt-4 border-t border-[#F5F5F5]">
              <div className="flex justify-between text-xs font-bold text-[#252525]">
                <span>Max Budget:</span>
                <span className="font-mono text-[#71006A]">{formatPrice(priceMax)}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={10000}
                step={500}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#71006A]"
              />
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="col-span-1 lg:col-span-3">
            {sorted.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {sorted.map((prod) => (
                  <LibasProductCard key={prod.id} product={prod} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FAF7F9] text-[#71006A] flex items-center justify-center mx-auto">
                  <Filter className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#252525]">No styles match your selected filters</h3>
                <p className="text-xs text-[#737373] max-w-sm mx-auto">
                  Try clearing active subcategory &ldquo;{selectedSubCategory}&rdquo; or fabric &ldquo;{selectedFabric}&rdquo; to view more options.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 rounded-lg bg-[#71006A] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export function LibasCollectionPage(props: LibasCollectionPageProps) {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-[#737373]">Loading Collection...</div>}>
      <CollectionContent {...props} />
    </Suspense>
  );
}

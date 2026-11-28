'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLibas } from '@/context/LibasContext';
import { LibasProductCard } from '@/components/libas/LibasProductCard';
import { Search, SlidersHorizontal, ArrowUpDown, X, Filter } from 'lucide-react';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const { products } = useLibas();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFabric, setSelectedFabric] = useState<string>('All');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceMax, setPriceMax] = useState<number>(10000);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Filter matching products
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;

    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchSubCat = p.subCategory ? p.subCategory.toLowerCase().includes(q) : false;
      const matchFabric = p.fabric.toLowerCase().includes(q);
      const matchOccasion = p.occasion.toLowerCase().includes(q);
      const matchPattern = p.pattern.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchColor = p.colors.some((c) => c.name.toLowerCase().includes(q));

      // Keyword synonym matching
      const isKurtaSynonym = (q.includes('kurti') || q.includes('tunic')) && p.category === 'Kurtas';
      const isSuitSynonym = (q.includes('anarkali') || q.includes('sharara') || q.includes('palazzo')) && p.category === 'Suits';
      const isPlusSynonym = (q.includes('plus') || q.includes('extralove') || q.includes('curve') || q.includes('3xl') || q.includes('4xl') || q.includes('5xl') || q.includes('6xl')) && p.isExtraLove;

      return (
        matchName ||
        matchCat ||
        matchSubCat ||
        matchFabric ||
        matchOccasion ||
        matchPattern ||
        matchDesc ||
        matchColor ||
        isKurtaSynonym ||
        isSuitSynonym ||
        isPlusSynonym
      );
    });
  }, [products, query]);

  // Secondary filters
  const filteredProducts = useMemo(() => {
    return searchResults
      .filter((p) => {
        if (selectedCategory !== 'All' && p.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
        if (selectedFabric !== 'All' && !p.fabric.toLowerCase().includes(selectedFabric.toLowerCase())) return false;
        if (selectedOccasion !== 'All' && p.occasion.toLowerCase() !== selectedOccasion.toLowerCase()) return false;
        if (p.price > priceMax) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'discount') return b.discountPercentage - a.discountPercentage;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured default
      });
  }, [searchResults, selectedCategory, selectedFabric, selectedOccasion, priceMax, sortBy]);

  // Fabrics & Categories available from current search results
  const availableCategories = ['All', ...Array.from(new Set(searchResults.map((p) => p.category)))];
  const availableFabrics = ['All', 'Silk', 'Cotton', 'Georgette', 'Velvet', 'Organza'];
  const availableOccasions = ['All', 'Festive', 'Wedding', 'Daily Wear', 'Party', 'Office Wear'];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Search Banner */}
      <div className="bg-[#FAF7F9] border-b border-[#E6E6E6] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-[#737373] mb-3 flex items-center gap-1.5 font-medium">
            <Link href="/" className="hover:text-[#71006A]">Home</Link>
            <span>/</span>
            <span className="text-[#252525]">Search</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-widest bg-[#71006A]/10 text-[#71006A]">
                  SEARCH DIRECTORY
                </span>
                <span className="text-xs text-[#737373] font-mono">
                  {filteredProducts.length} Results
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#252525] mt-1.5">
                {query ? (
                  <>
                    Search Results for <span className="text-[#71006A] italic">&ldquo;{query}&rdquo;</span>
                  </>
                ) : (
                  'All Ethnic Collections'
                )}
              </h1>
            </div>

            {/* Quick search input within the search page */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = (e.currentTarget.elements.namedItem('q') as HTMLInputElement).value;
                if (input.trim()) {
                  router.push(`/search?q=${encodeURIComponent(input.trim())}`);
                }
              }}
              className="relative max-w-sm w-full"
            >
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search Suits, Sarees, Kurtas..."
                className="w-full bg-white border border-[#E6E6E6] focus:border-[#71006A] rounded-full py-2.5 pl-10 pr-4 text-xs text-[#252525] outline-none shadow-xs"
              />
              <Search className="w-4 h-4 text-[#71006A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>
          </div>

          {/* Quick Category Filters Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-1 no-scrollbar">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#71006A] text-white border-[#71006A]'
                    : 'bg-white text-[#4D4D4D] border-[#E6E6E6] hover:border-[#71006A] hover:text-[#71006A]'
                }`}
              >
                {cat === 'All' ? 'All Silhouettes' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Left Sidebar Filters */}
          <div className="hidden lg:block space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6E6E6]">
              <span className="font-bold text-xs uppercase tracking-wider text-[#252525] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#71006A]" /> Filters
              </span>
              {(selectedCategory !== 'All' || selectedFabric !== 'All' || selectedOccasion !== 'All' || priceMax < 10000) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedFabric('All');
                    setSelectedOccasion('All');
                    setPriceMax(10000);
                  }}
                  className="text-[11px] text-[#71006A] font-bold hover:underline"
                >
                  Reset All
                </button>
              )}
            </div>

            {/* Fabric Filter */}
            <div>
              <h4 className="text-[11px] font-mono font-bold text-[#71006A] uppercase mb-2">FABRIC</h4>
              <div className="space-y-1">
                {availableFabrics.map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFabric(f)}
                    className={`block w-full text-left text-xs py-1 px-2 rounded-md ${
                      selectedFabric === f ? 'bg-[#71006A] text-white font-bold' : 'text-[#4D4D4D] hover:bg-[#FAF7F9]'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion Filter */}
            <div>
              <h4 className="text-[11px] font-mono font-bold text-[#71006A] uppercase mb-2">OCCASION</h4>
              <div className="space-y-1">
                {availableOccasions.map((o) => (
                  <button
                    key={o}
                    onClick={() => setSelectedOccasion(o)}
                    className={`block w-full text-left text-xs py-1 px-2 rounded-md ${
                      selectedOccasion === o ? 'bg-[#71006A] text-white font-bold' : 'text-[#4D4D4D] hover:bg-[#FAF7F9]'
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Max Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span>Max Price</span>
                <span className="font-mono text-[#71006A]">₹{priceMax.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="500"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#71006A]"
              />
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-3">
            {/* Sorting & Mobile Filter Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6E6E6]">
              <span className="text-xs text-[#737373]">
                Showing <strong>{filteredProducts.length}</strong> of {searchResults.length} designs
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowMobileFilter(true)}
                  className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E6E6E6] text-xs font-bold text-[#252525]"
                >
                  <Filter className="w-3.5 h-3.5 text-[#71006A]" /> Filters
                </button>

                <div className="flex items-center gap-1.5 text-xs">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#737373]" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent border border-[#E6E6E6] rounded-lg py-1 px-2 text-xs font-medium outline-none text-[#252525]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="discount">Highest Discount</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Cards */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <LibasProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-4 bg-[#FAF7F9] rounded-2xl border border-[#E6E6E6] space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#71006A]/10 text-[#71006A] flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#252525]">
                  No matching silhouettes found for &ldquo;{query}&rdquo;
                </h3>
                <p className="text-xs text-[#737373] max-w-md mx-auto">
                  Try searching with different terms like &ldquo;Anarkali&rdquo;, &ldquo;Saree&rdquo;, &ldquo;Kurta&rdquo;, &ldquo;Silk&rdquo;, or &ldquo;Plus Size&rdquo;.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-2">
                  <Link href="/search?q=Anarkali" className="px-3.5 py-1.5 rounded-full bg-white border border-[#E6E6E6] text-xs font-bold text-[#71006A] hover:bg-[#71006A] hover:text-white transition-colors">
                    👗 Anarkali Suits
                  </Link>
                  <Link href="/search?q=Organza" className="px-3.5 py-1.5 rounded-full bg-white border border-[#E6E6E6] text-xs font-bold text-[#71006A] hover:bg-[#71006A] hover:text-white transition-colors">
                    🥻 Organza Sarees
                  </Link>
                  <Link href="/search?q=Cotton" className="px-3.5 py-1.5 rounded-full bg-white border border-[#E6E6E6] text-xs font-bold text-[#71006A] hover:bg-[#71006A] hover:text-white transition-colors">
                    👚 Pure Cotton Kurtis
                  </Link>
                  <Link href="/search?q=ExtraLove" className="px-3.5 py-1.5 rounded-full bg-white border border-[#E6E6E6] text-xs font-bold text-[#71006A] hover:bg-[#71006A] hover:text-white transition-colors">
                    ✨ ExtraLove (3XL-6XL)
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Slide-Over Drawer */}
      {showMobileFilter && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setShowMobileFilter(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 overflow-y-auto z-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6E6E6]">
                <span className="font-bold text-sm text-[#252525] uppercase tracking-wider flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#71006A]" /> Refine Results
                </span>
                <button
                  type="button"
                  onClick={() => setShowMobileFilter(false)}
                  className="p-1 text-[#737373] hover:text-[#252525]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Fabric */}
              <div>
                <h4 className="text-[11px] font-mono font-bold text-[#71006A] uppercase mb-2">FABRIC</h4>
                <div className="space-y-1">
                  {availableFabrics.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setSelectedFabric(f)}
                      className={`block w-full text-left text-xs py-1.5 px-3 rounded-md ${
                        selectedFabric === f ? 'bg-[#71006A] text-white font-bold' : 'text-[#4D4D4D] hover:bg-[#FAF7F9]'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <h4 className="text-[11px] font-mono font-bold text-[#71006A] uppercase mb-2">OCCASION</h4>
                <div className="space-y-1">
                  {availableOccasions.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => setSelectedOccasion(o)}
                      className={`block w-full text-left text-xs py-1.5 px-3 rounded-md ${
                        selectedOccasion === o ? 'bg-[#71006A] text-white font-bold' : 'text-[#4D4D4D] hover:bg-[#FAF7F9]'
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Max Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span>Max Price</span>
                  <span className="text-[#71006A] font-mono">₹{priceMax.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-[#71006A]"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-[#E6E6E6] space-y-2">
              <button
                type="button"
                onClick={() => setShowMobileFilter(false)}
                className="w-full py-2.5 rounded-full bg-[#71006A] text-white font-bold text-xs uppercase tracking-wider"
              >
                Apply Filters ({filteredProducts.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedFabric('All');
                  setSelectedOccasion('All');
                  setPriceMax(10000);
                  setShowMobileFilter(false);
                }}
                className="w-full py-2 rounded-full border border-[#E6E6E6] text-[#737373] font-bold text-xs"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-xs font-mono font-bold text-[#71006A]">Loading Libas Search Directory...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}

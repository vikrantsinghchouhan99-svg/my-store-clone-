'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useLibas } from '@/context/LibasContext';
import {
  Search,
  Clock,
  TrendingUp,
  X,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

interface LibasSearchBarProps {
  isMobile?: boolean;
}

const DEFAULT_HISTORY = [
  'Anarkali Suits',
  'Organza Sarees',
  'Chikankari Kurta',
  'Plus Size ExtraLove',
];

const TRENDING_SEARCHES = [
  { label: '👗 Anarkali Suits', query: 'Anarkali' },
  { label: '🥻 Organza Sarees', query: 'Organza' },
  { label: '👚 Pure Cotton Kurtis', query: 'Cotton' },
  { label: '✨ ExtraLove (3XL-6XL)', query: 'Plus-Size' },
  { label: '💃 Festive Maxi Gowns', query: 'Dress' },
  { label: '👘 Kaftan Co-ords', query: 'Kaftan' },
  { label: '🔥 Flat 50% Off Deals', query: 'Sale' },
  { label: '🟣 Plum Zari Silk', query: 'Plum' },
  { label: '🟡 Haldi Yellow Sharara', query: 'Sharara' },
];

export function LibasSearchBar({ isMobile = false }: LibasSearchBarProps) {
  const router = useRouter();
  const { products, setQuickViewProduct } = useLibas();

  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>(() => {
    if (typeof window === 'undefined') return DEFAULT_HISTORY;
    try {
      const stored = localStorage.getItem('libas_search_history');
      return stored ? JSON.parse(stored) : DEFAULT_HISTORY;
    } catch {
      return DEFAULT_HISTORY;
    }
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Save query to history
  const saveToHistory = (searchTerm: string) => {
    const clean = searchTerm.trim();
    if (!clean) return;
    setHistory((prev) => {
      const updated = [clean, ...prev.filter((item) => item.toLowerCase() !== clean.toLowerCase())].slice(0, 8);
      try {
        localStorage.setItem('libas_search_history', JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  // Remove single history item
  const removeHistoryItem = (e: React.MouseEvent, itemToRemove: string) => {
    e.stopPropagation();
    setHistory((prev) => {
      const updated = prev.filter((item) => item !== itemToRemove);
      try {
        localStorage.setItem('libas_search_history', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Clear all history
  const clearAllHistory = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHistory([]);
    try {
      localStorage.removeItem('libas_search_history');
    } catch {}
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter matching products in real-time
  const matchedProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return products
      .filter((p) => {
        const matchName = p.name.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        const matchSub = p.subCategory ? p.subCategory.toLowerCase().includes(q) : false;
        const matchFabric = p.fabric.toLowerCase().includes(q);
        const matchColor = p.colors.some((c) => c.name.toLowerCase().includes(q));
        const matchPattern = p.pattern.toLowerCase().includes(q);

        const isKurtaSynonym = (q.includes('kurti') || q.includes('tunic')) && p.category === 'Kurtas';
        const isSuitSynonym = (q.includes('anarkali') || q.includes('sharara') || q.includes('palazzo')) && p.category === 'Suits';
        const isPlusSynonym = (q.includes('plus') || q.includes('3xl') || q.includes('4xl') || q.includes('curve')) && p.isExtraLove;

        return matchName || matchCat || matchSub || matchFabric || matchColor || matchPattern || isKurtaSynonym || isSuitSynonym || isPlusSynonym;
      })
      .slice(0, 5);
  }, [products, query]);

  // Execute search submission
  const executeSearch = (targetQuery: string) => {
    const clean = targetQuery.trim();
    if (!clean) return;
    saveToHistory(clean);
    setIsOpen(false);
    setQuery(clean);
    router.push(`/search?q=${encodeURIComponent(clean)}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      executeSearch(query);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Input Form */}
      <form onSubmit={handleFormSubmit} className="relative w-full">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={isMobile ? 'Search Suits, Kurtas, Sarees...' : 'Search Suits, Kurtas, Sarees, Dresses, Plus-Size...'}
          className={`w-full bg-[#FAF7F9] border ${
            isOpen ? 'border-[#71006A] bg-white ring-2 ring-[#71006A]/10' : 'border-[#E6E6E6]'
          } rounded-full py-2.5 pl-10 pr-10 text-xs text-[#252525] placeholder-[#999999] outline-none transition-all shadow-2xs`}
        />
        <Search className="w-4 h-4 text-[#71006A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#999999] hover:text-[#252525] p-0.5"
            aria-label="Clear search input"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </form>

      {/* Predictive Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E6E6E6] rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 max-h-[85vh] sm:max-h-[520px] overflow-y-auto">
          
          {/* SCENARIO 1: Empty Query -> History & Trending Options */}
          {!query.trim() ? (
            <div className="p-4 sm:p-5 space-y-5">
              
              {/* Recent Search History */}
              {history.length > 0 && (
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F5F5F5]">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#71006A] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#71006A]" /> Recent Searches
                    </span>
                    <button
                      type="button"
                      onClick={clearAllHistory}
                      className="text-[10px] text-[#999999] hover:text-[#D92D20] font-medium"
                    >
                      Clear History
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {history.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => executeSearch(item)}
                        className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F9] hover:bg-[#71006A] hover:text-white border border-[#E6E6E6] text-xs text-[#252525] cursor-pointer transition-colors"
                      >
                        <Clock className="w-3 h-3 text-[#737373] group-hover:text-white" />
                        <span>{item}</span>
                        <button
                          type="button"
                          onClick={(e) => removeHistoryItem(e, item)}
                          className="text-[#999999] group-hover:text-white hover:text-red-300 ml-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              <div>
                <div className="pb-2 mb-2.5 border-b border-[#F5F5F5]">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#71006A] flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#71006A]" /> Trending Searches
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {TRENDING_SEARCHES.map((t, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => executeSearch(t.query)}
                      className="px-3 py-1.5 rounded-full bg-white hover:bg-[#FAF7F9] border border-[#E6E6E6] hover:border-[#71006A] text-xs text-[#252525] hover:text-[#71006A] font-medium transition-colors cursor-pointer"
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Categories Grid */}
              <div className="pt-2 border-t border-[#F5F5F5]">
                <div className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#737373] mb-2">
                  DISCOVER BY CATEGORY
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => executeSearch('Suits')}
                    className="p-2.5 rounded-xl bg-[#FAF7F9] hover:bg-[#71006A] hover:text-white text-left font-bold transition-colors group cursor-pointer"
                  >
                    <div className="text-sm mb-0.5">👗</div>
                    <div className="text-xs group-hover:text-white text-[#252525]">Suits & Sets</div>
                    <div className="text-[10px] font-normal text-[#737373] group-hover:text-white/80">10 Designs</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeSearch('Kurtas')}
                    className="p-2.5 rounded-xl bg-[#FAF7F9] hover:bg-[#71006A] hover:text-white text-left font-bold transition-colors group cursor-pointer"
                  >
                    <div className="text-sm mb-0.5">👚</div>
                    <div className="text-xs group-hover:text-white text-[#252525]">Kurtas & Kurtis</div>
                    <div className="text-[10px] font-normal text-[#737373] group-hover:text-white/80">9 Designs</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeSearch('Sarees')}
                    className="p-2.5 rounded-xl bg-[#FAF7F9] hover:bg-[#71006A] hover:text-white text-left font-bold transition-colors group cursor-pointer"
                  >
                    <div className="text-sm mb-0.5">🥻</div>
                    <div className="text-xs group-hover:text-white text-[#252525]">Designer Sarees</div>
                    <div className="text-[10px] font-normal text-[#737373] group-hover:text-white/80">9 Designs</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeSearch('Plus-Size')}
                    className="p-2.5 rounded-xl bg-[#71006A]/10 hover:bg-[#71006A] hover:text-white text-left font-bold transition-colors group cursor-pointer"
                  >
                    <div className="text-sm mb-0.5">✨</div>
                    <div className="text-xs text-[#71006A] group-hover:text-white">ExtraLove (3XL-6XL)</div>
                    <div className="text-[10px] font-normal text-[#71006A]/80 group-hover:text-white/80">8 Designs</div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* SCENARIO 2: With Query -> Live Matching Products & Suggestions */
            <div className="p-4 sm:p-5 space-y-4">
              
              {/* Search Suggestions Header */}
              <div className="flex items-center justify-between pb-2 border-b border-[#F5F5F5]">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#71006A]">
                  MATCHING SILHOUETTES ({matchedProducts.length})
                </span>
                <button
                  type="button"
                  onClick={() => executeSearch(query)}
                  className="text-xs font-bold text-[#71006A] hover:underline flex items-center gap-1"
                >
                  <span>View All Results</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {matchedProducts.length > 0 ? (
                <div className="divide-y divide-[#F5F5F5]">
                  {matchedProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        saveToHistory(query);
                        setIsOpen(false);
                        setQuickViewProduct(p);
                      }}
                      className="flex items-center gap-3.5 py-2.5 hover:bg-[#FAF7F9] px-2 rounded-xl cursor-pointer transition-colors group"
                    >
                      {/* Product Thumbnail */}
                      <div className="w-12 h-16 rounded-lg overflow-hidden bg-[#F5F5F5] shrink-0 border border-[#E6E6E6]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#71006A] bg-[#71006A]/10 px-1.5 py-0.2 rounded">
                            {p.category}
                          </span>
                          <span className="text-[10px] text-[#737373] truncate">
                            {p.fabric}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-[#252525] truncate mt-0.5 group-hover:text-[#71006A] transition-colors">
                          {p.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-extrabold text-[#71006A] font-mono">
                            ₹{p.price.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-[#999999] line-through font-mono">
                            ₹{p.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-[9px] font-bold text-[#047857]">
                            {p.discountPercentage}% OFF
                          </span>
                        </div>
                      </div>

                      {/* Arrow Icon */}
                      <ChevronRight className="w-4 h-4 text-[#CCCCCC] group-hover:text-[#71006A] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  ))}

                  {/* View All Matches Button */}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => executeSearch(query)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#71006A] hover:bg-[#560050] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <span>See All Results For &ldquo;{query}&rdquo;</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* No Results State */
                <div className="py-8 text-center space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#252525]">
                      No products found matching &ldquo;{query}&rdquo;
                    </h5>
                    <p className="text-[11px] text-[#737373] mt-1">
                      Check for spelling or try popular search terms below:
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={() => executeSearch('Anarkali')}
                      className="px-2.5 py-1 rounded-full bg-[#FAF7F9] border border-[#E6E6E6] text-[11px] font-bold text-[#71006A]"
                    >
                      Anarkali
                    </button>
                    <button
                      type="button"
                      onClick={() => executeSearch('Organza')}
                      className="px-2.5 py-1 rounded-full bg-[#FAF7F9] border border-[#E6E6E6] text-[11px] font-bold text-[#71006A]"
                    >
                      Organza
                    </button>
                    <button
                      type="button"
                      onClick={() => executeSearch('Cotton')}
                      className="px-2.5 py-1 rounded-full bg-[#FAF7F9] border border-[#E6E6E6] text-[11px] font-bold text-[#71006A]"
                    >
                      Cotton
                    </button>
                    <button
                      type="button"
                      onClick={() => executeSearch('Plus-Size')}
                      className="px-2.5 py-1 rounded-full bg-[#FAF7F9] border border-[#E6E6E6] text-[11px] font-bold text-[#71006A]"
                    >
                      ExtraLove 3XL
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      )}
    </div>
  );
}

'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

const CATEGORIES = ['All', 'Apparel', 'Footwear', 'Accessories', 'Bags'];

export function CategoryFilter() {
  const { selectedCategory, setSelectedCategory, sortBy, setSortBy } = useStore();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-border">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-foreground text-background shadow-sm'
                  : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Sort By Dropdown */}
      <div className="flex items-center gap-2 self-end sm:self-auto">
        <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground font-medium">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-transparent text-xs font-semibold text-foreground outline-none cursor-pointer border-none pr-2"
        >
          <option value="featured" className="bg-background text-foreground">Featured</option>
          <option value="price-asc" className="bg-background text-foreground">Price: Low to High</option>
          <option value="price-desc" className="bg-background text-foreground">Price: High to Low</option>
          <option value="rating" className="bg-background text-foreground">Top Rated</option>
        </select>
      </div>
    </div>
  );
}

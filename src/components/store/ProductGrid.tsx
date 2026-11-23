'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { ProductCard } from '@/components/store/ProductCard';
import { CategoryFilter } from '@/components/store/CategoryFilter';
import { Search } from 'lucide-react';

export function ProductGrid() {
  const { products, selectedCategory, searchQuery, sortBy } = useStore();

  // Filter products by category and search
  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured default
  });

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      <div className="mb-8 text-center sm:text-left">
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-mono">
          Curated Catalog
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground mt-1">
          Handcrafted In Focus
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Showing {sortedProducts.length} heirloom quality pieces designed for lifetime utility.
        </p>
      </div>

      {/* Filter and sorting toolbar */}
      <CategoryFilter />

      {/* Products Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">No matching pieces found</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            We couldn't find anything matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or switching categories.
          </p>
        </div>
      )}
    </section>
  );
}

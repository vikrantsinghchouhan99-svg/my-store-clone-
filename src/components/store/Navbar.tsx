'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { ShoppingBag, Heart, Search, X, Menu, Sparkles, ChevronDown } from 'lucide-react';

export function Navbar() {
  const { cartCount, wishlist, setIsCartOpen, searchQuery, setSearchQuery } = useStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-border transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
        <span>COMPLIMENTARY WORLDWIDE EXPRESS SHIPPING ON ORDERS OVER $150 • USE CODE <strong>AURA26</strong></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground/80 hover:text-foreground"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex flex-col group">
              <span className="font-serif tracking-widest text-2xl sm:text-3xl font-extrabold uppercase text-foreground group-hover:opacity-90 transition-opacity">
                AURA
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground -mt-1 font-mono">
                STUDIO & ATELIER
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#catalog" className="text-foreground/80 hover:text-foreground hover:underline underline-offset-8 transition-colors">
              Collection
            </a>
            <a href="#new-arrivals" className="text-foreground/80 hover:text-foreground hover:underline underline-offset-8 transition-colors">
              New Arrivals
            </a>
            <a href="#bestsellers" className="text-foreground/80 hover:text-foreground hover:underline underline-offset-8 transition-colors">
              Best Sellers
            </a>
            <a href="#editorial" className="text-foreground/80 hover:text-foreground hover:underline underline-offset-8 transition-colors">
              Editorial
            </a>
            <a href="#reviews" className="text-foreground/80 hover:text-foreground hover:underline underline-offset-8 transition-colors">
              Stories
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Input / Toggle */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-muted/60 border border-input rounded-full px-3 py-1.5 w-44 sm:w-64 transition-all">
                  <Search className="w-4 h-4 text-muted-foreground shrink-0 mr-2" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-muted-foreground hover:text-foreground p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-foreground/80 hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Wishlist Icon */}
            <button
              onClick={() => {
                const el = document.getElementById('catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative p-2 text-foreground/80 hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 text-[10px] bg-red-500 text-white font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-foreground text-background px-3.5 py-2 rounded-full font-medium text-xs hover:opacity-90 active:scale-95 transition-all shadow-sm"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-background text-foreground text-[11px] font-bold px-1.5 py-0.5 rounded-full ml-0.5">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 pt-3 pb-6 space-y-3">
          <a
            href="#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary border-b border-border/40"
          >
            Collection
          </a>
          <a
            href="#new-arrivals"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary border-b border-border/40"
          >
            New Arrivals
          </a>
          <a
            href="#bestsellers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary border-b border-border/40"
          >
            Best Sellers
          </a>
          <a
            href="#editorial"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary border-b border-border/40"
          >
            Editorial
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary"
          >
            Stories & Reviews
          </a>
        </div>
      )}
    </header>
  );
}

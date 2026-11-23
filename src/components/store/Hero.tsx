'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Award } from 'lucide-react';

export function Hero() {
  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-muted/20 border-b border-border">
      {/* Decorative background subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Spring / Summer 2026 Collection</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
              Architectural Form. <br />
              <span className="italic font-light text-muted-foreground">Enduring Quality.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Curated essentials engineered with Japanese twill, Tuscan vegetable-tanned leather, and Portuguese craftsmanship. Designed to age with distinction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToCatalog}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Explore The Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#editorial"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-border bg-background/80 hover:bg-muted text-foreground font-semibold text-sm transition-all text-center"
              >
                Read Our Story
              </a>
            </div>

            {/* Quick Metrics / Social Proof */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/60 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-foreground">50k+</p>
                <p className="text-xs text-muted-foreground">Discerning Patrons</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Certified Organic</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-foreground">4.9/5</p>
                <p className="text-xs text-muted-foreground">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/60 aspect-[4/5] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                  alt="Summer Collection Showcase"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Product Tag */}
                <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-border/80 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                      Featured Piece
                    </span>
                    <h2 className="text-sm font-semibold text-foreground">
                      Architectural Linen Silhouette
                    </h2>
                    <p className="text-xs font-mono font-medium text-primary mt-0.5">
                      $248.00 USD
                    </p>
                  </div>
                  <button
                    onClick={scrollToCatalog}
                    className="p-2.5 bg-foreground text-background rounded-full hover:opacity-90 active:scale-95 transition-all"
                    aria-label="View Product"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Secondary Mini Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-background p-3 rounded-xl border border-border shadow-xl w-44">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=300&auto=format&fit=crop"
                      alt="Accessories"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-foreground truncate">Swiss Movement</p>
                    <p className="text-[10px] text-muted-foreground font-mono">Restocked Today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Value Pillars Bar */}
        <div className="mt-16 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Express Global Shipping</h4>
              <p className="text-xs text-muted-foreground">Delivered in 2-4 business days carbon-neutral</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Complimentary 30-Day Returns</h4>
              <p className="text-xs text-muted-foreground">Hassle-free prepaid return shipping labels included</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Lifetime Craftsmanship Warranty</h4>
              <p className="text-xs text-muted-foreground">Hardware, stitching, and assembly guaranteed</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

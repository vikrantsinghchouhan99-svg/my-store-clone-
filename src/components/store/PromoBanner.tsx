'use client';

import React from 'react';
import { ArrowRight, Compass, Feather, Scissors } from 'lucide-react';

export function PromoBanner() {
  return (
    <section id="editorial" className="py-20 bg-muted/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-muted shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
                  alt="Editorial apparel"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
                  alt="Store interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop"
                  alt="Accessories atelier"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-muted shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop"
                  alt="Model lookbook"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-mono">
              The Philosophy
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground leading-tight">
              Honest Materials. <br />
              Zero Compromise.
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We reject transient fast-fashion cycles. Each garment and accessory in our atelier begins with ethically harvested fibers, certified low-impact mineral dyes, and hand-finished stitchwork intended to last decades.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 text-foreground">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Micro-Batch Production</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    We fabricate in restricted numbered editions to eliminate warehouse overproduction.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 text-foreground">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Traceable Supply Line</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    From regenerative organic cotton farms in Gunma to artisan leather tanneries in Santa Croce.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 text-foreground">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Circular Re-Craft Initiative</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Send back worn pieces anytime for complimentary repair or store trade-in credit.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-all shadow-md"
              >
                <span>View The Manifesto</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

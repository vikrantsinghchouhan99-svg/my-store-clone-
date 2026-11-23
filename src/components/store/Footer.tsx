'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Shield, Globe, Lock } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* Newsletter Bar */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-2 text-center lg:text-left">
              <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-semibold">
                Privileged Access
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                Join The Collective
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto lg:mx-0">
                Subscribe to receive private preview notifications, seasonal archive drops, and 15% off your first acquisition.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-center justify-center gap-2 text-xs font-medium">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>You have been subscribed. Welcome to the collective.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto lg:mx-0">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-background border border-input rounded-xl text-xs text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-foreground text-background font-semibold text-xs tracking-wider uppercase hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div>
              <span className="font-serif tracking-widest text-2xl font-extrabold uppercase text-foreground">
                AURA
              </span>
              <p className="text-xs font-mono text-muted-foreground tracking-widest">ATELIER & CO.</p>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              Design studio founded in 2024. Curating functional luxury pieces engineered with Japanese twill, Italian leather, and Portuguese craftsmanship.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> Worldwide Fulfillment</span>
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> Encrypted Payments</span>
            </div>
          </div>

          {/* Column 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">Catalog</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Apparel & Outerwear</a></li>
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Footwear & Boots</a></li>
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Bespoke Timepieces</a></li>
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Leather Travel Goods</a></li>
              <li><a href="#catalog" className="hover:text-foreground transition-colors">New Releases</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">Assistance</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Order Tracking</a></li>
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Returns & Exchanges</a></li>
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Care Instructions</a></li>
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Lifetime Warranty</a></li>
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Concierge Support</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">Atelier</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#editorial" className="hover:text-foreground transition-colors">Sustainability Dossier</a></li>
              <li><a href="#editorial" className="hover:text-foreground transition-colors">Material Provenance</a></li>
              <li><a href="#editorial" className="hover:text-foreground transition-colors">Studio Locations</a></li>
              <li><a href="#editorial" className="hover:text-foreground transition-colors">Press & Lookbooks</a></li>
              <li><a href="#editorial" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 AURA Studio Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
            <span>100% Encrypted & Safe Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

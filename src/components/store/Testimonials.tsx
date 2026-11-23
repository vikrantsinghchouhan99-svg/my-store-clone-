'use client';

import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

const REVIEWS = [
  {
    author: 'Julian Henderson',
    role: 'Creative Director, London',
    rating: 5,
    title: 'Flawless tailoring and silhouette',
    comment:
      'The Heavyweight Trench exceeded every expectation. The Japanese cotton twill holds its shape remarkably, and the finish repelled heavy rain on my commute through Soho. Genuinely comparable to heritage Savile Row houses.',
    date: 'Verified Buyer • 3 days ago',
  },
  {
    author: 'Elena Rostova',
    role: 'Architect, Zurich',
    rating: 5,
    title: 'The Monolith Watch is pure industrial art',
    comment:
      'Minimalist, balanced, and perfectly weighted. The sapphire crystal is crystal clear, and the 39mm proportions fit effortlessly under shirt cuffs. It has become my singular daily piece.',
    date: 'Verified Buyer • 1 week ago',
  },
  {
    author: 'Marcus Vance',
    role: 'Product Designer, San Francisco',
    rating: 5,
    title: 'Best leather weekender I have ever held',
    comment:
      'The scent and depth of the Tuscan vegetable-tanned leather is sublime. The brass hardware is solid and heavy. It has already accompanied me on four flights and is developing a rich, handsome patina.',
    date: 'Verified Buyer • 2 weeks ago',
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Endorsed by Discerning Patrons
          </h2>
          <p className="text-sm text-muted-foreground">
            Read unedited feedback from over 50,000 customers across 42 countries worldwide.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-primary/30" />
                
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <h3 className="font-semibold text-base text-foreground font-serif">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      {rev.author}
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    </h4>
                    <p className="text-[11px] text-muted-foreground">{rev.role}</p>
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground font-mono mt-2">{rev.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

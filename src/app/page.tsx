import React from 'react';
import { LibasHero } from '@/components/libas/LibasHero';
import { LibasCategoryCircles } from '@/components/libas/LibasCategoryCircles';
import { LibasTrendingGrid } from '@/components/libas/LibasTrendingGrid';
import { LibasFestiveBanners } from '@/components/libas/LibasFestiveBanners';
import { Scissors, Feather, Compass, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-4">
      {/* 1. Main Hero Stage */}
      <LibasHero />

      {/* 2. Circular Category Bar */}
      <LibasCategoryCircles />

      {/* 3. Curated Trending Ensembles Grid */}
      <LibasTrendingGrid />

      {/* 4. Split Festive Editorial Banners */}
      <LibasFestiveBanners />

      {/* 5. Editorial Craft & Philosophy */}
      <section className="py-16 bg-[#FAF7F9] border-y border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Visual Mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop"
                  alt="Zari Embroidery Craft"
                  className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-white shadow-sm pt-6">
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop"
                  alt="Artisanal Hand block"
                  className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-5">
              <span className="text-[10px] font-mono tracking-widest uppercase font-extrabold text-[#71006A]">
                THE LIBAS ATELIER
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525] leading-tight">
                Authentic Craftsmanship. <br />
                Tailored for Modern Celebrations.
              </h2>
              <p className="text-xs sm:text-sm text-[#4D4D4D] leading-relaxed">
                Every Libas creation represents a harmony between India’s time-honored textile heritage and contemporary sensibilities. From pure Chanderi weaves to handcrafted Rajasthani gotta patti and Lucknowi resham stitches.
              </p>

              <div className="space-y-3.5 pt-2 text-xs">
                <div className="flex gap-3.5 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E6E6E6] flex items-center justify-center shrink-0 text-[#71006A]">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#252525]">Bespoke Grading & Fit</h4>
                    <p className="text-[#737373] text-[11px] mt-0.5">
                      Tailored with comfort-stretch waistbands and roomier armhole cuts for easy movement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E6E6E6] flex items-center justify-center shrink-0 text-[#71006A]">
                    <Feather className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#252525]">Natural Breathable Weaves</h4>
                    <p className="text-[#737373] text-[11px] mt-0.5">
                      Premium 60s combed cotton, pure silk blends, and featherweight organza that stay fresh all day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E6E6E6] flex items-center justify-center shrink-0 text-[#71006A]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#252525]">Direct from Weaver to Wardrobe</h4>
                    <p className="text-[#737373] text-[11px] mt-0.5">
                      Fair remuneration for regional master artisans across Jaipur, Chanderi, and Varanasi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/suits"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#71006A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5C0056] shadow-sm transition-all"
                >
                  <span>Explore The Atelier Edit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Customer Stories & Social Proof */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-1.5">
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#252525]">
              Loved by Over 10 Million Women
            </h2>
            <p className="text-xs text-[#737373]">
              Discover why Libas is India&apos;s most cherished ethnic and fusion destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <h3 className="font-bold text-sm text-[#252525] font-serif">
                &ldquo;Wore the Anarkali to my sister&apos;s Sangeet&rdquo;
              </h3>
              <p className="text-xs text-[#4D4D4D] leading-relaxed">
                The rich plum tone and gold zari work were stunning in photos. The Chanderi silk is so lightweight yet feels regal. Received countless compliments all night!
              </p>
              <div className="pt-2 border-t border-[#E6E6E6] flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#252525] flex items-center gap-1">
                  Ananya Sengupta <CheckCircle className="w-3 h-3 text-emerald-700" />
                </span>
                <span className="text-[#999999] font-mono">Kolkata</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <h3 className="font-bold text-sm text-[#252525] font-serif">
                &ldquo;ExtraLove 4XL fit is an absolute dream!&rdquo;
              </h3>
              <p className="text-xs text-[#4D4D4D] leading-relaxed">
                Finding plus-size ethnic wear that looks festive and doesn&apos;t feel tight around the arms was impossible until I found Libas. Beautiful cut and true to size!
              </p>
              <div className="pt-2 border-t border-[#E6E6E6] flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#252525] flex items-center gap-1">
                  Ritika Oberoi <CheckCircle className="w-3 h-3 text-emerald-700" />
                </span>
                <span className="text-[#999999] font-mono">New Delhi</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <h3 className="font-bold text-sm text-[#252525] font-serif">
                &ldquo;Organza Saree delivered in 48 hours&rdquo;
              </h3>
              <p className="text-xs text-[#4D4D4D] leading-relaxed">
                Super fast delivery and packaging was premium. The organza has the right amount of stiffness to hold pleats, and the scalloped border is exquisite.
              </p>
              <div className="pt-2 border-t border-[#E6E6E6] flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#252525] flex items-center gap-1">
                  Dr. Meenakshi Iyer <CheckCircle className="w-3 h-3 text-emerald-700" />
                </span>
                <span className="text-[#999999] font-mono">Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { X, Star, ShoppingBag, Heart, Shield, RotateCcw, Truck } from 'lucide-react';

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, wishlist, toggleWishlist } = useStore();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWishlisted = wishlist.includes(product.id);
  const activeColor = selectedColor || product.colors[0]?.name;
  const activeSize = selectedSize || product.sizes?.[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-background border border-border rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 hover:bg-background border border-border text-foreground transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery Column */}
          <div className="bg-muted/30 p-6 flex flex-col justify-between">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4 border border-border/50">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail switcher */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-14 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-foreground scale-105'
                        : 'border-border/60 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="uppercase tracking-widest text-[10px] font-mono font-semibold">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-semibold text-foreground text-xs">{product.rating.toFixed(1)}</span>
                  <span>({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3">
                <span className="font-mono text-2xl font-bold text-foreground">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="font-mono text-sm text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="pt-2">
                <label className="text-xs font-semibold text-foreground block mb-2">
                  Color: <span className="font-normal text-muted-foreground">{activeColor}</span>
                </label>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-6 h-6 rounded-full border transition-all ${
                        activeColor === c.name
                          ? 'ring-2 ring-foreground ring-offset-2 scale-110'
                          : 'border-border/60 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="pt-2">
                  <label className="text-xs font-semibold text-foreground block mb-2">
                    Size: <span className="font-normal text-muted-foreground">{activeSize}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`min-w-9 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          activeSize === s
                            ? 'bg-foreground text-background border-foreground'
                            : 'border-border text-foreground hover:bg-muted'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-border rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-muted-foreground hover:text-foreground text-sm"
                  >
                    -
                  </button>
                  <span className="font-mono text-xs font-bold px-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-muted-foreground hover:text-foreground text-sm"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(product, quantity, activeColor, activeSize);
                    setQuickViewProduct(null);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-foreground text-background font-semibold text-xs tracking-wider uppercase hover:opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 rounded-xl border border-border transition-colors ${
                    isWishlisted ? 'bg-red-500 text-white border-red-500' : 'hover:bg-muted text-foreground'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Guarantees mini list */}
              <div className="grid grid-cols-3 gap-2 text-[10px] text-muted-foreground pt-2">
                <div className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Lifetime Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

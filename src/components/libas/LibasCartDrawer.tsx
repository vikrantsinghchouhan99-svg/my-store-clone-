'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLibas } from '@/context/LibasContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

export function LibasCartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartCount,
    formatPrice,
    setIsCheckoutModalOpen,
  } = useLibas();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);

  if (!isCartOpen) return null;

  const FREE_SHIPPING_LIMIT = 999;
  const progress = Math.min((cartSubtotal / FREE_SHIPPING_LIMIT) * 100, 100);
  const amountRemaining = Math.max(FREE_SHIPPING_LIMIT - cartSubtotal, 0);

  const discount = promoApplied ? cartSubtotal * 0.1 : 0;
  const grandTotal = cartSubtotal - discount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'PREPAID10') {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E6E6E6] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E6E6E6] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#71006A]" />
              <h2 className="text-base font-bold text-[#252525]">Shopping Bag ({cartCount})</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-[#F5F5F5] text-[#737373] hover:text-[#252525]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Tracker */}
          <div className="bg-[#FAF7F9] p-3.5 border-b border-[#E6E6E6]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-medium text-[#252525]">
                {amountRemaining === 0 ? (
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Yay! You unlocked Complimentary Express Shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong>{formatPrice(amountRemaining)}</strong> more for Free Shipping
                  </span>
                )}
              </span>
              <span className="font-mono text-[#737373] text-[11px]">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#E6E6E6] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#71006A] transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {checkoutDone ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#F3EBF2] text-[#71006A] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#252525]">Order Placed Successfully!</h3>
                <p className="text-xs text-[#737373] max-w-xs mx-auto">
                  Thank you for shopping at Libas. Your order tracking details will be sent to your mobile & email.
                </p>
                <button
                  onClick={() => {
                    setCheckoutDone(false);
                    setIsCartOpen(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#71006A] text-white text-xs font-semibold"
                >
                  Continue Shopping
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center mx-auto text-[#999999]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-[#252525]">Your bag is empty</h3>
                <p className="text-xs text-[#737373] max-w-xs mx-auto">
                  Explore our latest festive suits, silk sarees, and everyday kurtas to fill your bag.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#71006A] text-white text-xs font-semibold"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}-${idx}`}
                  className="flex gap-3.5 p-3 bg-white border border-[#E6E6E6] rounded-xl"
                >
                  <div className="w-20 h-24 rounded-lg bg-[#F5F5F5] overflow-hidden shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=300&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-semibold text-[#252525] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() =>
                            removeFromCart(item.product.id, item.selectedColor, item.selectedSize)
                          }
                          className="text-[#999999] hover:text-[#D92D20] p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#737373] mt-0.5">
                        Size: <span className="font-medium text-[#252525]">{item.selectedSize}</span> • {item.selectedColor}
                      </div>

                      <div className="font-bold text-xs text-[#252525] mt-1">
                        {formatPrice(item.product.price * item.quantity)}
                      </div>
                    </div>

                    <div className="flex items-center border border-[#E6E6E6] rounded-md bg-white w-max mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, -1, item.selectedColor, item.selectedSize)
                        }
                        className="px-2 py-0.5 text-[#737373] hover:text-[#252525]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs font-medium px-2">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, 1, item.selectedColor, item.selectedSize)
                        }
                        className="px-2 py-0.5 text-[#737373] hover:text-[#252525]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && !checkoutDone && (
            <div className="p-4 sm:p-5 border-t border-[#E6E6E6] bg-white space-y-3.5">
              {/* Promo input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code (PREPAID10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-[#F5F5F5] border border-[#E6E6E6] rounded-lg px-3 py-1.5 text-xs text-[#252525] outline-none font-mono uppercase"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#252525] text-white text-xs font-semibold"
                >
                  Apply
                </button>
              </form>

              {/* Price summary */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[#737373]">
                  <span>Bag Total</span>
                  <span className="font-medium text-[#252525]">{formatPrice(cartSubtotal)}</span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Prepaid Discount (10% OFF)</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#737373]">
                  <span>Shipping</span>
                  <span className="font-medium text-[#252525]">
                    {amountRemaining === 0 ? 'FREE' : formatPrice(99)}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-bold text-[#252525] pt-2 border-t border-[#E6E6E6]">
                  <span>Total Amount</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* Action button */}
              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full py-3.5 px-4 rounded-xl bg-[#71006A] text-white font-bold text-xs tracking-wider uppercase hover:bg-[#5C0056] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processing Payment...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#737373]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#71006A]" />
                <span>100% Genuine Ethnic Wear • Easy 15-Day Returns</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

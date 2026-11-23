'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLibas } from '@/context/LibasContext';
import {
  X,
  ShieldCheck,
  CreditCard,
  QrCode,
  Banknote,
  CheckCircle2,
  Lock,
  ArrowRight,
  Truck,
  Building,
} from 'lucide-react';

export function LibasCheckoutModal() {
  const {
    cart,
    cartSubtotal,
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    placeOrder,
    formatPrice,
  } = useLibas();

  // Step 1: Address, Step 2: Payment, Step 3: Confirmation
  const [step, setStep] = useState<'address' | 'payment' | 'confirmed'>('address');

  // Address fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'UPI' | 'CARD' | 'NETBANKING'>('COD');
  const [upiId, setUpiId] = useState('');
  const [selectedUpiApp, setSelectedUpiApp] = useState<'gpay' | 'phonepe' | 'paytm'>('gpay');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');

  // Completed order state
  const [completedOrderId, setCompletedOrderId] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutModalOpen) return null;

  const FREE_SHIPPING_LIMIT = 999;
  const shippingFee = cartSubtotal >= FREE_SHIPPING_LIMIT ? 0 : 99;
  const finalPayable = cartSubtotal + shippingFee;

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && phone && pincode && address && city && state) {
      setStep('payment');
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const orderId = placeOrder({
        items: [...cart],
        total: finalPayable,
        paymentMethod,
        shippingAddress: {
          fullName,
          phone,
          pincode,
          address,
          city,
          state,
        },
      });

      setCompletedOrderId(orderId);
      setIsProcessing(false);
      setStep('confirmed');
    }, 1200);
  };

  const closeAndReset = () => {
    setIsCheckoutModalOpen(false);
    setStep('address');
    setCompletedOrderId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeAndReset}
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity"
      />

      {/* Main Checkout Modal Window */}
      <div className="relative bg-white rounded-2xl border border-[#E6E6E6] shadow-2xl max-w-2xl w-full z-10 overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E6E6E6] flex items-center justify-between bg-[#FAF7F9]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#71006A]" />
            <h2 className="text-base font-bold text-[#252525]">
              {step === 'address' && '1. Delivery & Shipping Address'}
              {step === 'payment' && '2. Choose Payment Method'}
              {step === 'confirmed' && 'Order Placed Successfully!'}
            </h2>
          </div>
          <button
            onClick={closeAndReset}
            className="p-1.5 rounded-full hover:bg-white text-[#737373] hover:text-[#252525] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto">
          
          {/* STEP 1: DELIVERY ADDRESS */}
          {step === 'address' && (
            <form onSubmit={handleAddressSubmit} className="space-y-4">
              <div className="p-3 bg-[#FAF7F9] border border-[#E6E6E6] rounded-xl flex items-center justify-between text-xs">
                <span>Order Total: <strong>{formatPrice(finalPayable)}</strong></span>
                <span className="text-[#71006A] font-bold font-mono">({cart.length} items in bag)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#252525] block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#252525] block mb-1">
                    Mobile Number (For Delivery SMS) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#252525] block mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="e.g. 302020"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#252525] block mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#252525] block mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajasthan"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#252525] block mb-1">
                  Complete Street Address (Flat / House No / Landmark) *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="e.g. Flat 402, Royal Residency, Near Civil Lines"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E6E6E6] text-xs text-[#252525] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#71006A] hover:bg-[#5C0056] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Continue to Payment Options</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 2: PAYMENT METHOD SELECTION */}
          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit} className="space-y-5">
              
              {/* Payment Summary */}
              <div className="p-3 bg-[#FAF7F9] border border-[#E6E6E6] rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#737373]">Shipping to: </span>
                  <span className="font-bold text-[#252525]">{fullName}, {city}</span>
                </div>
                <div className="font-bold text-sm text-[#71006A]">
                  Payable: {formatPrice(finalPayable)}
                </div>
              </div>

              {/* Payment Options Accordion / Tabs */}
              <div className="space-y-3">
                
                {/* 1. Cash on Delivery (COD) */}
                <div
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'COD'
                      ? 'border-[#71006A] bg-[#FAF7F9]'
                      : 'border-[#E6E6E6] hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Banknote className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#252525]">
                          Cash on Delivery (COD)
                        </h4>
                        <p className="text-[11px] text-[#737373]">
                          Pay cash or scan QR at doorstep upon package arrival
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      checked={paymentMethod === 'COD'}
                      onChange={() => setPaymentMethod('COD')}
                      className="accent-[#71006A]"
                    />
                  </div>

                  {paymentMethod === 'COD' && (
                    <div className="mt-3 pt-3 border-t border-[#E6E6E6] text-xs text-emerald-800 bg-emerald-50/60 p-2.5 rounded-lg flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>COD available for {pincode}. Zero advance payment required!</span>
                    </div>
                  )}
                </div>

                {/* 2. Instant UPI (Google Pay, PhonePe, Paytm, QR) */}
                <div
                  onClick={() => setPaymentMethod('UPI')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'UPI'
                      ? 'border-[#71006A] bg-[#FAF7F9]'
                      : 'border-[#E6E6E6] hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#F3EBF2] text-[#71006A] flex items-center justify-center">
                        <QrCode className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#252525]">
                          UPI (Google Pay, PhonePe, Paytm, QR)
                        </h4>
                        <p className="text-[11px] text-[#737373]">
                          Instant verification via UPI App or Dynamic QR
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      checked={paymentMethod === 'UPI'}
                      onChange={() => setPaymentMethod('UPI')}
                      className="accent-[#71006A]"
                    />
                  </div>

                  {paymentMethod === 'UPI' && (
                    <div className="mt-3 pt-3 border-t border-[#E6E6E6] space-y-3">
                      {/* UPI App selector chips */}
                      <div className="flex gap-2">
                        {(['gpay', 'phonepe', 'paytm'] as const).map((app) => (
                          <button
                            key={app}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedUpiApp(app);
                            }}
                            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold border capitalize transition-all ${
                              selectedUpiApp === app
                                ? 'bg-[#71006A] text-white border-[#71006A]'
                                : 'bg-white border-[#E6E6E6] text-[#252525]'
                            }`}
                          >
                            {app === 'gpay' ? 'Google Pay' : app === 'phonepe' ? 'PhonePe' : 'Paytm'}
                          </button>
                        ))}
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-[#252525] block mb-1">
                          Enter UPI ID / VPA
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. mobile@okaxis or user@ybl"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#252525] outline-none font-mono"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Credit / Debit Card */}
                <div
                  onClick={() => setPaymentMethod('CARD')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'CARD'
                      ? 'border-[#71006A] bg-[#FAF7F9]'
                      : 'border-[#E6E6E6] hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#252525]">
                          Credit / Debit Card (Visa, MasterCard, RuPay)
                        </h4>
                        <p className="text-[11px] text-[#737373]">
                          Secured with 256-bit bank encryption
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      checked={paymentMethod === 'CARD'}
                      onChange={() => setPaymentMethod('CARD')}
                      className="accent-[#71006A]"
                    />
                  </div>

                  {paymentMethod === 'CARD' && (
                    <div className="mt-3 pt-3 border-t border-[#E6E6E6] space-y-3">
                      <div>
                        <label className="text-[11px] font-bold text-[#252525] block mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          maxLength={19}
                          placeholder="4532 •••• •••• 8892"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#252525] outline-none font-mono"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-bold text-[#252525] block mb-1">
                            Expiry (MM/YY)
                          </label>
                          <input
                            type="text"
                            maxLength={5}
                            placeholder="08/28"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#252525] outline-none font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-[#252525] block mb-1">
                            CVV
                          </label>
                          <input
                            type="password"
                            maxLength={4}
                            placeholder="•••"
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#252525] outline-none font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-[#252525] block mb-1">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. PRIYA SHARMA"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#252525] outline-none uppercase"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. Net Banking */}
                <div
                  onClick={() => setPaymentMethod('NETBANKING')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'NETBANKING'
                      ? 'border-[#71006A] bg-[#FAF7F9]'
                      : 'border-[#E6E6E6] hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                        <Building className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#252525]">
                          Net Banking
                        </h4>
                        <p className="text-[11px] text-[#737373]">
                          All major Indian public & private banks
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      checked={paymentMethod === 'NETBANKING'}
                      onChange={() => setPaymentMethod('NETBANKING')}
                      className="accent-[#71006A]"
                    />
                  </div>

                  {paymentMethod === 'NETBANKING' && (
                    <div className="mt-3 pt-3 border-t border-[#E6E6E6]">
                      <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full p-2.5 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#252525] outline-none font-semibold"
                      >
                        <option>HDFC Bank</option>
                        <option>State Bank of India (SBI)</option>
                        <option>ICICI Bank</option>
                        <option>Axis Bank</option>
                        <option>Kotak Mahindra Bank</option>
                        <option>Punjab National Bank</option>
                      </select>
                    </div>
                  )}
                </div>

              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('address')}
                  className="px-4 py-3 rounded-xl border border-[#E6E6E6] text-xs font-bold text-[#252525] hover:bg-[#F5F5F5]"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 py-3.5 rounded-xl bg-[#71006A] hover:bg-[#5C0056] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Authorizing Transaction...</span>
                  ) : paymentMethod === 'COD' ? (
                    <span>Confirm Order with Cash on Delivery ({formatPrice(finalPayable)})</span>
                  ) : (
                    <span>Pay Now • {formatPrice(finalPayable)}</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: ORDER CONFIRMED */}
          {step === 'confirmed' && (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-[10px] font-mono tracking-widest text-[#71006A] font-extrabold uppercase">
                CONSIGNMENT BOOKED
              </span>

              <h3 className="text-2xl font-serif font-bold text-[#252525]">
                Order Confirmed!
              </h3>

              <div className="bg-[#FAF7F9] border border-[#E6E6E6] rounded-xl p-4 max-w-md mx-auto text-xs space-y-2 text-left">
                <div className="flex justify-between pb-1.5 border-b border-[#E6E6E6]">
                  <span className="text-[#737373]">Order Reference:</span>
                  <span className="font-mono font-bold text-[#71006A]">{completedOrderId}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-[#E6E6E6]">
                  <span className="text-[#737373]">Payment Option:</span>
                  <span className="font-bold text-[#252525]">{paymentMethod}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-[#E6E6E6]">
                  <span className="text-[#737373]">Recipient:</span>
                  <span className="font-bold text-[#252525]">{fullName} ({phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#737373]">Deliver to:</span>
                  <span className="text-right text-[#252525] max-w-[200px] truncate">{address}, {city} - {pincode}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 max-w-sm mx-auto">
                <Link
                  href="/track-order"
                  onClick={closeAndReset}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#71006A] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Truck className="w-4 h-4" />
                  <span>Track This Order</span>
                </Link>

                <button
                  onClick={closeAndReset}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-[#E6E6E6] hover:bg-[#F5F5F5] text-[#252525] text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

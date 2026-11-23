'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LibasProduct, LibasCartItem } from '@/types/libas';
import { LIBAS_PRODUCTS } from '@/data/libasProducts';

export interface LibasUser {
  name: string;
  email: string;
  phone?: string;
}

export interface LibasOrder {
  orderId: string;
  items: LibasCartItem[];
  total: number;
  paymentMethod: 'COD' | 'UPI' | 'CARD' | 'NETBANKING';
  shippingAddress: {
    fullName: string;
    phone: string;
    pincode: string;
    address: string;
    city: string;
    state: string;
  };
  date: string;
  status: 'Confirmed' | 'Shipped' | 'Out for Delivery';
}

interface LibasContextType {
  products: LibasProduct[];
  cart: LibasCartItem[];
  addToCart: (
    product: LibasProduct,
    quantity?: number,
    selectedColor?: string,
    selectedSize?: string
  ) => void;
  removeFromCart: (productId: string, selectedColor?: string, selectedSize?: string) => void;
  updateQuantity: (
    productId: string,
    delta: number,
    selectedColor?: string,
    selectedSize?: string
  ) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  quickViewProduct: LibasProduct | null;
  setQuickViewProduct: (product: LibasProduct | null) => void;
  toast: string | null;
  clearToast: () => void;
  currency: 'INR' | 'USD';
  setCurrency: (c: 'INR' | 'USD') => void;
  formatPrice: (amountInINR: number) => string;
  // Auth state
  user: LibasUser | null;
  loginUser: (user: LibasUser) => void;
  logoutUser: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  // Checkout state
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;
  orders: LibasOrder[];
  placeOrder: (order: Omit<LibasOrder, 'orderId' | 'date' | 'status'>) => string;
}

const LibasContext = createContext<LibasContextType | undefined>(undefined);

export function LibasProvider({ children }: { children: React.ReactNode }) {
  const [products] = useState<LibasProduct[]>(LIBAS_PRODUCTS);
  const [cart, setCart] = useState<LibasCartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<LibasProduct | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Auth & Checkout state
  const [user, setUser] = useState<LibasUser | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [orders, setOrders] = useState<LibasOrder[]>([]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('libas_cart');
      if (savedCart) setCart(JSON.parse(savedCart));
      const savedWishlist = localStorage.getItem('libas_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      const savedUser = localStorage.getItem('libas_user');
      if (savedUser) setUser(JSON.parse(savedUser));
      const savedOrders = localStorage.getItem('libas_orders');
      if (savedOrders) setOrders(JSON.parse(savedOrders));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('libas_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('libas_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  useEffect(() => {
    try {
      if (user) localStorage.setItem('libas_user', JSON.stringify(user));
      else localStorage.removeItem('libas_user');
    } catch {}
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('libas_orders', JSON.stringify(orders));
    } catch {}
  }, [orders]);

  const addToCart = (
    product: LibasProduct,
    quantity = 1,
    selectedColor = product.colors[0]?.name || 'Standard',
    selectedSize = product.sizes[0] || 'Free Size'
  ) => {
    setCart((prev) => {
      const index = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );
      if (index > -1) {
        const next = [...prev];
        next[index].quantity += quantity;
        return next;
      }
      return [...prev, { product, quantity, selectedColor, selectedSize }];
    });

    setToast(`Added "${product.name}" to your bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedColor?: string, selectedSize?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            (selectedColor === undefined || item.selectedColor === selectedColor) &&
            (selectedSize === undefined || item.selectedSize === selectedSize)
          )
      )
    );
  };

  const updateQuantity = (
    productId: string,
    delta: number,
    selectedColor?: string,
    selectedSize?: string
  ) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (
            item.product.id === productId &&
            (selectedColor === undefined || item.selectedColor === selectedColor) &&
            (selectedSize === undefined || item.selectedSize === selectedSize)
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is LibasCartItem => item !== null)
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const isPresent = prev.includes(productId);
      const next = isPresent ? prev.filter((id) => id !== productId) : [...prev, productId];
      setToast(isPresent ? 'Removed from Wishlist' : 'Saved to Wishlist');
      return next;
    });
  };

  const loginUser = (userData: LibasUser) => {
    setUser(userData);
    setIsAuthModalOpen(false);
    setToast(`Welcome back, ${userData.name}!`);
  };

  const logoutUser = () => {
    setUser(null);
    setToast('Logged out successfully.');
  };

  const placeOrder = (orderDetails: Omit<LibasOrder, 'orderId' | 'date' | 'status'>): string => {
    const generatedId = `LIB-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: LibasOrder = {
      ...orderDetails,
      orderId: generatedId,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Confirmed',
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return generatedId;
  };

  const clearToast = () => setToast(null);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const formatPrice = (amountInINR: number): string => {
    if (currency === 'USD') {
      const inUSD = amountInINR / 83;
      return `$${inUSD.toFixed(2)}`;
    }
    return `₹${amountInINR.toLocaleString('en-IN')}`;
  };

  return (
    <LibasContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        quickViewProduct,
        setQuickViewProduct,
        toast,
        clearToast,
        currency,
        setCurrency,
        formatPrice,
        user,
        loginUser,
        logoutUser,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        orders,
        placeOrder,
      }}
    >
      {children}
    </LibasContext.Provider>
  );
}

export function useLibas() {
  const context = useContext(LibasContext);
  if (!context) throw new Error('useLibas must be used within a LibasProvider');
  return context;
}

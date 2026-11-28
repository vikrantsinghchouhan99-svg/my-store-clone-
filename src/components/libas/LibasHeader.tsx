'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLibas } from '@/context/LibasContext';
import { LibasSearchBar } from '@/components/libas/LibasSearchBar';
import {
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Truck,
  Sparkles,
  ChevronDown,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const MEGA_MENU_ITEMS = [
  {
    title: 'SUITS',
    href: '/suits',
    columns: [
      {
        heading: 'BY SILHOUETTE',
        items: [
          { name: 'All Suit Sets', href: '/suits' },
          { name: 'Anarkali Suits', href: '/suits?style=Anarkali' },
          { name: 'Sharara Sets', href: '/suits?style=Sharara' },
          { name: 'Palazzo Suits', href: '/suits?style=Palazzo' },
          { name: 'Straight Suit Sets', href: '/suits?style=Straight' },
        ],
      },
      {
        heading: 'BY FABRIC',
        items: [
          { name: 'Chanderi Silk', href: '/suits?fabric=Silk' },
          { name: 'Pure Cotton', href: '/suits?fabric=Cotton' },
          { name: 'Royal Velvet', href: '/suits?fabric=Velvet' },
          { name: 'Flowing Georgette', href: '/suits?fabric=Georgette' },
        ],
      },
      {
        heading: 'BY OCCASION',
        items: [
          { name: 'Wedding & Bridal', href: '/suits?occasion=Wedding' },
          { name: 'Festive Wear', href: '/suits?occasion=Festive' },
          { name: 'Daily Essentials', href: '/suits?occasion=Daily' },
          { name: 'Office Elegance', href: '/suits?occasion=Office' },
        ],
      },
    ],
  },
  {
    title: 'KURTAS',
    href: '/kurtas',
    columns: [
      {
        heading: 'BY SILHOUETTE',
        items: [
          { name: 'All Kurtas & Kurtis', href: '/kurtas' },
          { name: 'Straight Cut Kurtas', href: '/kurtas?style=Straight' },
          { name: 'A-Line & Flared', href: '/kurtas?style=A-Line' },
          { name: 'Short Tunic Kurtis', href: '/kurtas?style=Short' },
        ],
      },
      {
        heading: 'CRAFT & PRINT',
        items: [
          { name: 'Zari & Foil Work', href: '/kurtas?fabric=Silk' },
          { name: 'Ajrakh & Block Prints', href: '/kurtas?fabric=Cotton' },
          { name: 'Threadwork Tunics', href: '/kurtas?occasion=Daily' },
        ],
      },
    ],
  },
  {
    title: 'SAREES',
    href: '/sarees',
    columns: [
      {
        heading: 'SAREE SELECTION',
        items: [
          { name: 'All Sarees', href: '/sarees' },
          { name: 'Sheer Organza Sarees', href: '/sarees?fabric=Organza' },
          { name: '1-Minute Ready-to-Wear', href: '/sarees?fabric=Georgette' },
          { name: 'Zari Woven Festive Sarees', href: '/sarees?occasion=Festive' },
        ],
      },
    ],
  },
  {
    title: 'DRESSES',
    href: '/dresses',
    columns: [
      {
        heading: 'ETHNIC DRESSES',
        items: [
          { name: 'All Ethnic Dresses', href: '/dresses' },
          { name: 'Tiered Maxi Gowns', href: '/dresses?occasion=Party' },
          { name: 'Angrakha Flared Dresses', href: '/dresses?fabric=Cotton' },
        ],
      },
    ],
  },
  {
    title: 'CO-ORDS',
    href: '/loungewear',
    columns: [
      {
        heading: 'CO-ORDS & LOUNGE',
        items: [
          { name: 'All Co-ords & Kaftans', href: '/loungewear' },
          { name: 'Pure Cotton Co-ords', href: '/loungewear?fabric=Cotton' },
          { name: 'Silk Lounge Kaftans', href: '/loungewear?fabric=Silk' },
        ],
      },
    ],
  },
  {
    title: 'PLUS SIZE',
    href: '/plus-size',
    highlight: true,
    columns: [
      {
        heading: 'EXTRALOVE (3XL - 6XL)',
        items: [
          { name: 'View All ExtraLove Styles', href: '/plus-size' },
          { name: 'Festive Anarkalis (3XL-6XL)', href: '/plus-size?occasion=Wedding' },
          { name: 'Daily Cotton Sets (3XL-6XL)', href: '/plus-size?occasion=Daily' },
        ],
      },
    ],
  },
  {
    title: 'SALE',
    href: '/sale',
    sale: true,
    columns: [
      {
        heading: 'FESTIVE CLEARANCE',
        items: [
          { name: 'All Sale Steals', href: '/sale' },
          { name: 'Flat 50% - 65% OFF Deals', href: '/sale' },
          { name: 'Festive Flash Picks', href: '/sale' },
        ],
      },
    ],
  },
];

export function LibasHeader() {
  const pathname = usePathname();
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    currency,
    setCurrency,
    user,
    logoutUser,
    setIsAuthModalOpen,
  } = useLibas();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-40 border-b border-[#E6E6E6] shadow-xs">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#71006A] text-white text-[11px] py-1.5 px-4 tracking-wide font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4 text-[10px] tracking-wider uppercase font-semibold">
            <Link href="/track-order" className="hover:underline flex items-center gap-1 text-white">
              <Truck className="w-3.5 h-3.5 text-[#FF8C91]" /> Track Order
            </Link>
            <span className="text-white/40">•</span>
            <Link href="/contact" className="hover:underline flex items-center gap-1 text-white">
              <HelpCircle className="w-3.5 h-3.5 text-[#FF8C91]" /> Need Help?
            </Link>
          </div>

          <div className="flex-1 text-center font-bold text-xs tracking-wider flex items-center justify-center gap-2">
            <Sparkles className="w-3 h-3 text-[#FF8C91] animate-pulse" />
            <span>
              FLAT 10% EXTRA OFF ON ALL PREPAID ORDERS | USE CODE: <strong>PREPAID10</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="text-[10px] font-bold px-2 py-0.5 rounded border border-white/30 hover:bg-white/10 uppercase tracking-widest font-mono"
            >
              {currency === 'INR' ? '₹ INR' : '$ USD'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Branding & Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 sm:gap-8">

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#252525] hover:text-[#71006A] shrink-0"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo - Fixed Left on Desktop, Center on Mobile */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex flex-col group">
              <span className="font-serif tracking-[0.2em] text-3xl sm:text-4xl font-extrabold uppercase text-[#71006A] group-hover:opacity-95 transition-opacity leading-none">
                LIBAS
              </span>
              <span className="text-[9px] tracking-[0.38em] uppercase text-[#4D4D4D] font-mono mt-0.5 font-bold">
                EDITORIAL COMMERCE
              </span>
            </Link>
          </div>

          {/* Center Predictive Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-auto">
            <LibasSearchBar />
          </div>

          {/* Right Action Icons (Account, Wishlist, Bag) */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">

            {/* Account Login Button */}
            <div className="relative">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#71006A] p-1.5 hover:bg-[#FAF7F9] rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 text-[#71006A]" />
                    <span className="hidden sm:inline">Hi, {user.name.split(' ')[0]}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#E6E6E6] rounded-xl shadow-xl py-2 z-50 text-xs">
                      <div className="px-4 py-2 border-b border-[#F5F5F5]">
                        <p className="font-bold text-[#252525]">{user.name}</p>
                        <p className="text-[11px] text-[#737373] truncate">{user.email}</p>
                      </div>
                      <Link
                        href="/track-order"
                        onClick={() => setUserDropdownOpen(false)}
                        className="block px-4 py-2 hover:bg-[#FAF7F9] text-[#252525]"
                      >
                        My Consignments
                      </Link>
                      <Link
                        href="/wishlist"
                        onClick={() => setUserDropdownOpen(false)}
                        className="block px-4 py-2 hover:bg-[#FAF7F9] text-[#252525]"
                      >
                        Saved Wishlist
                      </Link>
                      <button
                        onClick={() => {
                          logoutUser();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-[#D92D20] hover:bg-red-50 flex items-center gap-2 border-t border-[#F5F5F5]"
                      >
                        <LogOut className="w-3.5 h-3.5" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#252525] hover:text-[#71006A] transition-colors p-1"
                  aria-label="Account Login"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline tracking-wider uppercase text-[11px]">LOGIN</span>
                </button>
              )}
            </div>

            {/* Wishlist Link */}
            <Link
              href="/wishlist"
              className="relative p-1.5 text-[#252525] hover:text-[#71006A] transition-colors"
              aria-label="Wishlist"
            >
              <Heart
                className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-[#71006A] text-[#71006A]' : ''}`}
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 text-[9px] bg-[#71006A] text-white font-bold rounded-full flex items-center justify-center font-mono">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-[#71006A] hover:bg-[#5C0056] text-white px-4 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase active:scale-95 transition-all shadow-xs"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">BAG</span>
              <span className="bg-white text-[#71006A] text-[11px] font-extrabold px-1.5 py-0.2 rounded-full font-mono ml-0.5">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Predictive Search Bar */}
        <div className="lg:hidden mt-2.5">
          <LibasSearchBar isMobile />
        </div>
      </div>

      {/* 3. Full-Width Desktop Navigation Menu Bar */}
      <nav className="hidden lg:block border-t border-[#E6E6E6] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center space-x-8 text-[12px] font-extrabold tracking-[0.08em] uppercase py-2.5">
            {MEGA_MENU_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const isHovered = activeDropdown === item.title;

              return (
                <li
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 py-2 px-1 transition-colors ${item.sale
                        ? 'text-[#D92D20] font-black'
                        : item.highlight
                          ? 'text-[#71006A] font-black'
                          : isActive
                            ? 'text-[#71006A] border-b-2 border-[#71006A]'
                            : 'text-[#252525] hover:text-[#71006A]'
                      }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${isHovered ? 'rotate-180 text-[#71006A]' : ''
                        }`}
                    />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {isHovered && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-max min-w-[340px] bg-white border border-[#E6E6E6] shadow-2xl rounded-b-xl p-6 grid grid-cols-2 gap-8 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      {item.columns.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-3">
                          <h4 className="text-[11px] font-mono font-black text-[#71006A] uppercase tracking-wider pb-1 border-b border-[#F5F5F5]">
                            {col.heading}
                          </h4>
                          <ul className="space-y-2 text-xs normal-case tracking-normal">
                            {col.items.map((sub, sIdx) => (
                              <li key={sIdx}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[#4D4D4D] hover:text-[#71006A] hover:font-bold transition-colors block py-0.5"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* 4. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[125px] bg-white z-50 overflow-y-auto px-6 py-4 space-y-4 border-t border-[#E6E6E6] shadow-xl">
          <div className="space-y-1">
            {MEGA_MENU_ITEMS.map((item) => (
              <div key={item.title} className="border-b border-[#F5F5F5] py-2.5">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-wider block ${item.sale
                      ? 'text-[#D92D20]'
                      : item.highlight
                        ? 'text-[#71006A]'
                        : 'text-[#252525]'
                    }`}
                >
                  {item.title}
                </Link>
                <div className="pl-3 pt-2 pb-1 space-y-1.5">
                  {item.columns.flatMap((c) => c.items).slice(0, 4).map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-[#4D4D4D] hover:text-[#71006A] block"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 space-y-2.5 border-t border-[#E6E6E6]">
            {user ? (
              <div className="flex items-center justify-between text-xs py-1">
                <span>Signed in as <strong>{user.name}</strong></span>
                <button onClick={logoutUser} className="text-[#D92D20] font-bold">Logout</button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAuthModalOpen(true);
                }}
                className="w-full py-2.5 rounded-lg bg-[#71006A] text-white text-xs font-bold uppercase tracking-wider"
              >
                Login / Register
              </button>
            )}

            <Link
              href="/track-order"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-xs font-semibold text-[#252525] py-1"
            >
              <Truck className="w-4 h-4 text-[#71006A]" /> Track My Order
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-xs font-semibold text-[#252525] py-1"
            >
              <HelpCircle className="w-4 h-4 text-[#71006A]" /> Customer Care & FAQs
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

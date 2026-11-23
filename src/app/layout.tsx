import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LibasProvider } from '@/context/LibasContext';
import { LibasHeader } from '@/components/libas/LibasHeader';
import { LibasFooter } from '@/components/libas/LibasFooter';
import { LibasCartDrawer } from '@/components/libas/LibasCartDrawer';
import { LibasQuickView } from '@/components/libas/LibasQuickView';
import { LibasToast } from '@/components/libas/LibasToast';
import { LibasCheckoutModal } from '@/components/libas/LibasCheckoutModal';
import { LibasAuthModal } from '@/components/libas/LibasAuthModal';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Libas - Indian Ethnic & Fusion Wear for Women | Suits, Sarees, Kurtas',
  description:
    'Explore designer ethnic wear for women. Shop anarkali suit sets, cotton kurtas, party wear sarees, festive dresses, and plus size ExtraLove (3XL-6XL) at Libas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#252525] selection:bg-[#71006A] selection:text-white">
        <LibasProvider>
          {/* Universal Header with Mega Menu */}
          <LibasHeader />

          {/* Route Content */}
          <main className="flex-1">{children}</main>

          {/* Universal Footer */}
          <LibasFooter />

          {/* Universal Overlays */}
          <LibasCartDrawer />
          <LibasQuickView />
          <LibasToast />
          <LibasCheckoutModal />
          <LibasAuthModal />
        </LibasProvider>
      </body>
    </html>
  );
}

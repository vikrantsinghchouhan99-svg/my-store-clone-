import React from 'react';
import { LibasCollectionPage } from '@/components/libas/LibasCollectionPage';

export const metadata = {
  title: 'Co-ord Sets & Loungewear | Libas',
  description: 'Discover pure cotton co-ord sets, silk kaftans, and luxurious ethnic nightwear.',
};

export default function LoungewearPage() {
  return (
    <LibasCollectionPage
      category="Loungewear"
      title="Co-ords & Loungewear"
      tagline="Contemporary two-piece sets, printed silk kaftans, and elevated lounge essentials."
    />
  );
}

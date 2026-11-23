import React from 'react';
import { LibasCollectionPage } from '@/components/libas/LibasCollectionPage';

export const metadata = {
  title: 'Festive Clearance Sale - Flat 50% to 60% OFF | Libas',
  description: 'Shop top-selling suit sets, kurtas, and sarees at unbeatable clearance discounts.',
};

export default function SalePage() {
  return (
    <LibasCollectionPage
      category="Sale"
      title="Festive Mega Sale • Flat 50% - 60% OFF"
      tagline="Stock up on bestselling celebratory ensembles at season-clearout pricing. Limited stock available."
    />
  );
}

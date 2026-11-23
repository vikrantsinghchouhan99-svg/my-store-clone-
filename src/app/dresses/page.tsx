import React from 'react';
import { LibasCollectionPage } from '@/components/libas/LibasCollectionPage';

export const metadata = {
  title: 'Ethnic Dresses for Women | Libas',
  description: 'Shop floral tiered maxi dresses, angrakha silhouettes, and contemporary fusion ethnic dresses.',
};

export default function DressesPage() {
  return (
    <LibasCollectionPage
      category="Dresses"
      title="Ethnic & Fusion Dresses"
      tagline="Modern flared gowns and tiered maxi dresses blending Indian craftsmanship with global silhouettes."
    />
  );
}

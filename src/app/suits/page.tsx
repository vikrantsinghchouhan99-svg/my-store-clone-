import React from 'react';
import { LibasCollectionPage } from '@/components/libas/LibasCollectionPage';

export const metadata = {
  title: 'Suits & Sets for Women | Libas',
  description: 'Shop designer Anarkali suits, Sharara sets, Palazzo suit sets, and straight suits crafted in Chanderi silk, velvet, and cotton.',
};

export default function SuitsPage() {
  return (
    <LibasCollectionPage
      category="Suits"
      title="Suits & Suit Sets"
      tagline="From magnificent wedding Anarkalis to breathable everyday cotton palazzos, explore our hallmark festive suit sets."
    />
  );
}

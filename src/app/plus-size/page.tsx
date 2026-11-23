import React from 'react';
import { LibasCollectionPage } from '@/components/libas/LibasCollectionPage';

export const metadata = {
  title: 'ExtraLove Plus Size Fashion (3XL - 6XL) | Libas',
  description: 'Inclusive plus-size ethnic wear tailored for fuller silhouettes with comfortable stretch linings and custom proportions.',
};

export default function PlusSizePage() {
  return (
    <LibasCollectionPage
      category="Plus-Size"
      title="ExtraLove: Plus Size (3XL - 6XL)"
      tagline="Dedicated plus-size fashion crafted with custom armhole grading, roomier hip proportions, and flattering flares."
    />
  );
}

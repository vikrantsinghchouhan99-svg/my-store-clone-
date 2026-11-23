import React from 'react';
import { LibasCollectionPage } from '@/components/libas/LibasCollectionPage';

export const metadata = {
  title: 'Sarees Collection | Libas',
  description: 'Browse pure silk organza sarees, ready-to-wear pre-draped georgettes, and embroidered festive sarees.',
};

export default function SareesPage() {
  return (
    <LibasCollectionPage
      category="Sarees"
      title="Sarees & Drapes"
      tagline="Ethereal drapes in featherlight organza, flowy georgette, and hassle-free 1-minute ready-to-wear designs."
    />
  );
}

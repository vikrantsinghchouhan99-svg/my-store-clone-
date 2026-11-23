import React from 'react';
import { LibasCollectionPage } from '@/components/libas/LibasCollectionPage';

export const metadata = {
  title: 'Kurtas & Kurtis for Women | Libas',
  description: 'Explore straight kurtas, A-line kurtis, short tunics, and festive Chanderi kurtas with hand-block and zari embroidery.',
};

export default function KurtasPage() {
  return (
    <LibasCollectionPage
      category="Kurtas"
      title="Kurtas & Tunics"
      tagline="Versatile silhouettes tailored with artisanal Ajrakh prints, metallic foil highlights, and delicate threadwork."
    />
  );
}

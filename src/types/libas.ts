export interface LibasProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  category: 'Suits' | 'Kurtas' | 'Sarees' | 'Dresses' | 'Loungewear' | 'Plus-Size' | 'Sale';
  subCategory?: string;
  rating: number;
  reviewsCount: number;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  fabric: string;
  occasion: 'Festive' | 'Daily Wear' | 'Wedding' | 'Party' | 'Office Wear';
  pattern: string;
  washCare: string;
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isExtraLove?: boolean; // Plus size collection
  stock: number;
}

export interface LibasCartItem {
  product: LibasProduct;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

'use client';

import { type products } from '@/lib/portfolio-data';
import { ProductPageContent } from './ProductPageContent';

type Props = {
  product: typeof products[number];
};

export function ProductPageWrapper({ product }: Props) {
  return <ProductPageContent product={product} />;
}
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetails from '@/components/ProductDetails';
import { products } from '@/data/products';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((item) => item.id === params.id);

  return {
    title: product ? `${product.title} | BT Sales India` : 'Product Not Found | BT Sales India',
    description: product?.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}

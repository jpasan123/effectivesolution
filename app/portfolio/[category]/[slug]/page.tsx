import { products } from '@/lib/portfolio-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ProductDetails } from '@/components/features/ProductDetails';

type Props = {
  params: { category: string; slug: string }
};

export async function generateStaticParams() {
  const paths = products.map((product) => ({
    category: product.category.toLowerCase(),
    slug: product.slug.toLowerCase(),
  }));
  
  // Log paths for debugging
  console.log('Generated paths:', paths);
  
  return paths;
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find(
    p => 
      p.category.toLowerCase() === params.category.toLowerCase() && 
      p.slug.toLowerCase() === params.slug.toLowerCase()
  );
  
  if (!product) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.'
    };
  }

  return {
    title: `${product.title} - Portfolio`,
    description: product.description,
  };
}

export default function Page({ params }: Props) {
  const product = products.find(
    p => 
      p.category.toLowerCase() === params.category.toLowerCase() && 
      p.slug.toLowerCase() === params.slug.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
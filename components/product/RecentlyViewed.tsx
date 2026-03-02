'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRecentlyViewed } from '@/components/providers/RecentlyViewedProvider';

interface RecentlyViewedProductsProps {
  currentProductId?: string;
  title?: string;
  maxProducts?: number;
}

export function RecentlyViewedProducts({
  currentProductId,
  title = 'Vistos Recientemente',
  maxProducts = 6
}: RecentlyViewedProductsProps) {
  const { recentlyViewed } = useRecentlyViewed();

  // Filtrar el producto actual si se especifica
  const displayProducts = currentProductId
    ? recentlyViewed.filter(p => p.id !== currentProductId)
    : recentlyViewed;

  // Limitar número de productos
  const productsToShow = displayProducts.slice(0, maxProducts);

  if (productsToShow.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-gray-200 mt-16 pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-belleza text-2xl font-light tracking-wide text-gray-900">
            {title}
          </h2>
          {productsToShow.length >= maxProducts && (
            <Link
              href="/search"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Ver todo →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {productsToShow.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Sin imagen
                  </div>
                )}
              </div>
              <h3 className="font-moderat text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                {product.name}
              </h3>
              {product.price && (
                <p className="text-sm text-gray-600 mt-1">
                  {product.price}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Versión compacta para sidebar o secciones pequeñas
 */
export function RecentlyViewedCompact({ maxProducts = 3 }: { maxProducts?: number }) {
  const { recentlyViewed } = useRecentlyViewed();
  const productsToShow = recentlyViewed.slice(0, maxProducts);

  if (productsToShow.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="font-moderat text-sm font-semibold text-gray-900 uppercase tracking-wider">
        Vistos Recientemente
      </h3>
      <div className="space-y-3">
        {productsToShow.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-16 h-16 overflow-hidden rounded bg-gray-100 flex-shrink-0">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="64px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                  Sin imagen
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-moderat text-sm text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                {product.name}
              </p>
              {product.price && (
                <p className="text-xs text-gray-600 mt-0.5">
                  {product.price}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

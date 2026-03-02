import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * NUEVA HOME PAGE - WooCommerce
 * Versión limpia sin dependencias de Shopify
 */

// Conexión WooCommerce
import {
  getProducts as getWooProducts,
  getCollections as getWooCollections
} from '@/lib/woocommerce';

// Componentes simples
import { ProductCard } from '@/components/ui/product-card';
import { CategoryCard } from '@/components/ui/category-card';
import { WooNavbar } from '@/components/layout/navbar/woo-navbar';
import FooterCustom from '@/components/custom/FooterCustom';
import { BannerCarousel } from '@/components/custom/BannerCarousel';

export const metadata = {
  title: 'Pinneacle Perfumería - Tu Tienda Online de Perfumería y Belleza',
  description: 'Descubre los mejores productos de perfumería, belleza y cuidado personal en Pinneacle Perfumería. Calidad premium y los mejores precios.',
  keywords: 'perfumería, belleza, cuidado personal, cosméticos, tienda online, Pinneacle Perfumería',
};

async function getFeaturedProducts() {
  try {
    console.log('📦 Fetching productos...');

    // Importar directamente los tipos y query necesarios
    const { woocommerceFetch } = await import('@/lib/woocommerce');
    const { getProductsQuery } = await import('@/lib/woocommerce/queries/product');

    // Hacer fetch directo a WooCommerce sin reshape
    const res = await woocommerceFetch<any>({
      query: getProductsQuery,
      variables: {}
    });

    const products = res.body.data.products?.nodes || [];

    console.log('✅ Productos OBTENIDOS DIRECTAMENTE DE WOOCOMMERCE:');
    console.table(products.map((p: any) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: p.price,
      hasImage: !!p.image
    })));

    if (!products || products.length === 0) {
      console.log('⚠️ No hay productos');
      return [];
    }

    // Adaptar a formato simple
    const adapted = products.slice(0, 6).map((product: any) => {
      const adaptedProduct = {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price || 'Precio no disponible',
        image: product.image?.sourceUrl || product.image?.url || '/placeholder.jpg',
        category: 'Accesorios',
        description: product.description || product.shortDescription || ''
      };
      console.log('🔄 Producto adaptado:', adaptedProduct);
      return adaptedProduct;
    });

    console.log('✅ Productos adaptados:', adapted);

    return adapted;
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    console.error('Error completo:', error);
    return [];
  }
}

async function getCategories() {
  try {
    const collections = await getWooCollections();

    if (!collections || collections.length === 0) {
      return [];
    }

    // Adaptar a formato simple - WooCommerce usa campos diferentes
    // Filtrar categorías inválidas (undefined, vacías, uncategorized, 'All')
    return collections
      .filter((collection: any) =>
        collection.handle &&
        collection.handle !== 'undefined' &&
        collection.handle !== '' &&
        collection.handle !== 'all' &&
        !collection.handle.toLowerCase().includes('uncategorized')
      )
      .map((collection: any) => ({
        id: collection.handle, // Usar handle como ID único
        name: collection.title || collection.name,
        slug: collection.handle,
        image: collection.image?.url || collection.image?.sourceUrl || '/placeholder-category.jpg',
        path: collection.path || `/search/${collection.handle}`
      }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function HomePage() {
  // Obtener datos en paralelo
  const [products, categories] = await Promise.all([
    getFeaturedProducts(),
    getCategories()
  ]);

  return (
    <>
      <WooNavbar />
      <main className="min-h-screen bg-gray-50">
      {/* Banner Carousel */}
      <div className="pt-20">
        <BannerCarousel />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Pinneacle Perfumería
            </h1>
            <p className="text-xl sm:text-2xl mb-4 max-w-3xl mx-auto text-gray-200">
              Tu tienda online de confianza
            </p>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Perfumería, belleza y cuidado personal con los mejores productos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/search"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Ver Productos
              </Link>
              {categories.length > 0 && categories[0] && (
                <Link
                  href={categories[0].path}
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Ver Categorías
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      {categories.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Categorías
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.path}
                  className="group block"
                >
                  {/* Imagen */}
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={category.image}
                      alt={category.name || 'Categoría'}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-lg drop-shadow-lg">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Productos Destacados */}
      {products.length > 0 && (
        <section className="py-16 bg-[#f5f5f5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Productos Destacados
              </h2>
              <Link
                href="/search"
                className="text-green-700 hover:text-green-800 font-semibold"
              >
                Ver todos →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterCustom />
    </main>
    </>
  );
}

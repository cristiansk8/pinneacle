import { NextRequest, NextResponse } from 'next/server';
import { getSearchResults } from '@/lib/woocommerce';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    if (!query || query.length < 2) {
      return NextResponse.json({ products: [] });
    }

    const products = await getSearchResults(query);

    // Simplificar la respuesta para reducir el tamaño
    const simplifiedProducts = products.slice(0, 8).map(product => ({
      id: product.id,
      handle: product.handle,
      title: product.title,
      price: product.priceRange?.minVariantPrice?.amount || '0',
      currency: product.priceRange?.minVariantPrice?.currencyCode || 'CLP',
      image: product.featuredImage?.url || '/placeholder.jpg',
      altText: product.featuredImage?.altText || product.title
    }));

    return NextResponse.json({ products: simplifiedProducts });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ products: [] }, { status: 500 });
  }
}

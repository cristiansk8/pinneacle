import type { Metadata } from 'next';
import './globals.css';
import { RecentlyViewedProvider } from '@/components/providers/RecentlyViewedProvider';
import { CartProvider } from '@/components/providers/CartProvider';
import { CartDrawer } from '@/components/cart/CartDrawer';

export const metadata: Metadata = {
  title: {
    default: 'Pinneacle Perfumería - Tienda Online',
    template: '%s | Pinneacle Perfumería'
  },
  description: 'Descubre los mejores productos de perfumería y belleza en Pinneacle Perfumería. Calidad premium y los mejores precios.',
  keywords: ['perfumería', 'belleza', 'cosméticos', 'fragancias', 'tienda online', 'Pinneacle Perfumería'],
  authors: [{ name: 'Pinneacle Perfumería' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pinneacle.com',
    siteName: 'Pinneacle Perfumería',
    title: 'Pinneacle Perfumería - Tienda Online de Productos de Belleza y Fragancias',
    description: 'Descubre los mejores productos de perfumería y belleza en Pinneacle Perfumería.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <CartProvider>
          <RecentlyViewedProvider>
            {children}
          </RecentlyViewedProvider>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

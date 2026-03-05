import type { Metadata } from 'next';
import './globals.css';
import { RecentlyViewedProvider } from '@/components/providers/RecentlyViewedProvider';
import { CartProvider } from '@/components/providers/CartProvider';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/lib/json-ld-script';

export const metadata: Metadata = {
  title: {
    default: 'Pinneacle Perfumería - Tienda Online',
    template: '%s | Pinneacle Perfumería'
  },
  description: 'Descubre los mejores productos de perfumería y belleza en Pinneacle Perfumería. Calidad premium y los mejores precios.',
  keywords: ['perfumería', 'belleza', 'cosméticos', 'fragancias', 'tienda online', 'Pinneacle Perfumería'],
  authors: [{ name: 'Pinneacle Perfumería' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
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
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="es">
      <head>
        {/* Structured Data global para SEO */}
        <JsonLdScript data={organizationSchema} />
        <JsonLdScript data={webSiteSchema} />
      </head>
      <body className="antialiased">
        {/* Skip Link para accesibilidad - permite saltar al contenido principal */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Saltar al contenido principal
        </a>

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

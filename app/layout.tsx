import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingBrandSidebar from '@/components/FloatingBrandSidebar';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'BT Sales India | Authorized Phone, Home Appliances & Electronics Store',
  description:
    'BT Sales India is the premier electronics destination in Greater Noida, Uttar Pradesh. Authorized retailer for Apple iPhones, Samsung, OnePlus, Smart TVs, Refrigerators & Doorstep Repairs.',
  keywords: [
    'BT Sales India',
    'Mobile Store Greater Noida',
    'iPhone dealer Greater Noida',
    'Home Appliances Noida',
    'Electronics store Uttar Pradesh',
    'Phone repairs Greater Noida'
  ],
  authors: [{ name: 'BT Sales India' }],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <Navbar />
          <FloatingBrandSidebar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

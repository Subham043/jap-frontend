import Footer from '@/components/footers/footer';
import Header from '@/components/headers/header';
import AppProvider from '@/context/AppProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/styles/globals.css'
import "@/styles/index.scss";
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';
import WishlistProvider from '@/context/WishlistProvider';
import CartProvider from '@/context/CartProvider';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <SessionProvider session={session}>
    <CartProvider>
      <WishlistProvider>
        <AppProvider>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
          <ToastContainer />
        </AppProvider>
      </WishlistProvider>
    </CartProvider>
  </SessionProvider>
}

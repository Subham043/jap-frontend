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
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return <SessionProvider session={session}>
    <CartProvider>
      <WishlistProvider>
        <AppProvider>
          <Header/>
          {getLayout(<Component {...pageProps} />)}
          <Footer/>
          <ToastContainer />
        </AppProvider>
      </WishlistProvider>
    </CartProvider>
  </SessionProvider>
}

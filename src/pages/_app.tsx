import Footer from '@/components/footers/footer';
import Header from '@/components/headers/header';
import AppProvider from '@/context/AppProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";
import '@/styles/globals.css'
import "@/styles/index.scss";
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';
import WishlistProvider from '@/context/WishlistProvider';
import CartProvider from '@/context/CartProvider';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { Jost } from 'next/font/google';
import dynamic from 'next/dynamic';

const jost = Jost({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const TopProgressBar = dynamic(
  () => {
    return import("@/components/sheardComponent/TopProgressbar");
  },
  { ssr: false },
);

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
          <TopProgressBar />
          <div className={jost.className}>
            <Header/>
            {getLayout(<Component {...pageProps} />)}
            <Footer/>
            <ToastContainer />
          </div>
        </AppProvider>
      </WishlistProvider>
    </CartProvider>
  </SessionProvider>
}

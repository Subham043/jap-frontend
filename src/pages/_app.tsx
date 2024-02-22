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
import Head from 'next/head';

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
            <Head>
              <title>JAP - Home</title>
              <meta name="description" content="JAP-PCL was created as a multi-state farmers producer company, started by shareholder-member farmers from Karnataka, Tamil Nadu, Kerala and Andhra Pradesh. All these farmers practice only organic farming or natural farming, and hence the names, jaivik (organic) and pratrutik (natural)." />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/assets/img/logo/new-logo.webp" />
            </Head>
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

import CheckOutMain from "@/components/checkout/CheckOutMain";
import Pagetitle from "@/components/sheardComponent/Pagetitle";
import Head from "next/head";

const Checkout = () => {
  return (
    <>
        <Head>
          <title>JAP - Checkout</title>
        </Head>
        <main>
            <Pagetitle title='Checkout' img='/assets/img/banner/page-banner-2.jpg' />
            <CheckOutMain />
        </main>
    </>
  );
};

export default Checkout;

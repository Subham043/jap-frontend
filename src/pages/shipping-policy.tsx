import ShippingMain from "@/components/shipping_policy/ShippingMain";
import Head from "next/head";


const ShippingPolicy = () => {
  return (
    <>
        <Head>
          <title>JAP - Shipping Policy</title>
        </Head>
        <main>
          <ShippingMain/>
        </main>
    </>
  );
}

export default ShippingPolicy
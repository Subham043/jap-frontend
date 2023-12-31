
import Pagetitle from "@/components/sheardComponent/Pagetitle";
import ShopMain from "@/components/shop/ShopMain";
import Head from "next/head";

const Products = () => {
  return (
    <>
        <Head>
          <title>JAP - Products</title>
        </Head>
        <main>
            <Pagetitle title='Products' img='/assets/img/banner/page-banner-2.jpg' />
            <ShopMain />
        </main>
    </>
  );
}

export default Products
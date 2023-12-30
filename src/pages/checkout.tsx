import CheckOutMain from "@/components/checkout/CheckOutMain";
import Pagetitle from "@/components/sheardComponent/Pagetitle";

const Checkout = () => {
  return (
    <>
        <main>
            <Pagetitle title='Checkout' img='/assets/img/banner/page-banner-2.jpg' />
            <CheckOutMain />
        </main>
    </>
  );
};

export default Checkout;

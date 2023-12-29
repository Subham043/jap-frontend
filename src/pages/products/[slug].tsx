
import ShopDetailsMain from "@/components/shop-details/ShopDetailsMain";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { axiosPublic } from "../../../axios";
import { api_routes } from "@/helper/routes";
import { ProductSegmentState } from "@/helper/types";
import Pagetitle from "@/components/sheardComponent/Pagetitle";

type ServerSideProps = {
  product: ProductSegmentState
}

export const getServerSideProps: GetServerSideProps<{
  repo: ServerSideProps
}> = async (ctx: any) => {
  try {
      const productResponse = await axiosPublic.get(api_routes.product + `/${ctx?.params.slug}`);
      
      return {
          props: {
              repo: {
                  product: productResponse.data.product,
              }
          }
      }
  } catch (error) {
    return {
        notFound: true,
    }
  }

}

const ProductDetail = ({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
  return (
    <>
        <main>
            <Pagetitle title={repo.product.name} img='/assets/img/banner/page-banner-2.jpg' />
            <ShopDetailsMain product={repo.product}/>
        </main>
    </>
  );
}

export default ProductDetail
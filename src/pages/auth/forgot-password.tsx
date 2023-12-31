
import ForgotPassword from "@/components/forgot_password/ForgotPasswordMain";
import Pagetitle from "@/components/sheardComponent/Pagetitle";
import { getSession } from "next-auth/react"
import Head from "next/head";

export const getServerSideProps = async (ctx: any) => {
  const data = await getSession(ctx)
  if(data!==null){
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }
  return {
      props: {}
  }
}

const ForgotPasswordMain = () => {
    return (
        <>
            <Head>
              <title>JAP - Forgot Password</title>
            </Head>
            <main>
                <Pagetitle title='Forgot Password' img='/assets/img/banner/page-banner-4.jpg' />
                <ForgotPassword/>
            </main>
        </>
    );
}

export default ForgotPasswordMain
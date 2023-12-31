
import RegistarMain from "@/components/register/RegistarMain";
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

const SignUp = () => {
    return (
        <>
            <Head>
              <title>JAP - Register</title>
            </Head>
            <main>
                <Pagetitle title='Register' img='/assets/img/banner/page-banner-3.jpg' />
                <RegistarMain />
            </main>
        </>
    );
}

export default SignUp
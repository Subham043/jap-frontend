
import RegistarMain from "@/components/register/RegistarMain";
import Pagetitle from "@/components/sheardComponent/Pagetitle";
import { getSession } from "next-auth/react"

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
            <main>
                <Pagetitle title='Register' img='/assets/img/banner/page-banner-2.jpg' />
                <RegistarMain />
            </main>
        </>
    );
}

export default SignUp
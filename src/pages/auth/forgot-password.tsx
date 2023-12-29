
import ForgotPassword from "@/components/forgot_password/ForgotPasswordMain";
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

const ForgotPasswordMain = () => {
    return (
        <>
            <main>
                <Pagetitle title='Forgot Password' img='/assets/img/banner/page-banner-2.jpg' />
                <ForgotPassword/>
            </main>
        </>
    );
}

export default ForgotPasswordMain
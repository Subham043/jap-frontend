
import LoginMain from "@/components/login/LoginMain";
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

const Login = () => {
    return (
        <>
            <main>
                <Pagetitle title='Login' img='/assets/img/banner/page-banner-2.jpg' />
                <LoginMain/>
            </main>
        </>
    );
}

export default Login
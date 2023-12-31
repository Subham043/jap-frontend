import PrivacyMain from "@/components/privacy_policy/PrivacyMain";
import Head from "next/head";


const PrivacyPolicy = () => {
  return (
    <>
        <Head>
          <title>JAP - Privacy Policy</title>
        </Head>
        <main>
          <PrivacyMain/>
        </main>
    </>
  );
}

export default PrivacyPolicy
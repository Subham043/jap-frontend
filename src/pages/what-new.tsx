import Head from "next/head";
import WhatNewMain from "@/components/whatNew/WhatNewMain";

const WhatNew = () => {
  return (
    <>
        <Head>
          <title>JAP - What&apos;s New</title>
        </Head>
        <main>
          <WhatNewMain/>
        </main>
    </>
  );
}

export default WhatNew
import Head from 'next/head'
import HomeMain from '@/components/home/HomeMain'

export default function Home() {
  return (
    <>
      <Head>
        <title>JAP - Home</title>
      </Head>
      <main>
          <HomeMain/>
      </main>
    </>
  )
}

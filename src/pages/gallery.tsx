import GalleryMain from "@/components/gallery/GalleryMain";
import Head from "next/head";

const Gallery = () => {
  return (
    <>
        <Head>
          <title>JAP - Gallery</title>
        </Head>
        <main>
          <GalleryMain/>
        </main>
    </>
  );
}

export default Gallery
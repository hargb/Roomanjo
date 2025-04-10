import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import Header4 from "../components/Header4";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
      <title>
  Roomanjo: India&apos;s Best online hotel booking Site for Sanitized Stay
</title>

        
        
      </Head>

      <Header1 />
      <Header2 />
      <Header3 />

      <div className="mx-20">
        <div className="my-14">
          <Image
            src="/banner3.jpg"
            alt="Roomanjo promotional banner 1"
            width={1200}
            height={320}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        <div className="mb-14">
          <Image
            src="/banner2.avif"
            alt="Roomanjo promotional banner 2"
            width={1200}
            height={250}
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>

        <Header4 />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

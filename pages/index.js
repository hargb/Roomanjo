import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import Header4 from "../components/Header4";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  console.log(Header1, Header2, Header3, Header4, Footer);
  return (
    <div>
      <Head>
        <title>
          Roomanjo: India's Best online hotel booking Site for Sanitized Stay
        </title>
      </Head>
      <Header1></Header1>
      <Header2></Header2>
      <Header3></Header3>

      <div className="mx-20">
        <div className="my-14">
          <Image
            src={"/banner3.jpg"}
            alt="banner3"
            width={200}
            height={300}
            className="h-80 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={"/banner2.avif"}
            alt="banner3"
            width={200}
            height={200}
            className="h-60 w-full"
          />
        </div>
        <Header4></Header4>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

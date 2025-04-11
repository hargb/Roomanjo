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
          Roomanjo: India&apos;s Best Online Hotel Booking Site for Sanitized Stay
        </title>
      </Head>

      <Header1 />
      <Header2 />
      <Header3 />

      <main className="px-4 sm:px-8 lg:px-20 py-10">
        {/* Horizontally Scrollable Banners */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide -mx-4 sm:mx-0 pb-3">
          {/* Banner 1 */}
          <div className="inline-block min-w-[1200px] mr-5">
            <Image
              src="/banner3.jpg"
              alt="Roomanjo promotional banner 1"
              width={1200}
              height={320}
              className="w-full h-64 sm:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Banner 2 */}
          <div className="inline-block min-w-[1200px]">
            <Image
              src="/banner2.avif"
              alt="Roomanjo promotional banner 2"
              width={1200}
              height={250}
              className="w-full h-60 sm:h-72 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Optional Swipe Message on Mobile */}
        <p className="text-center text-sm text-gray-500 mt-2 sm:hidden">
          👈 Swipe to see all offers 👉
        </p>

        <Header4 />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

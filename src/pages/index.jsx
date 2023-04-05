import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Logo from "@/assets/images/sobat-kost-min.png";
import Blank from "@/assets/images/foto-kos-min.jpg";
import Architect from "@/assets/images/managemen-min.jpg";
import Interior from "@/assets/images/foto-kos-2-min.jpg";
import Mamikos from "@/assets/images/mamikos-min.jpg";
import Ihub from "@/assets/images/logo-ihub-min.png";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import SliderInterior from "@/components/SliderInterior";
import SliderConstruction from "@/components/SliderConstruction";
import styles from "@/styles/Slider.module.css";
import { useRouter } from "next/router";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Home() {
  const router = useRouter();
  const [section, setSection] = useState(1);
  const [quote, setQuote] = useState(1);
  const [shown1, setShown1] = useState(false);
  const [shown2, setShown2] = useState(false);
  const mitra = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Header mitra={mitra} about={about} contact={contact} />
      <main className="pt-20 bg-white">
        <div
          className="w-30"
          onClick={() => {
            window.open("https://api.whatsapp.com/send?phone=6281225064963");
          }}
        >
          <WhatsAppIcon
            className="fixed bottom-5 right-5 z-10 animate-bounce bg-green-500 rounded-full p-1 cursor-pointer"
            style={{ fontSize: "60px" }}
          />
        </div>
        <section className="flex flex-col-reverse lg:flex-row  bg-blue-200 md:mb-10">
          <article className="flex flex-col items-center w-screen p-5 lg:p-20 lg:items-start lg:w-1/2 text-white gap-3">
            <Image src={Logo} className="h-20 w-auto" alt="logo2" />
            <div className="text-center lg:text-start font-extrabold text-5xl ">
              Sobat Kos, platform managemen kos
            </div>
            <div className="text-center lg:text-start text-xl">
              Jalankan kos secara auto pilot dan professional dengan bergabung
              menjadi mitra Sobat Kos kemudian menikmati passive income dari
              usaha kos anda.
            </div>
            <button
              onClick={() => {
                router.push("/auth/register");
              }}
              className="bg-orange-600 p-5 rounded-md text-lg"
            >
              Pesan Sekarang
            </button>
          </article>
          <article className="items-start lg:w-1/2">
            <Slider />
          </article>
        </section>
        <section
          id="Tentang Kami"
          className="lg:px-20 flex flex-col gap-20 pt-10"
          ref={about}
        >
          <article className="text-center text-4xl lg:px-20 font-bold">
            Sobat Kos memiliki 2 jasa utama yaitu :
          </article>
          <article className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center gap-5 p-5">
              <div className={`${styles.image}`}>
                <Image src={Architect} alt="content-image-3" />
              </div>
              <div className="text-center font-extrabold text-4xl">
                Jasa Managemen Kos
              </div>
              <div className="text-center font-bold">
                Menyediakan jasa managemen berupa perawatan, penjagaan, layanan
                keuangan dan renovasi kos sehingga kos mampu berjalan auto pilot
                dan menambah keuntungan jangka panjang kepada pemilik kos.
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 p-5">
              <div className={`${styles.image}`}>
                <Image src={Interior} alt="content-image-3" />
              </div>
              <div className="text-center font-extrabold text-4xl">
                Jasa Pemasaran Kos
              </div>
              <div className="text-center font-bold">
                Menyediakan jasa pemasaran kos dengan sistem bagi hasil sehingga
                pemilik kos tidak perlu repot mempromosikan dan khawatir kosnya
                tidak terisi penuh.  
              </div>
            </div>
          </article>
        </section>
        <section
          id="Portofolio"
          className="flex flex-col items-center lg:items-start lg:flex-row px-10 pt-10 pb-72 md:pb-0 lg:pb-96 lg:min-h-screen"
        >
          <article className="lg:w-1/2 flex flex-col lg:p-10 gap-5">
            <div className="text-center lg:text-start text-3xl md:text-5xl font-extrabold">
              Sobat kos berpengalaman lebih dari 1 tahun di kota Surakarta
            </div>
            <SliderInterior />
          </article>
          <article className="lg:w-1/2 flex flex-col lg:p-10">
            <div>
              <SliderConstruction />
            </div>
            <div>
              <Image src={Blank} className="lg:hidden" alt="content-image-2" />
            </div>
            <div>
              <Image
                src={Logo}
                className="hidden lg:w-full lg:flex"
                alt="content-image-2"
              />
            </div>
            <div className="flex mt-5 justify-center">
              <Image
                src={Logo}
                className="hidden w-1/2 lg:flex"
                alt="content-image-2"
              />
            </div>
          </article>
        </section>
        <section className="min-h-screen" ref={mitra}>
          <section className="flex justify-center text-3xl font-bold">
            Mitra Sobat Kos
          </section>
          <section className="flex justify-center items-center gap-5 p-16">
            <div className="w-40">
              <Image src={Mamikos} alt="mamikos" />
            </div>
            <div>
              <Image src={Ihub} alt="ihub" />
            </div>
          </section>
        </section>
      </main>
      <Footer contact={contact} />
    </>
  );
}

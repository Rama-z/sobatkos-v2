import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    setTimeout(() => {
      toast.success(
        "Sukses silahkan menunggu response dari petugas kami untuk menghubungi via whatsapp"
      );
    }, 1000);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };
  return (
    <>
      <Header />
      <Toaster />
      <section className="flex flex-col justify-center items-center min-h-screen">
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div>Nama Lengkap</div>
            <input
              type="text"
              placeholder="Isi sesuai KTP"
              className="border-2 border-gray-300 p-2 w-60 min-h-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>No. Handphone Aktif</div>
            <input
              type="text"
              placeholder="Masukkan no.HP yang bisa dihubungi"
              className="border-2 border-gray-300 p-2 w-60 min-h-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>Nama Kos</div>
            <input
              type="text"
              placeholder="Nama Kos"
              className="border-2 border-gray-300 p-2 w-60 min-h-0"
            />
          </div>
          {/* <div>
            <div>Kabupaten / Kota</div>
            <input type="text" placeholder="Isi sesuai KTP" />
          </div> */}
          <div className="flex flex-col gap-2">
            <div>Alamat Lengkap Kos</div>
            <textarea
              placeholder="Masukkan alamat lengkap kos Anda"
              className="border-2 border-gray-300 p-2 w-60 min-h-full"
            />
          </div>
          <button type="submit" className="bg-orange-500 p-3 mt-2">
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/sobat-kost-min.png";
import { useRouter } from "next/router";

export default function Header({ about, mitra, contact }) {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  const smoothScroll = (reference) => {
    window.scrollTo({
      behavior: "smooth",
      top: reference.current.offsetTop - 60,
      left: 0,
    });
  };
  return (
    <header className="flex flex-row lg:items-center justify-between w-screen z-10 bg-white px-10 py-5 fixed">
      <div>
        <Image
          src={Logo}
          className={!dropdown ? "w-16 h-auto md:ml-5" : "hidden"}
          alt="logo"
        />
      </div>
      <div
        className={`${
          dropdown
            ? "relative top-20 left-0 h-screen w-screen lg:p-10 flex flex-col gap-5 bg-white"
            : "hidden"
        } md:flex md:flex-row md:gap-10`}
      >
        <div
          className="cursor-pointer"
          onClick={() => {
            smoothScroll(about);
            setDropdown(false);
          }}
        >
          Tentang Kami
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            smoothScroll(mitra);
            setDropdown(false);
          }}
        >
          Mitra
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            smoothScroll(contact);
            setDropdown(false);
          }}
        >
          Kontak
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setDropdown(false);
          }}
        >
          Login
        </div>
      </div>
      <div
        onClick={() => {
          setDropdown(!dropdown);
        }}
        className="flex flex-col gap-1 md:hidden "
      >
        <div className="bg-black w-7 h-1"></div>
        <div className="bg-black w-7 h-1"></div>
        <div className="bg-black w-7 h-1"></div>
      </div>
    </header>
  );
}

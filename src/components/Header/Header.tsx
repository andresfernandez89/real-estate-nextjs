"use client";
import Link from "next/link";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { Navbar } from "../Navbar";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div className="container mx-auto my-5">
      <div className="flex items-center justify-between px-5 md:px-0">
        <Link href="/">
          <h1 className="font-medium">Nizzi Propiedades</h1>
        </Link>
        <CiMenuFries
          className="block text-2xl md:hidden"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        ></CiMenuFries>
        <Navbar openMobileMenu={openMobileMenu} />
        <div className="flex items-center gap-2 md:gap-5">
          <Link
            href="tel:2234511861"
            className="flex cursor-pointer items-center gap-4"
          >
            <BsTelephone />
            <span className="hidden md:block">223 451-1861</span>
          </Link>
          <Link
            href="/login"
            className="rounded-lg bg-secondary px-3 py-2 text-white hover:bg-black"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

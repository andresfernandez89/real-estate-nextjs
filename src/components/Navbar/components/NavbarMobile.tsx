"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dataHeader } from "../Header.data";

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex items-center justify-between py-2 md:hidden">
        <div className="-ml-2 h-[45px] w-[180px]">
          <Link href="/#header-home">
            <Image
              src="/assets/logoNizzi.png"
              alt="Logo Nizzi Propiedades"
              width={180}
              height={45}
              className="h-auto max-h-[45px] object-cover"
              priority
            />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-main-bg hover:text-main-bg focus:ring-main-bg inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset"
        >
          {isOpen ? (
            <IconX stroke={2} className="block h-10 w-10" />
          ) : (
            <IconMenu2 stroke={2} className="block h-10 w-10" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="space-y-2 py-2">
              {dataHeader.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-main-bg hover:bg-main-client-opacity block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

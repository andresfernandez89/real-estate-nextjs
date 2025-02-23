import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { dataHeader } from "../Header/Header.data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-inherit">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex-shrink-0">
            <Image
              className="h-10 w-auto"
              src="/assets/logoNizzi.webp"
              alt="Logo"
              width={400}
              height={242}
              priority
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {dataHeader.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="rounded-md px-3 py-2 text-sm font-medium text-thirdClient transition-colors duration-300 hover:bg-red-700 hover:text-thirdClient"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-thirdClient hover:text-thirdClient focus:outline-none focus:ring-2 focus:ring-inset focus:ring-thirdClient"
            >
              {isOpen ? (
                <LuX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <LuMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {dataHeader.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="block rounded-md px-3 py-2 text-base font-medium text-thirdClient transition-colors duration-300 hover:bg-red-700 hover:text-thirdClient"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

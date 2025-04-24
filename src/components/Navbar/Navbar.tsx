import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { dataHeader } from "../Header/Header.data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-main-client fixed top-0 right-0 left-0 z-99 h-auto">
      <div className="mx-auto h-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/************** Mobile **************/}
          {/*  <Image
              className="w-auto md:hidden"
              src="/assets/logoNizzi.png"
              alt="Logo"
              width={400}
              height={300}
              priority
            /> */}
          {/************** Descktop **************/}
          <div className="hidden h-[75] w-auto md:block">
            <Link href="/#header-home">
              <Image
                src="/assets/logoNizzi.png"
                alt="Logo"
                width={200}
                height={150}
                className="h-auto max-h-[75] object-cover"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {dataHeader.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-main-bg hover:text-main-bg hover:bg-main-client-opacity rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-main-bg hover:text-main-bg focus:ring-main-bg my-2 inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-hidden focus:ring-inset"
            >
              {isOpen ? (
                <LuX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <LuMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
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
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {dataHeader.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="text-main-bg hover:text-main-bg hover:bg-main-client-opacity block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
}

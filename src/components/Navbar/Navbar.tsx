import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dataHeader } from "../Header/Header.data";
import { NavbarProps } from "./Navbar.types";

export function Navbar(props: NavbarProps) {
  const { openMobileMenu } = props;
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - 600) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <AnimatePresence>
      {isScrolling ? (
        <motion.nav
          key={1}
          variants={animationNavbar}
          initial="initial"
          animate="animate"
          exit="exit"
          className="left-0 right-0 top-10 z-[9999] ml-auto mr-auto w-fit rounded-3xl bg-gray-400/40 px-6 py-3 text-white backdrop-blur md:fixed"
        >
          <div className="hidden items-center gap-5 md:flex">
            {dataHeader.map(({ id, name, link }) => (
              <Link
                key={id}
                href={link}
                className="hover:border-b-[1px] hover:border-secondary hover:text-secondary"
              >
                {name}
              </Link>
            ))}
            <Link
              href="/login"
              className="rounded-lg bg-secondary px-3 py-2 text-white hover:bg-black"
            >
              Login
            </Link>
          </div>
        </motion.nav>
      ) : (
        <div
          className={`${
            openMobileMenu
              ? "r-0 absolute left-0 top-20 z-[1] w-full bg-white px-4 py-4"
              : "hidden"
          } gap-5 md:flex`}
        >
          {dataHeader.map(({ id, name, link }) => (
            <Link
              key={id}
              href={link}
              className="block hover:border-b-[1px] hover:text-secondary"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

const animationNavbar = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    trasition: {
      stiffness: 100,
      damping: 20,
      type: "spring",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

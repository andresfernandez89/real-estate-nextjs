"use client";
import { AnimatePresence, motion } from "framer-motion";
export function TransitionPage() {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="bg-secondary fixed top-0 right-full bottom-0 z-30 h-screen w-screen"
          variants={transitionVariantPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="bg-secondary/70 fixed top-0 right-full bottom-0 z-20 h-screen w-screen opacity-50"
          variants={transitionVariantPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
}

const transitionVariantPage = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

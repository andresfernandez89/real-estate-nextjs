import { AnimatePresence, motion } from "framer-motion";
export function TransitionPage() {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-secondary"
          variants={transitionVariantPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-secondary/70 opacity-50"
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

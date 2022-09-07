import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { backAtom } from "../recoil";

const animationConfiguration = {
  initial: (isBack: boolean) =>
    isBack ? { opacity: 1, left: -360 } : { opacity: 1, left: 360 },
  animate: { opacity: 1, left: 0 },
  exit: (isBack: boolean) =>
    isBack ? { opacity: 1, left: 360 } : { opacity: 1, left: -360 },
};

export const Transitions = ({ children }: { children: React.ReactNode }) => {
  const [isBack, setIsBack] = useAtom(backAtom);

  return (
    <motion.div
      custom={isBack}
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, delay: 0.3, ease: [0.52, 0.01, 1, 0.63] }}
      style={{
        position: "absolute",
        width: "100%",
      }}
      onAnimationComplete={() => {
        setIsBack(false);
      }}
    >
      {children}
    </motion.div>
  );
};

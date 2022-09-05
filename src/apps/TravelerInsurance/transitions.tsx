import { AnimatePresence, motion } from "framer-motion";
const animationConfiguration = {
  initial: { opacity: 0, left: 360 },
  animate: { opacity: 1, left: 0 },
  exit: { opacity: 0, left: -360 },
};
export const Transitions = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

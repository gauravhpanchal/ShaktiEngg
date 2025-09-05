"use client";

import { motion, useReducedMotion } from "motion/react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        willChange: "auto",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Template;

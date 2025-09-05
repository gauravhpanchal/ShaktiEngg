// "use client";

// import { motion, useReducedMotion } from "motion/react";

const Template = ({ children }: { children: React.ReactNode }) => {
  // Temporarily disable motion to test if it's causing scroll issues
  return <div>{children}</div>;

  // const shouldReduceMotion = useReducedMotion();

  // return (
  //   <motion.div
  //     initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
  //     animate={{ y: 0, opacity: 1 }}
  //     transition={{ duration: 0.75, ease: "easeInOut" }}
  //     style={{
  //       willChange: "auto",
  //       transform: "translateZ(0)", // Force hardware acceleration
  //     }}
  //     onAnimationComplete={() => {
  //       // Ensure no lingering transform styles after animation
  //       const element = document.querySelector("[data-template-wrapper]");
  //       if (element) {
  //         (element as HTMLElement).style.willChange = "auto";
  //         (element as HTMLElement).style.transform = "none";
  //       }
  //     }}
  //     data-template-wrapper
  //   >
  //     {children}
  //   </motion.div>
  // );
};

export default Template;

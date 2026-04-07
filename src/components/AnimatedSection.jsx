// src/components/AnimatedSection.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
  direction = "up",
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

'use client';
import { Droplet } from "lucide-react";
import { motion } from "framer-motion";

export default function HumidityIcon({ temp }) {
  const isWet = temp <= 30;

  return (
    <motion.div
      animate={
        isWet
          ? {
              y: [0, 6, 0],
              opacity: [1, 0.6, 1]
            }
          : {
              scale: [1, 1.05, 1],
              opacity: [1, 0.9, 1]
            }
      }
      transition={{
        duration: isWet ? 0.8 : 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Droplet size={32} color={isWet ? "red" : "#38bdf8"} />
    </motion.div>
  );
}

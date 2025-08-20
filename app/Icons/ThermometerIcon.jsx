'use client';
import { Thermometer } from "lucide-react";
import { motion } from "framer-motion";

export default function ThermometerIcon({ temp  }) {
  const isHot = temp >= 45;

  return (
    <motion.div
      animate={
        isHot
          ? {
              scale: [1, 1.1, 1],
              y: [0, -2, 0]
            }
          : { scale: 1 }
      }
      transition={{
        duration: isHot ? 0.5 : 0,
        repeat: isHot ? Infinity : 0,
        ease: "easeInOut"
      }}
    >
      <Thermometer size={32} color={isHot ? "#f87171" : "#60a5fa"} />
    </motion.div>
  );
}

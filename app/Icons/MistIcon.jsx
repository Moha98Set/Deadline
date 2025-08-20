'use client';
import { Droplet } from "lucide-react";
import { motion } from "framer-motion";

export default function MistIcon({ isOn }) {
  return (
    <motion.div
      animate={
        isOn
          ? {
              y: [0, -4, 0],
              opacity: [1, 0.8, 1],
              scale: [1, 1.05, 1],
            }
          : { y: 0, opacity: 1, scale: 1 }
      }
      transition={{
        duration: 1,
        delay:4 ,
        repeat: isOn ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      <Droplet size={36} color={isOn ? "white" : "#94a3b8"} />
    </motion.div>
  );
}

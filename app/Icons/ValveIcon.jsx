'use client';
import { Shuffle } from "lucide-react";
import { motion } from "framer-motion";

export default function ValveIcon({ isOn }) {
  return (
    <motion.div
      animate={
        isOn
          ? { y: [0, -5, 0], opacity: [1, 0.5, 1] }
          : { y: 0, opacity: 1 }
      }
      transition={{
        duration: 1,
        repeat: isOn ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      <Shuffle size={36} color={isOn ? "#34d399" : "#94a3b8"} />
    </motion.div>
  );
}

'use client';
import { Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function HeaterIcon({ isOn }) {
  return (
    <motion.div
      animate={
        isOn
          ? { scale: [1, 1.1, 1], color: "#f87171" }
          : { scale: 1 }
      }
      transition={{
        duration: 1.5,
        repeat: isOn ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      <Flame size={36} color={isOn ? "#f87171" : "#94a3b8"} />
    </motion.div>
  );
}

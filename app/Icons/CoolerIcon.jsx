'use client';
import { Snowflake } from "lucide-react";
import { motion } from "framer-motion";

export default function CoolerIcon({ isOn }) {
  return (
    <motion.div
      animate={isOn ? { rotate: 360 } : { rotate: 0 }}
      transition={{
        duration: 4,
        repeat: isOn ? Infinity : 0,
        ease: "linear",
      }}
    >
      <Snowflake size={36} color={isOn ? "#60a5fa" : "#94a3b8"} />
    </motion.div>
  );
}

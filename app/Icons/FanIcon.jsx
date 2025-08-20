'use client';
import { LoaderPinwheel } from "lucide-react";

import { motion } from "framer-motion";

export default function FanIcon({ isOn  }) {
  return (
    <motion.div
      animate={isOn ? { rotate: 360 } : { rotate: 0 }}
      transition={isOn ? { repeat: Infinity, duration: 1.2, delay:4 , ease: "linear" } : { duration: 0 }}
    >      
      <LoaderPinwheel size={46} strokeWidth={0.75} color={isOn ? "white" : "#64748b"} />
    </motion.div>
  );
}

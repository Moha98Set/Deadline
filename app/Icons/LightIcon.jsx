'use client';
import { Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useId } from 'react';

export default function LightIcon({ isOn }) {
  const glowId = useId();
  const gradientId = useId();

  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      initial={false}
      animate={{
        scale: isOn ? 1.2 : 1,
        rotate: isOn ? [5, 5, -20, 0] : 0,
      }}
      transition={{
        duration: 0.6,
        delay:4 ,
        ease: "easeInOut",
      }}
    >
      <defs>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <AnimatePresence>
        {isOn && (
          <motion.circle
            cx="19"
            cy="19"
            r="25"
            fill="#ffffff"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
        
      <motion.g
        filter={isOn ? `url(#${glowId})` : ""}
        animate={{
          opacity: isOn ? 1 : 0.4,
        }}        
        transition={{ duration: 0.3 }}
      >
        <Lightbulb
          size={36}
          color={isOn ? "white" : "#94a3b8"}
          strokeWidth={2}
        />
      </motion.g>
    </motion.svg>
  );
}

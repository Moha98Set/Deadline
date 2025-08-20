'use client';

import { motion } from 'framer-motion';

export default function WindIcon({ temp }) {
  const isWarning = temp >= 45;
  const color = isWarning ? '#f87171' : '#60a5fa';
  const speed = isWarning ? 0.8 : 2.5;

  return (
    <svg width="160" height="48" viewBox="0 0 80 64" fill="none">
    {[0, 10, 20].map((dy, index) => (
        <motion.path
        key={index}
        d={`M0 ${dy + 20} Q 25 ${dy + 10}, 50 ${dy + 20} T 80 ${dy + 20}`}
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        initial={{ x: -15, opacity: 0.4 }}
        animate={{ x: [ -15, 15, -15 ], opacity: [0.4, 1, 0.4] }}
        transition={{
            repeat: Infinity,
            duration: speed,
            ease: 'easeInOut',
            delay: index * 0.2
        }}
        />
    ))}
    </svg>

  );
}

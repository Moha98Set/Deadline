'use client';

import { motion } from 'framer-motion';
import Toggle from '../components/Toggle';
import OperatorIcon from '../Icons/OperatorIcon';
import { useState } from 'react';

export default function Operator({ name }) {
  const [situ, setSitu] = useState("off");
  const isOn = situ === "on";

  const handleToggleChange = (on) => {
    setSitu(on ? "on" : "off");
  };

  return (
    <motion.div
      initial={false}
      animate={{
        background: isOn
          ? 'linear-gradient(to right, #f43f5e, #ec4899, #d946ef)'
          : '#f9fafb',
        color: isOn ? '#ffffff' : '#64748b',
        scale: isOn ? 1.02 : 1,
        boxShadow: isOn
          ? '0 0 25px rgba(236, 72, 153, 0.45)'
          : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      className="relative grid p-5 rounded-2xl w-56 h-64 overflow-hidden"
    >
      <div className="absolute top-20 right-0  left-0 flex justify-center">
        <OperatorIcon name={name} situ={situ} />
      </div>

      <div className="absolute top-5 right-5">
        <Toggle onChange={handleToggleChange} />
      </div>

      <div className="absolute bottom-10 right-0 left-0 text-center text-sm font-semibold">
        {name}
      </div>
    </motion.div>
  );
}

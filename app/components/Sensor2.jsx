'use client';

import Gauge2 from "./Chart/Gauge2";
import { motion } from "framer-motion";
import SensorIcon from '../Icons/SensorIcon';

export default function Sensor({ name , temp }) {

  const isValid = temp !== undefined && temp !== null && temp !== '' && temp !== '---' && temp !== 'NC' && !isNaN(parseFloat(temp));
  const value = isValid ? parseFloat(temp) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      className="w-full sm:w-full h-64 rounded-xl shadow-lg p-4
        flex flex-col items-center justify-between"
    >
     <div className="text-white">
        <SensorIcon name={name} temp={value} />
    </div>
      <div className="w-full flex justify-center">
        <Gauge2 deg={value} />
      </div>
      <div className="text-md text-slate-700 font-medium mt-2">
        {name}
      </div>
    </motion.div>
  );
}

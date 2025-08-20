'use client';

import FanIcon from "./FanIcon"; 
import LightIcon from "./LightIcon";
import MistIcon from "./MistIcon";
import HeaterIcon from "./HeaterIcon";
import CoolerIcon from "./CoolerIcon";
import ValveIcon from "./ValveIcon";

export default function OperatorIcon({ name, situ }) {
  const isOn = situ === "on";

  if (name === "فن") return <FanIcon isOn={isOn} />;
  if (name === "روشنایی") return <LightIcon isOn={situ === "on"} />  
  if (name === "مه پاش") return <MistIcon isOn={situ === "on"} />;
  if (name === "هیتر") return <HeaterIcon isOn={isOn} />;
  if (name === "کولر") return <CoolerIcon isOn={situ === "on"} />  
  if (name === "شیر") return <ValveIcon isOn={situ === "on"} />;

  return <span className="text-white text-2xl">📟</span>;
}

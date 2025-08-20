import WindIcon from "./WindIcon";
import ThermometerIcon from "./ThermometerIcon";
import HumidityIcon from "./HumidityIcon";

export default function SensorIcon({ name, temp }) {
  if (name === "باد") return <WindIcon temp={temp} />;
  if (name === "دما") return <ThermometerIcon temp={temp} />;
  if (name === "رطوبت") return <HumidityIcon temp={temp} />;
  return <span className="text-white text-2xl">📟</span>;
}
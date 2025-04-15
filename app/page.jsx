import { GoLocation } from "react-icons/go";
import { FaRoad } from "react-icons/fa";
import { LuHand } from "react-icons/lu";
import { LuLogs } from "react-icons/lu";
import { VscWarning } from "react-icons/vsc";
import { TfiLayoutGrid3Alt } from "react-icons/tfi"

export default function Home() {
  return (
    <>
    <h1 className="text-3xl">ویرامپ</h1>
    <br/>
      <div className="w-20  bg-blue-600 text-white border-2 grid rounded-lg">
        <div className="py-6 px-2 text-center border-b border-b-slate-800 rounded-md">
          <GoLocation size={30} className="mx-auto mb-4" />
          موقعیت
          </div>
        <div className="py-6 px-2 text-center border-b border-b-slate-800 rounded-md">
          <FaRoad  size={30} className="mx-auto mb-4" />
          پیمایش          
          </div>
        <div className="py-6 px-2 text-center border-b border-b-slate-800 rounded-md">
        <LuHand  size={30} className="mx-auto mb-4" />
          توقف</div>
        <div className="py-6 px-2 text-center border-b border-b-slate-800 rounded-md">
          <LuLogs  size={30} className="mx-auto mb-4" />
          گزارش</div>
        <div className="py-6 px-2 text-center border-b border-b-slate-800 rounded-md">
          <VscWarning  size={30} className="mx-auto mb-4" />
          اخطارها</div>
        <div className="py-6 px-2 text-center border-b border-b-slate-800 rounded-md">
          <TfiLayoutGrid3Alt size={30} className="mx-auto mb-4" />
          داشبورد</div>
      </div>
      </>
  );
}

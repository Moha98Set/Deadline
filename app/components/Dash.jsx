import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { FaRoad } from "react-icons/fa";
import { LuHand } from "react-icons/lu";
import { LuLogs } from "react-icons/lu";
import { VscWarning } from "react-icons/vsc";
import { TfiLayoutGrid3Alt } from "react-icons/tfi"

export default function DashBoard(){
    return(
        <div className="bg-blue-600 text-white text-sm border border-black rounded-lg absolute top-28 right-5 z-10">
            <div className="py-7 px-2 text-center border-b border-b-slate-800 rounded-md">
                <GoLocation size={25} className="mx-auto mb-3" />
                موقعیت
                </div>
            <div className="py-7 px-2 text-center border-b border-b-slate-800 rounded-md">
                <FaRoad  size={25} className="mx-auto mb-3" />
                پیمایش          
                </div>
            <div className="py-7 px-2 text-center border-b border-b-slate-800 rounded-md">
            <LuHand  size={25} className="mx-auto mb-3" />
                توقف</div>
            <div className="py-7 px-2 text-center border-b border-b-slate-800 rounded-md">
                <LuLogs  size={25} className="mx-auto mb-3" />
                گزارش</div>
            <div className="py-7 px-2 text-center border-b border-b-slate-800 rounded-md">
                <VscWarning  size={25} className="mx-auto mb-3" />
                اخطارها</div>
            <div className="py-7 px-2 text-center border-b border-b-slate-800 rounded-md">
                <Link href='/Dashboard'><TfiLayoutGrid3Alt size={25} className="mx-auto mb-3" />
                داشبورد</Link></div>
        </div> 
    )
}
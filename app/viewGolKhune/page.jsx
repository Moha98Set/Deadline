'use client'

import RemoveBtn from "@/app/components/Remove";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function ViewData() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const fetchData = async (currentPage) => {
    try {
      const res = await fetch(`/api/data/golkhune/?page=${currentPage}`);
      const result = await res.json();
      console.log("Data: ",result)
      setData(result.data || []);
      setTotal(result.total || 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  

  return (
    <>
      <table className="w-full text-sm text-gray-500 dark:text-gray-400 absolute top-24">
        <thead className="text-md text-gray-700 dark:text-gray-400">
        <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    سریال نامبر
                    </th>
                    <th scope="col" className="px-6 py-3">
                    نام و نام خانوادگی
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    شهرستان
                    </th>
                    <th scope="col" className="px-6 py-3">
                    زمان
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    برق DC
                    </th>
                    <th scope="col" className="px-6 py-3">
                    باطری
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                     باد
                    </th>
                    <th scope="col" className="px-6 py-3">
                    رطوبت
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    اعتبار
                    </th>
                    <th scope="col" className="px-6 py-3">
                    دما
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50">
                    Cloud
                    </th>
                    <th scope="col" className="px-6 py-3 dark:bg-gray-800">
                    Up Time
                    </th>
                </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="border-b border-gray-200 dark:border-gray-700" key={index}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">  
                {item.serial_number}
              </th>
              <td className="px-6 py-4 text-center">{item.serial_number === "4505D4206527"
                ? "صفر زاده"
                : item.serial_number === "4505DA165623"
                ? "روزبه"
                : null}
              </td>
              <td className="px-6 py-4 text-center  bg-gray-50 dark:bg-gray-800">{item.serial_number === "4505D4206527"
                ? "خفر"
                : item.serial_number === "4505DA165623"
                ? "داراب"
                : null}
              </td>
              <td className="px-6 py-4 text-center">{item.timestamp_shamsi}</td>
              <td className="px-6 py-4 text-center bg-gray-50 dark:bg-gray-800">{item.Vdc}</td>
              <td className="px-6 py-4 text-center">{item.Vbat}</td>
              <td className="px-6 py-4 text-center bg-gray-50 dark:bg-gray-800">{item.ADC1} Km/H</td>
              <td className="px-6 py-4 text-center">{item.HUM}</td>
              <td className="px-6 py-4 text-center bg-gray-50 dark:bg-gray-800">{item.Credit}</td>
              <td className="px-6 py-4 text-center">
                {item.TEMP}
              </td>
              <td className="px-6 py-4 text-center bg-gray-50">
                {item.Cloud}
              </td>
              <td className="px-6 py-4 text-center dark:bg-gray-800 flex justify-center">
                {item.UPTIME}
              </td>
            </tr>
          ))}
        </tbody>        
      </table>
      <div className="absolute bottom-3 left-0 right-0">
      <nav aria-label="Page navigation example" className="flex justify-center">
        <ul className="inline-flex -space-x-px">
        <li>
            <button
              onClick={() => setPage((p) => Math.min(totalPages))}
              disabled={page === totalPages}              
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              آخر
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}              
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              بعدی
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-e-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page + 1}
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight bg-blue-500 text-white rounded-lg hover:bg-blue-300 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page}
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page-1}
            </button>
          </li>        
          <li>
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              قبلی
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage((p) => Math.max(1))}
              disabled={page === 1}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              اول
            </button>
          </li>
        </ul>
      </nav>
      </div>      
    </>
  );
}


/*import { GoLocation } from "react-icons/go";
import { FaRoad } from "react-icons/fa";
import { LuHand } from "react-icons/lu";
import { LuLogs } from "react-icons/lu";
import { VscWarning } from "react-icons/vsc";
import { TfiLayoutGrid3Alt } from "react-icons/tfi"
import React from "react"

import dynamic from 'next/dynamic'

const MapClient = dynamic(() => import('@/app/components/MapClient'), { ssr: false });

export default function ViewGolKhune() {
  
  return (
    <>
      <div className="flex overflow-hidden">
        <MapClient />       
          <div className="bg-blue-600 text-white text-sm border border-black rounded-lg absolute top-28 right-5 z-10">
                      <div className="py-7 px-2 text-center border-b border-b-slate-800 rounded-md">
                          <GoLocation size={25} className="mx-auto mb-3" />
                          موقعیت
                          </div>
                      <div className="py-7 px-2 text-center border-b border-b-slate-800 rounded-md">
                          <FaRoad  size={25} className="mx-auto mb-3" />
                          تاریخچه
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
                          <TfiLayoutGrid3Alt size={25} className="mx-auto mb-3" />
                          داشبورد</div>
                  </div>        
      </div>
    </>
  );
}*/

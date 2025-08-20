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
      const res = await fetch(`/api/data/?page=${currentPage}`);
      const result = await res.json();
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
                    نام و نام خانوادگی
                    </th>
                    <th scope="col" className="px-6 py-3">
                    کد ملی
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    نوع کشت
                    </th>
                    <th scope="col" className="px-6 py-3">
                    محصول
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    منبع آبی
                    </th>
                    <th scope="col" className="px-6 py-3">
                    شهرستان
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    تلفن
                    </th>
                    <th scope="col" className="px-6 py-3">
                    تاریخچه مصرف سوخت
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50">
                    نقشه
                    </th>
                    <th scope="col" className="px-6 py-3 dark:bg-gray-800">
                    ویرایش و حذف
                    </th>
                </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="border-b border-gray-200 dark:border-gray-700" key={index}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">  
                {item.name_malek} {item.name_khanevadegi_malek}
              </th>
              <td className="px-6 py-4 text-center">{item.code_meli_malek}</td>
              <td className="px-6 py-4 text-center bg-gray-50 dark:bg-gray-800">{item.noe_bahre_bardar}</td>
              <td className="px-6 py-4 text-center">{item.name_mahsul}</td>
              <td className="px-6 py-4 text-center bg-gray-50 dark:bg-gray-800">{item.noe_manba_abi}</td>
              <td className="px-6 py-4 text-center">{item.name_shahrestan}</td>
              <td className="px-6 py-4 text-center bg-gray-50 dark:bg-gray-800">{item.telefone_hamrah_malek}</td>
              <td className="px-6 py-4 text-center">
                <button className="bg-blue-500 rounded-md px-4 py-2 text-white">تاریخچه</button>
              </td>
              <td className="px-6 py-4 text-center bg-gray-50">
                <Link href={`/viewMap/${item._id}`} className="bg-blue-500 rounded-md px-4 py-2 text-white">نقشه</Link>
              </td>
              <td className="px-6 py-4 text-center dark:bg-gray-800 flex justify-center">
                <Link href={`/Edit/${item._id}`}><HiPencilAlt size={24} /></Link>
                <div className="p-2" />
                <RemoveBtn id={item._id} />
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

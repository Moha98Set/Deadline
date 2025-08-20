'use client'

import Link from "next/link";

export default function ViewData() {

  return (
    <>
      <table className="w-full text-sm text-gray-500 dark:text-gray-400 absolute top-24">
        <thead className="text-md text-gray-700 dark:text-gray-400">
            <tr className="text-center">
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
                تاریخچه
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                
                </th>
                <th scope="col" className="px-6 py-3">
                
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                
                </th>
                <th scope="col" className="px-6 py-3">
                
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50">
                
                </th>
                <th scope="col" className="px-6 py-3 dark:bg-gray-800">
                
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-center">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">  
                4505D4206527
              </th>
              <td className="px-6 py-4">صفر زاده</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">خفر</td>
              <td className="px-6 py-4"><button className="bg-blue-500 px-5 py-3 rounded-md text-white"><Link href='/Dashboard/4505D4206527'>تاریخچه</Link></button></td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
              <td className="px-6 py-4">                
              </td>
              <td className="px-6 py-4 text-center bg-gray-50">                
              </td>
              <td className="px-6 py-4 text-center dark:bg-gray-800 flex justify-center">                
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-center">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">  
                4505DA165623
              </th>
              <td className="px-6 py-4">روزبه</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">داراب</td>
              <td className="px-6 py-4"><button className="bg-blue-500 px-5 py-3 rounded-md text-white"><Link href='/Dashboard/4505DA165623'>تاریخچه</Link></button></td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
              <td className="px-6 py-4">                
              </td>
              <td className="px-6 py-4 text-center bg-gray-50">                
              </td>
              <td className="px-6 py-4 text-center dark:bg-gray-800 flex justify-center">                
              </td>
            </tr>      
        </tbody>        
      </table>
      <div className="absolute bottom-3 left-0 right-0">
      <nav aria-label="Page navigation example" className="flex justify-center">
        <ul className="inline-flex -space-x-px">
        <li>
            <button
                            
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              آخر
            </button>
          </li>
          <li>
            <button
                           
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              بعدی
            </button>
          </li>
          <li>
            <button
              
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-e-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              
            </button>
          </li>
          <li>
            <button
              
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight bg-blue-500 text-white rounded-lg hover:bg-blue-300 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              
            </button>
          </li>
          <li>
            <button
              
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              
            </button>
          </li>        
          <li>
            <button
              
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              قبلی
            </button>
          </li>
          <li>
            <button
              
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
import RemoveBtn from "./Remove";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getList = async() => {
    try {
        const res = await fetch('http://localhost:3000/api/data?page=2')

        if(!res.ok){
            throw new Error('Failed to fetch Data')
        }

        return res.json()
    } catch (error) {
        console.log('Error Loading Data', error)
    }
}

export default async function List(){
    const { data } = await getList()
    console.log(data)
    return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-gray-500 dark:text-gray-400">
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
              <tbody >               
                {data.map((item, index) => (
                  <tr className="border-b border-gray-200 dark:border-gray-700" key={index}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">  
                        {item.name_malek}
                        {' '}
                        {item.name_khanevadegi_malek}
                      </th>                      
                      <td className="px-6 py-4 text-center">
                        {item.code_meli_malek}
                      </td>
                      <td className="px-6 py-4 text-center bg-gray-50 dark:bg-gray-800">
                        {item.noe_bahre_bardar}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.name_mahsul}
                      </td>
                      <td className="px-6 py-4 text-center bg-gray-50 dark:bg-gray-800">
                        {item.noe_manba_abi}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.name_shahrestan}
                      </td>
                      <td className="px-6 py-4 text-center bg-gray-50 dark:bg-gray-800">
                        {item.telefone_hamrah_malek}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-gray-900 rounded-md" >
                          <button className="bg-blue-500 rounded-md px-4 py-2 text-white">تاریخچه</button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center bg-gray-50">
                        <div  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-gray-900 rounded-md" >
                          <Link href={`/viewMap/${item._id}`} className="bg-blue-500 rounded-md px-4 py-2 text-white">نقشه</Link>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center  dark:bg-gray-800 flex justify-center">
                        <div>
                          <Link href={`/Edit/${item._id}`} className=""><HiPencilAlt size={24} /></Link>
                        </div>
                        <div className="p-2"></div>
                        <div>
                          <RemoveBtn id={index._id} />
                        </div>
                      </td>
                  </tr>
                  
                  ))}
                  </tbody>
          </table>
          

      </div>
        
    </>
    )
}




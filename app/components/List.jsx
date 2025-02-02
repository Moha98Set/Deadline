import RemoveBtn from "./Remove";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getList = async() =>{
    try {
        const res = await fetch('/api/data', {cache: 'no-store'})

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
    return (
    <>
    <div className=" mx-auto bg-gray-50 border-2 border-gray-100 rounded-md p-6 font-diruz text-lg">
        <div className="flex justify-between">
            <div className="p-2 font-bold text-xl">نام و نام خانوادگی</div>
            <div className="p-2 font-bold text-xl">کد ملی</div>
            <div className="p-2 font-bold text-xl">مالک</div>
            <div className="p-2 font-bold text-xl">نوع کشت</div>
            <div className="p-2 font-bold text-xl">محصول</div>
            <div className="p-2 font-bold text-xl">منبع آبی</div>
            <div className="p-2 font-bold text-xl">شهرستان</div>
            <div className="p-2 font-bold text-xl">تلفن</div>
            <div className="p-2 font-bold text-xl">تاریخچه مصرف سوخت</div>   
            <div className="p-2 font-bold text-xl">ویرایش و حذف</div>
        </div>
        {data.map((item, index) => (
            <div key={index} className="justify-between">
            <div className="flex justify-between items-center">
                <div className="p-2">
                  <div className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-800 rounded-md" >
                    {item.name}
                  </div>
                </div>
                <div className="p-2">
                    <div  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 rounded-md" >
                      {item.nationalcode}
                    </div>
                </div>
                <div className="p-2">
                    <div className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md">
                      {item.vehicle}
                    </div>
                </div>
                <div className="p-2">
                    <div className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md">
                      {item.typsof}
                    </div>
                </div>
                <div className="p-2">
                    <div className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md">
                      {item.product}
                    </div>
                </div>
                <div className="p-2">
                    <div className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md">
                      {item.watersource}
                    </div>
                </div>
                <div className="p-2">
                    <div  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 rounded-md" >
                      {item.city}
                    </div>
                </div>
                <div className="p-2">
                    <div  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 rounded-md" >
                      {item.phone}
                    </div>
                </div>
                <div className="p-2">
                    <div  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 rounded-md" >
                      <button className="bg-blue-500 px-4 py-2 text-white">تاریخچه</button>
                    </div>
                </div>
                <div className="">
                  <Link href={`/Edit/${item._id}`}>
                      <HiPencilAlt size={24} />
                  </Link>
                  </div>          
                <div className=""><RemoveBtn id={item._id} /></div>            
            </div>
            <br/>
            <hr />
            <br />
            </div>
        ))}
    </div>
        
    </>
    )
}




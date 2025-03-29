'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Insert(){ 
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [from, setFrom] = useState()
    const [nationalcode, setNationalcode] = useState()    
    const [phone, setPhone] = useState()
    const [vehicle, setVehicle] = useState()
    const [model, setMdoel] = useState()
    const [fuel, setFuel] = useState()
    const [email, setEmail] = useState()
    const [owner, setOwner] = useState()
    const [ownercode, setOwnercode] = useState()
    const [province, setProvince] = useState()
    const [city, setCity] = useState()
    const [address, setAddress] = useState()
    const [staticphone, setStaticphone] = useState()
    const [lat, setLat] = useState()
    const [long, setLong] = useState()
    const [product, setProduct] = useState()
    const [typsof, setTypsof] = useState()
    const [partners, setPartners] = useState()    
    const [watersource, setWatersource] = useState()

    const router = useRouter()

    const handlerSubmit = async(e) => {
        e.prevendivefault()

         try {
            const res = await fetch('http://localhost:3000/api/data', {
                method: "POST",
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    age,
                    from,
                    nationalcode,
                    phone,
                    vehicle,
                    model,
                    fuel,
                    email,
                    owner,
                    ownercode,
                    province,
                    city,
                    address,
                    staticphone,
                    lat,
                    long,
                    product,
                    typsof,
                    partners,
                    watersource
                })
            })
            if(!res.ok){
                console.log(res)
            } else{
                throw new Error('Failed to create Data')
            }
            router.push('/')
         } catch (error) {
            console.log(error)
         }
    }

    return (
    <>
    <div>
        <form method="POST" onSubmit={handlerSubmit} className="w-fit mx-auto bg-gray-50 border-gray-100 rounded-md p-5 font-diruz text-lg">
            <h1 className="text-2xl p-2 font-bold">مشخصات فردی</h1>
            <div className="flex">
                <div className="p-2"><label>نام و نام خانوادگی</label></div>
                <div className=""><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="رضا رضایی" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>تاریخ تولد</label></div>
                <div className=""><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setAge(e.target.value)} value={age} name="age" type='text' placeholder="1234/56/78" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>صادره از</label></div>
                <div className=""><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setFrom(e.target.value)} value={from} type="text" placeholder="شیراز" name="from" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>کد ملی</label></div>
                <div className=""><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setNationalcode(e.target.value)} value={nationalcode} type="text" placeholder="1234567890" name="nationalcode" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
            </div>
            <div className="flex">
                <div className="p-2"><label>شماره تماس</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" placeholder="98 912 345 4444" name="phone" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>نوع دستگاه</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setVehicle(e.target.value)} value={vehicle} type="text" placeholder="تراکتور" name="vehicle" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>مدل دستگاه</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setMdoel(e.target.value)} value={model} type="text" placeholder="1399" name="model" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>مصرف سوخت</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setFuel(e.target.value)} value={fuel} type="text" placeholder="100 لیتر" name="fuel" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
            </div>
            <div className="flex">
                <div className="p-2"><label>ایمیل</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="You@Example.Com" name="email" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>

            </div>
            <br/>
            <hr/>
            <br/>
            <h1 className="text-2xl p-2 align-top font-bold">مشخصات ملک</h1>
            <div className="flex">
                <div className="p-2"><label>نام مالک</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setOwner(e.target.value)} value={owner} type="text" placeholder="رضا رضایی" name="owner" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>کد ملی مالک</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setOwnercode(e.target.value)} value={ownercode} type="text" placeholder="1234567890" name="ownercode" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>استان</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setProvince(e.target.value)} value={province} type="text" placeholder="فارس" name="province" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>شهرستان</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder="شیراز" name="city" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
            </div>
            <div className="flex">
                <div className="p-2"><label>آدرس</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" placeholder="کوچه 10" name="address" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>شماره ثابت</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setStaticphone(e.target.value)} value={staticphone} type="text" placeholder="23 4567 01" name="staticphone" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>طول جغرافیایی</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setLat(e.target.value)} value={lat} type="text" placeholder="1399" name="lat" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>عرض جغرافیایی</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setLong(e.target.value)} value={long} type="text" placeholder="1400" name="long" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
            </div>
            <div className="flex">
                <div className="p-2"><label>محصول</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setProduct(e.target.value)} value={product} type="text" placeholder="پرتقال" name="product" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>نوع کشت</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setTypsof(e.target.value)} value={typsof} type="text" placeholder="آبی" name="typsof" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>تعداد شرکا</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setPartners(e.target.value)} value={partners} type="text" placeholder="1" name="partners" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
                <div className="p-2"><label>منبع آبی</label></div>
                <div><label>:</label></div>
                <div className="p-2">
                    <input onChange={(e) => setWatersource(e.target.value)} value={watersource} type="text" placeholder="چاه" name="watersource" required
                           className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                </div>
            </div>
            <br/>
            <button type="submit"
                    className="mr-2 text-white bg-blue-600 rounded-md p-2 shadow-lg hover:bg-white hover:text-black">ثبت
                اطلاعات
            </button>
            <button type='reset'
                        className="mr-3 text-black rounded-md p-2 shadow-lg border-2 hover:bg-black hover:text-white">باز
                    نویسی
            </button>
        </form>
    </div>
    </>
)
}
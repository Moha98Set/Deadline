'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditForm({
    id,
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
}){
    const [newName, setNewName] = useState(name);
    const [newAge, setNewAge] = useState(age);
    const [newFrom, setNewFrom] = useState(from);
    const [newNationalcode, setNewNationalcode] = useState(nationalcode);
    const [newPhone, setNewPhone] = useState(phone);
    const [newVehicle, setNewVehicle] = useState(vehicle);
    const [newModel, setNewModel] = useState(model);
    const [newFuel, setNewFuel] = useState(fuel);
    const [newEmail, setNewEmail] = useState(email);
    const [newOwner, setNewOwner] = useState(owner);
    const [newOwnercode, setNewOwnercode] = useState(ownercode);
    const [newProvince, setNewProvince] = useState(province);
    const [newCity, setNewCity] = useState(city);
    const [newAddress, setNewAddress] = useState(address);
    const [newStaticphone, setNewStaticphone] = useState(staticphone);
    const [newLat, setNewLat] = useState(lat);
    const [newLong, setNewLong] = useState(long);
    const [newProduct, setNewProduct] = useState(product);
    const [newTypsof, setNewTypsof] = useState(typsof);
    const [newPartners, setNewPartners] = useState(partners) ;   
    const [newWatersource, setNewWatersource] = useState(watersource);

    const router = useRouter()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        try {
            const res = await fetch(`/api/data/${id}`, {
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    newName,
                    newAge,
                    newFrom,
                    newNationalcode,
                    newPhone,
                    newVehicle,
                    newModel,
                    newFuel,
                    newEmail,
                    newOwner,
                    newOwnercode,
                    newProvince,
                    newCity,
                    newAddress,
                    newStaticphone,
                    newLat,
                    newLong,
                    newProduct,
                    newTypsof,
                    newPartners,
                    newWatersource
                })
            })

            if(!res.ok){
                throw new Error('Failed to update data')
            }
            router.refresh()
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST"
                  className="w-fit mx-auto bg-gray-50 border-gray-100 rounded-md p-5 font-diruz text-lg">

                <th><h1 className="text-2xl p-2">مشخصات فردی</h1></th>
                <tr>
                    <td className="p-2"><label>نام و نام خانوادگی</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewName(e.target.value)} value={newName} type="text" name="newName" placeholder="رضا رضایی" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تاریخ تولد</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewAge(e.target.value)} value={newAge}  name="newAge" type='date' placeholder="1234/56/78" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>صادره از</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewFrom(e.target.value)} value={newFrom}  type="text" placeholder="شیراز" name="newFrom" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد ملی</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                        <input  onChange={(e) => setNewNationalcode(e.target.value)} value={newNationalcode}  type="text" placeholder="1234567890" name="newNationalcode" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>شماره تماس</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewPhone(e.target.value)} value={newPhone}  type="text" placeholder="98 912 345 4444" name="newPhone" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نوع دستگاه</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewVehicle(e.target.value)} value={newVehicle}  type="text" placeholder="تراکتور" name="newVehicle" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>مدل دستگاه</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewModel(e.target.value)} value={newModel}  type="text" placeholder="1399" name="newModel" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>مصرف سوخت</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewFuel(e.target.value)} value={newFuel}  type="text" placeholder="100 لیتر" name="newFuel" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>ایمیل</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewEmail(e.target.value)} value={newEmail}  type="email" placeholder="You@Example.Com" name="newEmail" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>

                </tr>
                <br/>
                <hr/>
                <br/>
                <th><h1 className="text-2xl p-2 align-top">مشخصات ملک</h1></th>
                <tr>
                    <td className="p-2"><label>نام مالک</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewOwner(e.target.value)} value={newOwner}  type="text" placeholder="رضا رضایی" name="newOwner" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد ملی مالک</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewOwnercode(e.target.value)} value={newOwnercode}  type="text" placeholder="1234567890" name="newOwnercode" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>استان</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewProvince(e.target.value)} value={newProvince}  type="text" placeholder="فارس" name="newProvince" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>شهرستان</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewCity(e.target.value)} value={newCity}  type="text" placeholder="شیراز" name="newCity" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>آدرس</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewAddress(e.target.value)} value={newAddress}  type="text" placeholder="کوچه 10" name="newAddress" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>شماره ثابت</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewStaticphone(e.target.value)} value={newStaticphone}  type="text" placeholder="23 4567 01" name="newStaticphone" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>طول جغرافیایی</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewLat(e.target.value)} value={newLat}  type="text" placeholder="1399" name="newLat" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>عرض جغرافیایی</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewLong(e.target.value)} value={newLong}  type="text" placeholder="1400" name="newLong" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>محصول</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewProduct(e.target.value)} value={newProduct}  type="text" placeholder="پرتقال" name="newProduct" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نوع کشت</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewTypsof(e.target.value)} value={newTypsof}  type="text" placeholder="آبی" name="newTypsof" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تعداد شرکا</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewPartners(e.target.value)} value={newPartners}  type="text" placeholder="1" name="newPartners" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>منبع آبی</label></td>
                    <td><label>:</label></td>
                    <td className="p-2">
                        <input onChange={(e) => setNewWatersource(e.target.value)} value={newWatersource}  type="text" placeholder="چاه" name="newWatersource" required
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <br/>
                <button type="submit"
                        className="mr-2 text-white bg-blue-600 rounded-md p-2 shadow-lg hover:bg-white hover:text-black">ویرایش
                    اطلاعات
                </button>
                <button type='reset'
                        className="mr-3 text-black rounded-md p-2 shadow-lg border-2 hover:bg-black hover:text-white">باز
                    نویسی
                </button>

            </form>
        </div>
    )
}
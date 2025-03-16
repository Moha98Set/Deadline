'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditForm({
    id,
    OBJECTID,
    coddashtf,
    idcodf,
    codostanif,
    OBJECTID_1,
    F1,
    serial_form,
    code_shahrestan,
    name_shahrestan,
    code_bakhsh,
    name_bakhsh,
    code_dehestan,
    name_dehestan,
    code_abadi,
    name_abadi,
    code_markaze_khadamat,
    name_markaze_khadamat,
    code_dasht,
    name_dasht,
    shomare_ghete,
    masahat,
    vaziat,
    shomare_ghete_asli,
    noe_manba_abi,
    name_manba_abi,
    noe_bahre_bardar,
    tedade_shoraka_1,
    tedade_shoraka_2,
    vaziat_malekiat,
    pelake_sabti_code_bakhsh,
    pelake_sabti_asli,
    pelake_sabti_fari,
    name_bahre_bardar,
    name_khanevadegi_bahre_bardar,
    name_pedar_bahre_bardar,
    code_meli_bahre_bardar,
    tahsilat_bahre_bardar,
    reshte_tahsili_bahre_bardar,
    telefone_bahre_bardar,
    telefone_hamrah_bahre_bardar,
    mahsul_1,
    mahsul_2,
    mahsul_3,
    mahsul_4,
    vaziat_ghete,
    code_posti_bahre_bardar,
    address_bahre_bardar,
    noe_malekiat,
    name_malek,
    name_khanevadegi_malek,
    name_pedar_malek,
    code_meli_malek,
    telefone_hamrah_malek,
    jensiat_malek,
    name_malek_hoquqi,
    shomare_naqshe,
    code_mahsul,
    name_mahsul,
    GPSX,
    GPSY,
    codostani,
    havi,
    xx,
    yy,
    Shape_Length,
    Shape_Area
}){
    const [newObjectid, setNewObjectid] = useState(OBJECTID);
    const [newCoddashtf, setNewCoddashtf] = useState(coddashtf);
    const [newIdcodf, setNewIdcodf] = useState(idcodf);
    const [newCodostanif, setNewCodostanif] = useState(codostanif);
    const [newObjectid1, setNewObjectid1] = useState(OBJECTID_1);
    const [newF1, setNewF1] = useState(F1);
    const [newSerialForm, setNewSerialForm] = useState(serial_form);
    const [newCodeShahrestan, setNewCodeShahrestan] = useState(code_shahrestan);
    const [newNameShahrestan, setNewNameShahrestan] = useState(name_shahrestan);
    const [newCodeBakhsh, setNewCodeBakhsh] = useState(code_bakhsh);
    const [newNameBakhsh, setNewNameBakhsh] = useState(name_bakhsh);
    const [newCodeDehestan, setNewCodeDehestan] = useState(code_dehestan);
    const [newNameDehestan, setNewNameDehestan] = useState(name_dehestan);
    const [newCodeAbadi, setNewCodeAbadi] = useState(code_abadi);
    const [newNameAbadi, setNewNameAbadi] = useState(name_abadi);
    const [newCodeMarkazeKhadamat, setNewCodeMarkazeKhadamat] = useState(code_markaze_khadamat);
    const [newNameMarkazeKhadamat, setNewNameMarkazeKhadamat] = useState(name_markaze_khadamat);
    const [newCodeDasht, setNewCodeDasht] = useState(code_dasht);
    const [newNameDasht, setNewNameDasht] = useState(name_dasht);
    const [newShomareGhete, setNewShomareGhete] = useState(shomare_ghete);
    const [newMasahat, setNewMasahat] = useState(masahat);
    const [newVaziat, setNewVaziat] = useState(vaziat);
    const [newShomareGheteAsli, setNewShomareGheteAsli] = useState(shomare_ghete_asli);
    const [newNoeManbaAbi, setNewNoeManbaAbi] = useState(noe_manba_abi);
    const [newNameManbaAbi, setNewNameManbaAbi] = useState(name_manba_abi);
    const [newNoeBahreBardar, setNewNoeBahreBardar] = useState(noe_bahre_bardar);
    const [newTedadeShoraka1, setNewTedadeShoraka1] = useState(tedade_shoraka_1);
    const [newTedadeShoraka2, setNewTedadeShoraka2] = useState(tedade_shoraka_2);
    const [newVaziatMalekiat, setNewVaziatMalekiat] = useState(vaziat_malekiat);
    const [newPelakeSabtiCodeBakhsh, setNewPelakeSabtiCodeBakhsh] = useState(pelake_sabti_code_bakhsh);
    const [newPelakeSabtiAsli, setNewPelakeSabtiAsli] = useState(pelake_sabti_asli);
    const [newPelakeSabtiFari, setNewPelakeSabtiFari] = useState(pelake_sabti_fari);
    const [newNameBahreBardar, setNewNameBahreBardar] = useState(name_bahre_bardar);
    const [newNameKhanevadegiBahreBardar, setNewNameKhanevadegiBahreBardar] = useState(name_khanevadegi_bahre_bardar);
    const [newNamePedareBahreBardar, setNewNamePedareBahreBardar] = useState(name_pedar_bahre_bardar);
    const [newCodeMeliBahreBardar, setNewCodeMeliBahreBardar] = useState(code_meli_bahre_bardar);
    const [newTahsilatBahreBardar, setNewTahsilatBahreBardar] = useState(tahsilat_bahre_bardar);
    const [newReshteTahsiliBahreBardar, setNewReshteTahsiliBahreBardar] = useState(reshte_tahsili_bahre_bardar);
    const [newTelefoneBahreBardar, setNewTelefoneBahreBardar] = useState(telefone_bahre_bardar);
    const [newTelefoneHamrahBahreBardar, setNewTelefoneHamrahBahreBardar] = useState(telefone_hamrah_bahre_bardar);
    const [newMahsul1, setNewMahsul1] = useState(mahsul_1);
    const [newMahsul2, setNewMahsul2] = useState(mahsul_2);
    const [newMahsul3, setNewMahsul3] = useState(mahsul_3);
    const [newMahsul4, setNewMahsul4] = useState(mahsul_4);
    const [newVaziatGhete, setNewVaziatGhete] = useState(vaziat_ghete);
    const [newCodePostiBahreBardar, setNewCodePostiBahreBardar] = useState(code_posti_bahre_bardar);
    const [newAddressBahreBardar, setNewAddressBahreBardar] = useState(address_bahre_bardar);
    const [newNoeMalekiat, setNewNoeMalekiat] = useState(noe_malekiat);
    const [newNameMalek, setNewNameMalek] = useState(name_malek);
    const [newNameKhanevadegiMalek, setNewNameKhanevadegiMalek] = useState(name_khanevadegi_malek);
    const [newNamePedareMalek, setNewNamePedareMalek] = useState(name_pedar_malek);
    const [newCodeMeliMalek, setNewCodeMeliMalek] = useState(code_meli_malek);
    const [newTelefoneHamrahMalek, setNewTelefoneHamrahMalek] = useState(telefone_hamrah_malek);
    const [newJensiatMalek, setNewJensiatMalek] = useState(jensiat_malek);
    const [newNameMalekHoquqi, setNewNameMalekHoquqi] = useState(name_malek_hoquqi);
    const [newShomareNaqshe, setNewShomareNaqshe] = useState(shomare_naqshe);
    const [newCodeMahsul, setNewCodeMahsul] = useState(code_mahsul);
    const [newNameMahsul, setNewNameMahsul] = useState(name_mahsul);
    const [newGpsx, setNewGpsx] = useState(GPSX);
    const [newGpsy, setNewGpsy] = useState(GPSY);
    const [newCodostani, setNewCodostani] = useState(codostani);
    const [newHavi, setNewHavi] = useState(havi);
    const [newXx, setNewXx] = useState(xx);
    const [newYy, setNewYy] = useState(yy);
    const [newShapeLength, setNewShapeLength] = useState(Shape_Length);
    const [newShapeArea, setNewShapeArea] = useState(Shape_Area);

    const router = useRouter()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        try {
            const res = await fetch(`http://localhost:3000/api/data/${id}`, {
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    newObjectid,
                    newCoddashtf,
                    newIdcodf,
                    newCodostanif,
                    newObjectid1,
                    newF1,
                    newSerialForm,
                    newCodeShahrestan,
                    newNameShahrestan,
                    newCodeBakhsh,
                    newNameBakhsh,
                    newCodeDehestan,
                    newNameDehestan,
                    newCodeAbadi,
                    newNameAbadi,
                    newCodeMarkazeKhadamat,
                    newNameMarkazeKhadamat,
                    newCodeDasht,
                    newNameDasht,
                    newShomareGhete,
                    newMasahat,
                    newVaziat,
                    newShomareGheteAsli,
                    newNoeManbaAbi,
                    newNameManbaAbi,
                    newNoeBahreBardar,
                    newTedadeShoraka1,
                    newTedadeShoraka2,
                    newVaziatMalekiat,
                    newPelakeSabtiCodeBakhsh,
                    newPelakeSabtiAsli,
                    newPelakeSabtiFari,
                    newNameBahreBardar,
                    newNameKhanevadegiBahreBardar,
                    newNamePedareBahreBardar,
                    newCodeMeliBahreBardar,
                    newTahsilatBahreBardar,
                    newReshteTahsiliBahreBardar,
                    newTelefoneBahreBardar,
                    newTelefoneHamrahBahreBardar,
                    newMahsul1,
                    newMahsul2,
                    newMahsul3,
                    newMahsul4,
                    newVaziatGhete,
                    newCodePostiBahreBardar,
                    newAddressBahreBardar,
                    newNoeMalekiat,
                    newNameMalek,
                    newNameKhanevadegiMalek,
                    newNamePedareMalek,
                    newCodeMeliMalek,
                    newTelefoneHamrahMalek,
                    newJensiatMalek,
                    newNameMalekHoquqi,
                    newShomareNaqshe,
                    newCodeMahsul,
                    newNameMahsul,
                    newGpsx,
                    newGpsy,
                    newCodostani,
                    newHavi,
                    newXx,
                    newYy,
                    newShapeLength,
                    newShapeArea
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
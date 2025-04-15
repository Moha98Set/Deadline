'use client'

import { useState } from "react"
import Link from "next/link";
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
                    <div className="flex justify-between">
                        <div><th><h1 className="text-2xl p-2">مشخصات فردی</h1></th></div>
                        <div className="bg-green-500 p-3 w-fit text-white rounded-md text-lg border-2 border-black">
                            <Link href={`/Edit/polygon/${id}`}><h1><span className="text-xl">اصلاح</span> Polygon</h1></Link>
                        </div>
                    </div>
                
                <tr>
                    <td className="p-2"><label>OBJECTID</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewObjectid(e.target.value)} value={newObjectid} type="text" name="newObjectid" placeholder={OBJECTID} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>
                    <td className="p-2"><label>Coddashtf</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCoddashtf(e.target.value)} value={newCoddashtf} type="text" name="newCoddashtf" placeholder={coddashtf} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>Idcodf</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewIdcodf(e.target.value)} value={newIdcodf} type="text" name="newIdcodf" placeholder={idcodf} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>
                    <td className="p-2"><label>Codostanif</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodostanif(e.target.value)} value={newCodostanif} type="text" name="newCodostanif" placeholder={codostanif} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2">
                        
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>Objectid1</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewObjectid1(e.target.value)} value={newObjectid1} type="text" name="newObjectid1" placeholder={OBJECTID_1} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>F1</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewF1(e.target.value)} value={newF1} type="text" name="newF1" placeholder={F1} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>سریال فرم</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewSerialForm(e.target.value)} value={newSerialForm} type="text" name="newSerialForm" placeholder={serial_form} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد شهرستان</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodeShahrestan(e.target.value)} value={newCodeShahrestan} type="text" name="newCodeShahrestan" placeholder={code_shahrestan} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>نام شهرستان</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameShahrestan(e.target.value)} value={newNameShahrestan} type="text" name="newNameShahrestan" placeholder={name_shahrestan} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>

                </tr>
                <br/>
                <hr/>
                <br/>
                <tr>
                    <td className="p-2"><label>کد بخش</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodeBakhsh(e.target.value)} value={newCodeBakhsh} type="text" name="newCodeBakhsh" placeholder={code_bakhsh} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>
                    <td className="p-2"><label>نام بخش</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameBakhsh(e.target.value)} value={newNameBakhsh} type="text" name="newNameBakhsh" placeholder={name_bakhsh} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد دهستان</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodeDehestan(e.target.value)} value={newCodeDehestan} type="text" name="newCodeDehestan" placeholder={code_dehestan} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام دهستان</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameDehestan(e.target.value)} value={newNameDehestan} type="text" name="newNameDehestan" placeholder={name_dehestan} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>کد آبادی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodeAbadi(e.target.value)} value={newCodeAbadi} type="text" name="newCodeAbadi" placeholder={code_abadi} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام آبادی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameAbadi(e.target.value)} value={newNameAbadi} type="text" name="newNameAbadi" placeholder={name_abadi} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد مرکز خدمات</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodeMarkazeKhadamat(e.target.value)} value={newCodeMarkazeKhadamat} type="text" name="newCodeMarkazeKhadamat" placeholder={code_markaze_khadamat} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام مرکز خدمات</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameMarkazeKhadamat(e.target.value)} value={newNameMarkazeKhadamat} type="text" name="newNameMarkazeKhadamat" placeholder={name_markaze_khadamat} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>کد دشت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodeDasht(e.target.value)} value={newCodeDasht} type="text" name="newCodeDasht" placeholder={code_dasht} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام دشت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameDasht(e.target.value)} value={newNameDasht} type="text" name="newNameDasht" placeholder={name_dasht} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>
                    <td className="p-2"><label>شماره قطعه</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewShomareGhete(e.target.value)} value={newShomareGhete} type="text" name="newShomareGhete" placeholder={shomare_ghete} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>مساحت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewMasahat(e.target.value)} value={newMasahat} type="text" name="newMasahat" placeholder={masahat} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <br/>
                <hr/>
                <br/>
                <tr>
                    <td className="p-2"><label>وضعیت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewVaziat(e.target.value)} value={newVaziat} type="text" name="newVaziat" placeholder={vaziat} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>شماره قطعه اصلی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewShomareGheteAsli(e.target.value)} value={newShomareGheteAsli} type="text" name="newShomareGheteAsli" placeholder={shomare_ghete_asli} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نوع منبع آبی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNoeManbaAbi(e.target.value)} value={newNoeManbaAbi} type="text" name="newNoeManbaAbi" placeholder={noe_manba_abi} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام منبع آبی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameManbaAbi(e.target.value)} value={newNameManbaAbi} type="text" name="newNameManbaAbi" placeholder={name_manba_abi} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>نوع بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNoeBahreBardar(e.target.value)} value={newNoeBahreBardar} type="text" name="newNoeBahreBardar" placeholder={noe_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تعداد شرکا 1</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewTedadeShoraka1(e.target.value)} value={newTedadeShoraka1} type="text" name="newTedadeShoraka1" placeholder={tedade_shoraka_1} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تعداد شرکا 2</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewTedadeShoraka2(e.target.value)} value={newTedadeShoraka2} type="text" name="newTedadeShoraka2" placeholder={tedade_shoraka_2} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>وضعیت مالکیت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewVaziatMalekiat(e.target.value)} value={newVaziatMalekiat} type="text" name="newVaziatMalekiat" placeholder={vaziat_malekiat} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>پلاک ثبتی کد بخش</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewPelakeSabtiCodeBakhsh(e.target.value)} value={newPelakeSabtiCodeBakhsh} type="text" name="newPelakeSabtiCodeBakhsh" placeholder={pelake_sabti_code_bakhsh} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>پلاک ثبتی اصلی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewPelakeSabtiAsli(e.target.value)} value={newPelakeSabtiAsli} type="text" name="newPelakeSabtiAsli" placeholder={pelake_sabti_asli} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>پلاک ثبتی فرعی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewPelakeSabtiFari(e.target.value)} value={newPelakeSabtiFari} type="text" name="newPelakeSabtiFari" placeholder={pelake_sabti_fari} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameBahreBardar(e.target.value)} value={newNameBahreBardar} type="text" name="newNameBahreBardar" placeholder={name_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام خانوادگی بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameKhanevadegiBahreBardar(e.target.value)} value={newNameKhanevadegiBahreBardar} type="text" name="newNameKhanevadegiBahreBardar" placeholder={name_khanevadegi_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <br/>
                <hr/>
                <br/>
                <tr>
                    <td className="p-2"><label>نام پدر بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNamePedareBahreBardar(e.target.value)} value={newNamePedareBahreBardar} type="text" name="newNamePedareBahreBardar" placeholder={name_pedar_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد ملی بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodeMeliBahreBardar(e.target.value)} value={newCodeMeliBahreBardar} type="text" name="newCodeMeliBahreBardar" placeholder={code_meli_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تحصیلات بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewTahsilatBahreBardar(e.target.value)} value={newTahsilatBahreBardar} type="text" name="newTahsilatBahreBardar" placeholder={tahsilat_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>رشته تحصیلی بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewReshteTahsiliBahreBardar(e.target.value)} value={newReshteTahsiliBahreBardar} type="text" name="newReshteTahsiliBahreBardar" placeholder={reshte_tahsili_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>تلفن بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewTelefoneBahreBardar(e.target.value)} value={newTelefoneBahreBardar} type="text" name="newTelefoneBahreBardar" placeholder={telefone_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تلفن همراه بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewTelefoneHamrahBahreBardar(e.target.value)} value={newTelefoneHamrahBahreBardar} type="text" name="newTelefoneHamrahBahreBardar" placeholder={telefone_hamrah_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>محصول 1</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewMahsul1(e.target.value)} value={newMahsul1} type="text" name="newMahsul1" placeholder={mahsul_1} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>محصول 2</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewMahsul2(e.target.value)} value={newMahsul2} type="text" name="newMahsul2" placeholder={mahsul_2} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>محصول 3</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewMahsul3(e.target.value)} value={newMahsul3} type="text" name="newMahsul3" placeholder={mahsul_3} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>محصول 4</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewMahsul4(e.target.value)} value={newMahsul4} type="text" name="newMahsul4" placeholder={mahsul_4} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>وضعیت قطعه</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewVaziatGhete(e.target.value)} value={newVaziatGhete} type="text" name="newVaziatGhete" placeholder={vaziat_ghete} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد پستی بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodePostiBahreBardar(e.target.value)} value={newCodePostiBahreBardar} type="text" name="newCodePostiBahreBardar" placeholder={code_posti_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <br/>
                <hr/>
                <br/>
                <tr>
                    <td className="p-2"><label>آدرس بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewAddressBahreBardar(e.target.value)} value={newAddressBahreBardar} type="text" name="newAddressBahreBardar" placeholder={address_bahre_bardar} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نوع مالکیت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNoeMalekiat(e.target.value)} value={newNoeMalekiat} type="text" name="newNoeMalekiat" placeholder={noe_malekiat} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameMalek(e.target.value)} value={newNameMalek} type="text" name="newNameMalek" placeholder={name_malek} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام خانوادگی مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameKhanevadegiMalek(e.target.value)} value={newNameKhanevadegiMalek} type="text" name="newNameKhanevadegiMalek" placeholder={name_khanevadegi_malek} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>نام پدر مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNamePedareMalek(e.target.value)} value={newNamePedareMalek} type="text" name="newNamePedareMalek" placeholder={name_pedar_malek} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد ملی مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodeMeliMalek(e.target.value)} value={newCodeMeliMalek} type="text" name="newCodeMeliMalek" placeholder={code_meli_malek} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تلفن همراه مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewTelefoneHamrahMalek(e.target.value)} value={newTelefoneHamrahMalek} type="text" name="newTelefoneHamrahMalek" placeholder={telefone_hamrah_malek} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>جنسیت مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewJensiatMalek(e.target.value)} value={newJensiatMalek} type="text" name="newJensiatMalek" placeholder={jensiat_malek} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>نام مالک حقوقی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameMalekHoquqi(e.target.value)} value={newNameMalekHoquqi} type="text" name="newNameMalekHoquqi" placeholder={name_malek_hoquqi} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>شماره نقشه</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewShomareNaqshe(e.target.value)} value={newShomareNaqshe} type="text" name="newShomareNaqshe" placeholder={shomare_naqshe} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد محصول</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodeMahsul(e.target.value)} value={newCodeMahsul} type="text" name="newCodeMahsul" placeholder={code_mahsul} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام محصول</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewNameMahsul(e.target.value)} value={newNameMahsul} type="text" name="newNameMahsul" placeholder={name_mahsul} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <br/>
                <hr/>
                <br/>
                <tr>
                    <td className="p-2"><label>gpsX</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewGpsx(e.target.value)} value={newGpsx} type="text" name="newGpsx" placeholder={GPSX} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>gpsY</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewGpsy(e.target.value)} value={newGpsy} type="text" name="newGpsy" placeholder={GPSY} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد استانی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewCodostani(e.target.value)} value={newCodostani} type="text" name="newCodostani" placeholder={codostani} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>Havi</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewHavi(e.target.value)} value={newHavi} type="text" name="newHavi" placeholder={havi} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>XX</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewXx(e.target.value)} value={newXx} type="text" name="newXx" placeholder={xx} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>YY</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewYy(e.target.value)} value={newYy} type="text" name="newYy" placeholder={yy} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/></td>
                    <td className="p-2"><label>Shape Length</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewShapeLength(e.target.value)} value={newShapeLength} type="text" name="newShapeLength" placeholder={Shape_Length} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>Shape Area</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNewShapeArea(e.target.value)} value={newShapeArea} type="text" name="newShapeArea" placeholder={Shape_Area} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
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
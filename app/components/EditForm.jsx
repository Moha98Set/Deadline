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
                <div className="flex">
                    <div className="p-2"><label>OBJECTID</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                        <input onChange={(e) => setNewObjectid(e.target.value)} value={newObjectid} type="text" name="newObjectid" placeholder={OBJECTID} required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>Coddashtf</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                        <input onChange={(e) => setNewCoddashtf(e.target.value)} value={newCoddashtf} type="text" name="newCoddashtf" placeholder="Coddashtf" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>Idcodf</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                        <input onChange={(e) => setNewIdcodf(e.target.value)} value={newIdcodf} type="text" name="newIdcodf" placeholder="Idcodf" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>Codostanif</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                        <input onChange={(e) => setNewCodostanif(e.target.value)} value={newCodostanif} type="text" name="newCodostanif" placeholder="Codostanif" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>Objectid1</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewObjectid1(e.target.value)} value={newObjectid1} type="text" name="newObjectid1" placeholder="Objectid1" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                    <div className="p-2"><label>F1</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewF1(e.target.value)} value={newF1} type="text" name="newF1" placeholder="F1" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                    <div className="p-2"><label>سریال فرم</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewSerialForm(e.target.value)} value={newSerialForm} type="text" name="newSerialForm" placeholder="سریال فرم" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                    <div className="p-2"><label>کد شهرستان</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewCodeShahrestan(e.target.value)} value={newCodeShahrestan} type="text" name="newCodeShahrestan" placeholder="کد شهرستان" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>نام شهرستان</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameShahrestan(e.target.value)} value={newNameShahrestan} type="text" name="newNameShahrestan" placeholder="نام شهرستان" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>

                </div>
                <br/>
                <hr/>
                <br/>
                <div className="flex">
                    <div className="p-2"><label>کد بخش</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewCodeBakhsh(e.target.value)} value={newCodeBakhsh} type="text" name="newCodeBakhsh" placeholder="کد بخش" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                    <div className="p-2"><label>نام بخش</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameBakhsh(e.target.value)} value={newNameBakhsh} type="text" name="newNameBakhsh" placeholder="نام بخش" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                    <div className="p-2"><label>کد دهستان</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewCodeDehestan(e.target.value)} value={newCodeDehestan} type="text" name="newCodeDehestan" placeholder="کد دهستان" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                    <div className="p-2"><label>نام دهستان</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameDehestan(e.target.value)} value={newNameDehestan} type="text" name="newNameDehestan" placeholder="نام دهستان" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>کد آبادی</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                        <input onChange={(e) => setNewCodeAbadi(e.target.value)} value={newCodeAbadi} type="text" name="newCodeAbadi" placeholder="کد آبادی" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>نام آبادی</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                        <input onChange={(e) => setNewNameAbadi(e.target.value)} value={newNameAbadi} type="text" name="newNameAbadi" placeholder="نام آبادی" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                    <div className="p-2"><label>کد مرکز خدمات</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewCodeMarkazeKhadamat(e.target.value)} value={newCodeMarkazeKhadamat} type="text" name="newCodeMarkazeKhadamat" placeholder="کد مرکز خدمات" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                    <div className="p-2"><label>نام مرکز خدمات</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameMarkazeKhadamat(e.target.value)} value={newNameMarkazeKhadamat} type="text" name="newNameMarkazeKhadamat" placeholder="نام مرکز خدمات" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                        </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>کد دشت</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewCodeDasht(e.target.value)} value={newCodeDasht} type="text" name="newCodeDasht" placeholder="کد دشت" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>نام دشت</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameDasht(e.target.value)} value={newNameDasht} type="text" name="newNameDasht" placeholder="نام دشت" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>شماره قطعه</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewShomareGhete(e.target.value)} value={newShomareGhete} type="text" name="newShomareGhete" placeholder="شماره قطعه" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>مساحت</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                        <input onChange={(e) => setNewMasahat(e.target.value)} value={newMasahat} type="text" name="newMasahat" placeholder="مساحت" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="flex">
                    <div className="p-2"><label>وضعیت</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewVaziat(e.target.value)} value={newVaziat} type="text" name="newVaziat" placeholder="وضعیت" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>شماره قطعه اصلی</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewShomareGheteAsli(e.target.value)} value={newShomareGheteAsli} type="text" name="newShomareGheteAsli" placeholder="شماره قطعه اصلی" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>نوع منبع آبی</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNoeManbaAbi(e.target.value)} value={newNoeManbaAbi} type="text" name="newNoeManbaAbi" placeholder="نوع منبع آبی" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>نام منبع آبی</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameManbaAbi(e.target.value)} value={newNameManbaAbi} type="text" name="newNameManbaAbi" placeholder="نام منبع آبی" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>نوع بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNoeBahreBardar(e.target.value)} value={newNoeBahreBardar} type="text" name="newNoeBahreBardar" placeholder="نوع بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>تعداد شرکا 1</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewTedadeShoraka1(e.target.value)} value={newTedadeShoraka1} type="text" name="newTedadeShoraka1" placeholder="تعداد شرکا 1" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>تعداد شرکا 2</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewTedadeShoraka2(e.target.value)} value={newTedadeShoraka2} type="text" name="newTedadeShoraka2" placeholder="تعداد شرکا 2" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>وضعیت مالکیت</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewVaziatMalekiat(e.target.value)} value={newVaziatMalekiat} type="text" name="newVaziatMalekiat" placeholder="وضعیت مالکیت" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>پلاک ثبتی کد بخش</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewPelakeSabtiCodeBakhsh(e.target.value)} value={newPelakeSabtiCodeBakhsh} type="text" name="newPelakeSabtiCodeBakhsh" placeholder="پلاک ثبتی کد بخش" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>پلاک ثبتی اصلی</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewPelakeSabtiAsli(e.target.value)} value={newPelakeSabtiAsli} type="text" name="newPelakeSabtiAsli" placeholder="پلاک ثبتی اصلی" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>پلاک ثبتی فرعی</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewPelakeSabtiFari(e.target.value)} value={newPelakeSabtiFari} type="text" name="newPelakeSabtiFari" placeholder="پلاک ثبتی فرعی" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>نام بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameBahreBardar(e.target.value)} value={newNameBahreBardar} type="text" name="newNameBahreBardar" placeholder="نام بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="flex">
                    <div className="p-2"><label>نام خانوادگی بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameKhanevadegiBahreBardar(e.target.value)} value={newNameKhanevadegiBahreBardar} type="text" name="newNameKhanevadegiBahreBardar" placeholder="نام خانوادگی بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>نام پد بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNamePedareBahreBardar(e.target.value)} value={newNamePedareBahreBardar} type="text" name="newNamePedareBahreBardar" placeholder="نام پد بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                   </div>
                    <div className="p-2"><label>کد ملی بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewCodeMeliBahreBardar(e.target.value)} value={newCodeMeliBahreBardar} type="text" name="newCodeMeliBahreBardar" placeholder="کد ملی بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>تحصیلات بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewTahsilatBahreBardar(e.target.value)} value={newTahsilatBahreBardar} type="text" name="newTahsilatBahreBardar" placeholder="تحصیلات بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>رشته تحصیلی بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewReshteTahsiliBahreBardar(e.target.value)} value={newReshteTahsiliBahreBardar} type="text" name="newReshteTahsiliBahreBardar" placeholder="رشته تحصیلی بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>تلفن بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewTelefoneBahreBardar(e.target.value)} value={newTelefoneBahreBardar} type="text" name="newTelefoneBahreBardar" placeholder="تلفن بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>تلفن همراه بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewTelefoneHamrahBahreBardar(e.target.value)} value={newTelefoneHamrahBahreBardar} type="text" name="newTelefoneHamrahBahreBardar" placeholder="تلفن همراه بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>محصول 1</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewMahsul1(e.target.value)} value={newMahsul1} type="text" name="newMahsul1" placeholder="محصول 1" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>محصول 2</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewMahsul2(e.target.value)} value={newMahsul2} type="text" name="newMahsul2" placeholder="محصول 2" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>محصول 3</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewMahsul3(e.target.value)} value={newMahsul3} type="text" name="newMahsul3" placeholder="محصول 3" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>محصول 4</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewMahsul4(e.target.value)} value={newMahsul4} type="text" name="newMahsul4" placeholder="محصول 4" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>وضعیت قطعه</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewVaziatGhete(e.target.value)} value={newVaziatGhete} type="text" name="newVaziatGhete" placeholder="وضعیت قطعه" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="flex">
                    <div className="p-2"><label>کد پستی بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewCodePostiBahreBardar(e.target.value)} value={newCodePostiBahreBardar} type="text" name="newCodePostiBahreBardar" placeholder="کد پستی بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>آدرس بهره بردار</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewAddressBahreBardar(e.target.value)} value={newAddressBahreBardar} type="text" name="newAddressBahreBardar" placeholder="آدرس بهره بردار" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>نوع مالکیت</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNoeMalekiat(e.target.value)} value={newNoeMalekiat} type="text" name="newNoeMalekiat" placeholder="نوع مالکیت" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>نام مالک</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameMalek(e.target.value)} value={newNameMalek} type="text" name="newNameMalek" placeholder="نام مالک" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>نام خانوادگی مالک</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameKhanevadegiMalek(e.target.value)} value={newNameKhanevadegiMalek} type="text" name="newNameKhanevadegiMalek" placeholder="نام خانوادگی مالک" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>نام پدر مالک</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNamePedareMalek(e.target.value)} value={newNamePedareMalek} type="text" name="newNamePedareMalek" placeholder="نام پدر مالک" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>کد ملی مالک</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewCodeMeliMalek(e.target.value)} value={newCodeMeliMalek} type="text" name="newCodeMeliMalek" placeholder="کد ملی مالک" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>تلفن همراه مالک</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewTelefoneHamrahMalek(e.target.value)} value={newTelefoneHamrahMalek} type="text" name="newTelefoneHamrahMalek" placeholder="تلفن همراه مالک" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>جنسیت مالک</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewJensiatMalek(e.target.value)} value={newJensiatMalek} type="text" name="newJensiatMalek" placeholder="جنسیت مالک" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>نام مالک حقوقی</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameMalekHoquqi(e.target.value)} value={newNameMalekHoquqi} type="text" name="newNameMalekHoquqi" placeholder="نام مالک حقوقی" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>شماره نقشه</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewShomareNaqshe(e.target.value)} value={newShomareNaqshe} type="text" name="newShomareNaqshe" placeholder="شماره نقشه" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>کد محصول</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewCodeMahsul(e.target.value)} value={newCodeMahsul} type="text" name="newCodeMahsul" placeholder="کد محصول" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="flex">
                    <div className="p-2"><label>نام محصول</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewNameMahsul(e.target.value)} value={newNameMahsul} type="text" name="newNameMahsul" placeholder="نام محصول" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>Gpsx</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewGpsx(e.target.value)} value={newGpsx} type="text" name="newGpsx" placeholder="Gpsx" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>Gpsy</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewGpsy(e.target.value)} value={newGpsy} type="text" name="newGpsy" placeholder="Gpsy" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>کد استانی</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewCodostani(e.target.value)} value={newCodostani} type="text" name="newCodostani" placeholder="کد استانی" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>Havi</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewHavi(e.target.value)} value={newHavi} type="text" name="newHavi" placeholder="Havi" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>Xx</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewXx(e.target.value)} value={newXx} type="text" name="newXx" placeholder="Xx" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>Yy</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewYy(e.target.value)} value={newYy} type="text" name="newYy" placeholder="Yy" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-2"><label>Shape Length</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewShapeLength(e.target.value)} value={newShapeLength} type="text" name="newShapeLength" placeholder="Shape Length" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                    <div className="p-2"><label>Shape Area</label></div>
                    <div className="p-2"><label>:</label></div>
                    <div className="p-2">
                    <input onChange={(e) => setNewShapeArea(e.target.value)} value={newShapeArea} type="text" name="newShapeArea" placeholder="Shape Area" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </div>
                </div>
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
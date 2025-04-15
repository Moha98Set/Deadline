'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Insert(){ 
    const [OBJECTID, setOBJECTID] = useState();
    const [coddashtf, setCoddashtf] = useState();
    const [idcodf, setIdcodf] = useState();
    const [codostanif, setCodostanif] = useState();
    const [OBJECTID_1, setOBJECTID_1] = useState();
    const [F1, setF1] = useState();
    const [serialForm, setSerialForm] = useState();
    const [codeShahrestan, setCodeShahrestan] = useState();
    const [nameShahrestan, setNameShahrestan] = useState();
    const [codeBakhsh, setCodeBakhsh] = useState();
    const [nameBakhsh, setNameBakhsh] = useState();
    const [codeDehestan, setCodeDehestan] = useState();
    const [nameDehestan, setNameDehestan] = useState();
    const [codeAbadi, setCodeAbadi] = useState();
    const [nameAbadi, setNameAbadi] = useState();
    const [codeMarkazeKhadamat, setCodeMarkazeKhadamat] = useState();
    const [nameMarkazeKhadamat, setNameMarkazeKhadamat] = useState();
    const [codeDasht, setCodeDasht] = useState();
    const [nameDasht, setNameDasht] = useState();
    const [shomareGhete, setShomareGhete] = useState();
    const [masahat, setMasahat] = useState();
    const [vaziat, setVaziat] = useState();
    const [shomareGheteAsli, setShomareGheteAsli] = useState();
    const [noeManbaAbi, setNoeManbaAbi] = useState();
    const [nameManbaAbi, setNameManbaAbi] = useState();
    const [noeBahreBardar, setNoeBahreBardar] = useState();
    const [tedadeShoraka1, setTedadeShoraka1] = useState();
    const [tedadeShoraka2, setTedadeShoraka2] = useState();
    const [vaziatMalekiat, setVaziatMalekiat] = useState();
    const [pelakeSabtiCodeBakhsh, setPelakeSabtiCodeBakhsh] = useState();
    const [pelakeSabtiAsli, setPelakeSabtiAsli] = useState();
    const [pelakeSabtiFari, setPelakeSabtiFari] = useState();
    const [nameBahreBardar, setNameBahreBardar] = useState();
    const [nameKhanevadegiBahreBardar, setNameKhanevadegiBahreBardar] = useState();
    const [namePedarBahreBardar, setNamePedarBahreBardar] = useState();
    const [codeMeliBahreBardar, setCodeMeliBahreBardar] = useState();
    const [tahsilatBahreBardar, setTahsilatBahreBardar] = useState();
    const [reshteTahsiliBahreBardar, setReshteTahsiliBahreBardar] = useState();
    const [telefoneBahreBardar, setTelefoneBahreBardar] = useState();
    const [telefoneHamrahBahreBardar, setTelefoneHamrahBahreBardar] = useState();
    const [mahsul1, setMahsul1] = useState();
    const [mahsul2, setMahsul2] = useState();
    const [mahsul3, setMahsul3] = useState();
    const [mahsul4, setMahsul4] = useState();
    const [vaziatGhete, setVaziatGhete] = useState();
    const [codePostiBahreBardar, setCodePostiBahreBardar] = useState();
    const [addressBahreBardar, setAddressBahreBardar] = useState();
    const [noeMalekiat, setNoeMalekiat] = useState();
    const [nameMalek, setNameMalek] = useState();
    const [nameKhanevadegiMalek, setNameKhanevadegiMalek] = useState();
    const [namePedareMalek, setNamePedareMalek] = useState();
    const [codeMeliMalek, setCodeMeliMalek] = useState();
    const [telefoneHamrahMalek, setTelefoneHamrahMalek] = useState();
    const [jensiatMalek, setJensiatMalek] = useState();
    const [nameMalekHoquqi, setNameMalekHoquqi] = useState();
    const [shomareNaqshe, setShomareNaqshe] = useState();
    const [codeMahsul, setCodeMahsul] = useState();
    const [nameMahsul, setNameMahsul] = useState();
    const [gpsx, setGpsx] = useState();
    const [gpsy, setGpsy] = useState();
    const [codostani, setCodostani] = useState();
    const [havi, setHavi] = useState();
    const [xx, setXx] = useState();
    const [yy, setYy] = useState();
    const [shapeLength, setShapeLength] = useState();
    const [shapeArea, setShapeArea] = useState();
    const [coordinates, setCoordinates] = useState();

    const router = useRouter()

    const sanitizeData = (data) => {
        return Object.fromEntries(
          Object.entries(data).map(([key, value]) => [key, String(value ?? '')])
        );
      };
      

    const formData = {
        OBJECTID,
        coddashtf,
        idcodf,
        codostanif,
        OBJECTID_1,
        F1,
        serialForm,
        codeShahrestan,
        nameShahrestan,
        codeBakhsh,
        nameBakhsh,
        codeDehestan,
        nameDehestan,
        codeAbadi,
        nameAbadi,
        codeMarkazeKhadamat,
        nameMarkazeKhadamat,
        codeDasht,
        nameDasht,
        shomareGhete,
        masahat,
        vaziat,
        shomareGheteAsli,
        noeManbaAbi,
        nameManbaAbi,
        noeBahreBardar,
        tedadeShoraka1,
        tedadeShoraka2,
        vaziatMalekiat,
        pelakeSabtiCodeBakhsh,
        pelakeSabtiAsli,
        pelakeSabtiFari,
        nameBahreBardar,
        nameKhanevadegiBahreBardar,
        namePedarBahreBardar,
        codeMeliBahreBardar,
        tahsilatBahreBardar,
        reshteTahsiliBahreBardar,
        telefoneBahreBardar,
        telefoneHamrahBahreBardar,
        mahsul1,
        mahsul2,
        mahsul3,
        mahsul4,
        vaziatGhete,
        codePostiBahreBardar,
        addressBahreBardar,
        noeMalekiat,
        nameMalek,
        nameKhanevadegiMalek,
        namePedareMalek,
        codeMeliMalek,
        telefoneHamrahMalek,
        jensiatMalek,
        nameMalekHoquqi,
        shomareNaqshe,
        codeMahsul,
        nameMahsul,
        gpsx,
        gpsy,
        codostani,
        havi,
        xx,
        yy,
        shapeLength,
        shapeArea,
        coordinates
      };

    const cleanedData = sanitizeData(formData);

    const handlerSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const res = await fetch('http://localhost:3000/api/data', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cleanedData)
            });
    
            if (!res.ok) {
                throw new Error('Failed to create Data');
            }
    
            console.log('Data created successfully');
            router.push('/');
        } catch (error) {
            console.log('Error:', error);
        }
    };
    
    return (
    <>
    <div>
    <form onSubmit={handlerSubmit} method="POST"
                  className="w-fit mx-auto bg-gray-50 border-gray-100 rounded-md p-5 font-diruz text-lg">

                <th><h1 className="text-2xl p-2">مشخصات فردی</h1></th>
                <tr>
                    <td className="p-2"><label>OBJECTID</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setOBJECTID(e.target.value)} type="text" name="Objectid" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>
                    <td className="p-2"><label>Coddashtf</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCoddashtf(e.target.value)} type="text" name="Coddashtf" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>Idcodf</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setIdcodf(e.target.value)} type="text" name="Idcodf" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>
                    <td className="p-2"><label>Codostanif</label></td>
                    <td className=""><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodostanif(e.target.value)} type="text" name="Codostanif" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>Objectid1</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setOBJECTID_1(e.target.value)} type="text" name="Objectid1" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>F1</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setF1(e.target.value)} type="text" name="F1" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>سریال فرم</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setSerialForm(e.target.value)} type="text" name="SerialForm" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد شهرستان</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodeShahrestan(e.target.value)} type="text" name="CodeShahrestan" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>نام شهرستان</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameShahrestan(e.target.value)} type="text" name="NameShahrestan" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>

                </tr>
                <br/>
                <hr/>
                <br/>
                <tr>
                    <td className="p-2"><label>کد بخش</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodeBakhsh(e.target.value)} type="text" name="CodeBakhsh" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>
                    <td className="p-2"><label>نام بخش</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameBakhsh(e.target.value)} type="text" name="NameBakhsh" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد دهستان</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodeDehestan(e.target.value)} type="text" name="CodeDehestan" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام دهستان</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameDehestan(e.target.value)} type="text" name="NameDehestan" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>کد آبادی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodeAbadi(e.target.value)} type="text" name="CodeAbadi" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام آبادی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameAbadi(e.target.value)} type="text" name="NameAbadi" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد مرکز خدمات</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodeMarkazeKhadamat(e.target.value)} type="text" name="CodeMarkazeKhadamat" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام مرکز خدمات</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameMarkazeKhadamat(e.target.value)} type="text" name="NameMarkazeKhadamat" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>کد دشت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodeDasht(e.target.value)} type="text" name="CodeDasht" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام دشت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameDasht(e.target.value)} type="text" name="NameDasht" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>    
                    </td>
                    <td className="p-2"><label>شماره قطعه</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setShomareGhete(e.target.value)} type="text" name="ShomareGhete" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>مساحت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setMasahat(e.target.value)} type="text" name="Masahat" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <br/>
                <hr/>
                <br/>
                <tr>
                    <td className="p-2"><label>وضعیت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setVaziat(e.target.value)} type="text" name="Vaziat" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>شماره قطعه اصلی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setShomareGheteAsli(e.target.value)} type="text" name="ShomareGheteAsli" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نوع منبع آبی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNoeManbaAbi(e.target.value)} type="text" name="NoeManbaAbi" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام منبع آبی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameManbaAbi(e.target.value)} type="text" name="NameManbaAbi" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>نوع بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNoeBahreBardar(e.target.value)} type="text" name="NoeBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تعداد شرکا 1</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setTedadeShoraka1(e.target.value)} type="text" name="TedadeShoraka1" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تعداد شرکا 2</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setTedadeShoraka2(e.target.value)} type="text" name="TedadeShoraka2" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>وضعیت مالکیت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setVaziatMalekiat(e.target.value)} type="text" name="VaziatMalekiat" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>پلاک ثبتی کد بخش</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setPelakeSabtiCodeBakhsh(e.target.value)} type="text" name="PelakeSabtiCodeBakhsh" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>پلاک ثبتی اصلی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setPelakeSabtiAsli(e.target.value)} type="text" name="PelakeSabtiAsli" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>پلاک ثبتی فرعی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setPelakeSabtiFari(e.target.value)} type="text" name="PelakeSabtiFari" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameBahreBardar(e.target.value)} type="text" name="NameBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام خانوادگی بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameKhanevadegiBahreBardar(e.target.value)} type="text" name="NameKhanevadegiBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <br/>
                <hr/>
                <br/>
                <tr>
                    <td className="p-2"><label>نام پدر بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNamePedarBahreBardar(e.target.value)} type="text" name="NamePedareBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد ملی بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodeMeliBahreBardar(e.target.value)} type="text" name="CodeMeliBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تحصیلات بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setTahsilatBahreBardar(e.target.value)} type="text" name="TahsilatBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>رشته تحصیلی بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setReshteTahsiliBahreBardar(e.target.value)} type="text" name="ReshteTahsiliBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>تلفن بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setTelefoneBahreBardar(e.target.value)} type="text" name="TelefoneBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تلفن همراه بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setTelefoneHamrahBahreBardar(e.target.value)} type="text" name="TelefoneHamrahBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>محصول 1</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setMahsul1(e.target.value)} type="text" name="Mahsul1" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>محصول 2</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setMahsul2(e.target.value)} type="text" name="Mahsul2" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>محصول 3</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setMahsul3(e.target.value)} type="text" name="Mahsul3" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>محصول 4</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setMahsul4(e.target.value)} type="text" name="Mahsul4" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>وضعیت قطعه</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setVaziatGhete(e.target.value)} type="text" name="VaziatGhete" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد پستی بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodePostiBahreBardar(e.target.value)} type="text" name="CodePostiBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <br/>
                <hr/>
                <br/>
                <tr>
                    <td className="p-2"><label>آدرس بهره بردار</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setAddressBahreBardar(e.target.value)} type="text" name="AddressBahreBardar" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نوع مالکیت</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNoeMalekiat(e.target.value)} type="text" name="NoeMalekiat" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameMalek(e.target.value)} type="text" name="NameMalek" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام خانوادگی مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameKhanevadegiMalek(e.target.value)} type="text" name="NameKhanevadegiMalek" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>نام پدر مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNamePedareMalek(e.target.value)} type="text" name="NamePedareMalek" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد ملی مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodeMeliMalek(e.target.value)} type="text" name="CodeMeliMalek" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>تلفن همراه مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setTelefoneHamrahMalek(e.target.value)} type="text" name="TelefoneHamrahMalek" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>جنسیت مالک</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setJensiatMalek(e.target.value)} type="text" name="JensiatMalek" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>نام مالک حقوقی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameMalekHoquqi(e.target.value)} type="text" name="NameMalekHoquqi"  required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>شماره نقشه</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setShomareNaqshe(e.target.value)} type="text" name="ShomareNaqshe" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد محصول</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodeMahsul(e.target.value)} type="text" name="CodeMahsul" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>نام محصول</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setNameMahsul(e.target.value)} type="text" name="NameMahsul"  required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <br/>
                <hr/>
                <br/>
                <tr>
                    <td className="p-2"><label>gpsX</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setGpsx(e.target.value)} type="text" name="Gpsx" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>gpsY</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setGpsy(e.target.value)} type="text" name="Gpsy" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>کد استانی</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setCodostani(e.target.value)} type="text" name="Codostani" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>Havi</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setHavi(e.target.value)} type="text" name="Havi" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>XX</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setXx(e.target.value)} type="text" name="Xx" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>YY</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setYy(e.target.value)} type="text" name="Yy" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/></td>
                    <td className="p-2"><label>Shape Length</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setShapeLength(e.target.value)} type="text" name="ShapeLength" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2"><label>Shape Area</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setShapeArea(e.target.value)} type="text" name="ShapeArea" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>
                    <td className="p-2"><label>Coordinates</label></td>
                    <td className="p-2"><label>:</label></td>
                    <td className="p-2">
                    <input onChange={(e) => setShapeArea(e.target.value)} value='0' type="text" name="ShapeArea" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-md"/>
                    </td>                   
                </tr>
                <br/>

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
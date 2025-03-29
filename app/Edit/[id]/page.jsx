import EditForm from "@/app/components/EditForm";

const getDataById = async (id) =>{
    try {
        const res = await fetch(`http://localhost:3000/api/data/${id}`, {cache: 'no-store'})

        if(!res.ok){
            throw new Error('Failed to fetch Data.')
        }
        console.log(res)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export default async function Edit({ params }){    
    const { id } = params;
    const { data } = await getDataById(id)
    const {
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
    } = data
    
    console.log('Data',data)
    return (
        <EditForm id={id}
        OBJECTID={OBJECTID}
        coddashtf={coddashtf}
        idcodf={idcodf}
        codostanif={codostanif}
        OBJECTID_1={OBJECTID_1}
        F1={F1}
        serial_form={serial_form}
        code_shahrestan={code_shahrestan}
        name_shahrestan={name_shahrestan}
        code_bakhsh={code_bakhsh}
        name_bakhsh={name_bakhsh}
        code_dehestan={code_dehestan}
        name_dehestan={name_dehestan}
        code_abadi={code_abadi}
        name_abadi={name_abadi}
        code_markaze_khadamat={code_markaze_khadamat}
        name_markaze_khadamat={name_markaze_khadamat}
        code_dasht={code_dasht}
        name_dasht={name_dasht}
        shomare_ghete={shomare_ghete}
        masahat={masahat}
        vaziat={vaziat}
        shomare_ghete_asli={shomare_ghete_asli}
        noe_manba_abi={noe_manba_abi}
        name_manba_abi={name_manba_abi}
        noe_bahre_bardar={noe_bahre_bardar}
        tedade_shoraka_1={tedade_shoraka_1}
        tedade_shoraka_2={tedade_shoraka_2}
        vaziat_malekiat={vaziat}
        pelake_sabti_code_bakhsh={pelake_sabti_code_bakhsh}
        pelake_sabti_asli={pelake_sabti_asli}
        pelake_sabti_fari={pelake_sabti_fari}
        name_bahre_bardar={name_bahre_bardar}
        name_khanevadegi_bahre_bardar={name_khanevadegi_bahre_bardar}
        name_pedar_bahre_bardar={name_pedar_bahre_bardar}
        code_meli_bahre_bardar={code_meli_bahre_bardar}
        tahsilat_bahre_bardar={tahsilat_bahre_bardar}
        reshte_tahsili_bahre_bardar={reshte_tahsili_bahre_bardar}
        telefone_bahre_bardar={telefone_bahre_bardar}
        telefone_hamrah_bahre_bardar={telefone_hamrah_bahre_bardar}
        mahsul_1={mahsul_1}
        mahsul_2={mahsul_2}
        mahsul_3={mahsul_3}
        mahsul_4={mahsul_4}
        vaziat_ghete={vaziat_ghete}
        code_posti_bahre_bardar={code_posti_bahre_bardar}
        address_bahre_bardar={address_bahre_bardar}
        noe_malekiat={noe_malekiat}
        name_malek={name_malek}
        name_khanevadegi_malek={name_khanevadegi_malek}
        name_pedar_malek={name_pedar_malek}
        code_meli_malek={code_meli_malek}
        telefone_hamrah_malek={telefone_hamrah_malek}
        jensiat_malek={jensiat_malek}
        name_malek_hoquqi={name_malek_hoquqi}
        shomare_naqshe={shomare_naqshe}
        code_mahsul={code_mahsul}
        name_mahsul={name_mahsul}
        GPSX={GPSX}
        GPSY={GPSY}
        codostani={codostani}
        havi={havi}
        xx={xx}
        yy={yy}
        Shape_Length={Shape_Length}
        Shape_Area={Shape_Area}
        />
    )
}
import connectMongoDb from "@/libs/mongodb";
import Data from "@/model/data";
import {NextResponse} from "next/server";

export async function POST(request){
    try {
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
        } = await request.json()
        await connectMongoDb()
        await Data.create({
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
        })
        return NextResponse.json({message: "Successfully created"}, { status: 201 })

    } catch (error) {
        console.error("Error in POST route:", error.message);
        return NextResponse.json(
            { error: "Internal Server Error", details: error.message },
            { status: 500 }
        );
    }
}

export async function GET(req) {
    await connectMongoDb();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1; // Default to page 1
    const limit = 10; // Number of records per page
    const skip = (page - 1) * limit; // Calculate how many records to skip

    const data = await Data.find().skip(skip).limit(limit);
    
    return NextResponse.json({ data, page });
}


export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb()
    await Data.findOneAndDelete(id)
    return NextResponse.json({message:"Successfully deleted"}, {status: 200})
}
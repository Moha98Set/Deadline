import { NextResponse } from "next/server";
import clientPromise from "@/libs/second";
import { ObjectId } from "mongodb";

export async function PUT(request, context) {
  try {
    const { id } = context.params;
    const body = await request.json();

    // آماده‌سازی فیلدها برای آپدیت
    const updateFields = {
      OBJECTID: body.newObjectid,
      coddashtf: body.newCoddashtf,
      idcodf: body.newIdcodf,
      codostanif: body.newCodostanif,
      OBJECTID_1: body.newObjectid1,
      F1: body.newF1,
      serial_form: body.newSerialForm,
      code_shahrestan: body.newCodeShahrestan,
      name_shahrestan: body.newNameShahrestan,
      code_bakhsh: body.newCodeBakhsh,
      name_bakhsh: body.newNameBakhsh,
      code_dehestan: body.newCodeDehestan,
      name_dehestan: body.newNameDehestan,
      code_abadi: body.newCodeAbadi,
      name_abadi: body.newNameAbadi,
      code_markaze_khadamat: body.newCodeMarkazeKhadamat,
      name_markaze_khadamat: body.newNameMarkazeKhadamat,
      code_dasht: body.newCodeDasht,
      name_dasht: body.newNameDasht,
      shomare_ghete: body.newShomareGhete,
      masahat: body.newMasahat,
      vaziat: body.newVaziat,
      shomare_ghete_asli: body.newShomareGheteAsli,
      noe_manba_abi: body.newNoeManbaAbi,
      name_manba_abi: body.newNameManbaAbi,
      noe_bahre_bardar: body.newNoeBahreBardar,
      tedade_shoraka_1: body.newTedadeShoraka1,
      tedade_shoraka_2: body.newTedadeShoraka2,
      vaziat_malekiat: body.newVaziatMalekiat,
      pelake_sabti_code_bakhsh: body.newPelakeSabtiCodeBakhsh,
      pelake_sabti_asli: body.newPelakeSabtiAsli,
      pelake_sabti_fari: body.newPelakeSabtiFari,
      name_bahre_bardar: body.newNameBahreBardar,
      name_khanevadegi_bahre_bardar: body.newNameKhanevadegiBahreBardar,
      name_pedar_bahre_bardar: body.newNamePedareBahreBardar,
      code_meli_bahre_bardar: body.newCodeMeliBahreBardar,
      tahsilat_bahre_bardar: body.newTahsilatBahreBardar,
      reshte_tahsili_bahre_bardar: body.newReshteTahsiliBahreBardar,
      telefone_bahre_bardar: body.newTelefoneBahreBardar,
      telefone_hamrah_bahre_bardar: body.newTelefoneHamrahBahreBardar,
      mahsul_1: body.newMahsul1,
      mahsul_2: body.newMahsul2,
      mahsul_3: body.newMahsul3,
      mahsul_4: body.newMahsul4,
      vaziat_ghete: body.newVaziatGhete,
      code_posti_bahre_bardar: body.newCodePostiBahreBardar,
      address_bahre_bardar: body.newAddressBahreBardar,
      noe_malekiat: body.newNoeMalekiat,
      name_malek: body.newNameMalek,
      name_khanevadegi_malek: body.newNameKhanevadegiMalek,
      name_pedar_malek: body.newNamePedareMalek,
      code_meli_malek: body.newCodeMeliMalek,
      telefone_hamrah_malek: body.newTelefoneHamrahMalek,
      jensiat_malek: body.newJensiatMalek,
      name_malek_hoquqi: body.newNameMalekHoquqi,
      shomare_naqshe: body.newShomareNaqshe,
      code_mahsul: body.newCodeMahsul,
      name_mahsul: body.newNameMahsul,
      GPSX: body.newGpsx,
      GPSY: body.newGpsy,
      codostani: body.newCodostani,
      havi: body.newHavi,
      xx: body.newXx,
      yy: body.newYy,
      Shape_Length: body.newShapeLength,
      Shape_Area: body.newShapeArea,
    };

    const client = await clientPromise;
    const db = client.db("connect");
    const collection = db.collection("viramap");

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Data updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}



export async function GET(request, {params}) {
  try {
    const { id } = params;

    const client = await clientPromise;
    const db = client.db("connect");
    const collection = db.collection("viramap");

    const data = await collection.findOne({ _id: new ObjectId(id) });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


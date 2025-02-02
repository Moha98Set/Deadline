import connectMongoDb from "@/libs/mongodb";
import Data from "@/model/data";
import {NextResponse} from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {
        newName: name,
        newAge: age,
        newFrom: from,
        newNationalcode: nationalcode,
        newPhone: phone,
        newVehicle: vehicle,
        newModel: model,
        newFuel: fuel,
        newEmail: email,
        newOwner: owner,
        newOwnercode: ownercode,
        newProvince: province,
        newCity: city,
        newAddress: address,
        newStaticphone: staticphone,
        newLat: lat,
        newLong: long,
        newProduct: product,
        newTypsof: typsof,
        newPartners: partners,
        newWatersource: watersource
    } = await request.json()
    await connectMongoDb()
    await Data.findByIdAndUpdate(id,{
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
    return NextResponse.json({message: 'Data updated successfully'}, {status: 200})
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDb()
    const data = await Data.findOne({_id: id})
    return NextResponse.json({data}, {status: 200})
}
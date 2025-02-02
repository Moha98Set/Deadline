import connectMongoDb from "@/libs/mongodb";
import Data from "@/model/data";
import {NextResponse} from "next/server";

export async function POST(request){
    try {
        const {
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
        } = await request.json()
        await connectMongoDb()
        await Data.create({
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
        return NextResponse.json({message: "Successfully created"}, { status: 201 })

    } catch (error) {
        console.error("Error in POST route:", error.message);
        return NextResponse.json(
            { error: "Internal Server Error", details: error.message },
            { status: 500 }
        );
    }
}

export async function GET(){
    await connectMongoDb()
    const data = await Data.find()
    return NextResponse.json({data})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb()
    await Data.findOneAndDelete(id)
    return NextResponse.json({message:"Successfully deleted"}, {status: 200})
}
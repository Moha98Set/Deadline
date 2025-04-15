import { NextResponse } from "next/server";
import clientPromise from "@/libs/second";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("connect");
    const collection = db.collection("viramap");

    const data = await collection.find().toArray().limit(10)

    return NextResponse.json(data);
  } catch (error) {
    console.error("خطا:", error);
    return NextResponse.json({ error: "خطای داخلی سرور" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import clientPromise from "@/libs/second";

export async function GET(req) {
    try {
      const { searchParams } = new URL(req.url);
      const page = parseInt(searchParams.get("page")) || 1;
      const limit = 10;
      const skip = (page - 1) * limit;
  
      const client = await clientPromise;
      const db = client.db("mqtt_data");
      const collection = db.collection("device_responses");
  
      const data = await collection.find().skip(skip).limit(limit).toArray();
  
      const total = await collection.countDocuments();
  
      return NextResponse.json({ data, page, total });
    } catch (error) {
      console.error("GET error:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
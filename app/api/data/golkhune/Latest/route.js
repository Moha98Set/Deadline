import { NextResponse } from "next/server";
import clientPromise from "@/libs/second";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const serialNumber = searchParams.get("serial_number");

    if (!serialNumber) {
      return NextResponse.json({ error: "serial_number is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("mqtt_data");
    const collection = db.collection("device_responses");

    const latestData = await collection.findOne(
      { serial_number: serialNumber },
      {
        sort: { timestamp_utc: -1 },
        projection: {
          _id: 0,
          serial_number: 1,
          timestamp_utc: 1,
          timestamp_shamsi: 1,
          TEMP: 1,
          HUM1: 1,
        },
      }
    );

    if (!latestData) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }

    return NextResponse.json({ data: latestData });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

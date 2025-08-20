/*import { NextResponse } from "next/server";
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

    const results = [];

    // برای ۷ روز گذشته (۰ یعنی امروز، 1 یعنی دیروز، ...)
    for (let i = 0; i < 7; i++) {
      const skipCount = i * 288;

      const record = await collection
        .find({ serial_number: serialNumber })
        .sort({ timestamp_utc: -1 })
        .skip(skipCount)
        .limit(1)
        .toArray();

      if (record.length > 0) {
        results.push(record[0]);
      }
    }

    return NextResponse.json({ data: results });

  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}*/
import { NextResponse } from "next/server";
import clientPromise from "@/libs/second";
import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });

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

    const results = [];

    for (let i = 0; i < 7; i++) {
      const skipCount = i * 288;

      const records = await collection
        .find({ serial_number: serialNumber })
        .sort({ timestamp_utc: -1 })
        .skip(skipCount)
        .limit(288)
        .toArray();

      if (records.length === 0) continue;

      const temps = records
        .map(r => parseFloat(r.TEMP))
        .filter(t => !isNaN(t));

      if (temps.length === 0) continue;

      const average = temps.reduce((a, b) => a + b, 0) / temps.length;
      const max = Math.max(...temps);
      const min = Math.min(...temps);

      const timestamp = records[0].timestamp_shamsi;
      const dayName = timestamp
        ? moment(timestamp.split(' ')[0], 'jYYYY-jMM-jDD').format('dddd')
        : 'نامشخص';

      results.push({
        name: dayName, // ← نام روز شمسی مثل "چهارشنبه"
        میانگین: Number(average.toFixed(2)),
        حداکثر: max,
        حداقل: min
      });
    }

    return NextResponse.json({ data: results });

  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


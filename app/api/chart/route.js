import clientPromise from "@/libs/second";
import { NextResponse } from "next/server";
import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern" });

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const serial_number = searchParams.get("serial_number");

    if (!serial_number) {
      return NextResponse.json({ error: "serial_number is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("mqtt_data");
    const collection = db.collection("device_responses");

    const records = await collection.find({ serial_number }).toArray();

    const dailyTemps = {};

    for (const record of records) {
      const dateStr = record.timestamp_shamsi?.split(" ")[0];
      if (!dateStr) continue;

      const tempFields = ["TEMP", "TEMP1", "TEMP2", "TEMP3", "TEMP4"];
      const temps = tempFields
        .map(f => record[f])
        .filter(v => v !== "NC" && v !== undefined)
        .map(v => parseFloat(v))
        .filter(v => !isNaN(v));

      if (!temps.length) continue;

      if (!dailyTemps[dateStr]) dailyTemps[dateStr] = [];
      dailyTemps[dateStr].push(...temps);
    }

    const last30Days = [];
    for (let i = 0; i < 30; i++) {
      const day = moment().subtract(i, "days").format("jYYYY-jMM-jDD");
      last30Days.push(day);
    }
    last30Days.reverse();

    const result = last30Days.map(day => {
      const temps = dailyTemps[day];
      if (!temps || temps.length === 0) {
        return { day, min: 0, max: 0, avg: 0 };
      }
      return {
        day,
        min: Math.min(...temps),
        max: Math.max(...temps),
        avg: parseFloat((temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(2))
      };
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("Error in /api/chart:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// app/api/search/route.js

import { NextResponse } from "next/server";
import connectMongoDb from "@/libs/mongodb";
import Data from "@/model/data"; // اسم مدل‌ت رو تنظیم کن

export async function POST(request) {
  try {
    const body = await request.json();
    const { phone } = body;

    if (!phone) {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
    }

    await connectMongoDb();

    // جستجو برای تمام رکوردهایی که شماره موبایل تطابق دارند
    const results = await Data.find({ telefone_bahre_bardar: { $regex: phone, $options: "i" } }).lean();

    if (!results.length) {
      return NextResponse.json({ message: "No matching records found" }, { status: 404 });
    }

    return NextResponse.json({ results }, { status: 200 });

  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

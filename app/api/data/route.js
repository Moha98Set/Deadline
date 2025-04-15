import { NextResponse } from "next/server";
import clientPromise from "@/libs/second";

// POST: اضافه کردن یک رکورد جدید
export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("connect");
    const collection = db.collection("viramap");

    await collection.insertOne(body);

    return NextResponse.json({ message: "Successfully created" }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// GET: دریافت داده با صفحه‌بندی
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const client = await clientPromise;
    const db = client.db("connect");
    const collection = db.collection("viramap");

    const data = await collection.find().skip(94320).limit(limit).toArray();

    return NextResponse.json({ data, page });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// DELETE: حذف بر اساس آیدی
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("connect");
    const collection = db.collection("viramap");

    const { ObjectId } = require("mongodb");
    const deleted = await collection.findOneAndDelete({ _id: new ObjectId(id) });

    if (!deleted.value) {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Deleted successfully", deleted: deleted.value });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

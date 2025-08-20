import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = "connect"; // اینو با اسم دیتابیس واقعی‌ات جایگزین کن

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const polygonCoords = body.polygonCoords;

    console.log("📦 Received data for ID:", id);
    console.log("🧭 New coordinates:", polygonCoords);

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("viramap"); // اسم کلکشن واقعی‌ات رو بذار اینجا

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { coordinates: polygonCoords } }
    );

    if (result.matchedCount === 0) {
      console.error("❌ No document found");
      return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Data updated successfully" }), { status: 200 });
  } catch (err) {
    console.error("❌ Error updating document:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  } finally {
    await client.close();
  }
}

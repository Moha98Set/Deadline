import { MongoClient } from "mongodb";

const uri = "mongodb+srv://mmdset77:jGMp7WrKZLswitBe@cluster0.9qc4e.mongodb.net";
const client = new MongoClient(uri);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("connect");
    const collection = db.collection("datas");

    const { page = 1, limit = 150 } = req.query;
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const data = await collection
      .find({})
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .toArray();

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  } finally {
    await client.close();
  }
}

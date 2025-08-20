import clientPromise from "@/libs/second";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import moment from "moment-jalaali";

moment.locale("fa");
moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });

const JWT_SECRET = process.env.JWT_SECRET || "test_secret_key";

export async function POST(request) {
  const body = await request.json();
  const { phone, name, nationalId } = body;

  if (!phone || !name || !nationalId) {
    return Response.json({ message: "All fields are required" }, { status: 400 });
  }

  const db = (await clientPromise).db("auth_logs");
  const users = db.collection("users");

  const existing = await users.findOne({ phone });
  if (existing) {
    return Response.json({ message: "User already registered" }, { status: 409 });
  }

  const now = new Date();

  const result = await users.insertOne({
    phone,
    name,
    nationalId,
    createdAt_utc: now,
    createdAt_shamsi: moment(now).format("jYYYY-jMM-jDD HH:mm:ss"),
  });

  const token = jwt.sign({ phone }, JWT_SECRET, { expiresIn: "7d" });

  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return Response.json({ message: "Signup successful", redirect: "/Dashboard" });
}

import clientPromise from "@/libs/second";
import moment from "moment-jalaali";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

moment.locale("fa");
moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });

const JWT_SECRET = process.env.JWT_SECRET || "test_secret_key";

export async function POST(request) {
  const body = await request.json();
  const { phone, code } = body;

  if (!phone || !code) {
    return Response.json({ message: "Incomplete input" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";

  const db = (await clientPromise).db("auth_logs");
  const codes = db.collection("codes");
  const logs = db.collection("login_logs");

  const match = await codes.findOne({ phone, code });
  const success = !!match;

  await logs.insertOne({
    phone,
    timestamp_utc: new Date(),
    timestamp_shamsi: moment().format("jYYYY-jMM-jDD HH:mm:ss"),
    ip,
    userAgent,
    success,
  });

  if (!success) {
    return Response.json({ message: "Invalid or expired code" }, { status: 401 });
  }

  await codes.deleteOne({ _id: match._id });

  const users = db.collection("users");
  const user = await users.findOne({ phone });

  if (user) {
    const token = jwt.sign({ phone }, JWT_SECRET, { expiresIn: "7d" });

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return Response.json({ message: "Login successful", redirect: "/Dashboard" });
  } else {
    return Response.json({ message: "User not registered", redirect: "/Signup?phone=" + phone });
  }
}
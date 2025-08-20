import clientPromise from "@/libs/second";

export async function POST(request) {
  const { phone } = await request.json();

  if (!phone) {
    return Response.json({ message: "Phone number required" }, { status: 400 });
  }

  const code = Math.floor(10000 + Math.random() * 90000).toString();
  const message = `کد ورود شما به سامانه ویرامپ: ${code}`;

  const USERNAME = process.env.SMS_USERNAME;
  const PASSWORD = process.env.SMS_PASSWORD;
  const FROM = process.env.SMS_FROM;
  
  const PATTERN = process.env.SMS_PATTERN;

  const url = `http://ippanel.com/class/sms/webservice/send_url.php?from=${FROM}&to=${phone}&msg=${encodeURIComponent(
    message
  )}&uname=${USERNAME}&pass=${PASSWORD}&pattern=${PATTERN}`;

  try {
    const smsRes = await fetch(url);
    const result = await smsRes.text();

    console.log("📤 SMS sent:", result);
    console.log("📤 Code:", code);

    const db = (await clientPromise).db("auth_logs");
    const codes = db.collection("codes");

    await codes.insertOne({
      phone,
      code,
      createdAt: new Date(),
      expireAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
    });

    await codes.createIndex({ expireAt: 1 }, { expireAfterSeconds: 0 });

    return Response.json({ message: "Code sent successfully" });
  } catch (error) {
    console.error("❌ Error sending SMS:", error);
    return Response.json({ message: "Failed to send SMS" }, { status: 500 });
  }
}

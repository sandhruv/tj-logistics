import { NextResponse } from "next/server";

export async function GET(request) {
  const auth = request.headers.get("authorization") || "";
  const token = auth.replace(/^Bearer\s+/i, "");
  if (!token) return NextResponse.json({ success: false }, { status: 401 });
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const email = decoded.split(":")[0];
    if (!email.includes("@")) throw new Error("bad token");
    return NextResponse.json({ success: true, data: { email, name: "Admin" } });
  } catch {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

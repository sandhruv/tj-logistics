import { NextResponse } from "next/server";

const DEMO_USERS = [{ email: "admin@tjsealogistics.com", password: "admin12345", name: "Admin" }];

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }
  const { email, password } = body || {};
  const user = DEMO_USERS.find((u) => u.email === email && u.password === password);
  if (!user) {
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  }
  const token = Buffer.from(`${user.email}:${Date.now()}`).toString("base64url");
  return NextResponse.json({
    success: true,
    token,
    data: { email: user.email, name: user.name },
  });
}

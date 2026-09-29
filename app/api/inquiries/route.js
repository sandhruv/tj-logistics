import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FILE = path.join(process.cwd(), "data", "inquiries.json");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }
  const { name, email, message } = body || {};
  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "name, email and message are required" },
      { status: 400 }
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ success: false, message: "Invalid email" }, { status: 400 });
  }
  try {
    fs.mkdirSync(path.dirname(FILE), { recursive: true });
    let items = [];
    if (fs.existsSync(FILE)) items = JSON.parse(fs.readFileSync(FILE, "utf8"));
    items.push({ ...body, receivedAt: new Date().toISOString() });
    fs.writeFileSync(FILE, JSON.stringify(items, null, 2));
  } catch {
    return NextResponse.json({ success: false, message: "Storage error" }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}

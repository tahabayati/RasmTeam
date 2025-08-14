import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "content", "newsletter-subscribers.json");

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) return NextResponse.json({ error: "Missing email" }, { status: 400 });

    let data = [];
    try {
      const raw = await fs.readFile(filePath, "utf8");
      data = JSON.parse(raw || "[]");
      if (!Array.isArray(data)) data = [];
    } catch (err) {
      if (err && err.code !== "ENOENT") {
        return NextResponse.json({ error: "Failed to read storage" }, { status: 500 });
      }
    }

    data.push({ email, createdAt: new Date().toISOString() });
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: true });
}



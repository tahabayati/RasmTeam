import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "content", "contact-submissions.json");

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const record = {
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    let data = [];
    try {
      const raw = await fs.readFile(filePath, "utf8");
      data = JSON.parse(raw || "[]");
      if (!Array.isArray(data)) data = [];
    } catch (err) {
      // If file does not exist, we'll create it below
      if (err && err.code !== "ENOENT") {
        return NextResponse.json({ error: "Failed to read storage" }, { status: 500 });
      }
    }

    data.push(record);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

export async function GET() {
  try {
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
    
    return NextResponse.json({ submissions: data });
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}



import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    return NextResponse.json(`Thank you for your interest, ${name}`)
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

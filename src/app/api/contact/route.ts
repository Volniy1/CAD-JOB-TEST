import { NextResponse } from "next/server";

let lastSubmission: { name: string; email: string; message: string } | null =
  null;

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

    lastSubmission = body;

    return NextResponse.json({
      message: { name, email, message },
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET() {
  if (!lastSubmission) {
    return NextResponse.json({ error: "No submissions yet" }, { status: 404 });
  }

  return NextResponse.json(`Thank you, we will reply, ${lastSubmission.name}`);
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 },
      );
    }

    // In production, this would validate against Supabase Auth
    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Mock successful login
    const user = {
      id: "user_" + Buffer.from(email).toString("base64").slice(0, 8),
      email,
      name: email
        .split("@")[0]
        .replace(/[._]/g, " ")
        .replace(/\b\w/g, (l: string) => l.toUpperCase()),
      role: "user" as const,
      created_at: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      user,
      token: "mock_jwt_token_" + Date.now(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Login failed" },
      { status: 500 },
    );
  }
}

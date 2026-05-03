import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, password } = body

    if (!name || !email || !phone || !password) {
      return NextResponse.json(
        { success: false, message: "All required fields must be provided" },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 6 characters" },
        { status: 400 }
      )
    }

    // In production, this would create user in Supabase Auth
    const user = {
      id: "user_" + Date.now(),
      email,
      name,
      phone,
      company: company || null,
      role: "user" as const,
      created_at: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      user,
      token: "mock_jwt_token_" + Date.now(),
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Signup failed" },
      { status: 500 }
    )
  }
}

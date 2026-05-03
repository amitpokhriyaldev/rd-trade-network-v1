import { supabaseBrowser, supabaseServer } from "./supabase"
import { User } from "@/types"

export async function signUp(email: string, password: string, name: string, phone?: string) {
  const { data: authData, error: authError } = await supabaseBrowser.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        phone,
      },
    },
  })

  if (authError) throw authError

  // Create user profile in database
  if (authData.user) {
    const { error: profileError } = await supabaseBrowser
      .from("profiles")
      .insert([
        {
          id: authData.user.id,
          email,
          name,
          phone,
          role: "user",
        },
      ])

    if (profileError) throw profileError
  }

  return authData
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabaseBrowser.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error
  return data
}

export async function signOut() {
  const { error } = await supabaseBrowser.auth.signOut()
  if (error) throw error
}

export async function getCurrentUser(): Promise<User | null> {
  const { data: { session } } = await supabaseBrowser.auth.getSession()

  if (!session) return null

  const { data: profile } = await supabaseBrowser
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single()

  if (!profile) return null

  return {
    id: profile.id,
    email: profile.email,
    name: profile.name,
    phone: profile.phone,
    company: profile.company,
    role: profile.role,
    created_at: profile.created_at,
  }
}

export async function getServerUser() {
  const { data: { session } } = await supabaseServer.auth.getSession()
  return session?.user ?? null
}

export async function resetPassword(email: string) {
  const { error } = await supabaseBrowser.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  })
  if (error) throw error
}

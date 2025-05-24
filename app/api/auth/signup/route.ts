//import { createClient } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const email = formData.get('email')
  const password = formData.get('password')

  console.log('Email:', email)
  console.log('Password:', password)

  // Here you could:
  // - validate credentials
  // - call Supabase/Auth logic
  //const supabase = createClient();
  //const supabase = createClient();
  // - set cookies or redirect

  return NextResponse.redirect(new URL('/dashboard', req.url))
}

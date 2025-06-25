'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { prisma } from '@/utils/prisma/prisma';

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const { data: authData, error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }
  
  revalidatePath('/', 'layout')
  
  const user = authData.user

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user?uid=${user.id}`, {
    cache: 'no-store',
  });

  const profile = await res.json()
  console.log("First login?: ", profile?.firstLoginComplete)
  if (profile?.firstLoginComplete) {
    redirect('/dashboard')
  } else {
    await prisma.user.update({
      where: { uid: user.id },
      data: { firstLoginComplete: true },
    })
    redirect('/onboarding')
  }
}

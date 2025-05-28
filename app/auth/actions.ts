'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  //const { data: { user: userData }, error: getUserError} = await supabase.auth.getUser();

  if(error){
    console.error('error fetching user: ', error.message);
  }else if(data.user){
    const user = await prisma.user.create({
      data: {
        uid: data.user.id,
        email,
        firstName,
        lastName,

      }
    })
  }
  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signOut(){
    const supabase = await createClient()
    const { error } = await supabase.auth.signOut()
    redirect('/')
}
//import { createClient } from '@/utils/supabase'
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'


export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const password = formData.get("password") as string;
  const userData = {
    email: formData.get("email") as string,
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string
  }

  const { email } = userData;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  const uid = data.user?.id;
  //const { data: { user: userData }, error: getUserError} = await supabase.auth.getUser();

  if(error){
    console.error('error fetching user: ', error.message);
  }else if(data.user){
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, ...userData }),
    });
  }
  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/auth/confirm')
}
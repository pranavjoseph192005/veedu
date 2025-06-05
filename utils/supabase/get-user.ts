import { createClient } from './server';

export default async function getUser(){
    const supabase = await createClient();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();
    return user ?? null;
};
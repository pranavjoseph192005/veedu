import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma/prisma';
import getUser from '@/utils/supabase/get-user';

export async function PATCH(req: Request){
    try{
      console.log("Patch called")
      const user = await getUser();
      const body = await req.json();
      const profile = await prisma.user.findUnique({
        where: {
          uid: user?.id,
        },
      });
      
      const profileId = profile?.id;
      const updatedUserProfile = await prisma.userProfile.update({
        where: { id: profileId },
        data: body, // applies only fields passed in body
      });
  
      return NextResponse.json(updatedUserProfile);
    } catch(error) {
      console.error('PATCH error:', error);
      return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
    }
  }
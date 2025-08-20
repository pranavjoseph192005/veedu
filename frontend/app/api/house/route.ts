// app/api/house/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma/prisma';
import getUser from '@/utils/supabase/get-user';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user?uid=${user.id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch user profile' }, { status: 400 });
    }

    const profile = await res.json();
    
    const existingHouse = await prisma.house.findFirst({
      where: {
        address: formData.get('address') as string,
        city: formData.get('city') as string,
        state: formData.get('state') as string,
        zip: formData.get('zip') as string
      }
    });
    
    if (existingHouse) {
      throw new Error('House already exists');
    }

    const house = await prisma.house.create({
      data: {
        address: formData.get('address') as string,
        city: formData.get('city') as string,
        state: formData.get('state') as string,
        zip: formData.get('zip') as string,
        ownerId: profile?.id,
      },
    });

    return NextResponse.redirect(new URL('/dashboard/Properties/PropertiesDepth', req.url));
  } catch (error) {
    console.error('Error creating house:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


export async function GET(req: Request){
    try{
        const {searchParams} = new URL(req.url);
        const ownerId = Number(searchParams.get('ownerId'));

        if(!ownerId){
            return NextResponse.json({error: "owner id is required"}, {status: 404});
        }

        const houses = await prisma.house.findMany({
            where: {ownerId: ownerId}
        })

        return NextResponse.json(houses, { status: 200 })
    } catch(error){
        console.error('Error getting houses:', error);
        return NextResponse.json({error: 'Failed to get houses'}, {status: 500});
    }
}
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
        propertyType: formData.get('propertyType') as string,
        ownerId: profile.id,
      },
    });

    return NextResponse.json(house);
  } catch (error) {
    console.error('Error creating house:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


export async function GET(req: Request){
    try{
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

        const houses = await prisma.house.findMany({
            where: {ownerId: profile.id}
        })

        return NextResponse.json(houses, { status: 200 })
    } catch(error){
        console.error('Error getting houses:', error);
        return NextResponse.json({error: 'Failed to get houses'}, {status: 500});
    }
}

export async function PATCH(req: Request){
  try{
    const user = await getUser();
    const updateData: any = {};
    const formData = await req.formData();
    const propertyId = formData.get('id');

    if (!propertyId) {
      console.log('Property ID required')
      return NextResponse.json({ error: 'Property ID required' }, { status: 400 });
    }

    const profile = await prisma.user.findUnique({
      where: {
        uid: user?.id,
      },
    });

    const existingProperty = await prisma.house.findUnique({
    where: { id: parseInt(propertyId as string) },
    select: { ownerId: true }
  });

  if (!existingProperty || existingProperty.ownerId !== profile?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  // Now safe to update
  if (formData.get('purchasePrice')) {
    updateData.purchasePrice = parseInt(formData.get('purchasePrice') as string);
  }
  
  if (formData.get('purchaseMonth')) {
    const monthValue = formData.get('purchaseMonth') as string;
    updateData.purchaseDate = new Date(`${monthValue}-01`);
  }
  
  if (formData.get('bed')) {
    updateData.bedrooms = parseInt(formData.get('bed') as string);
  }
  
  if (formData.get('bath')) {
    updateData.bathrooms = parseInt(formData.get('bath') as string);
  }
  
  if (formData.get('squareFoot')) {
    updateData.squareFeet = parseInt(formData.get('squareFoot') as string);
  }
  
  const updatedHouse = await prisma.house.update({
    where: { id: parseInt(propertyId as string) },
    data: updateData,
  });

  return NextResponse.json(updatedHouse);
  }
  catch(error){
    console.error('Error updating house:', error);
    return NextResponse.json({error: 'Failed to update house'}, {status: 500});
  }
}
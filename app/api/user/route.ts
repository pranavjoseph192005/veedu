// app/api/user/add/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma/prisma';
import getUser from '@/utils/supabase/get-user';

export async function POST(req: Request) {
  try {
    const { uid, email, firstName, lastName } = await req.json();

    // Check if user already exists by unique field (uid or email)
    const existingUser = await prisma.user.findUnique({
      where: { email }, // or use { email } if that's your unique constraint
    });

    if (existingUser) {
      console.log('User already exists:', existingUser);
      return NextResponse.json({ message: 'User already exists' }, { status: 200 });
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        uid,
        email,
        firstName,
        lastName,
      },
    });

    // Create user profile
    const userProfile = await prisma.userProfile.create({
      data: {
        userId: user.id,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}


export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userUid = searchParams.get('uid');

    if (!userUid) {
      return NextResponse.json({ error: 'Missing uid parameter' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        uid: userUid,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error getting user:', error);
    return NextResponse.json({ error: 'Failed to get user' }, { status: 500 });
  }
}

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
    const updatedUser = await prisma.user.update({
      where: { id: profileId },
      data: body, // applies only fields passed in body
    });

    return NextResponse.json(updatedUser);
  } catch(error) {
    console.error('PATCH error:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}
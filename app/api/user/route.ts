// app/api/user/add/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma/prisma';

export async function POST(req: Request) {
  try {
    const { uid, email, firstName, lastName } = await req.json();

    const user = await prisma.user.create({
      data: {
        uid,
        email,
        firstName,
        lastName,
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

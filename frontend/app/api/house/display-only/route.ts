import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma/prisma';
import getUser from '@/utils/supabase/get-user';

export async function GET() {
  try {
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const profile = await prisma.user.findUnique({
        where: {
          uid: user.id,
        },
      });

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    // Only select fields needed for display - no sensitive data
    const houses = await prisma.house.findMany({
      where: { ownerId: profile.id },
      select: {
        id: true,
        address: true,
        city: true,
        state: true,
        zip: true,
        // Don't include sensitive fields like ownerId, private notes, etc.
      }
    });

    return NextResponse.json(houses);
  } catch (error) {
    console.error('Error fetching houses:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
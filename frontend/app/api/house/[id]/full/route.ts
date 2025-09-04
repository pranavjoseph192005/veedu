import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma/prisma';
import getUser from '@/utils/supabase/get-user';

// app/api/house/[id]/full/route.ts
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      // Debug the raw params object
      console.log('Raw params object:', params);
      console.log('Type of params:', typeof params);
      
      const user = await getUser();
      if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
  
      const profile = await prisma.user.findUnique({
        where: { uid: user.id }
      });
  
      if (!profile) {
        return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
      }
  
      const { id } = await params;
      
      // Add extensive debugging
      console.log('Awaited params:', { id });
      console.log('ID value:', id);
      console.log('ID type:', typeof id);
      console.log('Is ID undefined?', id === undefined);
      console.log('Is ID null?', id === null);
      console.log('Is ID empty string?', id === '');
  
      // Check if id exists and is valid
      if (!id) {
        console.error('ID is falsy:', id);
        return NextResponse.json({ error: 'House ID is required' }, { status: 400 });
      }
  
      if (id === 'undefined') {
        console.error('ID is string "undefined"');
        return NextResponse.json({ error: 'Invalid house ID' }, { status: 400 });
      }
  
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        console.error('ID cannot be parsed to integer:', id);
        return NextResponse.json({ error: 'Invalid house ID format' }, { status: 400 });
      }
  
      console.log('Parsed ID:', parsedId);
      console.log('Profile ID:', profile.id);
  
      const house = await prisma.house.findFirst({
        where: { 
          id: parsedId,
          ownerId: profile.id
        }
      });
  
      if (!house) {
        return NextResponse.json({ error: 'House not found' }, { status: 404 });
      }
  
      return NextResponse.json(house);
    } catch (error) {
      console.error('Error fetching house:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }
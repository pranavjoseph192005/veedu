// /api/userProfile/server-update
import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma/prisma';
export async function PATCH(req: Request) {
    try {
        const apiKey = req.headers.get('x-api-key');
        if (apiKey !== process.env.SERVER_API_KEY) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        
        const { uid, ...updateData } = await req.json();
        
        if (!uid) {
            return NextResponse.json({ error: 'UID required' }, { status: 400 });
        }
        
        const profile = await prisma.user.findUnique({
            where: { id: uid }
        });
        
        if (!profile) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        
        const updatedUserProfile = await prisma.userProfile.update({
            where: { userId: profile.id },
            data: updateData,
        });
        
        return NextResponse.json(updatedUserProfile);
    } catch(error) {
        console.log(error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
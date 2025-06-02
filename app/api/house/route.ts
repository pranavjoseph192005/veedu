import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma/prisma';

export async function Post(req: Request){
    try{
        const {address, ownerId} = await req.json();

        const house = prisma.house.create({
            data:{
                address,
                ownerId
            }
        });
        return NextResponse.json(house, { status: 201 });
    } catch(error) {
        console.error('Error creating House:', error);
        return NextResponse.json({ error: 'Failed to create House' }, { status: 500 });
    }
}
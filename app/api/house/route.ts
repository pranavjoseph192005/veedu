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

export async function Get(req: Request){
    try{
        const {searchParams} = new URL(req.url);
        const ownerId = Number(searchParams.get('ownerId'));

        if(!ownerId){
            return NextResponse.json({error: "user id is required"}, {status: 404});
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
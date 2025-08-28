import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma/prisma';
import getUser from '@/utils/supabase/get-user';

const keywords = ["savings", "income", "monthlyDebts", "creditScore"];

export async function PATCH(req: Request){
    try{
      const user = await getUser();
      const body = await req.json();
      const profile = await prisma.user.findUnique({
        where: {
          uid: user?.id,
        },
      });
      
      const profileId = profile?.id;
      const updatedUserProfile = await prisma.userProfile.update({
        where: { userId: profileId },
        data: body, // applies only fields passed in body
      });

      const isPatchingFinancialFileds = keywords.some(field => field in body);
      if(isPatchingFinancialFileds){
        const res = await fetch('http://127.0.0.1:8000/calculate', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              uid: profileId,
              annual_income: updatedUserProfile.income,
              monthly_debt: updatedUserProfile.monthlyDebts,
              down_payment: updatedUserProfile.savings,
          }),
      })
      }
  
      return NextResponse.json(updatedUserProfile);
    } catch(error) {
      console.error('PATCH error:', error);
      return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
    }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    const profile = await prisma.user.findUnique({
      where: { uid: userId },
    });

    console.log(profile?.uid)

    if (!profile?.id) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    const userProfile = await prisma.userProfile.findUnique({
      where: { userId: profile?.id },
    });

    if (!userProfile) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(userProfile, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
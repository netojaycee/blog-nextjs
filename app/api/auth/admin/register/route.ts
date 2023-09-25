import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: any, res: any) {
  try {
    const { name, email, password } = await req.json();
    // return NextResponse.json(await req.json());

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

   return NextResponse.json({ success: true, user }, { status: 200});
  } 
  catch (error) {
   return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500});
  }
};

import { NextResponse } from 'next/server';
import prisma from '../../../../../prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: any) {
    try {
    const { email, password } = await req.json();

    // Find the user by email
    const user = await prisma.user.findUnique({ where: { email } });

    // If user doesn't exist, return a 404 error
    if (!user) {
      return NextResponse.json({ success: false, message: 'User not found' });
    }

    // Compare the entered password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords match, return success
    if (passwordMatch) {
      return NextResponse.json({ success: true, user });
    } else {
      // If passwords don't match, return a 401 unauthorized error
      return NextResponse.json({ success: false, message: 'Invalid CREDENTIALS' }, { status: 401 });
    }
  } catch (error) {
    // Handle any unexpected errors
    return NextResponse.json({ success: false, message: 'Internal Server Error' });
  }
};

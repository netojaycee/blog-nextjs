import { NextResponse } from 'next/server';
import prisma from '../../../../libs/prismadb';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import { COOKIE_NAME, MAX_AGE } from "@/constants/index";


export async function POST(request: Request) {
    try {
    const { email, password } = await request.json();

  
   

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
      //  create a jwt token
      const secret = process.env.SECRET_KEY || "";
      const token = sign({ email }, secret, { expiresIn: MAX_AGE });

      const serialized = serialize(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: "/",
      });
     
      return NextResponse.json({ success: true, message: 'Authenticated' }, { status: 200, headers: { "Set-Cookie": serialized } });
      // const response = {
      //   message: "Authenticated!",
      // };
      // return new Response(JSON.stringify(response), {
      //   status: 200,
      //   headers: { "Set-Cookie": seralized },
      // });
    } else {
      // If passwords don't match, return a 401 unauthorized error
      return NextResponse.json({ success: false, message: 'Invalid CREDENTIALS' }, { status: 401 });
    }
  } catch (error) {
    // Handle any unexpected errors
    return NextResponse.json({ success: false, message: 'Internal Server Error' });
  }
};




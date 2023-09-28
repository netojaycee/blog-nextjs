import { cookies } from "next/headers";
import { COOKIE_NAME } from "@/constants/index";
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import prisma from "../../../../libs/prismadb";

export async function GET() {
    const cookiStore = cookies();
    const token = cookiStore.get(COOKIE_NAME);

    if (!token) {
        return NextResponse.json({ success: false, message: 'Invalid CREDENTIALS' }, { status: 401 });
    }

    const { value } = token;

    try {
        const secret = process.env.SECRET_KEY || "";
        verify(value, secret);

        return NextResponse.json({ success: true, message: 'Authenticated' }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ success: false, message: 'something went wrong' }, { status: 400 });

    }
}
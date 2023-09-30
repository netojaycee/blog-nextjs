// import { NextResponse } from 'next/server';
// import { serialize } from 'cookie';
// import { COOKIE_NAME } from "@/constants/index";

// export default function logout(req: any, res: any) {
//   const serialized = serialize(COOKIE_NAME, '', {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "strict",
//     maxAge: -1,
//     path: "/auth/login",
//   });
  
//   res.setHeader('Set-Cookie', serialized);

//   return NextResponse.json({ success: true, message: 'Logged out' });
// }

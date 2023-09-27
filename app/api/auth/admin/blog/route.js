import { NextResponse } from "next/server";
import prisma from '../../../../libs/prismadb';

export const GET = async () => {
    try {
        const blogs = await prisma.blog.findMany({
          orderBy: {
            createdAt: 'asc',
          },
          select: {
            id: true,
            title: true,
            description: true,
            imageUrl: true,
            createdAt: true,
            updatedAt: true,
          },
        });
    
        return NextResponse.json({ success: true, blogs });
      } catch (err) {
        return NextResponse.json({ success: false, message: 'Internal Server Error' });
      }
    };

export const POST = async (request) => {
    try {
      const body = await request.json();
      const { title, description, imageUrl } = body;         
        // Create a new blog
      const newBlog = await prisma.blog.create({
          data: {
            title,
            description,
            imageUrl,
          },
          select: {
            id: true,
            title: true,
            description: true,
            imageUrl: true,
            createdAt: true,
            updatedAt: true,
          },
        });
    
        // Return success response
        return NextResponse.json({ success: true, newBlog }, { status: 200});
      } 
      catch (err) {
       return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500});
      }
    };







import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../../../prisma';

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        // Get all blogs
        const blogs = await prisma.blog.findMany({
          orderBy: {
            createdAt: 'desc',
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
        return NextResponse.json({ success: true, blogs });
      } catch (error) {
        // Handle any unexpected errors
        return NextResponse.json({ success: false, message: 'Internal Server Error' });
      }
    };

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const { title, description, imageUrl } = await req.json();
            // return NextResponse.json(await req.json());
         
    
    
        // Create a new blog
        const blog = await prisma.blog.create({
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
        return NextResponse.json({ success: true, blog }, { status: 200});
      } 
      catch (error) {
       return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500});
      }
    };







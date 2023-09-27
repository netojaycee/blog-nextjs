// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../../../libs/prismadb';


    // get blog by id
export const GET = async (request, {params}) => {
        try {
            const { id } = params;
            const blog = await prisma.blog.findUnique({
                where: {
                    id
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
            if (!blog) {
                return NextResponse.json({ success: false, message: 'Blog not found', error}, { status: 404 });
            }
    return NextResponse.json({ success: true, blog });
} catch (error) {
    return NextResponse.json({ success: false, message: 'Internal Server Error' });
}
}

    // Update blog
export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const { title, description, imageUrl } = body;
        const { id } = params;
        const updatedBlog = await prisma.blog.update({
                where: {
                    id
                },
                data: {
                    title,
                    description,
                    imageUrl
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
            if (!updatedBlog) {
                return NextResponse.json({ success: false, message: 'Blog not found', error}, { status: 404 });
            }
            return NextResponse.json({ success: true, updatedBlog }, { status: 200});
        }
        catch (error) {
            console.error('An unexpected error occurred:', error);
        return NextResponse.json({ success: true, message: 'Internal Server Error' }, { status: 500});
    }
}
 
export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;
        await prisma.blog.delete({
            where: {
                id
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
    return NextResponse.json({ success: true, "message": "Blog deleted successfully" });
}

catch (error) {
    return NextResponse.json({ success: false, message: 'Internal Server Error' });
}
};


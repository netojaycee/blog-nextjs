import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../../../../prisma';


export const GET = async (req: NextRequest, res: NextResponse) => {
    // get blog by id
    
    const blogId = req.url.split('blog/')[1];
    if (req.method === 'GET') {
        try {
            const blog = await prisma.blog.findUnique({
                where: {
                    id: blogId,
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
    return NextResponse.json({ success: true, blog });
} catch (error) {
    return NextResponse.json({ success: false, message: 'Internal Server Error' });
}
}
 else if (req.method === 'PATCH') {
    // Update blog
    const { title, description, imageUrl } = await req.json();
    // return NextResponse.json(await req.json());
    try {
        const updatedBlog = await prisma.blog.update({
            where: {
                id: blogId,
            },
            data: {
                title: title,
                description: description,
                imageUrl: imageUrl,
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
        return NextResponse.json({ success: true, updatedBlog }, { status: 200});

    } catch (error) {
        console.error('An unexpected error occurred:', error);
      return NextResponse.json({ success: true, message: 'Internal Server Error' }, { status: 500});
}
} else if (req.method === 'DELETE') {
    // by id
    const blog = await prisma.blog.delete({
        where: {
            id: blogId,
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
        return NextResponse.json({ success: false, message: 'Internal Server Error' });
    }
    return NextResponse.json({ success: true, "message": "Blog deleted successfully" });
}

};
"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
// import { useRouter } from 'next/router';

export function BlogCardDetail({ title, imageUrl, description,author,more, createdAt, updatedAt }) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center gap-4">
                <p className="text-blue-500">{createdAt}</p>
                <p className="text-blue-500">2mins read</p>
            </div>
            <h1 className='pt-10 pb-20 text-center text-4xl font-bold lg:text-5xl'>{title}</h1>
            <Card className="w-full bg-transparent shadow-none">
                <CardHeader shadow={false} floated={false} className="h-96">
                    {imageUrl}
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue" className="font-medium">
                            {author}
                        </Typography>
                        <Typography color="blue" className="font-medium">
                           {more}
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                       {description}
                    </Typography>
                </CardBody>
               
            </Card>
        </div>
    );
}


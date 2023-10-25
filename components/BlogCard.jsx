import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function BlogCard({ title, imageUrl, description, createdAt, updatedAt }) {
    return (
        <Card className="mt-6 bg-transparent shadow-none w-full">
            <CardHeader color="blue-gray" className="relative object-fit h-fit md:h-fit hover:scale-[1.02] focus:scale-[1.02] active:scale-100 transition uration-300">
                {<img
                    src="/images/worried-girl.jpg"
                    alt={imageUrl} className="hover:opacity-40 w-full transition object-cover"
                />}
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                </Typography>

                <div className="flex flex-wrap gap-2 py-8">
                    <a href="" className="px-5 py-2 rounded-full bg-primary_variant text-primary">sdsdsd</a>
                    <a href="" className="px-5 py-2 rounded-full bg-primary_variant text-primary">sdsdsd</a>
                    <a href="" className="px-5 py-2 rounded-full bg-primary_variant text-primary">sdsdsd</a>
                    <a href="" className="px-5 py-2 rounded-full bg-primary_variant text-primary">sdsdsd</a>
                </div>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <div className="flex justify-between">
                    <p className="text-blue-500">Created at &nbsp; {createdAt}</p>
                    <p className="text-blue-500">2mins read</p>
                </div>
            </CardFooter>
        </Card>
    );
}
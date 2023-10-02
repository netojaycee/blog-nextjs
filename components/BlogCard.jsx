import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function BlogCard() {
    return (
        <Card className="mt-6 bg-transparent shadow-none w-full">
            <CardHeader color="blue-gray" className="relative h-fit md:h-96 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 transition uration-300">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image" className="hover:opacity-40 transition object-contain"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    mhapy wins prestigious Innovation Award worth $35,000
                </Typography>

                <div className="flex flex-wrap gap-2 py-8">
                    <a href="" className="px-5 py-2 rounded-full bg-primary_variant text-primary">sdsdsd</a>
                    <a href="" className="px-5 py-2 rounded-full bg-primary_variant text-primary">sdsdsd</a>
                    <a href="" className="px-5 py-2 rounded-full bg-primary_variant text-primary">sdsdsd</a>
                    <a href="" className="px-5 py-2 rounded-full bg-primary_variant text-primary">sdsdsd</a>
                </div>
                <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <div className="flex justify-between">
                    <p className="text-blue-500">16 July 2023</p>
                    <p className="text-blue-500">2mins read</p>
                </div>
            </CardFooter>
        </Card>
    );
}
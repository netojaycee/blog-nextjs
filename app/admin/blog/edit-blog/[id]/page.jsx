'use client'

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FormEvent, useEffect, useState  } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function EditBlog() {
  const [blogData, setBlogData] = useState({});



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`/api/auth/admin/blog/${blog.id}`, blogData)
      .then((res) => {
        console.log(res);
        router.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Card color="transparent" shadow={false} className="items-center">
      <Typography variant="h4" color="blue-gray">
        Admin
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Edit Blog Post Here
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" name="title" type="text" id="title" label="Title" onChange={handleChange} value={blogData.title || ''} />
          <Input size="lg" name="description" type="text" id="description" label="Description" onChange={handleChange} value={blogData.description || ''} />
          <Input type="file" size="lg" label="Image" name="imageUrl" onChange={handleChange} value={blogData.imageUrl || ''} />
        </div>
        
        <Button type="submit" className="mt-6" fullWidth>
          Update Blog
        </Button>
       
      </form>
    </Card>
  );
}

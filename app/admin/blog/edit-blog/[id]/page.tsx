//@ts-nocheck
'use client'
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { FormEvent, useEffect, useState  } from "react";
import axios from 'axios';
import { NextRequest, NextResponse } from "next/server";


const EditBlog = (req) => {
  const id  = req.query;
  const [blogData, setBlogData] = useState({ title: '', description: '', imageUrl: '' });

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`/api/auth/admin/blog/${id}`);
        setBlogData(response.data);
      } catch (error) {
        console.error('An unexpected error occurred:', error);
      }
    };

    if (id) {
      fetchBlogData();
    }
  }, [id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.patch(`/api/auth/admin/blog/${id}`, blogData);

      if (response.data.success) {
        console.log('Blog updated successfully:', response.data.blog);
      } else {
        console.error('Error updating blog:', response.data.message);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
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
          <Input size="lg" name="title" type="text" id="title" label="Title" onChange={handleChange} value={blogData.title} crossOrigin={''}/>
          <Input size="lg" name="description" type="text" id="description" label="Description" onChange={handleChange} value={blogData.description} crossOrigin={''}/>
          <Input type="file" size="lg" label="Image" name="imageUrl" onChange={handleChange}   value={blogData.imageUrl} crossOrigin={''} />
        </div>
        
        <Button type="submit" className="mt-6" fullWidth>
          Update Blog
        </Button>
       
      </form>
    </Card>
  );
}

export default EditBlog;
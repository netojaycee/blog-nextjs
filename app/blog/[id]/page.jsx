'use client'
import React, { useEffect, useState } from 'react'
import CardBlog, { BlogCard } from '../../../components/BlogCard'
import { BlogCardDetail } from '../../../components/BlogCardDetail'
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function page() {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const API = `/api/auth/admin/blog/${id}`

  useEffect(() => {
    const getPostById = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setBlog(data.blog);
        console.log(data.blog);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    getPostById(); // Fetch the data when the component mounts
  }, []);
  // useEffect(() => {
  //   // Fetch blog posts when the component mounts
  //   fetch(API)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Update the state with the fetched blog posts
  //       setBlog(data);
  //       console.log(data)
  //       console.log(blog[1].title)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching blog posts:', error);
  //     });
  // }, [id]);
  return (
    <div className="flex gap-4 w-full mb-40 lg:mb-4 lg:px-20 xl:60 underline-none ">
      <section className="w-full relative flex underline-none flex-col  relative bg-primary-500 mt-0">
        <div className="grid grid-cols-1 gap-10">
          {/* <CardBlog /> */}
          <BlogCardDetail
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            createdAt={blog.createdAt}
          />
        </div>
      </section>
    </div>
  )
}

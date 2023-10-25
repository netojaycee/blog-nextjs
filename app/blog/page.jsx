'use client'
import React, { useEffect, useState } from 'react'
import CardBlog, { BlogCard } from '../../components/BlogCard'
import Link from 'next/link';

export default function page() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog posts when the component mounts
    fetch('/api/auth/admin/blog')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response.data)
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched blog posts
        setBlogs(data.blogs);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);
  return (
    <div className="flex gap-4 w-full mb-40 lg:mb-4 lg:px-20 xl:60 underline-none ">
      <section className="w-full relative flex underline-none flex-col  relative bg-primary-500 mt-0">
      <h1 className='pt-10 pb-20 text-center font-bold text-primary lg:text-5xl'>From Our Blog</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* <CardBlog /> */}
          {blogs.map((blog) => (
            <BlogCard key={blog.id} title={<Link href={`/blog/${blog.id}`}>{blog.title} </Link>} description={blog.description} createdAt={(new Date(blog.createdAt).toLocaleDateString("en-US"))} imageUrl={blog.imageUrl} />
          ))}

        </div>
      </section>
    </div>
  )
}

//@ts-nocheck
'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/auth/admin/blog');
        // console.log(response.data.blogs);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error('An unexpected error occurred:', error);
      }
    };

    fetchData();
  }, []);

  return (

    // <div><h1>name</h1></div>
    
     <div>
      <h1>Welcome, adminName!</h1>
      <div>
      <Link href="/all-blog">
        View All Blogs
      </Link>
      <Link href="/add-blog">
        Add Blog
      </Link>

    </div>
     <ul>
       {blogs.map(blog => (
         <li key={blog.id}>{blog.title} <span>
         <Link href="/delete-blog">
           delete
         </Link>
         <Link href={`/admin/blog/edit-blog/${blog.id}`}>edit</Link>
   
       </span></li>
       ))}
     </ul>
   </div>
  );
};

export default AdminDashboard;

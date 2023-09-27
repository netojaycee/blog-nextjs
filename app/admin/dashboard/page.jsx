'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [router, setRouter] = useState(null);

  useEffect(() => {
    // Fetch blogs data
    axios.get('/api/auth/admin/blog')
      .then((response) => {
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // Set the router for later use
    setRouter(require('next/router'));
  }, []);

  const handleDeleteBlog = (id) => {
    axios
      .delete(`/api/auth/admin/blog/${id}`)
      .then((res) => {
        console.log(res);
        // Remove the deleted blog from state
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
      })
      .catch((err) => {
        console.log(err);
      }) 
      .finally(() => {
        router && router.reload();
      });
  }

  return (
    <div>
      <h1>Welcome, adminName!</h1>
      <div>
        <Link href="/admin/blog/add-blog">Add Blog</Link>
      </div>
      <ul>
        {blogs.length === 0 && <li>No blogs found.</li>}
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title}{' '}
            <span>
              <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
              <Link href={`/admin/blog/edit-blog/${blog.id}`}>Edit</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

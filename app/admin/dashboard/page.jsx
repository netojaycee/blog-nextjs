'use client'
import React from 'react';
import Link from 'next/link';
import BlogList from '../../../components/BlogList';
import { Button } from '@material-tailwind/react';

async function getBlogs() {
  const res = await fetch('http://localhost:3000/api/auth/admin/blog', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.status}`);
  }

  return res.json();
}

const handleLogout = () => {
  try {
    axios.post('/api/auth/admin/logout');
    // Redirect the user to the login page
    const router = useRouter();
    router.push('/auth/login');
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
};



const Dashboard =  async () => {
  const { blogs } = await getBlogs();

  return (
    <main>
      <h1>Welcome, adminName!</h1>

      <div>
        <Button onClick={handleLogout} color="blue" ripple="light" />
        <Link href="/admin/blog/add-blog">Add Blog</Link>
      </div>
      <section>
        <BlogList blogs={blogs} />
      </section>
    </main>
  );
}

export default Dashboard;

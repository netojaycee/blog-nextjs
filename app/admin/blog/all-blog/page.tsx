import React from 'react';
import Link from 'next/link';

const ViewAllBlogs = () => {
  // Dummy data for demonstration
  const blogs = [
    { id: 1, title: 'Blog 1', description: 'Description 1' },
    { id: 2, title: 'Blog 2', description: 'Description 2' },
    { id: 3, title: 'Blog 3', description: 'Description 3' },
  ];

  return (
    <div>
      <h1>All Blogs</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{blog.description}</td>
              <td>
                <Link href="/admin/blog/edit-blog">edit</Link>
                <Link href="/">delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllBlogs;

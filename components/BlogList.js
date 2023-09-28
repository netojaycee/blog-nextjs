import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs }) => {
  return (
    <ul>
    {blogs.length === 0 && <p>No blogs found.</p>}
    {blogs.map(blog => (
      <Blog key={blog.id} blog={blog} />
    ))}
  </ul>
  )
}

export default BlogList;
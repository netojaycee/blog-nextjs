'use client'

import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import React, { useState } from 'react';
  import axios from 'axios';
  import { useRouter } from 'next/navigation';
  
  const Blog = ({ blog }) => {
    const router = useRouter(); 
    const [editMode, setEditMode] = useState(false);
    const [blogToEdit, setBlogToEdit] = useState(blog);

  const handleEditClick = () => {
      setEditMode(true);
    
  };
  
    const handleCancelEdit = () => {
      setEditMode(false);
    };
  
    const handleEditSubmit = (e) => {
      e.preventDefault();
      axios.patch(`/api/auth/admin/blog/${blog.id}`, blogToEdit)
        .then(res => {
          console.log(res);
          setEditMode(false); // Hide edit form after submission
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          router.refresh();
        });
    };
  
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setBlogToEdit((prevState) => ({ ...prevState, [name]: value }));
    };
  
    const handleFileUpload = (e) => {
      const file = e.target.files[0];
      setBlogToEdit(prevState => ({ ...prevState, imageUrl: file }));
    };
  
    const handleDeleteBlog = (id) => {
      axios
        .delete(`/api/auth/admin/blog/${id}`)
        .then((res) => {
          console.log(res);
          router.refresh();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <li key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        <div>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
        </div>
  
        {editMode && (
          <div>
            <Card color="transparent" shadow={false} className="items-center">
              <Typography color="gray" className="mt-1 font-normal">
                Edit Blog Post Here
              </Typography>
              <form onSubmit={handleEditSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <Input size="lg" name="title" type="text" id="title" label="Title" onChange={handleChange} value={blogToEdit.title} />
                  <Input size="lg" name="description" type="text" id="description" label="Description" onChange={handleChange} value={blogToEdit.description} />
                  <Input type="file" size="lg" label="Image" name="imageUrl" onChange={(e) => handleFileUpload(e)} />
                </div>
                <Button type="submit" className="mt-6" fullWidth>
                  Update Blog
                </Button>
                <Button type="button" className="mt-2" onClick={handleCancelEdit} fullWidth>
                  Cancel
                </Button>
              </form>
            </Card>
          </div>
        )}
      </li>
    );
  };
  
  export default Blog;
  
'use client'

import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { FormEvent, useState  } from "react";
import axios from 'axios';



export default function AddBlog() {
const [formData, setformData] = useState({title: '', description: '', image: ''})


const handleSubmit = async (e:FormEvent) => {
  e.preventDefault();
  // console.log(formData);

  try {
    const response = await axios.post('/api/auth/admin/register', formData);

    // if (response.data.success) {
    //   console.log('Registration successful!', response.data.user);
    // } else {
    //   console.log('failed');
    //   console.error('Registration failed:', response.data.message);
    // }
  
  }
   catch (error) {
    console.error('An unexpected error happened occurred:');
  }
};
 
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setformData({
    ...formData,
    [name]: value,
  });
};

  return (
    <Card color="transparent" shadow={false} className="items-center">
      <Typography variant="h4" color="blue-gray">
       Admin
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Add Blog Posts Here
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" name="title" type="text" id="title" label="Title" onChange={handleChange} value={formData.title} crossOrigin={''}/>
          <Textarea size="lg" label="Description" name="description" value={formData.description} />
          <Input type="file" size="lg" label="Image" name="image" onChange={handleChange}   value={formData.image} crossOrigin={''} />
        </div>
        
        <Button type="submit" className="mt-6" fullWidth>
          Add Blog
        </Button>
       
      </form>
    </Card>
  );
}
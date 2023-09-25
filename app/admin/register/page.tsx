'use client'

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FormEvent, useState  } from "react";
import axios from 'axios';



export default function Register() {
const [formData, setformData] = useState({name: '', email: '', password: ''})


const handleSubmit = async (e:FormEvent) => {
  e.preventDefault();
  // console.log(formData);

  try {
    const response = await axios.post('/api/auth/admin/register', formData);
    console.log(response.data, 'response');  
    if (response.data.success) {
      console.log('Registration successful!', response.data.user);
    } else {
      console.log('failed');
      console.error('Registration failed:', response.data.message);
    }
  
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
       Admin Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" name="name" type="text" id="name" label="Name" onChange={handleChange} value={formData.name} crossOrigin={''}/>
          <Input size="lg" label="Email" type="email" name="email" crossOrigin={''}  onChange={handleChange}  value={formData.email} />
          <Input type="password" size="lg" label="Password" name="password" onChange={handleChange}   value={formData.password} crossOrigin={''} />
        </div>
        
        <Button type="submit" className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="/admin/login" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
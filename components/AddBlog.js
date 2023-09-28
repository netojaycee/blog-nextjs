'use client'

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState  } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";

const AddBlog = () => {
    const router = useRouter();
    const [inputs, setInputs] = useState({});
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post('/api/auth/admin/blog', inputs)
        .then((res) => {
          console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        router.refresh();
      });
    };
  
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
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
          <Input size="lg" name="title" type="text" id="title" label="Title" onChange={handleChange} value={inputs.title} crossOrigin={''}/>
          <Input size="lg" label="Description" name="description" type="text" value={inputs.description} onChange={handleChange} crossOrigin={''} />
          <Input type="file" size="lg" label="Image" name="imageUrl" onChange={handleChange}   value={inputs.imageUrl || ""} crossOrigin={''} />
        </div>
        
        <Button type="submit" className="mt-6" fullWidth>
          Add Blog
        </Button>
       
      </form>
    </Card>
)

};

export default AddBlog;
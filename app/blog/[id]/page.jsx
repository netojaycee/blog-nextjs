'use client'
import React, { useEffect, useState } from 'react'
import CardBlog, { BlogCard } from '../../../components/BlogCard'
import { BlogCardDetail } from '../../../components/BlogCardDetail'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button, CardFooter,  } from '@material-tailwind/react';

export default function page() {
  const [blog, setBlog] = useState([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true); 
  const API = `/api/auth/admin/blog/${id}`

  useEffect(() => {
    const getPostById = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setBlog(data.blog);
        console.log(data.blog);
        setIsLoading(false);
        // const currentIndex = data.blog.findIndex((blog) => blog.id === id);
        // if (currentIndex !== -1) {
        //   setCurrentBlogIndex(currentIndex);
        // }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    getPostById(); // Fetch the data when the component mounts
  }, [id]);

  const handlePreviousClick = () => {
    // Assuming 'data' is an object with multiple blogs
    const blogKeys = Object.keys(blog);
    const currentIndex = blogKeys.indexOf(id);
    if (currentIndex > 0) {
      const previousBlogId = blogKeys[currentIndex - 1];
      setBlog(blog[previousBlogId]);
    }
  };

  const handleNextClick = () => {
    // Assuming 'data' is an object with multiple blogs
    const blogKeys = Object.keys(blog);
    const currentIndex = blogKeys.indexOf(id);
    if (currentIndex < blogKeys.length - 1) {
      const nextBlogId = blogKeys[currentIndex + 1];
      setBlog(blog[nextBlogId]);
    }
  };

  // if (isLoading) {
  //       // Render a loading spinner or placeholder while data is being fetched
  //       return <CircularProgress size="large" color="blue" />;
  //     }

  // useEffect(() => {
  //   // Fetch blog posts when the component mounts
  //   fetch(API)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Update the state with the fetched blog posts
  //       setBlog(data);
  //       console.log(data)
  //       console.log(blog[1].title)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching blog posts:', error);
  //     });
  // }, [id]);
  return (
    <div className="flex gap-4 w-full mb-40 lg:mb-4 lg:px-20 xl:60 underline-none ">
      <section className="w-full relative flex underline-none flex-col  relative bg-primary-500 mt-0">
        <div className="grid grid-cols-1 gap-10">
          {/* <CardBlog /> */}
          <BlogCardDetail
            // title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            createdAt={(new Date(blog.createdAt).to DateString("en-US"))} 
          />
          <CardFooter className="pt-0 flex justify-between gap-4 w-full">
            <Button
            onClick={handlePreviousClick}
              ripple={false}
              fullWidth={true}
              disabled={!blog.prevId}
              className="bg-blue-gray-900/10 text-blue-gray-900 w-fit shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Prev
            </Button>

            <Button
            onClick={handleNextClick}
              ripple={false}
              fullWidth={true}
              disabled={!blog.nextId}
              className="bg-blue-gray-900/10 text-blue-gray-900 w-fit shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Next
            </Button>
          </CardFooter>
        </div>
      </section>
    </div>
  )
}

// "use client"
// import React, { useEffect, useState } from 'react'
// import CardBlog, { BlogCard } from '../../../components/BlogCard'
// import { BlogCardDetail } from '../../../components/BlogCardDetail'
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// // import { Button, CardFooter } from '@material-tailwind/react';
// import { Button, CardFooter, CircularProgress } from '@material-tailwind/react';

// export default function Page() {
//   const [blog, setBlog] = useState({});
//   const [isLoading, setIsLoading] = useState(true); // Added loading state
//   const { id } = useParams();
//   const API = `/api/auth/admin/blog/${id}`;

//   useEffect(() => {
//     const getPostById = async () => {
//       try {
//         const res = await fetch(API);
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await res.json();
//         setBlog(data.blog);
//         setIsLoading(false); // Set loading to false when data is fetched
//       } catch (error) {
//         console.error('Error fetching blog post:', error);
//       }
//     };

//     getPostById(); // Fetch the data when the component mounts
//   }, [id]);

//   const handlePreviousClick = () => {
//     const blogKeys = Object.keys(blog);
//     const currentIndex = blogKeys.indexOf(id);
//     if (currentIndex > 0) {
//       const previousBlogId = blogKeys[currentIndex - 1];
//       setBlog(blog[previousBlogId]);
//     }
//   };

//   const handleNextClick = () => {
//     const blogKeys = Object.keys(blog);
//     const currentIndex = blogKeys.indexOf(id);
//     if (currentIndex < blogKeys.length - 1) {
//       const nextBlogId = blogKeys[currentIndex + 1];
//       setBlog(blog[nextBlogId]);
//     }
//   };

//   if (isLoading) {
//     // Render a loading spinner or placeholder while data is being fetched
//     return <CircularProgress size="large" color="blue" />;
//   }

//   return (
//     <div className="flex gap-4 w-full mb-40 lg:mb-4 lg:px-20 xl:60 underline-none">
//       <section className="w-full relative flex underline-none flex-col relative bg-primary-500 mt-0">
//         <div className="grid grid-cols-1 gap-10">
//           <BlogCardDetail
//             title={blog.title}
//             description={blog.description}
//             imageUrl={blog.imageUrl}
//             createdAt={blog.createdAt}
//           />
//           <CardFooter className="pt-0 flex justify-between gap-4 w-full">
//             <Button
//               onClick={handlePreviousClick}
//               ripple={false}
//               fullWidth={true}
//               className="bg-blue-gray-900/10 text-blue-gray-900 w-fit shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//               disabled={!blog.prevId} 
//             >
//               Prev
//             </Button>

//             <Button
//               onClick={handleNextClick}
//               ripple={false}
//               fullWidth={true}
//               className="bg-blue-gray-900/10 text-blue-gray-900 w-fit shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//               disabled={!blog.nextId}
//             >
//               Next
//             </Button>
//           </CardFooter>
//         </div>
//       </section>
//     </div>
//   );
// }


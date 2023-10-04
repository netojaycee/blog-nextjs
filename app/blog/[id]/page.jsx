import React from 'react'
import {BlogCardDetail} from '../../../components/BlogCardDetail'

function page({post}) {
  return (
    <div className="flex gap-4 w-full mb-40 lg:mb-4 lg:px-20 xl:60 underline-none ">
      <section className="w-full relative flex underline-none flex-col  relative bg-primary-500 mt-0">
        <div className="">
        <BlogCardDetail />

        </div>
       </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const response = await fetch(`/api/auth/admin/blog/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const post = await response.json();

    return {
      props: { post },
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      notFound: true,
    };
  }
}

export default BlogCardDetail;
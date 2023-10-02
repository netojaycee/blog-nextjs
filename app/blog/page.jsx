'use client'
import React from 'react'
import CardBlog, { BlogCard } from '../../components/BlogCard'

export default function page() {
  return (
    <div className="flex gap-4 w-full mb-40 lg:mb-4 lg:px-20 xl:60 underline-none ">
      <section className="w-full relative flex underline-none flex-col  relative bg-primary-500 mt-0">
      <h1 className='pt-10 pb-20 text-center font-bold text-primary lg:text-5xl'>From Our Blog</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* <CardBlog /> */}
          <BlogCard />
          <BlogCard />
          <BlogCard />  
          <BlogCard />  
        </div>
      </section>
    </div>
  )
}

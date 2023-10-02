'use client'
import React from 'react'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Mental from '../components/Home/Mental'
import Whats from '../components/Home/Whats'
import Faqs from '../components/Home/Faqs'

export default function Home() {
  return (
    <main className='lg:px-40'>
      
        <Hero />
        <Features />
        <Mental />
        <Whats />
        <Faqs/>
      
    </main>
  )
}

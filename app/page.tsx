'use client'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Mental from '../components/Home/Mental'
import Whats from '../components/Home/Whats'
import Faqs from '../components/Home/Faqs'
import Footer from '../components/Home/Footer'

export default function Home() {
  return (
    <main className=''>
      
        <Hero />
        <Features />
        <Mental />
        <Whats />
        <Faqs/>
        <Footer/>
      
    </main>
  )
}

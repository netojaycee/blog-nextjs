'use client'
import React from 'react'
import { PricingCard } from '../../components/PricingCard'

export default function page() {
  return (
    <>
    <div className='column'>
      <h2 className='p-11'>Pricing Plan</h2>
    <h3 className='page-title p-6'>mhapy is absolutely Free for Individuals</h3>
    <div className='p-6'>
    <p>Are you a psychotherapist with a private practice? Do you provide mental health support of any kind?</p>
    <p>All plans have a monthly payment schedule.</p>
    </div>
    </div>
      <div className='flex flex-row gap-11'>
      <PricingCard
          title="Basic Plan"
          headerColor="white"
          textColor="purple"
          headerVariant="gradient"
          items={[
            "Follow your clients progress",
          ]}
          price="120"
          buttonText="Contact Us" />

<PricingCard
          title="Api Plan"
          headerColor="white"
          textColor="purple"
          headerVariant="filled"
          items={[
            "Follow your clients progress",
            "Get your own chatbot on your website/app",
            "$0.01 per request",
          ]}
          price="300"
          buttonText="Contact Us" />


<PricingCard
          title="Premium Plan"
          headerColor="purple"
          textColor="white"
          headerVariant="filled"
          items={[
            "Follow your clients progress",
            "Get your own chatbot on your website/app",
            "$0.01 per request",
          ]}
          price="399"
          buttonText="Contact Us" />


    </div>
    </>
  )
}

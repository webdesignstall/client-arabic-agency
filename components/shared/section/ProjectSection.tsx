import SectionContainer from '@/components/SectionContainer'
import React from 'react'

export default function ProjectSection() {
  return (
    <SectionContainer>
      <div>
        <div className=''>
          <div className='w-full'>
            <h1 className='text-6xl font-bold py-6'>
              Our Project
            </h1>
            <p className='text-lg'>
              By providing a full range of AI Services, Andersen helps you create best-in-class software solutions that perfectly fit your needs. The results of our work are reflected in our case studies.
            </p>
          </div>
          <div className='flex'>
            <div className=' overflow-hidden'>
              <img className='w-full hover:scale-110 duration-300 cursor-pointer' src="https://plus.unsplash.com/premium_photo-1703775145710-3882623295b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className=' overflow-hidden'>
              <img className='w-full hover:scale-110 duration-300 cursor-pointer' src="https://plus.unsplash.com/premium_photo-1703775145710-3882623295b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
          <div className='grid grid-cols-3'>
            <div className=''>
              Helo
            </div>
            <div className='overflow-hidden col-span-2'>
              <img className='m-right hover:scale-110 duration-300 cursor-pointer' src="https://plus.unsplash.com/premium_photo-1703775145710-3882623295b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

  )
}

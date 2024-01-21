import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'
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
            <p className='text-lg pt-6'>
              By providing a full range of AI Services, Andersen helps you create best-in-class software solutions that perfectly fit your needs. The results of our work are reflected in our case studies.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-12 my-8'>
            <div>
              <div className='overflow-hidden h-[330px]'>
                <img className='hover:scale-110 duration-300 cursor-pointer' src="https://plus.unsplash.com/premium_photo-1703775145710-3882623295b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <p className='text-2xl font-semibold py-3'>
                A Data-Driven Medical Solution for a Skin-Care Provider
              </p>
            </div>
            <div>
              <div className='overflow-hidden h-[330px]'>
                <img className='hover:scale-110 duration-300 cursor-pointer' src="https://plus.unsplash.com/premium_photo-1703775145710-3882623295b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <p className='text-2xl font-semibold py-3'>
                A Data-Driven Medical Solution for a Skin-Care Provider
              </p>
            </div>
          </div>
          <div className='grid grid-cols-5'>
            <div className='flex justify-center col-span-2 flex-col pr-4'>
              <div className='py-4 text-2xl font-semibold text-gray-500 hover:text-gray-900 duration-300 cursor-pointer'>
                PARABE//UM
              </div>
              <div className='text-3xl font-semibold'>
                A Marketing Analytics Platform
              </div>
            </div>
            <div className='overflow-hidden col-span-3'>
              <img className='m-right hover:scale-110 duration-300 cursor-pointer' src="https://plus.unsplash.com/premium_photo-1703775145710-3882623295b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

  )
}

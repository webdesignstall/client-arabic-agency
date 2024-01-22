import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import { Star } from 'lucide-react';


export default function RatingSection() {
  return (
    <SectionContainer>
      <div>
        <div className=' grid grid-cols-12'>
          <div className='text-xl font-light lg:text-[2.25rem] lg:font-semibold col-span-12  lg:col-span-8 lg:leading-[3rem] max-w-3xl'>
            Elevate your success with efficient custom AI solutions sculpted by our expert team with vast expertise.
          </div>
          <div className='border-r'>

          </div>
          <div className='pl-6 pt-4 lg:col-span-3 col-span-6 h-20 bg-cover bg-[url("https://static.andersenlab.com/andersenlab/new-andersensite/icons/logos/clutch-top-info-tech-white.svg")]'>
            <div className='flex justify-center items-center space-x-6'>
              <div className='brightness-50 shrink-0'>
                <img className='w-24 h-24' src="https://static.andersenlab.com/andersenlab/new-andersensite/icons/logos/clutch-top-info-tech-white.svg" alt="" />
              </div>
              <div className='space-y-2'>
                <div className='uppercase font-semibold text-sm lg:text:lg'>49 on clutch</div>
                <div className='flex'>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p className='text-sm lg:text-lg'>100+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

  )
}

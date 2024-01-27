import SectionContainer from '@/components/SectionContainer'
import React from 'react'
import {translate} from "@/utility/translate";
// @ts-ignore
export default function AboutSection({homeData}) {
  return (
    <SectionContainer>
      <div>
        <div>
          <div>
            <h1 className='lg:text-6xl text-3xl font-semibold py-2'>
              
            {translate(homeData, 'thinkAboutSectionTitle')}
            </h1>
          </div>
          <div className='pt-4'>
            <p className='text-xl font-medium'>
            {translate(homeData, 'thinkAboutSectionDescription')}
            </p>
          </div>
        </div>
        <div>
          <div className='grid lg:grid-cols-5'>
            <div className='col-span-3'>
              <div className='py-6'>
                <p className='text-gray-700'>Featured</p>
              </div>
              <div>
                <div className='overflow-hidden w-full'>
                  <img className='hover:scale-110 duration-300 cursor-pointer' src="https://images.ctfassets.net/96fo3urb6c1x/43YeIB1s8jWoELHtBTiH4W/09995f84f69957cff8d393106404710c/covid-and-health-it_2x.jpg?w=1640&h=680&q=100&fm=webp" alt="" />
                </div>
                <div>
                  <p className='text-xl py-3 hover:underline cursor-pointer'>Why Customize AI Software</p>
                  <p className='text-lg py-1'>What miraculous AI apps are, and how to capitalize on them</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 pl-16'>
              <div className='py-6'>
                <p className='text-gray-700 text-lg font-semibold'>Latest updates</p>
              </div>
              <div className='overflow-y-auto h-[25rem]'>
                {
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
                    <div key={index} className='space-y-8 hover:shadow-xl duration-300 cursor-pointer bg-gray-50 p-5 my-3 mx-1'>
                      <p className='text-lg font-medium'>Predictive Analytics in Healthcare</p>
                      <div className='w-full flex justify-between'>
                        <p>627 views</p>
                        <button className=' border-b items-end border-gray-800 font-semibold'>See more</button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

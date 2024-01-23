import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import { Star } from 'lucide-react';
import {translate} from "@/utility/translate";


// @ts-ignore
export default function RatingSection({homeData}) {
  return (
    <SectionContainer>
      <div>
        <div className=' grid grid-cols-12'>
          <div className='text-xl font-light lg:text-[2.25rem] lg:font-semibold col-span-7 lg:col-span-8 leading-[3rem] max-w-3xl'>
            {translate(homeData, 'heroSectionDescription')}
          </div>
          <div className='border-r'>

          </div>
          <div className='pl-6 lg:col-span-3 h-20 bg-cover bg-[url("https://static.andersenlab.com/andersenlab/new-andersensite/icons/logos/clutch-top-info-tech-white.svg")]'>
            <div className='flex justify-center items-center space-x-6'>
              <div className='brightness-50 shrink-0'>
                <img className='w-24 h-24' src={`${process.env.NEXT_PUBLIC_BACKED_BASE}${ homeData?.clutchTopInfo?.data?.attributes?.url}`} alt="" />
              </div>
              <div className='space-y-2'>
                <img className='w-24 h-24' src={`${process.env.NEXT_PUBLIC_BACKED_BASE}${ homeData?.clutchReviewStar?.data?.attributes?.url}`} alt="" />
                {/*<div className='uppercase font-semibold'>49 on clutch</div>
                <div className='flex'>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p>100+ reviews</p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

  )
}
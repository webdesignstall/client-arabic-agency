import SectionContainer from '@/components/SectionContainer'
import React from 'react'

export default function RatingSection() {
  return (
    <SectionContainer>
      <div>
        <div className=' grid grid-cols-7'>
          <div className='text-4xl font-semibold col-span-5 leading-snug border-r max-w-3xl'>
            Elevate your success with efficient custom AI solutions sculpted by our expert team with vast expertise.
          </div>
          <div className='w-20 h-20 bg-cover bg-[url("https://static.andersenlab.com/andersenlab/new-andersensite/icons/logos/clutch-top-info-tech-white.svg")]'>

          </div>
        </div>
      </div>
    </SectionContainer>

  )
}

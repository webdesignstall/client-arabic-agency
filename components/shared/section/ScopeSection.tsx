import SectionContainer from '@/components/SectionContainer'
import React from 'react'

export default function ScopeSection() {
  return (
    <SectionContainer>
      <div>
        <div>
          <div>
            <h1 className='text-2xl lg:text-5xl font-bold py-6'>
              Andersen's AI Development scope
            </h1>
          </div>
          <div>
            <div className='flex-wrap justify-center grid grid-cols-3'>
              {
                ['Generate Ai', 'Nuture language processing', 'Advance data analice', 'computer version', 'Space recognation', 'Robotics'].map((item, index) => (
                  <div key={index} className='flex justify-center items-center text-xl font-semibold  h-60 m-3 bg-gray-50 hover:shadow-xl duration-300 cursor-pointer relative before:absolute before:bottom-0 before:border-b-4 before:w-0 before:border-purple-700 before:hover:w-full before:duration-300 hover:bg-white before:left-0'>
                    <div className=''>
                      {item}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

  )
}
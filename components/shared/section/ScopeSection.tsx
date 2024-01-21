import SectionContainer from '@/components/SectionContainer'
import React from 'react'

export default function ScopeSection() {
  return (
    <SectionContainer>
      <div id='scope'>
        <div>
          <div>
            <h1 className='text-2xl lg:text-6xl font-bold py-6'>
              Andersen's AI Development scope
            </h1>
          </div>
          <div className='pt-10'>
            <div className='flex-wrap justify-center grid grid-cols-3'>
              {
                ['Generate Ai', 'Nuture language processing', 'Advance data analice', 'computer version', 'Space recognation', 'Robotics'].map((item, index) => (
                  <div key={index} className='scrop h-44 m-3 bg-gray-50 hover:shadow-xl duration-300 cursor-pointer relative before:absolute before:bottom-0 before:border-b-4 before:w-0 before:border-purple-700 before:hover:w-full before:duration-300 hover:bg-white before:left-0'>
                    <div className='duration-300 text-2xl font-semibold scrop-list absolute flex justify-center items-center w-full h-full'>
                      {item}
                    </div>
                    <div className='duration-300 px-6 py-4 text-md overflow-hidden justify-normal absolute opacity-0 scrop-hidden'>
                      Lorem ipsum dolor sit am quao libero quam us dolorem? Dolores incidunt similique eum distinctio tenetur illo veritatis doloremque laboriosam error nesciunt.
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
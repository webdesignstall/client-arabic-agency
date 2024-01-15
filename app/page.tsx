import WidthContainer from '@/components/WidthContainer'
import React from 'react'

export default function page() {
  return (
    <WidthContainer>
      <div className='h-[1000vh]'>
        <div className={` opacity-0 bg-[#4b4a4a96] absolute top-0`}>
          <div className=''>
            <ul className='flex'>
              {
                ['Home', 'Project', 'Product', 'Management'].map((item, index) => (
                  <li key={index} className={`text-white text-lg font-semibold py-4 px-5 backdrop-blur-md cursor-pointer ${index ? 'hover:text-purple-800' : ''} `}>
                    {item}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div>
          <div className=' bg-cover h-[95vh] bg-[url("https://images.unsplash.com/photo-1704658492989-e4a4d1db44ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
            <div className='h-full flex w-full items-end bg-gradient-to-t from-black from-0.5%  via-transparent via-30% to-transparent to-90%'>
              <div className='w-full py-16 ml-12'>
                <h1 className='text-7xl text-white font-bold'>AI Software Development</h1>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className='bg-white max-w-[1330px] m-auto grid grid-cols-7 px-24 py-12 my-6'>
            <div className='text-4xl font-semibold col-span-5 leading-snug border-r max-w-3xl'>
              Elevate your success with efficient custom AI solutions sculpted by our expert team with vast expertise.
            </div>
            <div className='w-20 h-20 bg-cover bg-[url("https://static.andersenlab.com/andersenlab/new-andersensite/icons/logos/clutch-top-info-tech-white.svg")]'>

            </div>
          </div>
          <div className='bg-white max-w-[1330px] m-auto px-24 py-16 my-6'>
            <div>
              <h1 className='text-center text-6xl font-bold'>
                Andersen's AI Development scope
              </h1>
            </div>
            <div>
              <div className='flex flex-wrap justify-center'>
                {
                  ['Generate Ai', 'Nuture language processing', 'Advance data analice', 'computer version', 'Space recognation', 'Robotics'].map((item, index) => (
                    <div key={index} className='w-80 text-lg font-semibold flex h-60 m-3 justify-center items-center bg-gray-50 hover:shadow-xl duration-300 cursor-pointer relative before:absolute before:bottom-0 before:border-b-4 before:w-0 before:border-purple-700 before:hover:w-80 before:duration-300 hover:bg-white before:left-0'>
                      <div className=''>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad reiciendis, harum aliquid in accusamus, earum id tenetur necessitatibus porro, veniam numquam</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </main>
      </div>
    </WidthContainer>
  )
}

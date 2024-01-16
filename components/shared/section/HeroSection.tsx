import React from 'react'

export default function HeroSection() {
  return (
    <div>
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
          <div className='h-full flex w-full items-end bg-gradient-to-t from-[#020d1c] from-0.5%  via-transparent via-30% to-transparent to-90%'>
            <div className='w-full py-16 ml-12'>
              <h1 className='text-7xl text-white font-bold'>AI Software Development</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

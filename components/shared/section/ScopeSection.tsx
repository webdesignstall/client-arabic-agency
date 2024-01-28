import SectionContainer from '@/components/SectionContainer'
import { translate } from '@/utility/translate';
import axios from 'axios';
import { useEffect, useState } from 'react';

// @ts-ignore

export default function ScopeSection({homeData}) {
  const [homeSectionOne, setHomeSectionOne] = useState([]);

  useEffect(()=>{
    ( async ()=>{
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-ones?populate=*`);
      setHomeSectionOne(data?.data)
    })()

  }, [])
  console.log(homeSectionOne);
  return (
    <SectionContainer>
      <div id='scope'>
        <div>
          <div>
            <h1 className='text-2xl lg:text-6xl font-bold py-6'>
            {
              translate(homeData, 'homeSectionOneTitle')
            }
            </h1>
          </div>
          <div className='pt-10'>
            <div className='lg:grid grid-cols-3'>
              {
                // ['Generate Ai', 'Nuture language processing', 'Advance data analice', 'computer version', 'Space recognation', 'Robotics']
                homeSectionOne.map((item, index) => (
                  <div key={index} className='scrop h-44 m-3 bg-gray-50 hover:shadow-xl duration-300 cursor-pointer relative before:absolute before:bottom-0 before:border-b-4 before:w-0 before:border-[#23beec] before:hover:w-full before:duration-300 hover:bg-white before:left-0'>
                    <div className='duration-300 text-2xl font-semibold scrop-list absolute flex justify-center items-center w-full h-full'>
                    {
                    // @ts-ignore
                        translate(item?.attributes,"title" )
                      }
                    </div>
                    <div className='duration-300 px-6 py-4 text-md overflow-hidden justify-normal absolute opacity-0 scrop-hidden'>
                    {
                      // @ts-ignore
                        translate(item?.attributes,"description" )
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='md:grid grid-cols-5 items-center shadow-lg mt-2 md:mt-5 p-10'>
            <h1 className='col-span-3 text-lg text-center md:text-left md:text-3xl font-bold'>
            Select professional IT services for your software development project.
            </h1>
            <div className='col-span-2 flex items-center justify-center pl-3'>
              <button className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded'>Request services</button>
          </div>
          </div>
        </div>
      </div>
    </SectionContainer>

  )
}
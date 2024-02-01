import SectionContainer from '@/components/SectionContainer'
import React, {useEffect, useState} from 'react'
import { translate } from "@/utility/translate";
import { useLocalization } from '@/context/LocalizeProvider';

import axios from "axios";
import Link from "next/link";

// @ts-ignore
export default function AboutSection({ homeData }) {
  const { locale, switchLocale } = useLocalization();

  const [homeSectionSeven, setHomeSectionSeven] = useState([]);
  const [feature, setFeature] = useState({});

  useEffect(() => {
    // @ts-ignore
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-sevens?populate=*&pagination[limit]=8&sort[0]=createdAt:desc`);
      setHomeSectionSeven(data?.data)
      setFeature(data?.data[0]?.attributes)

    })()

  }, [])


  // @ts-ignore
  return (
    <SectionContainer>
      <div>
        <div>
          <div>
            <h1 className={`lg:text-6xl text-3xl font-semibold ${locale === 'en' ? '' : 'rtl'}`}>
              {translate(homeData, 'homeSectionSevenTitle')}
            </h1>
          </div>
          <div className='pt-4'>
            <p className={`pt-6 lg:text-xl text-lg font-medium ${locale === 'en' ? '' : 'rtl'} `}>
              {translate(homeData, 'homeSectionSevenDescription')}
            </p>
          </div>
        </div>
        <div>
          <div className='grid lg:grid-cols-5'>
            <div className='col-span-3'>
              <div className='py-6'>
                <p className='text-gray-700'>Featured
                    
                {
                  locale !== 'en' ? 'متميز' : 'Featured'
                }
                
                </p>
              </div>
              {
                // @ts-ignore
                Object?.keys(feature)?.length === 0 ? '' :
                    <div>
                      <div className='overflow-hidden w-full'>
                        <img className='hover:scale-110 duration-300 cursor-pointer' src="https://images.ctfassets.net/96fo3urb6c1x/43YeIB1s8jWoELHtBTiH4W/09995f84f69957cff8d393106404710c/covid-and-health-it_2x.jpg?w=1640&h=680&q=100&fm=webp" alt="" />
                      </div>
                      <div>
                        <Link href={`/see-more/${
                            // @ts-ignore
                            homeSectionSeven[0]?.id}`}>
                          <p className='text-xl py-3 hover:underline cursor-pointer'>{
                            // @ts-ignore
                            translate(homeSectionSeven[0]?.attributes, 'title')
                          }</p>
                        </Link>

                        <p className='text-lg py-1'>{
                          // @ts-ignore
                          translate(homeSectionSeven[0]?.attributes, 'designation')
                        }</p>
                      </div>
                    </div>
              }

            </div>
            <div className='lg:col-span-2 col-span-5 lg:pl-16'>
              <div className='py-6'>
                <p className='text-gray-700 text-lg font-semibold'>
                
                {
                  locale !== 'en' ? 'آخر التحديثات' : 'Latest updates'
                }
                
                </p>
              </div>
              <div className='overflow-y-auto h-[25rem]'>
                {
                  homeSectionSeven?.map((item, index) => (
                    <div key={index} className='space-y-8 hover:shadow-xl duration-300 cursor-pointer bg-gray-50 p-5 my-3 mx-1'>
                      <p className='text-lg font-medium'>{
                        // @ts-ignore
                        translate(item?.attributes, 'title')
                      }</p>
                      <div className='w-full flex justify-between'>


                        <Link href={`/see-more/${
                            // @ts-ignore
                          item?.id}`}>
                          <button className=' border-b items-end border-gray-800 font-semibold'>
                          {
                  locale !== 'en' ? 'شاهد المزيد' : 'See more'
                }
                            </button>
                        </Link>
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

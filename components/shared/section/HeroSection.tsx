'use client'
import React, {useEffect, useState} from 'react'
import axios from "axios";
import { translate } from '@/utility/translate';

// @ts-ignore
export default function HeroSection({homeData}) {

  /*const [heroSection, setHeroSection] = useState([]);

  useEffect(()=>{
    ( async ()=>{
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/hero-sections?populate=*`);
      setHeroSection(data?.data[0]?.attributes)
    })()

  }, [])

    // @ts-ignore
    const imageUrl = `${process.env.NEXT_PUBLIC_BACKED_BASE}${heroSection?.heroBackgroundImage?.data?.attributes?.formats?.large?.url}`;*/

    return (
        <div>
          <div>
            <div className={`m-auto bg-cover h-[40vh] lg:h-[95vh] bg-[url("https://images.unsplash.com/photo-1704658492989-e4a4d1db44ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]`}>
              <div className='h-full flex w-full justify-center items-end bg-gradient-to-t from-[#020d1c] from-0.5%  via-transparent via-30% to-transparent to-90%'>
                <div className='w-full lg:py-16 ml-12 max-w-7xl'>
                  <h1 className='text-3xl lg:text-7xl text-white lg:font-bold'>
                    {
                      translate(homeData, 'herotitle')
                    }
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

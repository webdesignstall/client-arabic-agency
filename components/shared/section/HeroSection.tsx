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
            <div className={`relative m-auto bg-cover h-[40vh] lg:h-[95vh] bg-[url("https://images.unsplash.com/photo-1704658492989-e4a4d1db44ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]`}>
              <div className='h-full flex w-full justify-center items-end bg-gradient-to-t from-[#020d1c] from-0.5%  via-transparent via-30% to-transparent to-90%'>
                <div className='w-full lg:py-16 ml-12 max-w-7xl'>
                  <h1 className='text-3xl lg:text-7xl text-white lg:font-bold'>
                    {
                      translate(homeData, 'herotitle')
                    }
                  </h1>
                </div>
              </div>
              <div className='absolute top-24 right-20 flex items-center gap-3'>
                <svg className="BookingButton-module--phoneIcon--8bae7 Icon-module--icon--c95f8 w-4 text-[#23beec]" fill="none" viewBox="0 0 16 27"><path fill="#ffdb00" d="M13.68 0H2.32A1.965 1.965 0 00.355 1.967v23.068C.355 26.12 1.233 27 2.32 27h11.36c1.085 0 1.965-.88 1.965-1.965V1.967C15.645.882 14.765 0 13.68 0zM8 25.059a1.254 1.254 0 110-2.509 1.254 1.254 0 010 2.509zm6.173-4.299H1.828V3.32h12.345V20.76z"></path></svg>
                <button className='text-[#23beec]'>Book a call</button>
            </div>
            </div>
          </div>
        </div>
    )
}
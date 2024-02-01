'use client'
// components/Carousel.tsx
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionContainer from '@/components/SectionContainer';
import { translate } from "@/utility/translate";
import { useLocalization } from '@/context/LocalizeProvider';
import axios from "axios";
import Link from 'next/link';
const SampleNextArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute right-0 top-36 z-30 cursor-pointer hidden lg:flex'
    onClick={onClick}
  >
    <ChevronRight className='text-white' size={40} strokeWidth={1} />
  </div>
);

const SamplePrevArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute left-0 top-36 z-30 cursor-pointer hidden lg:flex'
    onClick={onClick}
  >
    <ChevronLeft className='text-white' size={40} strokeWidth={1} />
  </div>
);

// @ts-ignore
const CompnarySection: React.FC<any> = ({ homeData }) => {

  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]

  };


  const { locale, switchLocale } = useLocalization();

  const [homeSectionSix, setHomeSectionSix] = useState([]);


  useEffect(() => {
    // @ts-ignore
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-sixs?populate=*`);
      setHomeSectionSix(data?.data)
    })()

  }, [])



  return (
    <div id="section6" className='lg:max-w-7xl m-auto'>
      <div id='technologies'>
        <div>
          <div className='py-2'>
            <h1 className={`lg:text-6xl text-3xl font-semibold text-white ${locale === 'en' ? '' : 'rtl'}`}>
              {translate(homeData, 'homeSectionSixTitle')}
            </h1>
          </div>
          <div>
            <p className={`pt-6 lg:text-xl text-lg font-medium text-gray-200 ${locale === 'en' ? '' : 'rtl'} `}>
              {translate(homeData, 'homeSectionSixDescription')}
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <Slider className='lg:px-12' {...settings}>
            {
              Array.from(homeSectionSix).map((item: any, index: any) => (
                <div key={index} className='h-[32rem] rounded-36 cur'>
                  <div className='mx-3'>
                    <div>
                      <Link href={`${item?.attributes?.videourl}`}>
                        <img className='w-full h-[16rem] bg-cover object-cover' src={
                          // @ts-ignore
                          process.env.NEXT_PUBLIC_BACKED_BASE + item?.attributes?.thumbnail?.data?.attributes?.formats?.thumbnail?.url
                        } alt="" />
                      </Link>
                    </div>
                    <div className='p-6 bg-[#25303e]'>
                      <div>
                        <h3 className='text-2xl font-semibold py-3 text-white'>{
                          // @ts-ignore
                          translate(item?.attributes, 'title').slice(0, 40)
                        }...</h3>
                        <p className='text-gray-400 text-md'>{
                          // @ts-ignore
                          translate(item?.attributes, 'description').slice(0, 150)
                        }...</p>
                        <p className='pt-4 text-white'>{
                          // @ts-ignore
                          translate(item?.attributes, 'date')
                        }</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
};



export default CompnarySection;


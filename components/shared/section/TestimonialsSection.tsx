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
import axios from "axios";
import { useLocalization } from '@/context/LocalizeProvider';



const SampleNextArrow: React.FC<any> = ({ className, style, onClick, }) => (
  <div
    className='absolute right-0 top-28 z-30 cursor-pointer hidden lg:flex'
    onClick={onClick}
  >
    <ChevronRight className='text-black' size={40} strokeWidth={1} />
  </div>
);

const SamplePrevArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute left-0 top-28  z-30 cursor-pointer hidden lg:flex'
    onClick={onClick}
  >
    <ChevronLeft className='text-black' size={40} strokeWidth={1} />
  </div>
);

// @ts-ignore
const TestimonialsSection: React.FC<any> = ({ homeData }) => {

  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

  };

  const [homeSectionFive, setHomeSectionFive] = useState([]);

  useEffect(() => {
    // @ts-ignore
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-5s?populate=*`);
      setHomeSectionFive(data?.data)
    })()

  }, [])


  const { locale, switchLocale } = useLocalization();
  return (
    <SectionContainer>
      <div id='testimonials'>
        <div>
          <div className='py-2'>
            <h1 className={`lg:text-6xl text-3xl font-semibold ${locale === 'en' ? '' : 'rtl'}`}>
              {translate(homeData, 'homeSectionFiveTitle')}
            </h1>
          </div>
          <div>
            <p className={`pt-6 text-xl font-medium ${locale === 'en' ? '' : 'rtl'}`}>
              {translate(homeData, 'homeSectionFiveDescription')}
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <Slider className='lg:px-12' {...settings}>
            {
              homeSectionFive?.map((item, i) => (
                <div style={{display: 'inline-flex !importent'}} key={i} className={`flex ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
                  <div className={`lg:w-1/2 inline-block`}>
                    <div>
                      <div>
                        <h3 className={`text-2xl font-semibold ${locale === 'en' ? '' : 'rtl'}`}>
                          {
                            // @ts-ignore
                            translate(item?.attributes, 'title')
                          }
                        </h3>
                        <p className={`py-6 text-gray-600 ${locale === 'en' ? '' : 'rtl'}`}>
                          {
                            // @ts-ignore
                            translate(item?.attributes, 'details')
                          }
                        </p>
                        <div className='flex'>
                          <div>
                            <img width={60} src={
                              // @ts-ignore
                              process.env.NEXT_PUBLIC_BACKED_BASE + item?.attributes?.photo?.data?.attributes?.url
                            } alt="" />
                          </div>
                          <div className='px-6'>
                            <p className=' font-semibold'>
                              {
                                // @ts-ignore
                                translate(item?.attributes, 'name')
                              }
                            </p>
                            <p className='text-gray-600'>
                              {
                                // @ts-ignore
                                translate(item?.attributes, 'designation')
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-1/2 inline-block'>
                    <div className='absolute top-0 mr-8 w-[30rem]'>
                      <div className='p-12 bg-gray-100 ml-10'>
                        <div>
                          <div>
                            <img width={100} src={
                              // @ts-ignore
                              process.env.NEXT_PUBLIC_BACKED_BASE + item?.attributes?.logo?.data?.attributes?.url
                            } alt="" />
                          </div>
                          <div>
                            <p className='text-gray-600 text-md pt-4'>Project</p>
                            <p className='text-xl font-semibold py-3'>
                              {
                                // @ts-ignore
                                translate(item?.attributes, 'ProjectName')
                              }
                            </p>
                          </div>
                          <div>
                            <p className='font-semibold'>Country</p>

                            <p className='text-gray-600 flex items-center gap-2'>
                              <img width={20} src={
                                // @ts-ignore
                                process.env.NEXT_PUBLIC_BACKED_BASE + item?.attributes?.countryFlag?.data?.attributes?.url
                              } alt="" />
                              {
                                // @ts-ignore
                                translate(item?.attributes, 'countryName')
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </SectionContainer>
  );
};



export default TestimonialsSection;

'use client'
// components/Carousel.tsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionContainer from '@/components/SectionContainer';

const SampleNextArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute right-0 top-28 z-30'
    onClick={onClick}
  >
    <ChevronRight className='text-white' size={40} strokeWidth={1} />
  </div>
);

const SamplePrevArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute left-0 top-28  z-30'
    onClick={onClick}
  >
   <ChevronLeft className='text-white' size={40} strokeWidth={1} />
  </div>
);


const InterviewSection: React.FC = () => {

  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

  };


  return (
      <div className=' lg:max-w-7xl m-auto py-16 my-6 px-20'>
        <div>
          <div>
            <h1 className='text-6xl font-bold leading-relaxed text-white'>Check out Andersen's video interviews</h1>
          </div>
          <div>
            <p className='pt-6 text-white text-xl font-semibold'>
            Andersen regularly provides a great opportunity to learn something new by interviewing the world's leading experts and opinion leaders from various scientific and business domains.
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <Slider className='px-20' {...settings}>
            {
              [1,2,3,4,5,6,7,8,9,10].map((item, i)=>(
                <div key={i} className='border h-72'>
                  <h3 className='flex justify-center items-center'>{item}</h3>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
  );
};



export default InterviewSection;

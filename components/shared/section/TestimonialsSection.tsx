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
    <ChevronRight className='text-black' size={40} strokeWidth={1} />
  </div>
);

const SamplePrevArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute left-0 top-28  z-30'
    onClick={onClick}
  >
   <ChevronLeft className='text-black' size={40} strokeWidth={1} />
  </div>
);


const TestimonialsSection: React.FC = () => {

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


  return (
    <SectionContainer>
      <div>
        <div>
          <div>
            <h1 className='text-5xl font-semibold'>Testimonials</h1>
          </div>
          <div>
            <p className='pt-6 text-xl font-semibold'>
            SMB, enterprise, and startup customers return to our software company because they’re satisfied with our work. Here is what they say about Andersen.
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <Slider className='px-20' {...settings}>
            {
              [1,2,3,4,5,6,7,8,9,10].map((item, i)=>(
                <div key={i} className='border h-72'>
                  <h3 className='flex justify-center items-center w-full h-full text-4xl font-semibold'>{item}</h3>
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

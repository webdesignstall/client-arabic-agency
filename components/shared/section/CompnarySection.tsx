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
    className='absolute right-0 top-12 z-30'
    onClick={onClick}
  >
    <ChevronRight className='text-gray-500' size={40} strokeWidth={1} />
  </div>
);

const SamplePrevArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute left-0 top-12  z-30'
    onClick={onClick}
  >
   <ChevronLeft className='text-gray-500' size={40} strokeWidth={1} />
  </div>
);


const Carousel: React.FC = () => {

  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

  };


  return (
    <SectionContainer>
      <div>
        <div>
          <div>
            <h1 className='text-5xl font-semibold'>AI technologies with Andersen</h1>
          </div>
          <div>
            <p className='pt-6'>
              Engage Andersen's AI engineers for your software initiatives. Delegate the design of AI-driven IT solutions serving as the central business logic for complex systems. These systems will then be able to automate resolution processes for intricate tasks, including grouping, classification, regression, and clustering. The niches we work in include Natural Language Processing, Computer Vision, AI planning, and more.
            </p>
          </div>
        </div>
        <div className='my-8'>
          <Slider className='px-16' {...settings}>
            {
              [1,2,3,4,5,6,7,8,9,10,11].map((item)=>(
                <div className='border p-16'>
                  <h3 className='flex justify-center items-center h-full w-full'>{item}</h3>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </SectionContainer>
  );
};



export default Carousel;

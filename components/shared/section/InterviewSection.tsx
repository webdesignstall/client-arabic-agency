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
    className='absolute right-0 top-36  cursor-pointer  z-30'
    onClick={onClick}
  >
    <ChevronRight className='text-white' size={40} strokeWidth={1} />
  </div>
);

const SamplePrevArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute left-0 top-36 cursor-pointer  z-30'
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
    <div className='lg:max-w-7xl m-auto py-16 my-6 px-20'>
      <div>
        <div>
          <h1 className='text-6xl font-bold text-white'>Check out Andersen's video interviews</h1>
        </div>
        <div>
          <p className='pt-6 text-white text-xl font-medium'>
            Andersen regularly provides a great opportunity to learn something new by interviewing the world's leading experts and opinion leaders from various scientific and business domains.
          </p>
        </div>
      </div>
      <div className='mt-8'>
        <Slider className='px-12' {...settings}>
          {
            items.map((item, i) => (
              <div key={i} className='h-[32rem] rounded-36 cur'>
                <div className='mx-3'>
                  <div>
                    <img className='w-full' src="https://cdn-useast1.kapwing.com/static/-y_-Convert-Image-to-Video-(1).webp" alt="" />
                  </div>
                  <div className='p-6 bg-[#25303e]'>
                    <div>
                      <h3 className='text-2xl font-semibold py-3 text-white'>{item.header}</h3>
                      <p className='text-gray-400 text-md'>{item.desc}</p>
                      <p className='pt-4 text-white'>{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};



export default InterviewSection;


const items = [
  {
    header: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
  {
    header: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
  {
    header: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
  {
    header: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
  {
    header: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
  {
    header: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
]
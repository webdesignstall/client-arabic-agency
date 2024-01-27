'use client'
// components/Carousel.tsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionContainer from '@/components/SectionContainer';
import {translate} from "@/utility/translate";
const SampleNextArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute right-0 top-36  cursor-pointer  z-30 hidden lg:flex'
    onClick={onClick}
  >
    <ChevronRight className='text-white' size={40} strokeWidth={1} />
  </div>
);

const SamplePrevArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute left-0 top-36 cursor-pointer  z-30 hidden lg:flex'
    onClick={onClick}
  >
    <ChevronLeft className='text-white' size={40} strokeWidth={1} />
  </div>
);

// @ts-ignore
const InterviewSection: React.FC<any> = ({homeData}) => {

  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]

  };


  return (
    <div className='lg:max-w-7xl m-auto lg:py-16 my-6 lg:px-20 py-12 px-4'>
      <div>
        <div>
          <h1 className='lg:text-6xl text-3xl font-bold  text-white'> 
          {translate(homeData, 'videoInterviewsSectionTitle')}
          </h1>
        </div>
        <div>
          <p className='pt-6 text-white lg:text-xl text-lg font-medium'>  
          {translate(homeData, 'videoInterviewsSectionDescription')}
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
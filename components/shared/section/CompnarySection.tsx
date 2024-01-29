'use client'
// components/Carousel.tsx
import React, {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionContainer from '@/components/SectionContainer';
import {translate} from "@/utility/translate";
import { useLocalization } from '@/context/LocalizeProvider';
import axios from "axios";
const SampleNextArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute right-0 top-16 z-30 cursor-pointer hidden lg:flex'
    onClick={onClick}
  >
    <ChevronRight className='text-black' size={40} strokeWidth={1} />
  </div>
);

const SamplePrevArrow: React.FC<any> = ({ className, style, onClick }) => (
  <div
    className='absolute left-0 top-16  z-30 cursor-pointer hidden lg:flex'
    onClick={onClick}
  >
    <ChevronLeft className='text-black' size={40} strokeWidth={1} />
  </div>
);

// @ts-ignore
const CompnarySection: React.FC<any> = ({homeData}) => {

  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
    ]

  };


  const { locale, switchLocale } = useLocalization();

  const [homeSectionFour, setHomeSectionFour] = useState([]);

  useEffect(()=>{
    // @ts-ignore
    ( async ()=>{
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-fours?populate=*`);
      setHomeSectionFour(data?.data)
    })()

  }, [])



  return (
    <SectionContainer>
      <div id='technologies'>
        <div>
          <div className='py-2'>
            <h1 className={`lg:text-6xl text-3xl font-semibold ${locale === 'en' ? '' : 'rtl'}`}>
            {translate(homeData, 'homeSectionFourTittle')}
            </h1>
          </div>
          <div>
            <p className={`pt-6 lg:text-xl text-lg font-medium ${locale === 'en' ? '' : 'rtl'} `}>
              
            {translate(homeData, 'homeSectionFourDescription')}
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <Slider className='lg:px-12' {...settings}>
            {
              homeSectionFour?.map((item, i) => (
                <div key={i} className='p-12'>
                  <div>
                    <img className='w-[100px] h-[50px]' src={
                      // @ts-ignore
                      process.env.NEXT_PUBLIC_BACKED_BASE+item?.attributes?.technologies?.data[0]?.attributes?.url
                    } alt="" />
                  </div>
                  <div className='pt-6 text-center'>
                    <p>{
                      // @ts-ignore
                      translate(item?.attributes, 'name')
                    }</p>
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



export default CompnarySection;


const items = [
  {
    icon: 'https://static.andersenlab.com/andersenlab/new-andersensite/icons/technologies/tensorflow.svg',
    title: 'Tensorflow'
  },
  {
    icon: 'https://static.andersenlab.com/andersenlab/new-andersensite/icons/technologies/pytorch.svg',
    title: 'pytorch'
  },
  {
    icon: 'https://static.andersenlab.com/andersenlab/new-andersensite/icons/technologies/keras.svg',
    title: 'keras'
  },
  {
    icon: 'https://static.andersenlab.com/andersenlab/new-andersensite/icons/technologies/scipy.svg',
    title: 'scipy'
  },
  {
    icon: 'https://static.andersenlab.com/andersenlab/new-andersensite/icons/technologies/theano.svg',
    title: 'theano'
  },
  {
    icon: 'https://static.andersenlab.com/andersenlab/new-andersensite/icons/technologies/theano.svg',
    title: 'theano'
  },
  {
    icon: 'https://static.andersenlab.com/andersenlab/new-andersensite/icons/technologies/scikit-learn.svg',
    title: 'scikit'
  },
  {
    icon: 'https://static.andersenlab.com/andersenlab/new-andersensite/icons/technologies/nltk.svg',
    title: 'nltk'
  },
  {
    icon: 'https://static.andersenlab.com/andersenlab/new-andersensite/icons/technologies/openCV.svg',
    title: 'openCV'
  },
]
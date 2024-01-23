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


const ExpertiseSection: React.FC = () => {

  const [windowWidth, setWindowWidth] = React.useState<number>(0);
  const [selectedItemWidth, setSelectedItemWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSlideChange = (index: number) => {
    // Set the width of the selected item based on the window width
    setSelectedItemWidth(windowWidth * 0.8);
  };

  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current: number, next: number) => handleSlideChange(next),
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


  return (
    <SectionContainer>
      <div id='technologies'>
        <div>
          <div className='py-2'>
            <h1 className='lg:text-6xl text-3xl font-semibold'>Our areas of expertise</h1>
          </div>
        </div>
        <div className='mt-8'>
        </div>
      </div>
    </SectionContainer>
  );
};



export default ExpertiseSection;



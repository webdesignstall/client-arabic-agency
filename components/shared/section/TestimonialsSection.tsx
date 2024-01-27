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
const TestimonialsSection: React.FC<any> = ({homeData}) => {

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
      <div id='testimonials'>
        <div>
          <div className='py-2'>
            <h1 className='text-6xl font-semibold'>
            {translate(homeData, 'testimonialsSectionTitle')}
            </h1>
          </div>
          <div>
            <p className='pt-6 text-xl font-medium'>
             {translate(homeData, 'testimonialsSectionDescription')}
             </p>
          </div>
        </div>
        <div className='mt-8'>
          <Slider className='lg:px-12' {...settings}>
            {
              items.map((item, i) => (
                <div key={i} className='flex'>
                  <div className='lg:w-1/2 inline-block'>
                    <div>
                      <div>
                        <h3 className='text-2xl font-semibold'>
                          {item.header}
                        </h3>
                        <p className='py-6 text-gray-600'>
                          {item.desc}
                        </p>
                        <div className='flex'>
                          <div>
                            <img width={60} src={item.avater} alt="" />
                          </div>
                          <div className='px-6'>
                            <p className=' font-semibold'>
                              {item.name}
                            </p>
                            <p className='text-gray-600'>Manager</p>
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
                            <img width={100} src={item.companyLogo} alt="" />
                          </div>
                          <div>
                            <p className='text-gray-600 text-md pt-4'>Project</p>
                            <p className='text-xl font-semibold py-3'>
                              {
                                item.projectName
                              }
                            </p>
                          </div>
                          <div>
                            <p className='font-semibold'>Country</p>
                            <p className='text-gray-600'>
                              {item.country}
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


const items = [
  {
    header: '"We very much appreciate our collaboration with Andersen"',
    desc: 'They’re very professional, well organized, and a pleasure to work with. Solid engineering skills and vast experience in the investment area were the key factors to select Andersen as our software development provider. We’ve already done several projects together. Their quality compares favorably with other providers. The team is proactive, and they reach out when they need guidance to keep the project moving forward. Their project management is outstanding.',
    name: 'Savraj Singh Dhillon',
    avater: 'https://d3jqtupnzefbtn.cloudfront.net/andersenlab/new-andersensite/testimonials/60x60/christof-bitschnau-60x60.png',
    companyLogo: 'https://content.andersenlab.com/review/company-logos/1702050106.svg',
    projectName: 'Cloud-based web development for a medical AI company.',
    country: 'Germany'
  },
  {
    header: '"We very much appreciate our collaboration with Andersen"',
    desc: 'They’re very professional, well organized, and a pleasure to work with. Solid engineering skills and vast experience in the investment area were the key factors to select Andersen as our software development provider. We’ve already done several projects together. Their quality compares favorably with other providers. The team is proactive, and they reach out when they need guidance to keep the project moving forward. Their project management is outstanding.',
    name: 'Savraj Singh Dhillon',
    avater: 'https://d3jqtupnzefbtn.cloudfront.net/andersenlab/new-andersensite/testimonials/60x60/christof-bitschnau-60x60.png',
    companyLogo: 'https://content.andersenlab.com/review/company-logos/1702050106.svg',
    projectName: 'Cloud-based web development for a medical AI company.',
    country: 'Germany'
  },
  {
    header: '"We very much appreciate our collaboration with Andersen"',
    desc: 'They’re very professional, well organized, and a pleasure to work with. Solid engineering skills and vast experience in the investment area were the key factors to select Andersen as our software development provider. We’ve already done several projects together. Their quality compares favorably with other providers. The team is proactive, and they reach out when they need guidance to keep the project moving forward. Their project management is outstanding.',
    name: 'Savraj Singh Dhillon',
    avater: 'https://d3jqtupnzefbtn.cloudfront.net/andersenlab/new-andersensite/testimonials/60x60/christof-bitschnau-60x60.png',
    companyLogo: 'https://content.andersenlab.com/review/company-logos/1702050106.svg',
    projectName: 'Cloud-based web development for a medical AI company.',
    country: 'Germany'
  },
  {
    header: '"We very much appreciate our collaboration with Andersen"',
    desc: 'They’re very professional, well organized, and a pleasure to work with. Solid engineering skills and vast experience in the investment area were the key factors to select Andersen as our software development provider. We’ve already done several projects together. Their quality compares favorably with other providers. The team is proactive, and they reach out when they need guidance to keep the project moving forward. Their project management is outstanding.',
    name: 'Savraj Singh Dhillon',
    avater: 'https://d3jqtupnzefbtn.cloudfront.net/andersenlab/new-andersensite/testimonials/60x60/christof-bitschnau-60x60.png',
    companyLogo: 'https://content.andersenlab.com/review/company-logos/1702050106.svg',
    projectName: 'Cloud-based web development for a medical AI company.',
    country: 'Germany'
  },

]
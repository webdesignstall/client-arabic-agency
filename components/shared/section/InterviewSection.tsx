'use client'
// components/Carousel.tsx
import  {useEffect,} from 'react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionContainer from '@/components/SectionContainer';
import { translate } from "@/utility/translate";
import { useLocalization } from '@/context/LocalizeProvider';
import axios from "axios";

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import './InterviewSection.css'
// @ts-ignore
const InterviewSection: React.FC<any> = ({ homeData }) => {

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
  const { locale, switchLocale } = useLocalization();

  const [homeSectionSix, setHomeSectionSix] = useState([]);

  useEffect(() => {
    // @ts-ignore
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-sixs?populate=*`);
      setHomeSectionSix(data?.data)
    })()

  }, [])

console.log(homeSectionSix);
  return (
    <div className='lg:max-w-7xl m-auto'>
      <div>
        <div>
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
         <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full"
        >
          {
            items?.map((item, i) => (
              <SwiperSlide key={i} className='h-[32rem] rounded-36 cur'>
                <div className='mx-3'>
                  <div>
                    <img className='w-full' src={
                      // @ts-ignore
                      process.env.NEXT_PUBLIC_BACKED_BASE + item?.attributes?.thumbnail?.data?.attributes?.formats?.thumbnail?.url
                    } alt="" />
                  </div>
                  <div className='p-6 bg-[#25303e]'>
                    <div>
                      <h3 className='text-2xl font-semibold py-3 text-white'>{
                        // @ts-ignore
                        translate(item?.attributes, 'title')
                      }</h3>
                      {/* <p className='text-gray-400 text-md'>{
                        // @ts-ignore
                        translate(item?.attributes, 'description')
                      }</p>
                      <p className='pt-4 text-white'>{
                        // @ts-ignore
                        translate(item?.attributes, 'date')
                      }</p> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
      </Swiper>
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


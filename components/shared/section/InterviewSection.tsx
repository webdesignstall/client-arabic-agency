'use client'
// components/Carousel.tsx
import { useEffect, } from 'react';
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

  return (
    <div className='lg:max-w-7xl  m-auto'>
      <div className='lg:px-20'>
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
      <div className='mt-10 px-6 lg:px-20'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="px-6"
        >
          {
            items?.map((item, i) => (
              <SwiperSlide key={i} className='h-auto pb-10 rounded-md bg-white'>
                <img  src={item?.img} alt="" className='w-full h-52 object-cover bg-cover rounded-t-md' />
                <h1 className='text-2xl font-bold text-black px-5 pt-5'>{item.title.slice(0,30)}...</h1>
                <p className='text-md font-medium text-gray-700 px-5 mt-2'>{item.desc.slice(0, 100)}...</p>
                <p className='text-md font-medium text-gray-800 px-5 mt-2'>{item.date}</p>
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
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTjeJUaD3MswsasRaok9NP4VI9a6sWzTksQ&usqp=CAU',
    title: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOahF3AwJw7wqvpndTkyZT2v6-3aG96HaIg&usqp=CAU',
    title: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&usqp=CAU',
    title: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxK8XsddmYSJmtDL9YEkrxA0To4eAu_dgQA&usqp=CAU',
    title: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYvs5arsp3PA8-XCi7bsP-Ms1eiikfBZzvQ&usqp=CAU',
    title: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzejyuobeVmOAVHxb8FGAGjv0KuYriTDhVg&usqp=CAU',
    title: 'Wearable technologies and generative AI in healthcare',
    desc: 'João Bocas, an expert in wearable technology, digital health influencer, globally recognized business thought leader, mentor, advisor, and entrepreneur.',
    date: 'Sep 11, 2023'
  },
]


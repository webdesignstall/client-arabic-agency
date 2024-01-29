'use client'
import { translate } from '@/utility/translate';
import ModalCall from '../slider-button/ModalCall';

import homeBg from '../../../assets/img/home-bg.jpg';
import { useSelector } from 'react-redux';
import { useLocalization } from '@/context/LocalizeProvider';
// https://images.unsplash.com/photo-1704658492989-e4a4d1db44ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

// @ts-ignore
export default function HeroSection({ homeData }) {
  const { locale, switchLocale } = useLocalization();
  return (
    <div>
      <div>
        <div className={`relative m-auto bg-cover h-[40vh] lg:h-[70vh] bg-[url("https://cdn.images.express.co.uk/img/dynamic/151/750x445/1360742.jpg")]`}>
          <div className='h-full flex w-full justify-center items-end bg-gradient-to-t from-[#020d1c] from-0.5%  via-transparent via-30% to-transparent to-90%'>
            <div className='w-full lg:py-16 mx-12 max-w-7xl'>
              <h1 className={`${locale === 'en' ? '' : 'rtl'} text-3xl lg:text-7xl text-white lg:font-bold`}>
                {
                  translate(homeData, 'heroSectionTitle')
                }
              </h1>
            </div>
          </div>
          <div className='absolute top-24 right-20 flex items-center gap-3'>
            <ModalCall />
          </div>
        </div>
      </div>
    </div>
  )
}
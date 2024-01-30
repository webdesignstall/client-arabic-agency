'use client'
import { translate } from '@/utility/translate';
import { useLocalization } from '@/context/LocalizeProvider';
import Image from 'next/image';
import ModalCall from '../slider-button/ModalCall';
const hero = 'https://cdn.images.express.co.uk/img/dynamic/151/750x445/1360742.jpg'



// https://images.unsplash.com/photo-1704658492989-e4a4d1db44ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

// @ts-ignore
export default function HeroSection({ homeData }) {
  const { locale, switchLocale } = useLocalization();
  return (
    <div>
      <div>
        <div className='relative'>
          <div className='overflow-hidden relative after:absolute min-h-72 lg:min-h-[90vh] after:h-[510px] after:w-full after:bottom-0 after:bg-gradient-to-t from-[#020d1c] from-0.5%  via-transparent via-30% to-transparent to-90% after:z-10'>
            <div>
              <Image
                className='absolute w-full '
                width={1900}
                height={1200}
                src={hero}
                alt='Hero image'
              />
            </div>
            <div className='relative lg:h-[80vh] min-h-72 z-30'>
              <div className='max-w-7xl h-full flex items-end m-auto w-full'>
                <h3 className={`lg:text-5xl font-semibold text-white ${locale === 'en' ? 'pl-12' : 'pr-8 rtl w-full'}`}>
                  {
                    translate(homeData, 'heroSectionTitle')
                  }
                </h3>
              </div>
              <div className='absolute top-24 w-full flex justify-end z-30'>
                <div className={`max-w-7xl w-full  flex m-auto  ${locale === 'en' ? 'justify-end': 'justify-start'}`}>
                <ModalCall />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
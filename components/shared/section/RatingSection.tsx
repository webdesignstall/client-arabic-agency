'use client'
import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import { useSelector } from 'react-redux'
import { translate } from '@/utility/translate';
import { useLocalization } from "@/context/LocalizeProvider";


// @ts-ignore
export default function RatingSection({ homeData }) {
  // @ts-ignore
  const { locale, switchLocale } = useLocalization();

  return (
    <SectionContainer>
      <div>
        <div className={`lg:flex  justify-between ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
          <div className='text-xl font-light lg:text-[2.25rem] lg:font-semibold col-span-7 lg:col-span-8 leading-[3rem] max-w-3xl'>
            <h3 className={`${locale == 'en' ? 'direction-none' : 'rtl'}`}>
              {translate(homeData, 'homeSectionTwoTitle')}
            </h3>
          </div>
          <div className={`${locale === 'en' ? 'flex justify-start' : 'flex justify-end'}`}>
            <div>
              <img
                className={`lg:w-32 lg:h-20 bg-cover object-cover w-24 h-16`}
                src={process.env.NEXT_PUBLIC_BACKED_BASE + homeData?.heroSectionStart?.data?.attributes?.url}
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

  )
}
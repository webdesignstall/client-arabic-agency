import SectionContainer from '@/components/SectionContainer'
import { useLocalization } from '@/context/LocalizeProvider';
import { translate } from '@/utility/translate';
import axios from 'axios';
import { useEffect, useState } from 'react';


// @ts-ignore

export default function ScopeSection({ homeData }) {

  const { locale, switchLocale } = useLocalization();

  const [homeSectionOne, setHomeSectionOne] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-ones?populate=*`);
      setHomeSectionOne(data?.data)
    })()

  }, [])

  return (
    <SectionContainer>
      <div id='scope'>
        <div>
          <div>
            <h1 className={`text-4xl lg:text-6xl lg:font-bold py-6 ${locale === 'en' ? '' : 'rtl'}`}>
              {
                translate(homeData, 'homeSectionTwoTitle')
              }
            </h1>
          </div>
          <div className='pt-10'>
            <div className='lg:grid grid-cols-3'>
              {
                homeSectionOne?.map((item: any, index: number) => (
                  <div key={index} className='overflow-hidden scrop h-44 m-3 bg-gray-50 hover:shadow-xl duration-300 cursor-pointer relative before:absolute before:bottom-0 before:border-b-4 before:w-0 before:border-[#23beec] before:hover:w-full before:duration-300 hover:bg-white before:left-0'>
                    <div className='duration-300 text-2xl font-semibold scrop-list absolute flex justify-center items-center w-full h-full'>
                      {
                        translate(item?.attributes, 'title')
                      }
                    </div>
                    <div className={`duration-300 px-6 py-4 text-md overflow-hidden justify-normal absolute opacity-0 scrop-hidden ${locale === 'en' ? '' : 'rtl'}`}>
                      {
                        translate(item?.attributes, 'description')
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

  )
}
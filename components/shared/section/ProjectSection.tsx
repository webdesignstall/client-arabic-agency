import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'
import { translate } from "@/utility/translate";
import { useSelector } from 'react-redux';
import { useLocalization } from '@/context/LocalizeProvider';
import { useEffect, useState } from "react";
import axios from "axios";


// @ts-ignore

export default function ProjectSection({ homeData }) {

  const { locale, switchLocale } = useLocalization();
  const [homeSectionThree, setHomeSectionThree] = useState([]);
  const [lastData, setLastData] = useState({});

  useEffect(() => {
    // @ts-ignore
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-3s?populate=*`);
      const last = data?.data.pop();
      setLastData(last);
      setHomeSectionThree(data?.data)
    })()

  }, [])


  return (
    <SectionContainer>
      <div id='project'>
        <div className=''>
          <div className='w-full'>
            <h1 className={`lg:text-6xl font-bold py-4 text-3xl ${locale === 'en' ? '' : 'rtl'}`}>
              {translate(homeData, 'homeSectionThreeTittle')}
            </h1>
            <p className={`text-xl pt-2 font-medium ${locale === 'en' ? '' : 'rtl'}`}>
              {translate(homeData, 'homeSectionThreeDescription')}
            </p>
          </div>

          <div className='flex lg:flex-row flex-col mt-16'>

            {
              // @ts-ignore
              homeSectionThree?.map(item => (
                <div className='lg:w-1/2 w-full'>
                  <Link href={
                    // @ts-ignore
                    '/project-cases/'+item?.id}>
                    <div className='overflow-hidden h-[330px]'>
                      <img className='hover:scale-110 duration-300 cursor-pointer' src={
                        // @ts-ignore
                        process.env.NEXT_PUBLIC_BACKED_BASE + item?.attributes?.thumbnail?.data?.attributes?.formats?.large?.url
                      } alt="" />
                    </div>
                  </Link>
                  <div className='brightness-50 shrink-0 pt-6'>
                    <img className='w-12' src={
                      // @ts-ignore
                      process.env.NEXT_PUBLIC_BACKED_BASE + item?.attributes?.logo?.data?.attributes?.url} alt="" />
                  </div>
                  <Link href={
                    // @ts-ignore
                    '/project-cases/'+item?.id}>
                    <p className={`text-2xl font-semibold py-3 ${locale === 'en' ? '': 'rtl'}`}>
                      {
                        // @ts-ignore
                        translate(item?.attributes, 'title')}
                    </p>
                  </Link>
                </div>
              ))
            }
          </div>

          <div className='grid lg:grid-cols-6 pt-20'>
            <div className='flex justify-center col-span-2 flex-col pr-4'>

              <div className='py-8 text-2xl font-semibold text-gray-500 hover:text-gray-900 duration-300 cursor-pointer'>
                <img className='w-44' src={
                  // @ts-ignore
                    process.env.NEXT_PUBLIC_BACKED_BASE + lastData?.attributes?.logo?.data?.attributes?.url
                } alt="" />
              </div>

              <Link href={
                // @ts-ignore
                '/project-cases/'+lastData?.id}>
                <div className='text-3xl font-semibold'>
                  {
                    Object.keys(lastData).length === 0 ?
                      " "
                      :
                      // @ts-ignore
                      translate(lastData?.attributes, 'title')
                  }
                </div>
              </Link>
            </div>

            <div className='overflow-hidden col-span-4'>
              <Link href={
                // @ts-ignore
                '/project-cases/'+lastData?.id}>
                <img className='m-right hover:scale-110 duration-300 cursor-pointer' src={
                  // @ts-ignore
                    process.env.NEXT_PUBLIC_BACKED_BASE + lastData?.attributes?.thumbnail?.data?.attributes?.formats?.large?.url
                } alt="" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </SectionContainer>

  )
}

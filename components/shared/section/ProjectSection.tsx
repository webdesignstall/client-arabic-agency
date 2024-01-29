import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'
import { translate } from "@/utility/translate";
import { useSelector } from 'react-redux';
import { useLocalization } from '@/context/LocalizeProvider';
import {useEffect, useState} from "react";
import axios from "axios";


// @ts-ignore

export default function ProjectSection({ homeData }) {
 
  const { locale, switchLocale } = useLocalization();
  const [homeSectionThree, setHomeSectionThree] = useState([]);
  const [lastData, setLastData] = useState({});

  useEffect(()=>{
    // @ts-ignore
    ( async ()=>{
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-3s?populate=*`);
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

          <div className='grid lg:grid-cols-2 gap-12 pt-16'>

            {
              // @ts-ignore
              homeSectionThree?.map(item => (
                  <div>
                    <Link href={'/project-cases/1'}>
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
                    <Link href={'/project-cases/1'}>
                      <p className='text-2xl font-semibold py-3'>
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
                <img className='w-44' src="https://d3jqtupnzefbtn.cloudfront.net/andersenlab/new-andersensite/cases/parabellum/parabellum-logo-color.svg" alt="" />
              </div>

              <Link href={'/project-cases/1'}>
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
              <Link href={'/project-cases/1'}>
                <img className='m-right hover:scale-110 duration-300 cursor-pointer' src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/parabellum/preview-shots/medium.webp" alt="" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </SectionContainer>

  )
}

import SectionContainer from '@/components/SectionContainer'
import { useLocalization } from '@/context/LocalizeProvider';
import {translate} from "@/utility/translate";
import {useEffect, useState} from "react";
import axios from "axios";
// @ts-ignore
export default function AdvantagesSection({homeData}) {
  const { locale, switchLocale } = useLocalization();

  const [homeSectionNine, setHomeSectionNine] = useState([]);
  const [feature, setFeature] = useState({});

  useEffect(() => {
    // @ts-ignore
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-ones?populate=*`);
      setHomeSectionNine(data?.data)

    })()

  }, [])

  // @ts-ignore
  return (
    <SectionContainer>
      <div id='section8'>
        <div>
          <div>
            <h1 className={`lg:text-6xl text-3xl font-semibold py-10 ${locale ==='en' ? '' : 'rtl'}`}>
              
            {translate(homeData, 'homeSectionNineTitle')}
            </h1>
          </div>
          <div>
            <div className='grid lg:grid-cols-2 gap-12'>
              {
                homeSectionNine?.map((item, index) => (
                    <div key={index}>
                      <div className=''>
                        <h3 className='text-2xl font-semibold py-4'>{
                          // @ts-ignore
                          translate(item?.attributes, 'title')
                        }</h3>
                        <p className='text-lg'>{
                          // @ts-ignore
                          translate(item?.attributes, 'description')
                        }</p>
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

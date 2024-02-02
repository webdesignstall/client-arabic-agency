"use client"
import DeteilsSectionContainer from "@/components/DeteilsSectionContainer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "next/navigation";
import { translate } from "@/utility/translate";
import { useLocalization } from "@/context/LocalizeProvider";
import * as Tabs from '@radix-ui/react-tabs'



// @ts-ignore
const DrivenMedical: React.FC<TabsProps> = () => {
  const [activeTab, setActiveTab] = useState('');
  const {locale } = useLocalization();

  const { slug } = useParams();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    // @ts-ignore
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-3s/${slug}?populate=*`);
      setDetail(data?.data?.attributes)

      if (data?.data?.attributes?.tab?.length){
        setActiveTab(data?.data?.attributes?.tab?.[0]['id'])
      }

    })()

  }, [slug])


  return (
    <DeteilsSectionContainer>
     <div className="flex justify-between items-center mt-10">
        <Link href="/" className="flex gap-3 items-center hover:text-[#23beec]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-66pXYMF_TjwcBWkHm-ERItMCEiePt2CRQ&usqp=CAU" className="w-7 h-5" alt="" />
          <button>
            {
              locale !== 'en' ? 'العودة إلى الصفحة السابقة' : 'Back to previous page'
            }
            </button>
          </Link>
      </div>

    <div className="md:grid grid-cols-12 justify-between mt-6 pt-10 md:mt-7 items-end mb-12">
      <div className="col-span-12 flex flex-col justify-center md:justify-start mb-5 md:mb-0">
        <h1 className="text-2xl text-center md:text-start md:text-3xl lg:text-5xl font-medium">
          {
            // @ts-ignore
            translate(detail, 'title')
          }
        </h1>

      </div>
    </div>

      <img src={
        // @ts-ignore
       process.env.NEXT_PUBLIC_BACKED_BASE + detail?.thumbnail?.data?.attributes?.url
      } alt="" />

      {
        // @ts-ignore
        detail?.tab?.length && (

              <Tabs.Root defaultValue={
                // @ts-ignore
                detail?.tab[0]['id']?.toString()} activationMode={'automatic'} orientation="vertical">
                <Tabs.List className='flex gap-6'>
                  {
                    // @ts-ignore
                    detail?.tab?.map((tab)=> (
                        <Tabs.Trigger onClick={(value)=> setActiveTab(tab?.id?.toString())} className={` border-b-2 pb-2 text-lg md:text-xl lg:text-2xl font-bold ${ activeTab == tab?.id ? 'border-[#23beec]':'border-white'}`} value={tab?.id?.toString()}>{tab?.tabName}</Tabs.Trigger>
                    ))
                  }
                </Tabs.List>

                {
                  // @ts-ignore
                  detail?.tab?.map((tab)=> (
                      <Tabs.Content className='mt-14' value={tab?.id?.toString()}>
                        <div dangerouslySetInnerHTML={{
                          // @ts-ignore
                          __html: tab?.content}}></div>
                      </Tabs.Content>
                  ))
                }


              </Tabs.Root>
          )
      }



  </DeteilsSectionContainer>
    );
};
export default  DrivenMedical

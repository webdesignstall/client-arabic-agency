"use client"
import DeteilsSectionContainer from "@/components/DeteilsSectionContainer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "next/navigation";
import { translate } from "@/utility/translate";
import { useLocalization } from "@/context/LocalizeProvider";
import TabListAbout from "@/components/shared/deteils/TabListAbout";
import * as Tabs from '@radix-ui/react-tabs';



// @ts-ignore
const DrivenMedical: React.FC<TabsProps> = ({detail}) => {
  const {slug} = useParams()
  const [deteilsData, setDeteilsData] = useState([]);
  const {locale } = useLocalization();

  /*useEffect(() => {
    (async () => {
      const  deteilsData  = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-3s/${slug}`);
      // setDeteilsData(data?.data[0]?.attributes)
      setDeteilsData(deteilsData?.data?.data);
    })()

  }, [])*/

  // @ts-ignore
  const tab = detail?.tab?.reduce((previous, current)=> {
    return [...previous, {
      label: current?.tabName,
      content: current?.content,
    }]
  }, [])



  // @ts-ignore
  // @ts-ignore
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


      {/* <p className='pb-6 text-lg' dangerouslySetInnerHTML={{ __html: tab?.content }}></p> */}{/* 
        <h1 className="text-2xl text-center md:text-start md:text-3xl lg:text-5xl font-medium">A Data-Driven Medical Solution for a Skin-Care Provider</h1>
        <button className="px-4 py-2 rounded-xl text-white text-lg mt-10 bg-[#23beec] w-fit">Healthcare</button> */}
      </div>
    </div>

      <img src={
       process.env.NEXT_PUBLIC_BACKED_BASE + detail?.thumbnail?.data?.attributes?.url
      } alt="" />

     {/* <TabListAbout aboutData={tab} />*/}

        {/* <div dangerouslySetInnerHTML={{
            // @ts-ignore
            __html: translate(project, 'content') }}></div> */}



      <Tabs.Root defaultValue="tab1" orientation="vertical">
        <Tabs.List className='flex gap-6'>
          {
            // @ts-ignore
            detail?.tab?.map((tab)=> (
                <Tabs.Trigger className='bg-amber-200 p-2' value={tab?.id}>{tab?.tabName}</Tabs.Trigger>
            ))
          }
        </Tabs.List>

        {
          // @ts-ignore
          detail?.tab?.map((tab)=> (
              <Tabs.Content className='mt-14' value={tab?.id}>
                 <div dangerouslySetInnerHTML={{
            // @ts-ignore
            __html: tab?.content}}></div>
              </Tabs.Content>
          ))
        }


      </Tabs.Root>

  </DeteilsSectionContainer>
    );
};
export default  DrivenMedical

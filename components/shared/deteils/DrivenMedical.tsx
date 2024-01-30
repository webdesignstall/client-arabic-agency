"use client"
import DeteilsSectionContainer from "@/components/DeteilsSectionContainer";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "next/navigation";
import { translate } from "@/utility/translate";
const DrivenMedical = () => {
  const {slug} = useParams()
  const [deteilsData, setDeteilsData] = useState([]);

  useEffect(() => {
    (async () => {
      const  deteilsData  = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-3s/${slug}`);
      // setDeteilsData(data?.data[0]?.attributes)
      setDeteilsData(deteilsData?.data?.data);
    })()

  }, [])

  console.log(deteilsData);
    return (
    <DeteilsSectionContainer>
     <div className="flex justify-between items-center mt-10">
        <Link href="/" className="flex gap-3 items-center hover:text-[#23beec]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-66pXYMF_TjwcBWkHm-ERItMCEiePt2CRQ&usqp=CAU" className="w-7 h-5" alt="" />
          <button>Back to previous page</button>
          </Link>
      </div>
    <div className="md:grid grid-cols-12 justify-between mt-6 pt-10 md:mt-7 items-end">
      <div className="col-span-7 flex flex-col justify-center md:justify-start mb-5 md:mb-0">
        
      {
         // @ts-ignore
      translate(deteilsData, 'title')
      }

      {/* <p className='pb-6 text-lg' dangerouslySetInnerHTML={{ __html: tab?.content }}></p> */}{/* 
        <h1 className="text-2xl text-center md:text-start md:text-3xl lg:text-5xl font-medium">A Data-Driven Medical Solution for a Skin-Care Provider</h1>
        <button className="px-4 py-2 rounded-xl text-white text-lg mt-10 bg-[#23beec] w-fit">Healthcare</button> */}
      </div>
    </div>



        <div dangerouslySetInnerHTML={{
            // @ts-ignore
            __html: translate(project, 'content') }}></div>
  </DeteilsSectionContainer>
    );
};
export default  DrivenMedical

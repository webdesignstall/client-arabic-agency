import DeteilsSectionContainer from "@/components/DeteilsSectionContainer";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "next/navigation";
import {translate} from "@/utility/translate";

export default function DrivenMedical()  {

    const {slug} = useParams();

    const [project, setProject] = useState({});

    useEffect(() => {
        // @ts-ignore
        (async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-3s/${slug}?populate=*`);
           setProject(data?.data?.attributes)
        })()

    }, [slug])

    return (
    <DeteilsSectionContainer>
     <div className="flex justify-between items-center mt-10">
        <Link href="/" className="flex gap-3 items-center hover:text-[#23beec]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-66pXYMF_TjwcBWkHm-ERItMCEiePt2CRQ&usqp=CAU" className="w-7 h-5" alt="" />
          <button>Back to previous page</button>
          </Link>
      </div>
    <div className="md:grid grid-cols-12 justify-between mt-6 pt-10 md:mt-7 items-end mb-16">
      <div className="col-span-12 mb-5 md:mb-0">
          <h1 className="text-2xl text-center md:text-start md:text-3xl lg:text-5xl font-medium">
              {
                  translate(project, 'title')
              }
          </h1>
      </div>
    </div>



        <div dangerouslySetInnerHTML={{
            // @ts-ignore
            __html: translate(project, 'content') }}></div>
  </DeteilsSectionContainer>
    );
};
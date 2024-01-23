'use client'
import React, {useEffect, useState} from 'react'
import WidthContainer from '@/components/WidthContainer'
import TabList from '@/components/shared/TabList'
import RatingSection from '@/components/shared/section/RatingSection';
import ScopeSection from '@/components/shared/section/ScopeSection';
import ServicesSection from '@/components/shared/section/ServicesSection';
import ProjectSection from '@/components/shared/section/ProjectSection';
import HeroSection from '@/components/shared/section/HeroSection';
import CompnarySection from '@/components/shared/section/CompnarySection';
import TestimonialsSection from '@/components/shared/section/TestimonialsSection';
import InterviewSection from '@/components/shared/section/InterviewSection';
import AboutSection from '@/components/shared/section/AboutSection';
import ExpertiseSection from '@/components/shared/section/ExpertiseSection';
import AdvantagesSection from '@/components/shared/section/AdvantagesSection';
import OrderSection from '@/components/shared/section/OrderSection';
import {appWithTranslation} from "next-i18next";
import axios from "axios";

const page = () => {

  const [homeData, setHomeData] = useState([]);

  useEffect(()=>{
    ( async ()=>{
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/hero-sections?populate=*`);
      setHomeData(data?.data[0]?.attributes)
    })()

  }, [])

  return (
    <WidthContainer>
      <div>
        <HeroSection homeData={homeData} />
        <main>
          <RatingSection homeData={homeData}/>
          <ScopeSection />
          <ServicesSection />
          <ProjectSection />
          <CompnarySection />
          <TestimonialsSection />
          <InterviewSection />
          <AboutSection />
          {/* <ExpertiseSection /> */}
          <AdvantagesSection />
           <OrderSection />
        </main>
      </div>
    </WidthContainer>
  )
}

export default page;


'use client'
import React, { useEffect, useState } from 'react'
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
import axios from "axios";
import { useLocalization } from "@/context/LocalizeProvider";

const page = () => {

  const [homeData, setHomeData] = useState([]);

  const { } = useLocalization();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-pages?populate=*`);
      setHomeData(data?.data[0]?.attributes)
    })()

  }, [])
  return (

    <WidthContainer>
      <div>
        <HeroSection homeData={homeData} />
        <main>
          <RatingSection homeData={homeData} />
          <ScopeSection homeData={homeData} />
          <ServicesSection homeData={homeData} />
          <ProjectSection homeData={homeData} />
          <CompnarySection homeData={homeData} />
          <TestimonialsSection homeData={homeData} />
          <InterviewSection homeData={homeData} />
          <AboutSection homeData={homeData} />
          <ExpertiseSection />
          <AdvantagesSection homeData={homeData} />
          <OrderSection homeData={homeData} />
        </main>
      </div>
    </WidthContainer>

  )
}

export default page;
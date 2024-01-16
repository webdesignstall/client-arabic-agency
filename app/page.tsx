import React from 'react'
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

export default function page() {
  return (
    <WidthContainer>
      <div>
        <HeroSection />
        <main>
          <RatingSection />
          <ScopeSection />
          <ServicesSection />
          <ProjectSection />
          <CompnarySection />
          <TestimonialsSection />
          <InterviewSection />
          <AboutSection />
          <ExpertiseSection />
          <AdvantagesSection />
          <OrderSection />
        </main>
      </div>
    </WidthContainer>
  )
}


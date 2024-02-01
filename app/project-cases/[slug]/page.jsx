'use client';

import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import About from "@/components/shared/deteils/About";
import AboutProject from "@/components/shared/deteils/AboutProject";
import AppFunctionality from "@/components/shared/deteils/AppFunctionality";
import Challenges from "@/components/shared/deteils/Challenges";
import CustomerReview from "@/components/shared/deteils/CustomerReview";
import DrivenMedical from "@/components/shared/deteils/DrivenMedical";
import TreatmentPlan from "@/components/shared/deteils/TreatmentPlan";
import WhatHappens from "@/components/shared/deteils/WhatHappens ";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

const Deteils = () => {

  const { id } = useParams();

  const [detail, setDetail] = useState({});

  useEffect(() => {
      // @ts-ignore
      (async () => {
          const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-sevens/${id}?populate=*`);
          setDetail(data?.data?.attributes)
      })()

  }, [id])


  return (
    <div className="bg-white">
      <PageHeader />
      <DrivenMedical />
      <TreatmentPlan />
      <About />
      <AboutProject />
      <Challenges />
      <AppFunctionality />
      <CustomerReview />
      <WhatHappens />
    </div>
  );
};

export default Deteils;

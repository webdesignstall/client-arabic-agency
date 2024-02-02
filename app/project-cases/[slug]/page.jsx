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
import OrderSection from "../../../components/shared/section/OrderSection";

const Deteils = () => {




  return (
      <>
          <div className="bg-white">
              <PageHeader />
              <DrivenMedical />
              {/*<TreatmentPlan />*/}
              {/*<About />
              <AboutProject />
              <Challenges />
              <AppFunctionality />
              <CustomerReview />
              <WhatHappens />*/}
          </div>
          <div className="bg-white">
              <OrderSection/>
          </div>

      </>

  );
};

export default Deteils;

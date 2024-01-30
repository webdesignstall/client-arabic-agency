
import About from "@/components/shared/deteils/About";
import AboutProject from "@/components/shared/deteils/AboutProject";
import AppFunctionality from "@/components/shared/deteils/AppFunctionality";
import Challenges from "@/components/shared/deteils/Challenges";
import CustomerReview from "@/components/shared/deteils/CustomerReview";
import DrivenMedical from "@/components/shared/deteils/DrivenMedical";
import TreatmentPlan from "@/components/shared/deteils/TreatmentPlan";
import WhatHappens from "@/components/shared/deteils/WhatHappens ";

const Deteils = () => {
  
  return (
    <div className="bg-white">
      <DrivenMedical/>
      <TreatmentPlan/>
      <About/>
      <AboutProject/>
      <Challenges/>
      <AppFunctionality/>
      <CustomerReview/>
      <WhatHappens/>
    </div>
  );
};

export default Deteils;

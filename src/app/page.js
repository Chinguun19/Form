"use client";
import { useState } from "react";
import "@fontsource/inter"; 
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { Success } from "@/components/StepFour";

export default function Home() {
  const [currentStep, SetCurrenStep] = useState(1);

  const FormBody = ({ currentStep, SetCurrenStep }) => {
    if (currentStep === 1) {
      return <StepOne SetCurrentStep={SetCurrenStep} />;
    } else if (currentStep === 2) {
      return <StepTwo SetCurrentStep={SetCurrenStep} />;
    } else if (currentStep === 3) {
      return <StepThree SetCurrentStep={SetCurrenStep} />;
    } else if (currentStep === 4) {
      return <Success  SetCurrentStep={SetCurrenStep}  />
    }
  };

  return (
    <div className="">
      <FormBody currentStep={currentStep} SetCurrenStep={SetCurrenStep} />
    </div>
  );
}

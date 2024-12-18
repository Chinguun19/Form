"use client";
import { useState } from "react";
import "@fontsource/inter"; 
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { Success } from "@/components/StepFour";


export default function Home() {
  const [currentStep, SetCurrenStep] = useState(1);
  const [error, SetError] = useState("")
  const [error2, SetError2] = useState("")
  const [isTrue, SetIsTrue] = useState(false)


  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
  });
  
  
  const onChange = (e) => {
    const field = e.target.id;
    const newValues = { ...form, [field]: e.target.value };
    setForm(newValues);
    console.log(newValues);
    NameChecker(newValues);
    lastNameChecker(newValues)
};

function NameChecker(updatedForm) {
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>/?";

    const name = updatedForm.firstName;
    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        if (numbers.includes(char) || symbols.includes(char)) {
            SetError("First name cannot contain special characters or numbers.");
            return;
        } else {
          SetIsTrue(!isTrue)
          SetError("");
        }
    }



}
function lastNameChecker(updatedForm) {
  const lastName = updatedForm.lastName
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>/?";
  
  for (let i = 0; i < lastName.length; i++) {
    let char2 = lastName[i];
    if (numbers.includes(char2) || symbols.includes(char2)) {
        SetError2("First name cannot contain special characters or numbers.");
        SetIsTrue(isTrue)
        return false;
       
    } else {
      SetIsTrue(!isTrue)
      SetError2("");
    }
}

}


  const FormBody = ({ currentStep, SetCurrenStep }) => {
    if (currentStep === 1) {
      return <StepOne SetCurrentStep={SetCurrenStep} form={form} onChange={onChange} error={error} error2={error2} isTrue={isTrue}/>;
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
      <FormBody currentStep={currentStep} SetCurrenStep={SetCurrenStep} onChange={onChange} form={form} setForm={setForm} error={error} error2={error2} isTrue={isTrue} />
    </div>
  );
}

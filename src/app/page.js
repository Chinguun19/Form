"use client";
import { useState } from "react";
import "@fontsource/inter";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { Success } from "@/components/StepFour";

export default function Home() {
  const [currentStep, SetCurrenStep] = useState(1);
  const [error, SetError] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",

  });

  const [isTrue, SetIsTrue] = useState(false);
  const [isTrue2, SetIsTrue2] = useState(false);


  const [stepTwoIsTrue, SetStepTwoIsTrue] = useState({
    firstName: false,
    lastName: false,
    mail: false,
    password: false,
    confirmPassword: false,
    phoneNumber: false
  });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    mail: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    birthDate: "",
    image: "",
  });

  const onChange = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    const newValues = { ...form, [field]: value };
    setForm(newValues);
    NameChecker(newValues);
    lastNameChecker(newValues);
    phoneNumberChecker(newValues);
    passwordChecker(newValues);
    mailChecker(newValues);
    confirmPasswordChecker(newValues);
    console.log(stepTwoIsTrue)
  };

  function NameChecker(updatedForm) {
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>/?";

    const name = updatedForm.firstName;
    if (name) {
      for (let i = 0; i < name.length; i++) {
        let char = name[i];
        if (numbers.includes(char) || symbols.includes(char)) {
          SetIsTrue(false);
          SetStepTwoIsTrue((prevError) => ({ ...prevError, firstName: false}))
          SetError((prevError) => ({
            ...prevError,
            firstName: "First name cannot contain special characters or numbers.",
          }));
          return;
        }
      }
    }
    SetStepTwoIsTrue((prevError) => ({ ...prevError, firstName: true}))
    SetIsTrue(true);
    SetError((prevError) => ({ ...prevError, firstName: "" }));
  }

  function lastNameChecker(updatedForm) {
    const lastName = updatedForm.lastName;
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>/?";

    if (lastName) {
      for (let i = 0; i < lastName.length; i++) {
        let char2 = lastName[i];
        if (numbers.includes(char2) || symbols.includes(char2)) {
          SetIsTrue2(false);
          SetStepTwoIsTrue((prevError) => ({ ...prevError, lastName: false}))
          SetError((prevError) => ({
            ...prevError,
            lastName: "Last name cannot contain special characters or numbers.",
          }));
          return;
        }
      }
    }
    SetIsTrue2(true);
    SetStepTwoIsTrue((prevError) => ({ ...prevError, lastName: true}))
    SetError((prevError) => ({ ...prevError, lastName: "" }));
  }

  function phoneNumberChecker(updatedForm) {
    const phoneNumberRegex = /^[0-9]{8}$/; 
    if (updatedForm.phoneNumber) {
      if (!phoneNumberRegex.test(updatedForm.phoneNumber)) {
        SetError((prevError) => ({
          ...prevError,
          phoneNumber: "Please enter a valid phone number.",
        }));
        SetStepTwoIsTrue((prevError) => ({ ...prevError, phoneNumber: false }));
      } else {
        SetStepTwoIsTrue((prevError) => ({ ...prevError, phoneNumber: true }));
        SetError((prevError) => ({ ...prevError, phoneNumber: "" }));
      }
    }
  }

  function passwordChecker(updatedForm) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; 
    if (updatedForm.password) {
      if (!passwordRegex.test(updatedForm.password)) {
        SetStepTwoIsTrue((prevError) => ({ ...prevError, password: false }));
        SetError((prevError) => ({
          ...prevError,
          password:
            "Password must include letters and numbers.",
        }));
      } else {
        SetStepTwoIsTrue((prevError) => ({ ...prevError, password: true }));
        SetError((prevError) => ({ ...prevError, password: "" }));
      }
    }
  }

  function mailChecker(updatedForm) {
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (updatedForm.mail) {
      if (!mailRegex.test(updatedForm.mail)) {
        SetStepTwoIsTrue((prevError) => ({ ...prevError, mail: false }));
        SetError((prevError) => ({
          ...prevError,
          mail: "Please provide a valid email address.",
        }));
      } else {
        SetError((prevError) => ({ ...prevError, mail: "" }));
        SetStepTwoIsTrue((prevError) => ({ ...prevError, mail: true }));
      }
    }
  }

  function confirmPasswordChecker(updatedForm) {
    if (updatedForm.password && updatedForm.confirmPassword) {
      if (updatedForm.password !== updatedForm.confirmPassword) {
        SetStepTwoIsTrue((prevError) => ({ ...prevError, confirmPassword: false }));
        SetError((prevError) => ({
          ...prevError,
          confirmPassword: "Passwords do not match. Please try again.",
        }));
      } else {
        SetStepTwoIsTrue((prevError) => ({ ...prevError, confirmPassword: true }));
        SetError((prevError) => ({ ...prevError, confirmPassword: "" }));
      }
    }
  }

  return (
    <div className="">
      {(() => {
        if (currentStep === 1) {
          return (
            <StepOne
              SetCurrentStep={SetCurrenStep}
              form={form}
              onChange={onChange}
              error={error}
              isTrue={isTrue}
              isTrue2={isTrue2}
              stepTwoIsTrue={stepTwoIsTrue}
            />
          );
        } else if (currentStep === 2) {
          return <StepTwo SetCurrentStep={SetCurrenStep} error={error} form={form} stepTwoIsTrue={stepTwoIsTrue} onChange={onChange} />;
        } else if (currentStep === 3) {
          return <StepThree SetCurrentStep={SetCurrenStep} form={form} onChange={onChange} />;
        } else if (currentStep === 4) {
          return <Success SetCurrentStep={SetCurrenStep} />;
        }
      })()}

      
    </div>
  );
}

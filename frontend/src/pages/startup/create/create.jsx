import React, { useState } from "react";
import PersonalForm from "@/components/form/personalForm/personalForm";
import AcademiaForm from "@/components/form/academia/academiaForm";
import StartupForm from "@/components/form/startup/startupForm";
import AdditonalForm from "@/components/form/additional/additionalForm";
import Consent from "@/components/form/consent/consent";

export default function CreateStartup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {},
    academia: {},
    startup: {},
    additional: {},
  });
  const handleSubmit = (data) => {
    //ADD to useState
    setFormData((prevData) => ({
      ...prevData,
      [`${data.stepName}`]: data,
    }));
    if (currentStep === 5) {
      //TODO Call backend with the data!
    }
    // Handle form submission logic here if needed
    // For simplicity, we'll just move to the next step
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <PersonalForm parentSubmit={handleSubmit} />;
      case 2:
        return <AcademiaForm parentSubmit={handleSubmit} />;
      case 3:
        return <StartupForm parentSubmit={handleSubmit} />;
      case 4:
        return <AdditonalForm parentSubmit={handleSubmit} />;
      case 5:
        return <Consent parentSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-1xl font-bold">Step {currentStep} of 5</h2>
          {renderForm()}
        </div>
      </div>
    </div>
  );
}

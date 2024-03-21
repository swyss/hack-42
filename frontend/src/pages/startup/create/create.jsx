import React, { useState } from "react";
import PersonalForm from "@/components/form/personalForm/personalForm";
import AcademiaForm from "@/components/form/academia/academiaForm";
import StartupForm from "@/components/form/startup/startupForm";

export default function CreateStartup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {},
    academia: {},
    startup: {},
    Additional: {},
  });
  const handleSubmit = (data) => {
    //ADD to useState
    setFormData((prevData) => ({
      ...prevData,
      [`${data.stepName}`]: data,
    }));
    // Handle form submission logic here if needed
    // For simplicity, we'll just move to the next step
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <StartupForm parentSubmit={handleSubmit} />;
      case 2:
        return <AcademiaForm parentSubmit={handleSubmit} />;
      case 3:
        return <Form3 onSubmit={handleSubmit} setData={setData} />;
      case 4:
        return <Form4 onSubmit={handleSubmit} setData={setData} />;
      case 5:
        return <Form5 onSubmit={handleSubmit} />;
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
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
